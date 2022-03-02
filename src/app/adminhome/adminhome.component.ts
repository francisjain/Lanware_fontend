import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  productForm = this.fb.group({
    pname: ["", [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    price: ["", [Validators.required,Validators.pattern('[0-9]*')]],
    pimg: ["", [Validators.required,Validators.pattern('[a-zA-Z0-9!~@#$%^&*()?/.,:;"|\ ]*')]],
    pdetails: ["", [Validators.required, Validators.pattern('[a-zA-Z0-9 ]*')]]
  })

  viewuser:any
  viewdate:any
  lDate:any





  userlist = true
  activeuser = false
  userlistd = true
  userdt = false
  upitem=false
  cteitem=false
  itemup=false
  constructor(private fb: FormBuilder,private router:Router,private ds:DataServiceService) {
    this.Home()
  }

  ngOnInit(): void {
  }
  Home() {
    this.ds.viewUser().subscribe((result: any) => {
      console.log(result.userlist);
      console.log(result.userdate);
      this.viewuser=result.userlist 
      this.viewdate=result.userdate 
    
      console.log(this.viewuser);
    
    for (let index of this.viewuser) {
      console.log(index);
    }
    
  })


    this.userlist = true
  this.activeuser = false
  this.userlistd = true
  this.userdt = false
  this.upitem=false
  this.cteitem=false
  this.itemup=false
  }
  product() { this.router.navigateByUrl('userhome')}
  updateProduct() {
    this.upitem=true
    this.cteitem=false
    this.itemup=true
    this.userlist = false
    this.activeuser = false
    this.userlistd = false
    this.userdt = false
   }
  cteProduct(){
    this.upitem=false
    this.cteitem=true
    this.itemup=true
    
    this.userlist = false
    this.activeuser = false
    this.userlistd = false
    this.userdt = false
  }
  logout() { }
  userdelete() { }
  userlistfn() {
    this.activeuser = false
    this.userlistd = true
  }
  activeuserfn() {
    this.activeuser = true
    this.userlistd = false
  }
  showUser() {
    this.userlist = false
    this.userdt = true
  }

  back() {
    this.userdt = false
    this.userlist = true
  }
  updateItem(){}
  createItem(){}
  deleteItem(){}
  searchUpdate(){}




  
}
