import { API_BASE_URL } from './api.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // Method to fetch content from the backend
  getContent(): Observable<any> {
    return this.http.get<any>(`${API_BASE_URL}/api/get-content`);
  }


  postData(data: any) {
    return this.http.post<any>(`${API_BASE_URL}/api/create-job`, data);
  }


  deleteJob(jobId: string): Observable<any> {
    return this.http.delete<any>(`${API_BASE_URL}/api/delete-job/${jobId}`);
  }

  updateItem(itemId: string, newData: any): Observable<any> {
    return this.http.put<any>(`${API_BASE_URL}/items/${itemId}`, newData);
  }
}
