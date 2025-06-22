import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-about', // Custom HTML tag for this component
  templateUrl: './about.component.html', // Path to the component's HTML template
  styleUrls: ['./about.component.scss'], // Path to the component's SCSS styles
  imports: [CommonModule, RouterModule],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // Lifecycle hook for initialization logic
  }
}
