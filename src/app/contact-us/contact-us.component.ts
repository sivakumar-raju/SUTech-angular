import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  courses = ['Java', 'Python', 'DevOps', 'Machine Learning', 'SQL'];
  formData = {
    name: '',
    email: '',
    phone: '',
    course: '',
    placementEnquiry: '',
    comments: ''
  };
  
  
  constructor(private snackBar: MatSnackBar , private http: HttpClient) {}
 
  
  submitForm(form: NgForm) {
    console.log("16", this.formData)
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

    this.http.post<any>('https://nodemailer-u54j.onrender.com/send-email', payload)
      .subscribe(
        response => {
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
}
