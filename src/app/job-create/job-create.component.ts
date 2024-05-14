import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-job-create',
  templateUrl: './job-create.component.html',
  styleUrl: './job-create.component.scss'
})
export class JobCreateComponent {
  editorContent: string = '';
  fetchedContent: any;

  constructor(private dataService: DataService) { 
    this.fetchContent();
  }
  createJob() {
    this.dataService.postData({ content: this.editorContent }).subscribe(
      response => {
        console.log('Data posted successfully:', response);
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
      // Handle successful deletion, e.g., remove the item from the UI
    },
    error => {
      console.error('Error deleting item:', error);
    }
  );
}


  
}
