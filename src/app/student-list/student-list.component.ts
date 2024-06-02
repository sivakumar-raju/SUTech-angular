import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.scss'
})
export class StudentListComponent {

  students: any[] = [];

  constructor(private apiService: DataService) { }

  ngOnInit(): void {
    this.apiService.getAllRecords().subscribe(
      (data: any) => {
        this.students = data;
      },
      (error: any) => {
        console.error('Error fetching student records', error);
      }
    );
  }
  deleteStudent(id: string): void {
    if (confirm('Are you sure you want to delete this student?')) {
      this.apiService.deleteRecord(id).subscribe(
        () => {
          this.students = this.students.filter(student => student._id !== id);
          console.log('Student deleted');
        },
        (error: any) => {
          console.error('Error deleting student', error);
        }
      );
    }
  }

}
