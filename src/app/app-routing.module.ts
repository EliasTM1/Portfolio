import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { ContactComponent } from './profile/contact/contact.component';
import { DetailsComponent } from './pages/details/details.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "details/:encodedTitle",
    component: DetailsComponent,
  },
  {
    path: "resume",
    component: ResumeComponent

  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "**",
    redirectTo: "home"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
