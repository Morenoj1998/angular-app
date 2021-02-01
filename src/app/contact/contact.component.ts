import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

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
