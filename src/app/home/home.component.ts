import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-home', // Custom HTML tag for this component
  templateUrl: './home.component.html', // Path to the component's HTML template
  styleUrls: ['./home.component.scss'], // Path to the component's SCSS styles
  imports: [CommonModule, RouterModule],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // Lifecycle hook for initialization logic
  }
}
