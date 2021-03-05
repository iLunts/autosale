import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavigationComponent } from './shared/components/top-navigation/top-navigation.component';
import { BannerComponent } from './shared/components/banner/banner.component';
import { WorkListComponent } from './shared/components/work-list/work-list.component';
import { FeedbackFormComponent } from './shared/components/feedback-form/feedback-form.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { RoadmapComponent } from './shared/components/roadmap/roadmap.component';
import { WantToSellComponent } from './shared/components/want-to-sell/want-to-sell.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavigationComponent,
    BannerComponent,
    WorkListComponent,
    FeedbackFormComponent,
    FooterComponent,
    RoadmapComponent,
    WantToSellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }