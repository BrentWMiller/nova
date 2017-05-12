import { Component, OnInit, ViewChild } from '@angular/core';

import { TimelineLite, Back } from 'gsap';

@Component({
	selector: 'n-animation',
	templateUrl: './animation.component.html',
	styleUrls: ['./animation.component.scss']
})

export class AnimationComponent implements OnInit {
	@ViewChild('text') text;

	//Timelines
	tlMaster: TimelineLite = new TimelineLite({ paused: true });
	tlText: TimelineLite = new TimelineLite();

	toggled: boolean;

	constructor() { }

	ngOnInit() {
		this.tlText
			.fromTo(this.text.nativeElement.style, .15, {
				backgroundColor: '#fff',
				color: '#000',
				ease: Back.easeIn
			},
			{
				backgroundColor: '#0e0e0e',
				color: '#fff'
			});

		this.tlMaster.add(this.tlText);
	}

	animate(): void {
		this.toggled = !this.toggled;

		this.toggled ? this.tlMaster.play() : this.tlMaster.reverse();
	}
}