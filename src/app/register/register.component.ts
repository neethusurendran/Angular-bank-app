import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  acno = ""
  pswd = ""
  uname = "User name Please"
  registerForm = this.fb.group({
    uname: ['Username', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    acno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
  })

  constructor(private ds: DataService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  register() {

    if (this.registerForm.valid) {
      var acno = this.registerForm.value.acno;
      var pswd = this.registerForm.value.pswd;
      var uname = this.registerForm.value.uname;
     // console.log(this.registerForm);
   
     this.ds.register(acno,uname,pswd)
    .subscribe((result:any)=>{
      if (result) {

        alert(result.message)
        this.router.navigateByUrl("")
      }
    },(result)=>{

    
        alert(result.error.message)
        this.router.navigateByUrl("")
      

    })

    }
    else {
      alert(" form invalid")
    }
  }
}