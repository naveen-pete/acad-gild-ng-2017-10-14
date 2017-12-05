import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-animation-callbacks',
  templateUrl: './animation-callbacks.component.html',
  styleUrls: ['./animation-callbacks.component.css'],
  animations: [
    trigger('textAnimation', [
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
    ])
  ]
})
export class AnimationCallbacksComponent implements OnInit {
  currentState: string = 'normal';
  constructor() {}

  ngOnInit() {}

  onToggleState() {
    this.currentState = this.currentState === 'normal' ? 'large' : 'normal';
  }

  animationStarted(event) {
    console.log('Animation started:', event);
  }

  animationDone(event) {
    console.log('Animation done:', event);
  }
}
