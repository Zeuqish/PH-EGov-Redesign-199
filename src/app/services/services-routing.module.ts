import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleCovidComponent } from '../articles/article-covid/article-covid.component';
import { ServicesBusinessComponent } from './service-pages/services-business.component';
import { ServicesCovidComponent } from './service-pages/services-covid.component';
import { ServicesEducationComponent } from './service-pages/services-education.component';
import { ServicesIDComponent } from './service-pages/services-id.component';
import { ServicesLandingComponent } from './services-landing.component';

const routes: Routes = [
  {
    path: 'services',
    component: ServicesLandingComponent,
    children: [
      {
        path: 'test',
        component: ArticleCovidComponent,
      },
      {
        path: 'id',
        component: ServicesIDComponent,
      },
      {
        path: 'education',
        component: ServicesEducationComponent,
      },
      {
        path: 'covid',
        component: ServicesCovidComponent,
      },
      {
        path: 'business-permit',
        component: ServicesBusinessComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ServicesRoutingModule {}
