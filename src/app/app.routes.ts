import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ColorPickerComponent } from './views/color-picker/color-picker.component';

export const appRoutes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'colorpicker', component: ColorPickerComponent },
]