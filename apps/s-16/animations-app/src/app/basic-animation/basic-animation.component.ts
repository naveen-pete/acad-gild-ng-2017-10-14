import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-basic-animation',
  templateUrl: './basic-animation.component.html',
  styleUrls: ['./basic-animation.component.css'],
  animations: [
    trigger('basicAnimation', [
      state(
        'normal',
        style({
          'font-size': '30px',
          color: 'blue'
        })
      ),
      state(
        'large',
        style({
          'font-size': '60px',
          color: 'green'
        })
      ),
      transition('normal => large', animate('1s')),
      transition('large => normal', animate(300))
      // transition('normal <=> large', animate(500))
    ])
  ]
})
export class BasicAnimationComponent implements OnInit {
  currentState: string = 'normal';
  constructor() {}

  ngOnInit() {}

  onToggleState() {
    this.currentState = this.currentState === 'normal' ? 'large' : 'normal';
  }
}
