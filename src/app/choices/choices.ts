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
    new Door(3, 'Entertainment'),
    new Door(4, 'Health'),
    new Door(5, 'Finances'),
    new Door(6, 'Businness'),
    new Door(7, 'Projects'),
    new Door(8, 'Relationship'),
    new Door(9, 'Studies'),
    new Door(10, 'X'),
    new Door(11, 'Y'),
    new Door(12, 'Z'),
  ];

  DoorCounter(): void {
    this.count++;
  }
}

