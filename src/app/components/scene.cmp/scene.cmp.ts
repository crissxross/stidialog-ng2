import {Component, OnInit} from 'angular2/core';
import {Observable} from 'rxjs/Observable';

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

  public actorNodes: Observable<string[]>;
  public playerNodes: Observable<string[]>;

  public playerThought: string;

  // public dialogNodes: string[];

  constructor(private _dialogService: DialogService) {
    // do stuff
  }

  ngOnInit() {
    console.log('Hello SceneCmp');
    this.getActorSimpleDialog();
    this.getPlayerSimpleDialog();
    //  TEMPORARY for testing:
    this.playerThought = "I am thinking. This is my private player thought.";

    // this._dialogService.getIntervalActorDialog();
  }
// NOTE: the async pipe does the subscribe

  getActorSimpleDialog() {
    this.actorNodes = this._dialogService.getActorSimpleDialog();
  }

  getPlayerSimpleDialog() {
    this.playerNodes = this._dialogService.getPlayerSimpleDialog();
  }

}
