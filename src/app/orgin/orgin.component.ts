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

  reg = false
  log = true

  orgin = this.fb.group({
    username: ["", [Validators.required, Validators.pattern('[a-zA-Z0-9 ]*')]],
    uname: ["", [Validators.pattern('[a-zA-Z ]*')]],
    pswd: ["", [Validators.required, Validators.pattern('[a-zA-Z0-9 ]*')]]
  })
 
  constructor(private ds: DataServiceService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }
  orginForm() {

  }
  regForm() {

    if (this.orgin.valid) {
      var username = this.orgin.value.username
      var uname = this.orgin.value.uname
      var pswd = this.orgin.value.pswd
      this.ds.register(username, uname, pswd)
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
    var username = this.orgin.value.username
      var password = this.orgin.value.pswd
    if (this.orgin.valid) {
      
      this.ds.login(username, password)
        .subscribe((result: any) => {
          if (result) {
            alert(result.message)
            localStorage.setItem("currentuser", JSON.stringify(result.currentuser))
            localStorage.setItem("currentuserName", JSON.stringify(result.currentuserName))
            localStorage.setItem("token", JSON.stringify(result.token))
            this.router.navigateByUrl(`dashboard`)
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
