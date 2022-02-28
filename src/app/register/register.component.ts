import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  acno: any
  todaydetails: any
  lDate: any
  user: any
  heading: any
  paragraph: any
  bgimg: any
  create = false
  today = true
  update = false
  view = false
  delete = false

  suphname = "Search Event By Date (DD-MM-YY)"
  uphename = "Event Name"
  uphedate = "Date"
  upheimg = "(Image in Url / Optional)"
  upheabout = "About Event"

  srchevent: any

  viewFullEvent: any

  sdeventName: any
  sdeventdate = "Search Event By Date (DD-MM-YY)"
  dname = "Event Name"
  deventimg = "(Image in Url / Optional)"
  deventabout = "About Event"

  createForm = this.fb.group({
    ceventname: ["", [Validators.required, Validators.pattern('[a-zA-Z0-9 ]*')]],
    cevendate: ["", [Validators.required, Validators.pattern('[0-9- ]*')]],
    ceventimg: [""],
    caboutevent: ["", [Validators.required, Validators.pattern('[a-zA-Z0-9.!@$%^&*() ]*')]]
  })

  updateForm = this.fb.group({
    suevendate: ["", [Validators.required, Validators.pattern('[0-9- ]*')]],
    ueventname: ["", [Validators.required, Validators.pattern('[a-zA-Z0-9 ]*')]],
    ueventimg: [""],
    uaboutevent: ["", [Validators.required, Validators.pattern('[a-zA-Z0-9.!@$%^&*() ]*')]]
  })



  constructor(private ds: DataServiceService, private fb: FormBuilder, private router: Router) {

    this.lDate = formatDate(new Date(), 'yyyy-MM-dd', 'en')
    console.log(this.lDate);


    if (localStorage.getItem("currentuserName")) {
      this.user = JSON.parse(localStorage.getItem("currentuserName") || "")

    }


    (this.ds.today(this.lDate)).subscribe((result: any) => {
      this.todaydetails = result.events
      console.log(result);

      for (let item of this.todaydetails) {
        this.heading = `You have to attend ${item.ceventname}`
        this.bgimg = item.ceventimg
        this.paragraph = item.caboutevent
      }
    },
    () => {
      this.heading = `Greeting's ${this.user}`
      this.bgimg = "https://picsum.photos/200/300"
      this.paragraph = "Well.....There is nothing Special Today. Hope You Have a Greate Day!!"
    }
    
    )

  }

  ngOnInit(): void {
    if (!localStorage.getItem("token")) {
      alert("Please Login ")
      this.router.navigateByUrl("")
    }
  }


  createEvent() {

    if (this.createForm.valid) {
      var ceventname = this.createForm.value.ceventname
      var cevendate = this.createForm.value.cevendate
      var ceventimg = this.createForm.value.ceventimg
      var caboutevent = this.createForm.value.caboutevent
      this.ds.createEvent(ceventname, cevendate, ceventimg, caboutevent)
        .subscribe((result: any) => {
          if (result) {
            alert(result.message)

          }
        },
          (result) => {
            alert(result.error.message)

          })

    } else {
      alert("invalide Form")
    }
  }



  searchUpdate() {

    var suevendate = this.updateForm.value.suevendate
    this.ds.searchUpdate(suevendate)
      .subscribe((result: any) => {
        this.srchevent = result.events
        console.log(this.srchevent);
        for (let item of this.srchevent) {
          this.uphename = item.ceventname
          this.uphedate = item.cevendate
          this.upheimg = item.ceventimg
          this.upheabout = item.caboutevent

        }
      }
        ,
        (result) => {
          alert(result.error.message)

        })
  }

  updateEvent() {
    if (this.updateForm.valid) {
      var ueventname = this.updateForm.value.ueventname
      var suevendate = this.updateForm.value.suevendate
      var ueventimg = this.updateForm.value.ueventimg
      var uaboutevent = this.updateForm.value.uaboutevent
      this.ds.updateevent(ueventname, suevendate, ueventimg, uaboutevent)
        .subscribe((result: any) => {
          console.log(result);

          if (result) {
            alert(result.message)

          }
        },
          (result) => {
            alert(result.error.message)

          })

    } else {
      alert("invalide Form")
    }
  }


  viewE() {
    this.create = false
    this.today = false
    this.update = false
    this.view = true
    this.delete = false


    this.ds.viewEvent().subscribe((result: any) => { this.viewFullEvent = result.events })

    for (let index of this.viewFullEvent) {
      console.log(index.cevendate);


    }

    console.log(this.viewFullEvent);

  }

  searchDelete() {
    {

      var sdeventdate = this.sdeventdate
      console.log(sdeventdate);

      this.ds.searchDelete(sdeventdate)
        .subscribe((result: any) => {
          this.sdeventName = result.events
          console.log(this.sdeventName);
          for (let item of this.sdeventName) {
            this.dname = item.ceventname
            this.deventimg = item.ceventimg
            this.deventabout = item.caboutevent
          }
        }
          ,
          (result) => {
            alert(result.error.message)

          })
    }
  }


  deleteEvent() {

    this.sdeventdate
    this.dname
    this.deventimg
    this.deventabout
    this.ds.deleteEvent(this.dname, this.sdeventdate, this.deventimg, this.deventabout)
      .subscribe((result: any) => {
        console.log(result);

        if (result) {
          alert(result.message)

        }
      },
        (result) => {
          alert(result.error.message)

        })

  }


  deleteUser() {
    console.log("ddd");

    this.acno = JSON.parse(localStorage.getItem("currentuser") || ""),
    console.log(this.acno);
    
      this.ds.delete(this.acno).subscribe((result: any) => {
        if (result) {
          alert(result.message)
          this.router.navigateByUrl("")
        }
      }, (result) => {
        alert(result.error.message)

      })
  }

  logout() {
    localStorage.removeItem("currentAcno")
    localStorage.removeItem("currentuserName")
    localStorage.removeItem("token")
    this.router.navigateByUrl("")
  }










  createE() {
    this.create = true
    this.today = false
    this.update = false
    this.view = false
    this.delete = false
  }
  todayE() {
    this.create = false
    this.today = true
    this.update = false
    this.view = false
    this.delete = false
  }
  updateE() {
    this.create = false
    this.today = false
    this.update = true
    this.view = false
    this.delete = false
  }

  deleteE() {
    this.create = false
    this.today = false
    this.update = false
    this.view = false
    this.delete = true
  }

}
