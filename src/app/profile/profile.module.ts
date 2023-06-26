import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { ReferenceComponent } from './reference/reference.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile.component';
import { FormsModule } from '@angular/forms';
import { ProjectCardComponent } from './project-card/project-card.component';
import { RouterModule } from '@angular/router';
import { AutoTypeComponent } from './auto-type/auto-type.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { GalleryComponent } from './gallery/gallery.component';



@NgModule({
  declarations: [
    HeaderComponent,
    IntroComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    SkillsComponent,
    ReferenceComponent,
    ContactComponent,
    FooterComponent,
    ProfileComponent,
    ProjectCardComponent,
    AutoTypeComponent,
    ProjectDetailsComponent,
    GalleryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    IntroComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    SkillsComponent,
    ReferenceComponent,
    ContactComponent,
    FooterComponent,
    ProfileComponent,
    ProjectCardComponent,
    AutoTypeComponent,
    ProjectDetailsComponent,
    GalleryComponent
  ]
})
export class ProfileModule { }
