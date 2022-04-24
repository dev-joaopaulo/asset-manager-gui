import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Asset } from './asset';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  constructor(private http: HttpClient) { }

  getAssets():Observable<Asset[]>{
    return this.http.get<Asset[]>('http://localhost:8080/api/v1/assets/get-all-assets/').pipe(map(response => response.sort()));
  }

}
