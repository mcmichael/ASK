import { Component } from '@angular/core';
import { App } from '../objects/App.class';

@Component({
  selector: 'app-application',
  imports: [],
  templateUrl: './application.html',
  styleUrl: './application.css',
})
export class Application {

  public AppByDoor: App[] = [
    new App(1, 'Agenda', 1),
    new App(2, 'Tasks',1)
  ];

}
