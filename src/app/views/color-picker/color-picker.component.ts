import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TimelineLite, Back } from 'gsap';

export interface IColors {
	name: string;
	filament: string;
	class: string;
	price: number;
};

@Component({
	selector: 'n-color-picker',
	templateUrl: './color-picker.component.html',
	styleUrls: ['./color-picker.component.scss']
})

export class ColorPickerComponent implements OnInit {
	@ViewChild('mainColorInput') mainColorInput;
	@ViewChild('accentColorInput') accentColorInput;

	colorForm: FormGroup;
	colorFormValue: string;
	colorMain: string;
	colorAccent: string;
	colors: IColors[];

	constructor(private fb: FormBuilder) {
		this.colors = [
			{ name: 'Rose Red', filament: 'RR-105-ABS', class: 'color__roseRed', price: 5 },
			{ name: 'Deep Purple', filament: 'DP-109-ABS', class: 'color__deepPurple', price: 4 },
			{ name: 'Aqua Green', filament: 'AG-023-ABS', class: 'color__aquaGreen', price: 7 },
			{ name: 'Gold', filament: 'G-01-PLA', class: 'color__gold', price: 7 },
			{ name: 'Wine', filament: 'W-013-PLA', class: 'color__wine', price: 3 },
		];
	}

	ngOnInit() {
		this.colorForm = this.fb.group({
			colorMain: ['', Validators.required],
			colorAccent: ['', Validators.required]
		});
	}

	focusMainColorInput(): void {
		this.mainColorInput.nativeElement.focus();
	}

	focusAccentColorInput(): void {
		this.accentColorInput.nativeElement.focus();
	}
}