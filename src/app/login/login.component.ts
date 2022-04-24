import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form: FormGroup;

  constructor(private fb:FormBuilder,
    private authService: AuthService,
    private router: Router) {

      this.form = this.fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
      });
    }

  onSubmit(){
    const val = this.form.value;

    if(val.username && val.password) {
      this.authService.login(val.username, val.password)
    }
  }

}
