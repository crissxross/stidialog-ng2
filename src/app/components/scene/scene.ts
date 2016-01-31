import {Component, OnInit} from 'angular2/core';

import {Actor} from 'app/components/actor/actor';
import {Player} from 'app/components/player/player';

@Component({
  selector: 'scene',
  template: require('./scene.html'),
  styles: [require('./scene.css')],
  providers: [],
  directives: [Actor, Player],
  pipes: []
})
export class Scene implements OnInit {

  constructor() {
    // do stuff
  }

  ngOnInit() {
    console.log('Hello scene');
  }

}
