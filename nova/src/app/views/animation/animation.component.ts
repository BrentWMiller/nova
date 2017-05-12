import { Component, OnInit } from '@angular/core';

import { TimelineLite, Back } from 'gsap';

@Component({
	selector: 'n-animation',
	templateUrl: './animation.component.html',
	styleUrls: ['./animation.component.scss']
})

export class AnimationComponent implements OnInit {
	//Timelines
	tlMaster: TimelineLite = new TimelineLite({ paused: true });
	tlText: TimelineLite = new TimelineLite();

	animateMe: string = '.animate-me';

	toggled: boolean;

	constructor() { }

	ngOnInit() {
		this.tlText
			.fromTo(this.animateMe, .15, {
				ease: Back.easeIn
			},
			{
				className: '+=animate-me__on'
			});

		this.tlMaster.add(this.tlText);
	}

	animate(): void {
		this.toggled = !this.toggled;

		this.toggled ? this.tlMaster.play() : this.tlMaster.reverse();
	}
}