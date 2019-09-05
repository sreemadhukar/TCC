import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
i:number =0;
  constructor() { }

  ngOnInit() {
new Observable(observer =>{
  setTimeout(() => {
    observer.next(1);
  },2000);
}).subscribe(value =>{
  console.log(value)
})
  }
  ngAfterViewInit(){
    interval(10000)
    .subscribe((val) => { 
    if( this.i == 0){
    $('#info').fadeTo(2000,0,function () {
      $('#info').css('background-image', 'url(/./assets/tccbackground2.jpg)');
      $("#aboutus").css({color: '#ffffff'});
 }    ).fadeTo(2000,1);  

    this.i = 1;
  }
   else
{    $('#info').fadeTo(2000,0,function(){ 
  $('#info').css('background-image', 'url(/./assets/tccbackground.jpg)');
}); 
$('#info').fadeTo(2000,1);
$("#aboutus").css({color: '#163A9A'});

 this.i=0;
}

     
   });  
 
  
    
}

}
  