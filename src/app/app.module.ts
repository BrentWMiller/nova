import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { appRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { ColorBlockComponent } from './components/color-block/color-block.component';
import { HomeComponent } from './views/home/home.component';
import { AnimationComponent } from './views/animation/animation.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorBlockComponent,
    HomeComponent,
    AnimationComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),

    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
