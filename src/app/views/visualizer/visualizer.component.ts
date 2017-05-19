import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TimelineLite, Back } from 'gsap';

export interface IColors {
	id: string;
	name: string;
	filament: string;
	class: string;
	price: number;
};

@Component({
	selector: 'n-visualizer',
	templateUrl: './visualizer.component.html',
	styleUrls: ['./visualizer.component.scss']
})

export class VisualizerComponent implements OnInit {
	colorSelectionForm: FormGroup;

	colorFormValue: string;
	colorMain: string;
	colorAccent: string;
	colors: IColors[];

	showMainColorSelection: boolean;
	showAccentColorSelection: boolean = false;

	constructor(private fb: FormBuilder) {
		this.colors = [
			{ id: '001', name: 'Rose Red', filament: 'RR-105-ABS', class: 'color__roseRed', price: 5 },
			{ id: '002', name: 'Deep Purple', filament: 'DP-109-ABS', class: 'color__deepPurple', price: 4 },
			{ id: '003', name: 'Aqua Green', filament: 'AG-023-ABS', class: 'color__aquaGreen', price: 7 },
			{ id: '004', name: 'Gold', filament: 'G-01-PLA', class: 'color__gold', price: 7 },
			{ id: '005', name: 'Wine', filament: 'W-013-PLA', class: 'color__wine', price: 3 }
		];
	}

	ngOnInit() {

		this.colorSelectionForm = this.fb.group({
			mainColor: ['', Validators.required],
			accentColor: ['', Validators.required]
		});

		this.toggleMainColorInput();
	}

	toggleMainColorInput(): void {
	}

	toggleAccentColorInput(): void {
		this.showAccentColorSelection = !this.showAccentColorSelection;
	}

	selectedColor(): void {
		console.log(this.colorSelectionForm.value);
	}
}