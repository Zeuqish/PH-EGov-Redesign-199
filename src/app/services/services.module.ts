import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UIModule } from '../ui/ui.module';
import { BlockModule } from '../blocks/block.module';
import { ElementsModule } from '../elements/elements.module';
import { ServicesLandingComponent } from './services-landing.component';
import { ServicesRoutingModule } from './services-routing.module';
import { ServicesIDComponent } from './service-pages/services-id.component';
import { ServicesEducationComponent } from './service-pages/services-education.component';
import { ServicesCovidComponent } from './service-pages/services-covid.component';
import { ServicesBusinessComponent } from './service-pages/services-business.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    UIModule,
    BlockModule,
    ElementsModule,
    ServicesRoutingModule,
  ],
  declarations: [
    ServicesLandingComponent,
    ServicesIDComponent,
    ServicesEducationComponent,
    ServicesCovidComponent,
    ServicesBusinessComponent,
  ],
})
export class ServicesModule {}
