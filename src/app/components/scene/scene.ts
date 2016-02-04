import {Component, OnInit} from 'angular2/core';

import {Actor} from 'app/components/actor/actor';
import {Player} from 'app/components/player/player';
import {DialogService} from 'app/services/dialog-service/dialog-service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'scene',
  template: require('./scene.html'),
  styles: [require('./scene.css')],
  providers: [DialogService],
  directives: [Actor, Player],
  pipes: []
})
export class Scene implements OnInit {

  public dialogNodes: any[] = [];
  public meta: any[] = [];
  // public actorDialogNodes: string[] = [];

  constructor(private _dialogService: DialogService) {
    // do stuff
  }

  ngOnInit() {
    console.log('Hello scene');
    this.getMetaDialog();
    this.getDialog();
    // this.getActorDialog();
  }

  getDialog() {
    this._dialogService.getDialog()
      .subscribe((dialogNodes: any[]) => this.dialogNodes = dialogNodes);
  }

  getMetaDialog() {
    this._dialogService.getMetaDialog()
      .subscribe((meta: any[]) => this.meta = meta);
  }

// UNFINISHED - ABANDONED
  // getActorDialog() {
  //   this._dialogService.getSceneDialog()
  //     .map((dialogNodes: Array<any>) => dialogNodes.map(actor => actor.says))
  //     .subscribe((meta: any[]) => this.meta = meta);
  // }

// NOT WORKING
  // getActorDialog() {
  //   this._dialogService.getDialog()
  //     .map(dialogNodes.actor => actorDialogNodes)
  //     .subscribe(data => this.actorDialogNodes = data);
  // }
}
