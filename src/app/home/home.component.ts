import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  ngAfterViewInit() {
    performance.mark('mark_fully_loaded');
  } 
  ngAfterViewChecked(){
    performance.mark('mark_fully_visible');
  }
}
