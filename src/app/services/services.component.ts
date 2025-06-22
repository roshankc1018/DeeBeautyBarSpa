import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services', // Custom HTML tag for this component
  templateUrl: './services.component.html', // Path to the component's HTML template
  styleUrls: ['./services.component.scss'], // Path to the component's SCSS styles
  imports: [CommonModule],
})
export class ServicesComponent implements OnInit {
  // Array of service objects to be displayed in the template
  services = [
    {
      iconClass: 'fas fa-bath',
      title: 'Luxury Facials',
      description:
        'Deep cleansing, hydration, and revitalization for all skin types.',
    },
    {
      iconClass: 'fas fa-handshake-angle',
      title: 'Relaxing Massages',
      description:
        'Swedish, deep tissue, and hot stone massages to melt away stress.',
    },
    {
      iconClass: 'fas fa-sparkles',
      title: 'Manicure & Pedicure',
      description: 'Pampering nail care, including gel and acrylic options.',
    },
    {
      iconClass: 'fas fa-bath',
      title: 'Body Treatments',
      description: 'Exfoliation, wraps, and scrubs for silky smooth skin.',
    },
    {
      iconClass: 'fas fa-sparkles',
      title: 'Waxing Services',
      description: 'Gentle and efficient hair removal for all areas.',
    },
    {
      iconClass: 'fas fa-handshake-angle',
      title: 'Makeup Application',
      description:
        'Professional makeup for special occasions or everyday glam.',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    // Lifecycle hook for initialization logic
  }
}
