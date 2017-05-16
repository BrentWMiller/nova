import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { appRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { ColorBlockComponent } from './components/color-block/color-block.component';
import { HomeComponent } from './views/home/home.component';
import { ColorPickerComponent } from './views/color-picker/color-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorBlockComponent,
    HomeComponent,
    ColorPickerComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),

    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
