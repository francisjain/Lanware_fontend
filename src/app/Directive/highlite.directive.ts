import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlite]'
})
export class HighliteDirective {


  constructor(private el:ElementRef) {
    console.log(el.nativeElement);
    
   }



// el.nativeElement.style.addEventListener('mousemove',(e:any)=>{

//   var x = (window.innerWidth / 2 -e.pageX) / 12 ;
//   var y = (window.innerHeight / 2 -e.pageY) / 12 ;
  
//   el.nativeElement.style.form.style.transform ='rotateX('+x+' deg) rotateY(' +y+'deg)' }); 

// form.addEventListener('mouseleave', function () {
//   form.style.transform = 'rotateX(0deg) rotateY(0deg)';
// });






  
// @HostListener('mousemove')  dosomething(e:any) {
//   console.log(e);
  
//   this.el.nativeElement.form.style.transform=''
//   'rotateX('+(window.innerWidth / 2 -e.pageX) / 12 +'deg) rotateY('+(window.innerHeight / 2 -e.pageY) / 12 +'deg)'
// }
// @HostListener('mouseleave')  orginal(e:any) {
//   console.log(e);
  
//   this.el.nativeElement.form.style.transform=
//   'rotateX(0deg) rotateY(0deg)'
// }













// const primaryNav= document.querySelector(".primary-navigation");
// const navToggle= document.querySelector(".mobile-nav-toggle");

// navToggle.addEventListener("click",()=>{
//     const visibility=primaryNav.getAttribute("data-visible")

//     if(visibility ==="false"){
//         primaryNav.setAttribute('data-visible',true);
//         navToggle.setAttribute("aria-expanded",true)
//     }else if(visibility === "true"){
//         primaryNav.setAttribute('data-visible',false)
//         navToggle.setAttribute("aria-expanded",false)
//     }
// });














}
  