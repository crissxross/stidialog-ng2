import {Component, OnInit} from 'angular2/core';

import {ActorCmp} from 'app/components/actor.cmp/actor.cmp';
import {PlayerCmp} from 'app/components/player.cmp/player.cmp';
import {DialogService} from 'app/services/dialog-service/dialog-service';


@Component({
  selector: 'scene-cmp',
  template: require('./scene.cmp.html'),
  styles: [require('./scene.cmp.css')],
  providers: [DialogService],
  directives: [ActorCmp, PlayerCmp],
  pipes: []
})
export class SceneCmp implements OnInit {

  public speechNodes: any[];

  constructor(private _dialogService: DialogService) {
    // do stuff
  }

  ngOnInit() {
    console.log('Hello SceneCmp');
    // this._dialogService.loadSpeeches();
    this.speechNodes = speeches;
  }

}

let speeches = [
      { "actor": "I am the actor. This is my first speechNode." },
      { "player": "I am the player and this is my first speechNode." },
      { "actor": "This is my second speechNode as the actor." },
      { "player": "This is my second speechNode as the player." }
];
