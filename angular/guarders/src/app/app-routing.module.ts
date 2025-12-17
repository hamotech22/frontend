
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './UserComponents/home/home.component';
import { AboutComponent } from './UserComponents/about/about.component';
import { ContactUsComponent } from './UserComponents/contact-us/contact-us.component';
import { OurServiceComponent } from './UserComponents/our-service/our-service.component';
import { DashboardComponent } from './AdminComponents/dashboard/dashboard.component';
import { LoginComponent } from './AdminComponents/access/login/login.component';
import { RegisterComponent } from './AdminComponents/access/register/register.component';
import { GuardsComponent } from './UserComponents/guards/guards.component';
import { GuardsListComponent } from './AdminComponents/guards-list/guards-list.component';
import { AddGuardComponent } from './AdminComponents/add-guard/add-guard.component';
import { CustomerListComponent } from './AdminComponents/customer-list/customer-list.component';
import { AddAdminComponent } from './AdminComponents/access/add-admin/add-admin.component';
import { UserListComponent } from './AdminComponents/user-list/user-list.component';
import { AllAdminsComponent } from './AdminComponents/access/all-admins/all-admins.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EditGuardComponent } from './AdminComponents/edit-guard/edit-guard.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NewsletterListComponent } from './AdminComponents/newsletter-list/newsletter-list.component';
import { PrivacyPolicyComponent } from './UserComponents/privacy-policy/privacy-policy.component';
import { TermsOfUseComponent } from './UserComponents/terms-of-use/terms-of-use.component';






const routes: Routes = [
  { path: 'home',component:HomeComponent, title: 'home'},
  { path: '',redirectTo:'home', pathMatch:'full'},
  { path: 'about',component:AboutComponent, title: 'about'},
  { path: 'contact-us',component:ContactUsComponent, title: 'contactUs'},
  { path: 'login',component:LoginComponent},
  { path: 'register',component:RegisterComponent},
  { path: 'add-admin',component:AddAdminComponent},
  { path: 'privacypolicy',component:PrivacyPolicyComponent},
  { path: 'termsofus',component:TermsOfUseComponent},

  { path: 'list-user',component:UserListComponent},
  { path: 'our-service',component:OurServiceComponent, title: 'our-service'},
  { path: 'guards', component:GuardsComponent, title: 'our-bodyGuards', },
  { path: 'view-guards', component:GuardsListComponent, title: 'our-bodyGuards'},
  { path: 'edit/:id', component:EditGuardComponent, title: 'edit-guard'},

  { path: 'footer', component:FooterComponent, title: 'footer'},

  { path: 'admin',children: 
  [ { path: 'dashboard', component: DashboardComponent},
    { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    { path: 'add-guard', component:AddGuardComponent},
    { path: 'list-clinet', component:CustomerListComponent},
    { path: 'list-admin', component:AllAdminsComponent},
    { path: 'newsletter-list', component:NewsletterListComponent},
  ]},
  { path: "**" , component:NotFoundComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes , {scrollPositionRestoration:'enabled'}) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
