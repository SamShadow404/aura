import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent  {


  pageSize = 10;

  page = 1;
  name = 'Angular 6';
 
  url="https://jsonplaceholder.typicode.com/todos";
  httpData:any;
  ngOnInit() {
    this.http.get<Kafein[]>(this.url).subscribe(data => {
      this.httpData=data;
    })

  }

  hide = true;
  loginForm: FormGroup;
  constructor(private http: HttpClient) {

    

    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
        number: new FormControl('', [Validators.required,Validators.pattern(/^-?(0|[1-9]\d*)?$/), Validators.minLength(10), Validators.maxLength(10)]),
             fname: new FormControl('', [Validators.required,Validators.maxLength(10)]),
       
                  lname: new FormControl('', [Validators.required,Validators.maxLength(10)]),
      password: new FormControl('', [Validators.required,    Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
])
    });
  }


  onSubmit( ){
var formData: any = new FormData();
  formData.set("fname", this.loginForm.get('fname').value);
  // formData.append("avatar", this.form.get('avatar').value);

  this.http.post('https://reqbin.com/echo/post/json', formData).subscribe(
    (response) => console.log(response),
  )
console.log(formData);


  



  }
}



interface Kafein {
  name:string;
  address:string;
}