import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { VisualizerComponent } from './views/visualizer/visualizer.component';

export const appRoutes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'visualizer', component: VisualizerComponent },
]