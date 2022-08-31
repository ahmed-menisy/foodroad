import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ResturantComponent } from './components/resturant/resturant.component';
import { BecomeComponent } from './components/become/become.component';
import { ContactComponent } from './components/contact/contact.component';
import { SingleComponent } from './components/single/single.component';
import { OurteamComponent } from './components/ourteam/ourteam.component';
import { FaqComponent } from './components/faq/faq.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { DetailsComponent } from './components/details/details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceComponent } from './components/service/service.component';
import { SwiprerComponent } from './components/swiprer/swiprer.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SwiperModule } from 'swiper/angular';
import { Swiper2Component } from './components/swiper2/swiper2.component';
import { FavCartComponent } from './fav-cart/fav-cart.component';
import { TirmtextPipe } from './tirmtext.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ResturantComponent,
    BecomeComponent,
    ContactComponent,
    // SingleComponent,
    OurteamComponent,
    // FaqComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    NotfoundComponent,
    DetailsComponent,
    ServiceComponent,
    SwiprerComponent,
    Swiper2Component,
    FavCartComponent,
    TirmtextPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarouselModule,
    BrowserAnimationsModule,
    SwiperModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
