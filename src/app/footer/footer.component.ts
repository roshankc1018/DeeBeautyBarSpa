import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-footer', // Custom HTML tag for this component
  templateUrl: './footer.component.html', // Path to the component's HTML template
  styleUrls: ['./footer.component.scss'], // Path to the component's SCSS styles
})
export class FooterComponent implements OnInit {
  // Property to hold the current year, displayed in the footer
  currentYear: number = new Date().getFullYear();

  constructor() {}

  ngOnInit(): void {
    // Lifecycle hook, useful for initialization logic after component is created
  }
}
