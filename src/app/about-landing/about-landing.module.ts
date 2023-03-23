import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UIModule } from '../ui/ui.module';
import { BlockModule } from '../blocks/block.module';
import { ElementsModule } from '../elements/elements.module';
import { AboutPageComponent } from './about-landing.component';
import { AboutPageRoutingModule } from './about-routing.module';
import { AboutHistoryComponent } from './about-history/about-history.component';
import { AboutPageIntroComponent } from './about-landing-intro.component';
import { AboutGovernorsComponent } from './about-governors/about-governors.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    UIModule,
    BlockModule,
    ElementsModule,
    AboutPageRoutingModule,
  ],
  declarations: [
    AboutPageComponent,
    AboutHistoryComponent,
    AboutPageIntroComponent,
    AboutGovernorsComponent,
  ],
})
export class AboutPageModule {}
