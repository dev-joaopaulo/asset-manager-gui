import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Broker } from './Broker';

@Injectable({
  providedIn: 'root'
})
export class BrokerService {

  constructor(private http: HttpClient) { }

  getBrokerById(id: number): Observable<Broker>{
    return this.http.get<Broker>('http://localhost:8080/api/v1/broker/'+id);
  }

  getBrokers(): Observable<Broker[]>{
    return this.http.get<Broker[]>('http://localhost:8080/api/v1/broker/');
  }
}


