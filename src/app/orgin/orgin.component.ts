import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-orgin',
  templateUrl: './orgin.component.html',
  styleUrls: ['./orgin.component.css']
})
export class OrginComponent implements OnInit {


  lDate:any

  reg = false
  log = true

  orgin = this.fb.group({
    name: ["", [ Validators.pattern('[a-zA-Z ]*')]],
    mail: ["", [Validators.required,Validators.pattern('[a-zA-Z0-9@. ]*')]],
    phone: ["", [Validators.pattern('[0-9 ]*')]],
    pswd: ["", [Validators.required, Validators.pattern('[a-zA-Z0-9@. ]*')]]
  })
 
  constructor(private ds: DataServiceService, private fb: FormBuilder, private router: Router) { 
    
    this.lDate = formatDate(new Date(), 'yyyy-MM-dd', 'en')
    console.log(this.lDate);
  }

  ngOnInit(): void {
  }
  
  regForm() {

    if (this.orgin.valid) {
      var name = this.orgin.value.name
      var mail = this.orgin.value.mail
      var phone = this.orgin.value.phone
      var pswd = this.orgin.value.pswd
      this.ds.register(name, mail,phone, pswd, this.lDate)
        .subscribe((result: any) => {
          if (result) {
            alert(result.message)
            this.login()
          }
        },
          (result) => {
            alert(result.error.message)
            this.login()
          })

    } else {
      alert("invalide Form")
    }
  }

  logForm() {
    var mail = this.orgin.value.mail
    var password = this.orgin.value.pswd
    if (this.orgin.valid) {
      
      this.ds.login(mail, password)
        .subscribe((result: any) => {
          if (result) {
            alert(result.message)
            localStorage.setItem("currentuser", JSON.stringify(result.currentuser))
            localStorage.setItem("currentname", JSON.stringify(result.currentname))
            localStorage.setItem("token", JSON.stringify(result.token))
            if(result.statusCode==201){this.router.navigateByUrl(`adminhome`)}
            else if(result.statusCode==202){this.router.navigateByUrl(`userhome`)}
          }
        },
          (result) => {
            alert(result.error.message)
          }
        )


    } else { alert("Invalide Form1") }
    // alert("login Click")
  }

  register() {
    this.reg = true
    this.log = false

  }
  login() {
    this.log = true
    this.reg = false

  }

}
