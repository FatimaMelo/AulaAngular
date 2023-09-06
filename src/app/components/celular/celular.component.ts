import { Component } from '@angular/core';
import { CelularserviceService } from 'src/app/services/celularservice.service';

import { Celular } from 'src/app/Celular';


@Component({
  selector: 'app-celular',
  templateUrl: './celular.component.html',
  styleUrls: ['./celular.component.css']
})
export class CelularComponent {


  constructor(private celularservice: CelularserviceService){
    this.getCelular()
  }

  ngOnInit(): void{}

  celulares : Celular[] = [];

  

  getCelular(): void{
    this.celularservice.getAll().subscribe((celular) => (this.celulares = celular));
  }

  

  

}
