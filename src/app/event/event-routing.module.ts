import { NgModule } from '@angular/core';
import { EventDetailComponent, EventListComponent,
  EventAddComponent, EventEditComponent, EventComponent
} from './index';
import { Routes,
  RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';

const routes: Routes = [
  { path: '',
    component: EventComponent,
    children: [
      { path: 'add',    component: EventAddComponent },
      { path: 'edit/:id',    component: EventEditComponent },
      { path: 'all', component: EventListComponent },
      { path: ':id',    component: EventDetailComponent },
    ]
  }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class EventRoutingModule { }
