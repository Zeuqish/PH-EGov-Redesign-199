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

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    UIModule,
    BlockModule,
    ElementsModule,
    ArticlesModule,
  ],
  declarations: [AppComponent, HomepageComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
