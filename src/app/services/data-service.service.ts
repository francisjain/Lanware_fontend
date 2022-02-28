import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const options ={
  headers:new HttpHeaders()
}

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http:HttpClient) { }

  register(username: any, uname: any, password: any) {
    const data ={
      username,password,uname
    }
    return this.http.post("http://localhost:9000/register",data)
  }



  login(username: any, password: any) {
    const data ={
      username,password
    }
    return this.http.post("http://localhost:9000/login",data)
    // return this.http.post(environment.apiUrl+"/login",data)
  }

  createEvent(ceventname: any, cevendate: any,ceventimg: any, caboutevent: any){
    const data ={
      ceventname, cevendate,ceventimg, caboutevent
    }
    return this.http.post("http://localhost:9000/createevent",data,this.getOptions())
  }



  getOptions(){
    const token =JSON.parse(localStorage.getItem("token")||"")
    let headers = new HttpHeaders()
    if(token){
      headers=headers.append('x-access-token',token)
      options.headers=headers
    }
    return options
  }


  searchUpdate(suevendate: any){
    return this.http.post("http://localhost:9000/searchupdate/"+suevendate,"",this.getOptions())
  }


  updateevent(ceventname: any, cevendate: any, ceventimg: any, caboutevent: any){
    const data ={
      ceventname, cevendate, ceventimg, caboutevent
    }
    return this.http.post("http://localhost:9000/updateevent",data,this.getOptions())
  }

  viewEvent(){
    return this.http.post("http://localhost:9000/viewEvent","",this.getOptions())
  }

  searchDelete(sdeventdate: any){
    return this.http.post("http://localhost:9000/searchdelete/"+sdeventdate,"",this.getOptions())
  }

  deleteEvent(ceventname: any, cevendate: any, ceventimg: any, caboutevent: any){
    const data ={
      ceventname, cevendate, ceventimg, caboutevent
    }
    return this.http.post("http://localhost:9000/deleteEvent",data,this.getOptions())
  }
  today(cevendate: any){
    return this.http.post("http://localhost:9000/todaysdate/"+cevendate,"",this.getOptions())
  }

  delete(acno:any){
    return this.http.delete('http://localhost:9000/deleteAcc/'+acno,this.getOptions())
  }






}
