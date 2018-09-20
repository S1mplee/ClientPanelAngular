import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
// AngularFire Imports
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
// components
import { AppComponent } from './app.component';
import { ClientsComponent } from './components/clients/clients.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
// services
import { ClientsService } from './services/clients.service';
const appRoutes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'details', component: ClientDetailsComponent}

];

export const firebaseconfig = {
    apiKey: 'AIzaSyC0zFGAIb4Lb4a34sNC3Yuj9lEL7JmwbfM',
    authDomain: 'clientpanel-c3315.firebaseapp.com',
    databaseURL: 'https://clientpanel-c3315.firebaseio.com',
    storageBucket: 'clientpanel-c3315.appspot.com',
    messagingSenderId: '449260953717'
};

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    AddClientComponent,
    EditClientComponent,
    ClientDetailsComponent,
    NavbarComponent,
    SidebarComponent,
    SettingsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseconfig)
  ],
  providers: [AngularFireAuth,
  AngularFireDatabase,
  ClientsService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
