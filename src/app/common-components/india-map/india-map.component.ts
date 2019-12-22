import { Component, OnInit, Input, Output } from '@angular/core';
import * as d3 from 'd3'; 
import * as topojson from 'topojson';

@Component({
  selector: 'app-india-map',
  templateUrl: './india-map.component.html',
  styleUrls: ['./india-map.component.css']
})
export class IndiaMapComponent implements OnInit {
@Input() height: any;
@Input() width: any;

  constructor() { }

  ngOnInit() {
    this.map();
  }
  map()
  {

    var height = this.height;
    var width = this.width;
    var svg = d3.select("#test")
          .append("svg")
          .attr("height", 800)
          .attr("width",  700);
          
     var tooltip = d3.select("#test")
     .append("div")
     .text("hello")
     .attr("class", "tooltip")
     .style("background-color", "red")
     .style("position", "absolute")
   .style("display","none");


          d3.queue()
          .defer(d3.json, "assets/jsons/India.json")
          .await(function (error, india){
            if(error){
              console.log("yo" + error);
            } else{
              console.log(india);
              var company = JSON.parse(JSON.stringify(topojson.feature(india , india.objects.IND_adm1).features));
              console.log(company);
 
                 drawmap(company);
            }
          });
          var projection = d3.geoMercator()
          .translate([-1100,750])
          .scale(1000);
         // .attr("viewBox", "0 0 300 300");
          var path = d3.geoPath()
          .projection(projection);

          function drawmap(data: any){
            svg.selectAll(".state")
            .data(data)
            .enter().append("path")
            .attr("class","state")
                     .attr("d",path)
                     .attr("fill","#FFFFFF")
                     .attr("stroke","#FFFFFF")
                     .attr("stroke","#163A9A")
                     .attr('transform', 'translate(0, 10)')
                     .style("cursor","pointer")
                     .on('mouseover',function(d){
                       d3.select(this).attr("fill","#163A9A")
                           tooltip.style("display",null);
                     })
                     .on('mouseout',function(d){
                      tooltip.style("display","none");
                      d3.select(this).attr("fill","#FFFFFF")
                    })
                    .on("mousemove", function(d)
                    {
                      var xpos =d3.mouse(this)[0] -15;
                      var ypos =d3.mouse(this)[1] -55;
                      console.log(xpos+'/'+ypos);
                      console.log(d);
                      console.log(event)
                      tooltip.style("top", (d3.event.layerY -17)+"px").style("left",(d3.event.layerX + 10)+"px");;
                      tooltip.select('text').text("hello");
                    });  
          }
  }

}
