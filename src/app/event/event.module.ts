import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { EventDetailComponent, EventListComponent,
          EventAddComponent, EventEditComponent, EventComponent,
          EventService
       } from './index';
import { EventRoutingModule } from './event-routing.module';

@NgModule({
  imports: [
    SharedModule, EventRoutingModule
  ],
  declarations: [EventDetailComponent,
    EventListComponent, EventAddComponent,
    EventEditComponent, EventComponent,
  ],
  providers: [
    EventService
  ]
})
export class EventModule { }
