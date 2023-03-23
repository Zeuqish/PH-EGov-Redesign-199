import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UIModule } from './ui/ui.module';
import { BlockModule } from './blocks/block.module';
import { ElementsModule } from './elements/elements.module';
import { ArticlesModule } from './articles/articles.module';
import { ServicesModule } from './services/services.module';
import { ServicesRoutingModule } from './services/services-routing.module';
import { ArticlesRoutingModule } from './articles/articles-routing.module';
import { AboutPageRoutingModule } from './about-landing/about-routing.module';
import { AboutPageModule } from './about-landing/about-landing.module';

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    ServicesRoutingModule,
    AboutPageRoutingModule,
    ArticlesRoutingModule,
    AppRoutingModule,
    UIModule,
    BlockModule,
    ElementsModule,
    ArticlesModule,
    ServicesModule,
    AboutPageModule,
  ],
  declarations: [AppComponent, HomepageComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
