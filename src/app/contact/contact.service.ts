import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // For making HTTP requests
import { Observable, of } from 'rxjs'; // Observable for asynchronous operations, 'of' for simulation

@Injectable({
  // 'providedIn: 'root'' makes the service a singleton and available throughout the app.
  // This is the preferred way to provide services since Angular 6.
  providedIn: 'root',
})
export class ContactService {
  // Define a conceptual API URL. In a real app, this would be your backend endpoint.
  private apiUrl = '/api/contact';

  // Inject HttpClient to enable making HTTP requests
  constructor(private http: HttpClient) {}

  /**
   * Simulates submitting contact form data to a backend.
   * In a real application, you would replace the 'of' operator with an actual HTTP POST request.
   * @param formData The data from the contact form (name, email, message).
   * @returns An Observable representing the result of the submission.
   */
  submitContactForm(formData: any): Observable<any> {
    console.log('Attempting to submit contact form data:', formData);

    // --- REAL API CALL (uncomment and replace with your backend endpoint) ---
    // return this.http.post(this.apiUrl, formData);

    // --- SIMULATED API CALL (for demonstration purposes) ---
    // This simulates a successful response after a short delay
    return of({
      success: true,
      message: 'Your message has been sent successfully!',
    })
      .pipe
      // Add a delay to simulate network latency
      // This requires importing `delay` from 'rxjs/operators'
      // delay(1000)
      ();
  }
}
