import { Component} from '@angular/core';
import { Door } from '../objects/Door.class' ;

@Component({
  selector: 'app-choices',
  imports: [],
  templateUrl: './choices.html',
  styleUrl: './choices.css',
})
export class Choices {
  count = 0;

  public DoorChoices: Door[] = [
    new Door(1, 'Work'),
    new Door(2, 'Sport'),
    new Door(3, 'Love')
  ];

  lineCounter(): void {
    this.count++;
  }
}
