import { Component, OnInit } from '@angular/core';
import { Event } from './../../core/model/event';
import { Venue } from './../../core/model/venue';
@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events: any[];
 
  constructor() { }

  ngOnInit() {
    this.events = [
      {Id: 123, Date: '12/20/2016', Name: 'Colden', Venue: {Id: 121, Name: 'Colden', Description: 'Blah', Capacity: 2500}},
    {Id: 134, Date: '12/20/2016', Name: 'Calypso special', Venue: {Id: 121, Name: 'Colden', Description: 'Blah', Capacity: 2500}},
    {Id: 153, Date: '12/20/2016', Name: 'Dominica Relief', Venue: {Id: 121, Name: 'Colden', Description: 'Blah', Capacity: 2500}},
    {Id: 233, Date: '12/20/2016', Name: 'Back to School', Venue: {Id: 121, Name: 'Colden', Description: 'Blah', Capacity: 2500}}
  ];
  }

}
