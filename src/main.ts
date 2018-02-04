import 'core-js';
import 'reflect-metadata';
import 'zone.js';
import './styles.scss';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
