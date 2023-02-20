import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UIModule } from './ui/ui.module';

@NgModule({
  declarations: [AppComponent, HomepageComponent],
  imports: [BrowserModule, AppRoutingModule, UIModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
