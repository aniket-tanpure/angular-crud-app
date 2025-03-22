import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
