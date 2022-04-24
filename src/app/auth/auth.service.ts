import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  LOCAL_STORAGE_JWT_TOKEN = "jwt_token";

  constructor(private http: HttpClient) {

  }

  login(username: string, password: string){
    var response = this.http.post<UserDTO>('http://localhost:8080/api/v1/login', {username, password}).subscribe(
      authResult => this.setSession(authResult)
    );
    console.log(response);
  }

  private setSession(authResult: UserDTO){
     localStorage.setItem(this.LOCAL_STORAGE_JWT_TOKEN, authResult.token)
     console.log(this.getJwtToken())
  }

  private getJwtToken(){
    return localStorage.getItem(this.LOCAL_STORAGE_JWT_TOKEN);
  }

}

class UserDTO{
  login: string;
  email: string;
  token: string;
  roles: string[];
}
