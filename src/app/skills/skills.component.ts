import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngFor

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule], // Import CommonModule for directives like *ngFor
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'] // Correct plural `styleUrls`
})
export class SkillsComponent {

  // Define the array of cards with image paths, titles, and categories
  cardsData = [
    { imgSrc: '../../assets/images/html.png', title: 'The Catalyzer', category: 'CATEGORY' },
    { imgSrc: '../../assets/images/css.png', title: 'Shooting Stars', category: 'CATEGORY' },
    { imgSrc: '../../assets/images/js.png', title: 'Neptune', category: 'CATEGORY' },
    { imgSrc: '../../assets/images/ts.png', title: '', category: 'CATEGORY' },
    { imgSrc: '../../assets/images/angular.png', title: '', category: 'CATEGORY' },
    { imgSrc: '../../assets/images/react.png', title: '', category: 'CATEGORY' },
    { imgSrc: '../../assets/images/cli.png', title: '', category: 'CATEGORY' },
    { imgSrc: '../../assets/images/ngmat.png', title: '', category: 'CATEGORY' }
  ];

}
