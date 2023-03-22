import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
// import { AppComponent } from './app.component';
import { GenreListComponent } from './genre-list/genre-list.component';
import { GenreComponent } from './genre/genre.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { WriterComponent } from './writer/writer.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'genre/:genre', component: GenreComponent, canActivate: [AuthGuard] },
  { path: 'writer/:genre/:idx', component: WriterComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegistrationComponent },
  { path: 'list', component: GenreListComponent, canActivate: [AuthGuard] },
];

// const routes: Routes = [
//   { path: 'home', component: HomeComponent },
//   { path: '', redirectTo: '/home', pathMatch: 'full' },
//   { path: 'about', component: AboutComponent },
//   { path: 'login', component: LoginComponent },
//   { path: 'genre/:genre', component: GenreComponent },
//   { path: 'writer/:genre/:idx', component: WriterComponent },
//   { path: 'register', component: RegistrationComponent },
//   { path: 'list', component: GenreListComponent },
// ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
