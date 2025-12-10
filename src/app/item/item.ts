import { Component } from '@angular/core';
import {Task} from '../task/task'

@Component({
  selector: 'app-item',
  imports: [Task],
  templateUrl: './item.html',
  styleUrl: './item.css',
})
export class Item {

}
