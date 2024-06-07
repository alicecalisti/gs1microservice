import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Oceano } from '../interfaces/Oceano';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OceanoService {
  private apiUrl = "https://fiap-3sis-gs-20241.azurewebsites.net/OceanData";

  constructor(private http: HttpClient) { }

  listar(): Observable<Oceano[]>{
    return this.http.get<Oceano[]>(this.apiUrl) as Observable<Oceano[]>;
  }
}


