import { Component, OnInit } from '@angular/core';
// Import FormBuilder, FormGroup, and Validators for reactive forms
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ContactService } from './contact.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-contact', // Custom HTML tag for this component
  templateUrl: './contact.component.html', // Path to the component's HTML template
  styleUrls: ['./contact.component.scss'], // Path to the component's SCSS styles
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
})
export class ContactComponent implements OnInit {
  // Declare contactForm as a FormGroup
  contactForm!: FormGroup;
  showConfirmation: boolean = false; // State to control the visibility of the success message

  // Inject FormBuilder and ContactService into the component
  constructor(
    private fb: FormBuilder,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    // Initialize the contact form with FormControls and validators
    this.contactForm = this.fb.group({
      name: ['', Validators.required], // Name is required
      email: ['', [Validators.required, Validators.email]], // Email is required and must be a valid email format
      message: ['', Validators.required], // Message is required
    });
  }

  /**
   * Handles the form submission.
   * If the form is valid, it simulates a submission, shows a confirmation, and resets the form.
   * Otherwise, it marks all form controls as touched to display validation errors.
   */
  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);

      // Call the contact service to simulate API submission
      this.contactService.submitContactForm(this.contactForm.value).subscribe({
        next: (response) => {
          console.log('Service response:', response);
          this.showConfirmation = true; // Show success message
          this.contactForm.reset(); // Reset the form fields

          // Hide the confirmation message after 3 seconds
          setTimeout(() => {
            this.showConfirmation = false;
          }, 3000);
        },
        error: (error) => {
          console.error('Error submitting form:', error);
          // Handle error, maybe show an error message to the user
        },
      });
    } else {
      // If the form is invalid, mark all controls as touched to trigger validation messages
      this.contactForm.markAllAsTouched();
      console.log('Form is invalid. Please check the fields.');
    }
  }
}
