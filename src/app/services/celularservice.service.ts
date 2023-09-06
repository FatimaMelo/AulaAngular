import { Injectable } from '@angular/core';
import { Celular } from '../Celular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CelularserviceService {

  private apiUrl  = 'http://localhost:3000/celulares'

  constructor(private http: HttpClient) { }

  getAll(): Observable<Celular[]>{
    return this.http.get<Celular[]>(this.apiUrl)

  }

  getItem(id: number): Observable<Celular>{
    return this.http.get<Celular>(`${this.apiUrl}/${id}`);
  }

 
  removeItem(id: number){
    return this.http.delete<Celular>(`${this.apiUrl}/${id}`);
  }


  criar(celular: any) {
    return this.http.post(this.apiUrl, celular);
  }
}
