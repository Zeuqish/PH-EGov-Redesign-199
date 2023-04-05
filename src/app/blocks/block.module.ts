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
import { BlockSlideshowComponent } from './block-slideshow/block-slideshow.component';
import { RouterModule } from '@angular/router';
import { BlockAwardsComponent } from './block-awards/block-awards.component';
import { BlockTextNoSplitComponent } from './block-text-no-split/block-text-no-split.component';
import { BlockSitemapComponent } from './block-sitemap/block-sitemap.component';
import { BlockArticleTitleComponent } from './block-article-title/block-article-title.component';
import { BlockTimeComponent } from './block-time/block-time.component';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    UIModule,
    ElementsModule,
    RouterModule,
  ],
  declarations: [
    BlockTextComponent,
    BlockBannerComponent,
    BlockHeaderComponent,
    BlockArticleComponent,
    BlockAwardsComponent,
    BlockServiceListComponent,
    BlockOfficialsMultComponent,
    BlockOfficialsSingleComponent,
    BlockFooterComponent,
    BlockNavbarComponent,
    BlockSlideshowComponent,
    BlockSitemapComponent,
    BlockTextNoSplitComponent,
    BlockArticleTitleComponent,
    BlockTimeComponent,
  ],
  exports: [
    BlockTextComponent,
    BlockBannerComponent,
    BlockHeaderComponent,
    BlockArticleComponent,
    BlockAwardsComponent,
    BlockServiceListComponent,
    BlockOfficialsMultComponent,
    BlockOfficialsSingleComponent,
    BlockFooterComponent,
    BlockNavbarComponent,
    BlockSlideshowComponent,
    BlockTextNoSplitComponent,
    BlockSitemapComponent,
    BlockArticleTitleComponent,
    BlockTimeComponent,
  ],
})
export class BlockModule {}
