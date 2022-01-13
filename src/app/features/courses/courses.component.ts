import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { isNgTemplate } from '@angular/compiler';

interface Course {
  title: string;
  description: string;
  creationDate: Date;
  duration: number;
  authors: string[]
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  private _jsonURL = 'assets/mock.json';
  coursesList: Course[];

  buttonTextLogout = "Logout";
  buttonTextShow = "Show course";
  buttonTextEdit = "Edit";
  buttonTextDelete = "Delete";
  
  buttonTextInfo = "Add new course";
  titleTextInfo = "Your list is empty";
  infoText = "Please use the '" + this.buttonTextInfo + "' button to add new course";

  @Input() isEditable: boolean = true;


  constructor(private http: HttpClient) { 
    this.coursesList = new Array<Course>();
  }
  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }

  ngOnInit(): void {
    this.getJSON().subscribe((data) => {
      this.coursesList = data as Array<Course>;
      console.log(this.coursesList.length != 0);
     });
  }

}
