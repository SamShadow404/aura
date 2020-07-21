import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
   // private authenticationService: AuthenticationService,
   // private alertService: AlertService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });
  }
  get f() { return this.loginForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      // if (this.loginForm.invalid) {
      //     return;
      // }

      //this.loading = true;
      // window.alert(this.f.username);

//localStorage.setItem(JSON.stringify('key'));
     if( this.f.username.value=='admin' &&
      this.f.password.value=='admin')
      {
        window.alert('User logged in');
        this.router.navigate(['/http']);
      }
      else{

        window.alert('Wrong Username Password');
      }

     // this.authenticationService.login(this.f.username.value, this.f.password.value)
          //.pipe(first())
          // .subscribe(
          //     data => {
          //         this.router.navigate([this.returnUrl]);
          //     },
          //     error => {
          //         this.alertService.error(error);
          //         this.loading = false;
          //     });
  }
}
