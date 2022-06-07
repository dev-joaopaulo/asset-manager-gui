import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Broker } from './Broker';

@Injectable({
  providedIn: 'root'
})
export class BrokerService {

  constructor(private http: HttpClient,
              private router: Router) { }

  brokerUrl = 'http://localhost:8080/api/v1/broker/';

  getBrokerById(id: number): Observable<Broker>{
    return this.http.get<Broker>(this.brokerUrl+id);
  }

  getBrokers(): Observable<Broker[]>{
    return this.http.get<Broker[]>(this.brokerUrl);
  }

  postBroker(broker: Broker){
    this.http.post<Broker>(this.brokerUrl, broker).subscribe();
    this.router.navigate(['/brokers'])
  }
}


