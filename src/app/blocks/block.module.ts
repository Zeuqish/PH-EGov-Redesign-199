import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { UIModule } from '../ui/ui.module';
import { BlockTextComponent } from './block-text/block-text.component';
import { BlockBannerComponent } from './block-banner/block-banner.component';
import { ElementsModule } from '../elements/elements.module';
import { BlockHeaderComponent } from './block-header/block-header.component';
import { BlockArticleComponent } from './block-article/block-article.component';
import { BlockServiceListComponent } from './block-service-list/block-service-list.component';
import { BlockOfficialsMultComponent } from './block-officials-multiple/block-officials-multiple.component';
import { BlockOfficialsSingleComponent } from './block-officials-single/block-officials-single.component';
import { BlockFooterComponent } from './block-footer/block-footer.component';
import { BlockNavbarComponent } from './block-navbar/block-navbar.component';

@NgModule({
  imports: [CommonModule, BrowserModule, UIModule, ElementsModule],
  declarations: [
    BlockTextComponent,
    BlockBannerComponent,
    BlockHeaderComponent,
    BlockArticleComponent,
    BlockServiceListComponent,
    BlockOfficialsMultComponent,
    BlockOfficialsSingleComponent,
    BlockFooterComponent,
    BlockNavbarComponent,
  ],
  exports: [
    BlockTextComponent,
    BlockBannerComponent,
    BlockHeaderComponent,
    BlockArticleComponent,
    BlockServiceListComponent,
    BlockOfficialsMultComponent,
    BlockOfficialsSingleComponent,
    BlockFooterComponent,
    BlockNavbarComponent,
  ],
})
export class BlockModule {}
