import { DEFAULT_INTERPOLATION_CONFIG } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
interface Course {
  title: string;
  description: string;
  creationDate: Date;
  duration: number;
  authors: string[]
}

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  buttonText: string = "";
  @Input() course: Course = {
    title: "Test",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam pariatur ad assumenda vero nesciunt modi cupiditate odit esse temporibus voluptatem, et provident, ratione excepturi ab corrupti. Obcaecati blanditiis quidem esse.",
    creationDate: new Date("2012-04-23T18:25:43.511Z"),
    duration: 121,
    authors: ["First Author", "Second Author"]
  }
  constructor() { }

  ngOnInit(): void {
    console.log(this.course);
  }

}