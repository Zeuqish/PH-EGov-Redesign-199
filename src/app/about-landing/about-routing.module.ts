import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutHistoryComponent } from './about-history/about-history.component';
import { AboutPageComponent } from './about-landing.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutPageComponent,
    children: [
      {
        path: 'history',
        component: AboutHistoryComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AboutPageRoutingModule {}
