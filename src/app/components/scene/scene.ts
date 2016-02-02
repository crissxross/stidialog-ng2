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

  dialogNodes: any[] = [];

  constructor(private _dialogService: DialogService) {
    // do stuff
  }

  ngOnInit() {
    console.log('Hello scene');
    this.getDialog();
  }

  getDialog() {
    this._dialogService.getDialog()
      .subscribe((dialogNodes: any[]) => this.dialogNodes = dialogNodes);
  }

}
