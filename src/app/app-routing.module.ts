import { RouterModule, Routes } from '@angular/router';

import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { JobCreateComponent } from './job-create/job-create.component';
import { JobsComponent } from './jobs/jobs.component';
import { NgModule } from '@angular/core';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'contact-us/list', component: StudentListComponent },
  { path: 'jobs/jobcreate', component: JobCreateComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' } // Default route to Home
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
