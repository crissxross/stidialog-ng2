import {Component, OnInit} from 'angular2/core';

import {Actor} from 'app/components/actor/actor';
import {Player} from 'app/components/player/player';

@Component({
  selector: 'scene',
  template: require('app/components/scene/scene.html'),
  styles: [require('app/components/scene/scene.css')],
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
