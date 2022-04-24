import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrokerService {

  constructor(private http: HttpClient) { }

  getBroker(id: number): Observable<any>{
    id = 1;
    return this.http.get<BrokerDTO>('http://localhost:8080/api/v1/broker/'+id);
  }
}

class BrokerDTO{

  id: number;
  name: string;
  description: string;
  assetIds: string[];

}
