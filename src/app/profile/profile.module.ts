import { AboutComponent } from './about/about.component';
import { AutoTypeComponent } from './auto-type/auto-type.component';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { GalleryComponent } from './gallery/gallery.component';
import { HeaderComponent } from './header/header.component';
import { ImgSliderComponent } from './img-slider/img-slider.component';
import { IntroComponent } from './intro/intro.component';
import { LoaderComponent } from './loader/loader.component';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectsComponent } from './projects/projects.component';
import { ReferenceComponent } from './reference/reference.component';
import { RouterModule } from '@angular/router';
import { ScrollingMarqueeComponent } from './sliding-marquee/scrolling-marquee';
import { SkillsComponent } from './skills/skills.component';




@NgModule({
  declarations: [
    AboutComponent,
    AutoTypeComponent,
    ContactComponent,
    ExperienceComponent,
    FooterComponent,
    GalleryComponent,
    HeaderComponent,
    ImgSliderComponent,
    IntroComponent,
    LoaderComponent,
    ProfileComponent,
    ProjectCardComponent,
    ProjectDetailsComponent,
    ProjectsComponent,
    ReferenceComponent,
    ScrollingMarqueeComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  exports: [
    AboutComponent,
    AutoTypeComponent,
    ContactComponent,
    ExperienceComponent,
    FooterComponent,
    GalleryComponent,
    HeaderComponent,
    ImgSliderComponent,
    IntroComponent,
    LoaderComponent,
    ProfileComponent,
    ProjectCardComponent,
    ProjectDetailsComponent,
    ProjectsComponent,
    ReferenceComponent,
    SkillsComponent
  ]
})
export class ProfileModule { }
