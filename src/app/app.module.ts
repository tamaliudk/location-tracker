import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyArDRzACfxD7Y_jqHQz6yEsmM7f-7-xFys',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
