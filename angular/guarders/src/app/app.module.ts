import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './UserComponents/home/home.component';
import { AboutComponent } from './UserComponents/about/about.component';
import { OurServiceComponent } from './UserComponents/our-service/our-service.component';
import { ContactUsComponent } from './UserComponents/contact-us/contact-us.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DashboardComponent } from './AdminComponents/dashboard/dashboard.component';
import { AddGuardComponent } from './AdminComponents/add-guard/add-guard.component';
import { FormsModule } from '@angular/forms';
import { GuardsComponent } from './UserComponents/guards/guards.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './AdminComponents/access/login/login.component';
import { CustomerListComponent } from './AdminComponents/customer-list/customer-list.component';
import { GuardsListComponent } from './AdminComponents/guards-list/guards-list.component';
import { RegisterComponent } from './AdminComponents/access/register/register.component';
import { AdminNavbarComponent } from './AdminComponents/shared/admin-navbar/admin-navbar.component';
import { CommentsComponent } from './UserComponents/comments/comments.component';
import { AddAdminComponent } from './AdminComponents/access/add-admin/add-admin.component';
import { UserListComponent } from './AdminComponents/user-list/user-list.component';
import { AllAdminsComponent } from './AdminComponents/access/all-admins/all-admins.component';
import { SignNavbarComponent } from './AdminComponents/shared/sign-navbar/sign-navbar.component';
import { EditGuardComponent } from './AdminComponents/edit-guard/edit-guard.component';
import { UpdateFooterComponent } from './AdminComponents/update-footer/update-footer.component';
import { PrivacyPolicyComponent } from './UserComponents/privacy-policy/privacy-policy.component';
import { TermsOfUseComponent } from './UserComponents/terms-of-use/terms-of-use.component';
import { NewsletterListComponent } from './AdminComponents/newsletter-list/newsletter-list.component';


















@NgModule({
  declarations: [ AppComponent, HomeComponent, AboutComponent, OurServiceComponent, ContactUsComponent, FooterComponent, NavbarComponent, NotFoundComponent, DashboardComponent, AddGuardComponent, GuardsComponent, LoginComponent, CustomerListComponent, GuardsListComponent, RegisterComponent, AdminNavbarComponent, CommentsComponent,AddAdminComponent, UserListComponent, AllAdminsComponent, SignNavbarComponent, EditGuardComponent, UpdateFooterComponent, PrivacyPolicyComponent, TermsOfUseComponent, NewsletterListComponent,  ],

  imports: [ BrowserModule, AppRoutingModule,FormsModule, HttpClientModule, ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
