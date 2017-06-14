import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { APP_ACTIONS } from './app.actions';
import { APP_COMPONENTS } from './app.components';
import { APP_ROUTES } from './app.routes';
import { APP_SERVICES } from './app.services';
import { AppComponent } from './components/app/app.component';

@NgModule({
  declarations: [
    ...APP_COMPONENTS
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [
    ...APP_ACTIONS,
    ...APP_SERVICES
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
