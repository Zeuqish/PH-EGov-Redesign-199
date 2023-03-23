import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutGovernorsComponent } from './about-governors/about-governors.component';
import { AboutHistoryComponent } from './about-history/about-history.component';
import { AboutPageIntroComponent } from './about-landing-intro.component';
import { AboutPageComponent } from './about-landing.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutPageComponent,
    children: [
      {
        path: '',
        component: AboutPageIntroComponent,
      },
      {
        path: 'history',
        component: AboutHistoryComponent,
      },
      {
        path: 'governors',
        component: AboutGovernorsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AboutPageRoutingModule {}
