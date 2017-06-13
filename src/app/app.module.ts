import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { APP_COMPONENTS } from './app.components';
import { APP_ROUTES } from './app.routes';
import { AppComponent } from './components/app/app.component';

@NgModule({
  declarations: [
    ...APP_COMPONENTS
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
