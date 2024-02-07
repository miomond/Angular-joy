import { Component} from '@angular/core';
import { ApiService } from '../../services/Api.service';
import { Router } from '@angular/router';
import { Ireg } from '../../dataTupes/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
  form : FormGroup;
  constructor(private builder : FormBuilder,  private AuthApiServ:ApiService, private router : Router) { 
    const noSpacesRegex =/^[a-zA-Z\-]+$/;
    const phoneOnly = /^([+]?\d{1,2}[-\s]?|)\d{3}[-\s]?\d{3}[-\s]?\d{4}$/;
    const Password = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/;

    this.form =this.builder.group({
      name: this.builder.control("",[Validators.required]),
      userName:["",[Validators.required,Validators.minLength(3),Validators.pattern(noSpacesRegex)]],
      email: ["",[Validators.required,Validators.minLength(3),Validators.email]],
      password: ["",[Validators.required,Validators.minLength(3),Validators.pattern(Password)]],
      phoneNumber: ["",[Validators.required,Validators.minLength(11),Validators.maxLength(11),Validators.pattern(phoneOnly)]]
    })
  }

 send(){
  this.AuthApiServ.Register(this.form.value).subscribe({
    next:(response)=>{
      if (response.success==true) {
        alert(response.message)
        this.router.navigateByUrl("/login")
      } else {
        alert(response.message);
      }
    }
  })
 }

}
