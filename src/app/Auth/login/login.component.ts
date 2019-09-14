import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as d3 from 'd3'; 
// import { indiaMap} from '../assets/Jsons/India.json';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private http: HttpClient) { }

  ngOnInit() {
    this.map();
  }
  map()
  {
      console.log(this.http.get("src/assets/jsons/India.json"));
    const svg = d3.select("#test")
          .append("svg")
          .style("cursor","move")
          .attr("height","200px")
          .attr("width","2000px")
          .style("background-color","red");
          // d3.queue()
          // .defer(d3.json, "src/assets/jsons/India.json")
          // .await(function (error , data){
          //   if(error){
          //     console.log("yo" + error);
          //   } else{
          //     this.drawmap(data);
          //   }

          // });
  }

  drawmap(data){
    console.log(data);
            
  }

}
