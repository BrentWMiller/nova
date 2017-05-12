import { Component, OnInit, ViewChild } from '@angular/core';

import { TimelineLite, Back } from 'gsap';

@Component({
	selector: 'n-animation',
	templateUrl: './animation.component.html',
	styleUrls: ['./animation.component.scss']
})

export class AnimationComponent implements OnInit {
	@ViewChild('text') text;

  text: string;

  constructor() { }

  ngOnInit() {
    this.text = 'Animations Rock!';
  }

}
