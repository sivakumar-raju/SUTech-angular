import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgForm } from '@angular/forms';

declare let particlesJS: any;
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  courses = ['Java', 'Python', 'DevOps', 'Machine Learning', 'SQL'];
  showloader: boolean = false;
  options: string[] = [
    'B.A',
    'B.Sc',
    'B.Com',
    'B.B.A',
    'ITI/Diploma',
    'B.E/ B.Tech Computer Science',
    'B.E/ B.Tech ECE',
    'B.E/ B.Tech EEE',
    'B.E/ B.Tech Information Technology',
    'B.E/ B.Tech Civil',
    'B.E/ B.Tech Mechanical',
    'B.E/ B.Tech - Others',
    'M.E / M.Tech',
    'Others'
  ];
  workingOptions = [
    { value: 'Student', viewValue: 'Student' },
    { value: 'Working in the IT Industry', viewValue: 'Working in the IT Industry' },
    { value: 'Working in Non IT Industry', viewValue: 'Working in Non IT Industry' },
    { value: 'Looking for a career in the IT industry', viewValue: 'Looking for a career in the IT industry' }
  ];
  selectedOption: string = '';
  formData = {
    name: '',
    email: '',
    phone: '',
    course: '',
    option: '',
    selectedOption: '',
    placementEnquiry: '',
    comments: ''
  };
  
  
  constructor(private snackBar: MatSnackBar , private http: HttpClient , private dataService: DataService) {}
 
  
  submitForm(form: NgForm) {
    console.log("16", this.formData)
    this.showloader = !this.showloader;
    this.sendEmail();
    form.resetForm();
  }

  getMonthAbbreviation(monthIndex: any) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months[monthIndex];
  }

  sendEmail() {
    const currentDate = new Date();
    const formattedDate = currentDate.getDate() + ' ' + this.getMonthAbbreviation(currentDate.getMonth()) + ' ' + currentDate.getFullYear();
    const name = this.formData.name;
    const capitalizedFirstName = name.charAt(0).toUpperCase() + name.slice(1);
    const subject = `${capitalizedFirstName} - ${formattedDate}`;
    const payload = {
      to: 'sivakumarraju.cse@gmail.com',
      subject: subject,
      text:  JSON.stringify(this.formData)
    };
    this.createRecord(payload)
    this.http.post<any>('https://nodemailer-u54j.onrender.com/send-email', payload)
      .subscribe(
        response => {
          this.showloader = false;
          console.log('Email sent successfully:', response);
          this.snackBar.open('Form submitted successfully!', 'Close', {
            duration: 3000,
            panelClass: ['success-snackbar']
          });
        },
        error => {
          console.error('Error sending email:', error);
        }
      );
  }

  createRecord(payload : any) {
    const body = JSON.parse(payload.text);
    this.dataService.createRecord(body).subscribe(response => {
      console.log('Record created:', response);
    });
  }

  getAllRecords() {
    this.dataService.getAllRecords().subscribe(response => {
      console.log('All records:', response);
    });
  }

  deleteRecord(id: string) {
    this.dataService.deleteRecord(id).subscribe(() => {
      console.log('Record deleted');
    });
  }
}
