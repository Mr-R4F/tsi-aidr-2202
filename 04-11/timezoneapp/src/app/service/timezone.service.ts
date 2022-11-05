import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Timezone } from '../model/timezone';

@Injectable({
  providedIn: 'root'
})
export class TimezoneService {
  constructor(private http: HttpClient) { }

  obterTimezone(timezone: string): Observable<Timezone> {
    return this.http.get<Timezone>(`http://worldtimeapi.org/api/timezone/${timezone}`);
  }
}

/*
  1. criar modelo baseado JSON da API
  2. criar o serviço
  3. criar a função no serviço que volta um Observable
  4. usar o HttpClient p/ chamar a API
  5. chamar o serviço no componente e se inscreve na função
  6. Atualizar tela na função
*/
