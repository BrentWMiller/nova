import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TimelineLite, Back } from 'gsap';

export interface IColors {
	name: string;
	value: string;
	class: string;
};

@Component({
	selector: 'n-color-picker',
	templateUrl: './color-picker.component.html',
	styleUrls: ['./color-picker.component.scss']
})

export class ColorPickerComponent implements OnInit {

	colorForm: FormGroup;
	colorFormValue: string;
	colorOption1: string;
	colorOption2: string;
	colors: IColors[];

	constructor(private fb: FormBuilder) {
		this.colors = [
			{ name: 'Rose Red', value: 'RR-105-ABS', class: 'color__roseRed' },
			{ name: 'Deep Purple', value: 'DP-109-ABS', class: 'color__deepPurple' },
			{ name: 'Aqua Green', value: 'AG-023-ABS', class: 'color__aquaGreen' }
		]
	}

	ngOnInit() {
		this.colorForm = this.fb.group({
			colorOption1: ['', Validators.required],
			colorOption2: ['', Validators.required]
		});
	}

	updateVisualizer() {
		console.log(this.colorForm.value, this.colorForm.valid);
	}

	resetVisualizer() {
		console.log('Form reset');
	}
}