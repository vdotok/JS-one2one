import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import FormsHandler from '../../shared/FormsHandler/FormsHandler';
import { AuthService } from '../../shared/auth/auth.service';
import { ValidationService } from 'src/app/shared/validators';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  formError:any;

  constructor(
    private router: Router,
    private _fb: FormBuilder,
    public auth: AuthService
  ) { }

  ngOnInit() {
    this.buildForm();
    document.addEventListener("keyup", event => {
      if (event.code === 'Enter') {
        this.onLogin();
      }
    });
  }

  buildForm() {
    this.loginForm = this._fb.group({
      'full_name': new FormControl('', [Validators.required, ValidationService.usernameValidator, Validators.minLength(4), Validators.maxLength(100)]),
      'device_type': new FormControl('web', [Validators.required]),
      'device_model': new FormControl('web', [Validators.required]),
      'device_os_ver': new FormControl(navigator.platform, [Validators.required]),
      'email': new FormControl(null, [ValidationService.emailValidator, Validators.required]),
      'password': new FormControl(null, [Validators.required])
    }, { updateOn: 'change' });
    console.log('this.signupForm', this.loginForm);
  }

  onLogin() {
    FormsHandler.validateForm(this.loginForm);
    if (this.loginForm.invalid) return;
    const saveData = this.loginForm.value;
    saveData.project_id = '6NE92I';
    this.loading = true;
    this.formError = null;
    this.auth.signup(saveData).subscribe(v => {
      this.loading = false;
      if (v && v.status == 200) {
        StorageService.setUserData(v);
        StorageService.setAuthToken(v.auth_token);
        StorageService.setAuthUsername(v.ref_id);
        this.router.navigate(['call']);
        this.loginForm.reset();
      } else {
        this.formError = v.message;
        this.formError.replace('Full_name', 'username');
      }
    });
  }

}
