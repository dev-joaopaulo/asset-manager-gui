import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Asset } from './asset';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  constructor(private http: HttpClient,
              private router: Router) { }

  assetsUrl: string = 'http://localhost:8080/api/v1/assets/';
  getAssetsUrl: string = 'http://localhost:8080/api/v1/assets/get-all-assets/';

  getAssets():Observable<Asset[]>{
    return this.http.get<Asset[]>(this.getAssetsUrl)
              .pipe(map(response => response.sort()));
  }

  postAsset(asset: Asset) {
    this.http.post<Asset>(this.assetsUrl, asset).subscribe();
    this.router.navigate(['/assets']);
  }

}
