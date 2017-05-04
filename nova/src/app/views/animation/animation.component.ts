import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'n-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss']
})
export class AnimationComponent implements OnInit {

  text: string;

  constructor() { }

  ngOnInit() {
    this.text = 'Animations Rock!';
  }

}
