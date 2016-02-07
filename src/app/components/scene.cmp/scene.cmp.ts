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

  // public hardcodedNodes: any[];

  // public actorSpeech: string;
  // public playerSpeech: string;

  public actorNodes: string[];
  public playerNodes: string[];

  public playerThought: string;

  constructor(private _dialogService: DialogService) {
    // do stuff
  }

  ngOnInit() {
    console.log('Hello SceneCmp');
    this.getActorSimpleDialog();
    this.getPlayerSimpleDialog();
    //  TEMPORARY for testing:
    this.playerThought = "I am thinking. This is my private player thought.";
    // this.hardcodedNodes = speeches;

    // this.actorSpeech = "I am the actor and this speech is from SceneCmp.";
    // this.playerSpeech = "I am the player and this speech is from SceneCmp.";
  }

  getActorSimpleDialog() {
    this._dialogService.getActorSimpleDialog()
      .subscribe((actor) => this.actorNodes = actor);
  }

  getPlayerSimpleDialog() {
    this._dialogService.getPlayerSimpleDialog()
      .subscribe((player) => this.playerNodes = player);
  }

}

// let speeches = [
//       { "actor": "I am the actor. This is my first hardcodedNode." },
//       { "player": "I am the player and this is my first hardcodedNode." },
//       { "actor": "This is my second hardcodedNode as the actor." },
//       { "player": "This is my second hardcodedNode as the player." }
// ];
