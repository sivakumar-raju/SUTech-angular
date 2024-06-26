import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AboutUsComponent } from './about-us/about-us.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CoursesComponent } from './courses/courses.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { JobCreateComponent } from './job-create/job-create.component';
import { JobsComponent } from './jobs/jobs.component';
import {MatCardModule} from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { QuillModule } from 'ngx-quill';
import { SafeHtmlPipe } from './safe-html.pipe';
import { StudentListComponent } from './student-list/student-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CoursesComponent,
    JobsComponent,
    AboutUsComponent,
    ContactUsComponent,
    JobCreateComponent,
    SafeHtmlPipe,
    StudentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule, 
    ReactiveFormsModule, 
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule,
    MatCardModule,
    MatExpansionModule,
    QuillModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
