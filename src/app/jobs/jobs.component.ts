import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss'
})
export class JobsComponent {
  fetchedContent: any;

  constructor(private dataService: DataService) { 
    this.fetchContent();
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
