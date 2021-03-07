import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InlineSVGModule } from 'ng-inline-svg';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BannerComponent } from './shared/components/banner/banner.component';
import { BrandsComponent } from './shared/components/brands/brands.component';
import { CommunicationComponent } from './shared/components/communication/communication.component';
import { FeedbackFormComponent } from './shared/components/feedback-form/feedback-form.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { RoadmapComponent } from './shared/components/roadmap/roadmap.component';
import { TopNavigationComponent } from './shared/components/top-navigation/top-navigation.component';
import { WantToSellComponent } from './shared/components/want-to-sell/want-to-sell.component';
import { WorkListComponent } from './shared/components/work-list/work-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    BrandsComponent,
    CommunicationComponent,
    FeedbackFormComponent,
    FooterComponent,
    RoadmapComponent,
    TopNavigationComponent,
    WantToSellComponent,
    WorkListComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CarouselModule,
    FormsModule,
    HttpClientModule,
    InlineSVGModule.forRoot(),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
