import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-job-create',
  templateUrl: './job-create.component.html',
  styleUrl: './job-create.component.scss',
})
export class JobCreateComponent {
  panelOpenState = false;

  editorContent: string = '';
  companyName: string = '';
  experience:string = '';

  fetchedContent: any;
  showQuill: boolean = false;

  constructor(private dataService: DataService , private snackBar: MatSnackBar) { 
    this.fetchContent();
  }
  
  addJob(){
    this.showQuill = !this.showQuill;
  }

  createJob() {
    this.dataService.postData({ 
      content: this.editorContent,
      companyName: this.companyName,
      experience : this.experience
    }).subscribe(
      response => {
        console.log('Data posted successfully:', response);
        this.fetchContent();
      },
      error => {
        console.error('Error posting data:', error);
      }
    );
  }


  updateItem(itemId: string, newData: any): void {
    this.dataService.updateItem(itemId, newData).subscribe(
      () => {
        // Handle successful update, e.g., update the item in the UI
      },
      error => {
        console.error('Error updating item:', error);
      }
    );
  }
// Method to fetch content from the backend
fetchContent() {
  this.dataService.getContent().subscribe(
    response => {
      console.log('Content fetched successfully:', response);
      this.fetchedContent = response;
    },
    error => {
      console.error('Error fetching content:', error);
    }
  );
}


deleteItem(itemId: string): void {
  this.dataService.deleteJob(itemId).subscribe(
    () => {
      this.fetchedContent = this.fetchedContent.filter((item: { _id: any; }) => item._id !== itemId);
      this.snackBar.open('Job deleted successfully', 'Close', {
        duration: 3000,
        panelClass: ['success-snackbar']
      });
    },
    error => {
      console.error('Error deleting job:', error);
      this.snackBar.open('Error deleting job', 'Close', {
        duration: 3000,
        panelClass: ['error-snackbar']
      });
    }
  );
}


  
}
