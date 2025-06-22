import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-header', // Custom HTML tag for this component
  templateUrl: './header.component.html', // Path to the component's HTML template
  styleUrls: ['./header.component.scss'], // Path to the component's SCSS styles
  imports: [CommonModule, RouterModule],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // Lifecycle hook, useful for initialization logic after component is created
  }
}
