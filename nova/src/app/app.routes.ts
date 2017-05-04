import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { AnimationComponent } from './views/animation/animation.component';

export const appRoutes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'animation', component: AnimationComponent },
]