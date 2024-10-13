import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';

export const routes: Routes = [
    {
        path: 'home',
        title: 'Home',
        component: HomeComponent,
      },
      {
        path: 'about',
        title: 'About',
        component: AboutComponent,
      },
      {
        path: 'contact',
        title: 'Contact',
        component: ContactComponent,
      },
      {
        path:'skills',
        title:'Skills',
        component: SkillsComponent 

      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
];
