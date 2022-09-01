import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BecomeComponent } from './components/become/become.component';
import { ContactComponent } from './components/contact/contact.component';
import { FaqComponent } from './components/faq/faq.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { OurteamComponent } from './components/ourteam/ourteam.component';
import { RegisterComponent } from './components/register/register.component';
import { ResturantComponent } from './components/resturant/resturant.component';
import { SingleComponent } from './components/single/single.component';
import { ServiceComponent } from './components/service/service.component';
import { AuthGuard, AuthGuardLogin } from './guard/auth.guard';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  {path:'home',canActivate:[AuthGuard],component:HomeComponent,title:'Home'},
  {path:'about',canActivate:[AuthGuard],component:AboutComponent,title:'About'},
  {path:'resturant',canActivate:[AuthGuard],component:ResturantComponent,title:'Resturant'},
  {path:'become',canActivate:[AuthGuard],component:BecomeComponent,title:'Become merchant'},
  {path:'details/:id',canActivate:[AuthGuard],component:DetailsComponent,title:'details'},
  {path:'single',canActivate:[AuthGuard],component:SingleComponent,title:'Single Restaurant '},
  {path:'our',canActivate:[AuthGuard],component:OurteamComponent,title:'Our team '},
  {path:'faq',canActivate:[AuthGuard],component:FaqComponent,title:'FAQ '},
  {path:'service',canActivate:[AuthGuard],component:ServiceComponent,title:'Service'},
  {path:'contact',canActivate:[AuthGuard],component:ContactComponent,title:'Contact'},
  { path: 'register', canActivate:[AuthGuardLogin],component: RegisterComponent, title: 'register' },
  { path: 'login', canActivate:[AuthGuardLogin],component: LoginComponent, title: 'Login' },
  {path:'**',component:NotfoundComponent,title:'NotFound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
