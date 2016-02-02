import {Component, OnInit} from 'angular2/core';

import {Actor} from 'app/components/actor/actor';
import {Player} from 'app/components/player/player';
import {DialogService} from 'app/services/dialog-service/dialog-service';

@Component({
  selector: 'scene',
  template: require('./scene.html'),
  styles: [require('./scene.css')],
  providers: [DialogService],
  directives: [Actor, Player],
  pipes: []
})
export class Scene implements OnInit {

  dialogNodes: string[] = [];
  meta: any[] = [];

  constructor(private _dialogService: DialogService) {
    // do stuff
  }

  ngOnInit() {
    console.log('Hello scene');
    this.getMetaDialog();
    this.getDialog();
  }

  getDialog() {
    this._dialogService.getDialog()
      .subscribe((dialogNodes: string[]) => this.dialogNodes = dialogNodes);
  }

  getMetaDialog() {
    this._dialogService.getMetaDialog()
      .subscribe((meta: any[]) => this.meta = meta);
  }
}
