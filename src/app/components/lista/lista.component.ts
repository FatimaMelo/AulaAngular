import { Component, Input} from '@angular/core';
import { Celular } from 'src/app/Celular';
import { CelularserviceService } from 'src/app/services/celularservice.service';

import {FormGroup, FormControl, Validators} from '@angular/forms'; 

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {

  constructor(private celularservice: CelularserviceService){
    this.getCelular();
  }

  @Input() btnEnviar = 'Enviar!';

    formcadastro!: FormGroup; 

  ngOnInit() : void{
    this.formcadastro = new FormGroup({
      id: new FormControl('', [Validators.required]),
      nome: new FormControl('', [Validators.required]),
      marca: new FormControl('', [Validators.required]),
      image: new FormControl(''),
      preco: new FormControl('', [Validators.required]),    

      });
  }

  //PASSO 5 - RECEBER DADOS DO FORM
  get id(){ 
    return this.formcadastro.get('id')!;//COLOCAR A EXCLAMAÇÃO NO FIM
  }

  get nome(){ 
    return this.formcadastro.get('nome')!;//COLOCAR A EXCLAMAÇÃO NO FIM
  }

  get marca(){
    return this.formcadastro.get('marca')!;//COLOCAR A EXCLAMAÇÃO NO FIM
  }

  get preco(){
    return this.formcadastro.get('preco')!;
 }

  selecionafoto(event: any){
    const file: File = event.target.files[0];
    this.formcadastro.patchValue({ image: file}); 
  }

 //PASSO 6 
  submit(){

    if(this.formcadastro.invalid){
      return;
    }else{
      console.log(this.formcadastro.value);
      this.celularservice.criar(this.formcadastro.value).subscribe(
        success => console.log('Cadastrado!'),
        error => console.error(error),
        () => console.log('Terminado')
      );

    }    
  } 
  


  celulares : Celular[] = [];
  
  
  getCelular(): void{
    this.celularservice.getAll().subscribe((celular) => (this.celulares = celular));
  }

  excluir(celular: Celular){
    this.celulares = this.celulares.filter((a) => celular.nome !== a.nome);
    this.celularservice.removeItem(celular.id).subscribe();
  }

  mostrar(celular: Celular){
    this.celulares = this.celulares.filter((a) => celular.nome !== a.nome);
    this.celularservice.getItem(celular.id).subscribe();
    
  }

  
  



}
