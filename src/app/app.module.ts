import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileModule } from './profile/profile.module';
import { BurgerDirective } from './direct/burger.directive';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    BurgerDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProfileModule,
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledNonBlocking'
  }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
