import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  imports: [CommonModule, RouterModule],
})
export class ContactComponent implements OnInit {
  // Social media links configuration
  socialLinks = [
    {
      platform: 'Instagram',
      handle: '@deebeautybar',
      url: 'https://www.instagram.com/deebeautybar/',
      icon: 'fab fa-instagram',
      class: 'instagram',
    },
    {
      platform: 'Facebook',
      handle: 'Dee Beauty Bar',
      url: 'https://www.facebook.com/deebeautybar/',
      icon: 'fab fa-facebook-f',
      class: 'facebook',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    // Component initialization
  }

  /**
   * Opens social media links in a new tab
   */
  openSocialLink(url: string): void {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
