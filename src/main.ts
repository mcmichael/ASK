import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { Item } from './app/item/item';
import { Home } from './home/home';

bootstrapApplication(Home, appConfig)
  .catch((err) => console.error(err));
