import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'event', loadChildren: 'app/event/event.module#EventModule' },
  { path: 'venue', loadChildren: 'app/venue/venue.module#VenueModule' },
  { path: 'user', loadChildren: 'app/user/user.module#VenueModule' },
  { path: 'point', loadChildren: 'app/point/point.module#PointModule' },
  { path: 'report', loadChildren: 'app/report/report.module#ReportModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
