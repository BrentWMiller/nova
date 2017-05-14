import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'n-color-block',
  templateUrl: './color-block.component.html',
  styleUrls: ['./color-block.component.scss']
})
export class ColorBlockComponent implements OnInit {

  @Input() type: string;

  constructor() { }

  ngOnInit() {
  }

}
