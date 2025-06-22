import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-root', // The custom HTML tag used to embed this component
  templateUrl: './app.component.html', // Path to the component's HTML template
  styleUrls: ['./app.component.scss'], // Path to the component's SCSS styles
})
export class AppComponent {
  title = 'dee-beauty-bar-angular'; // A property for the component, accessible in the template
}
