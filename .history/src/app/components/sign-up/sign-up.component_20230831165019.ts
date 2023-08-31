import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, UntypedFormBuilder, Validators } from '@angular/forms';
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

  loginForm: UntypedFormGroup;
  loading = false;
  formError:any;

  constructor(
    private router: Router,
    private _fb: UntypedFormBuilder,
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
      'full_name': new UntypedFormControl('', [Validators.required, ValidationService.usernameValidator, Validators.minLength(4), Validators.maxLength(100)]),
      'device_type': new UntypedFormControl('web', [Validators.required]),
      'device_model': new UntypedFormControl('web', [Validators.required]),
      'device_os_ver': new UntypedFormControl(navigator.platform, [Validators.required]),
      'email': new UntypedFormControl(null, [ValidationService.emailValidator, Validators.required]),
      'password': new UntypedFormControl(null, [Validators.required]),
      'project_id': new UntypedFormControl('' , [Validators.required ])
    }, { updateOn: 'change' });
    console.log('this.signupForm', this.loginForm);
  }

  onLogin() {
    FormsHandler.validateForm(this.loginForm);
    if (this.loginForm.invalid) return;
    const saveData = this.loginForm.value;
    console.log("saveData" , saveData);
    // saveData.project_id = '1KMMRG';
    this.loading = true;
    this.formError = null;
    this.auth.signup(saveData).subscribe(v => {
      this.loading = false;
      if (v && v.status == 200) {
        StorageService.setProjectID(saveData.project_id);
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
