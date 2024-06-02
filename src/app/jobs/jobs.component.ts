import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss'
})
export class JobsComponent {
  fetchedContent: any;
  panelOpenState = false;

  constructor(private dataService: DataService,  private router: Router) { 
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


navigateToContact() {
  this.router.navigate(['/contact-us']); // Navigate to contact-us route
}


}
