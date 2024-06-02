import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private API_BASE_URL = environment.API_BASE_URL;
  constructor(private http: HttpClient) { }

  // Method to fetch content from the backend
  getContent(): Observable<any> {
    return this.http.get<any>(`${this.API_BASE_URL}/get-content`);
  }


  postData(data: any) {
    return this.http.post<any>(`${this.API_BASE_URL}/create-job`, data);
  }


  deleteJob(jobId: string): Observable<any> {
    return this.http.delete<any>(`${this.API_BASE_URL}/delete-job/${jobId}`);
  }

  updateItem(itemId: string, newData: any): Observable<any> {
    return this.http.put<any>(`${this.API_BASE_URL}/items/${itemId}`, newData);
  }

  createRecord(data: any): Observable<any> {
    return this.http.post(`${this.API_BASE_URL}/students`, data);
  }

  getAllRecords(): Observable<any> {
    return this.http.get(`${this.API_BASE_URL}/students`);
  }

  deleteRecord(id: string): Observable<any> {
    return this.http.delete(`${this.API_BASE_URL}/students/${id}`);
  }
}
