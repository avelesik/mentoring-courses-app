import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { CourseModule } from '../course/course.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    CourseModule
  ],
  exports: [
    CoursesComponent
  ]
})
export class CoursesModule { }
