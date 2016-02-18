import {Component, OnInit} from 'angular2/core';

import {DialogService} from 'app/services/dialog-service/dialog-service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'scene',
  template: require('./scene.html'),
  styles: [require('./scene.css')],
  providers: [DialogService],
  directives: [],
  pipes: []
})
export class Scene implements OnInit {

  public dialogNodes: any[] = [];
  public meta: any[] = [];

  // constructor(private _dialogService: DialogService) { }
  constructor() {
      // do stuff maybe
    }

  ngOnInit() {
    console.log('Hello scene');
    // this.getMetaDialog();
    // this.getDialog();
  }

  // getDialog() {
  //   this._dialogService.getDialog()
  //     .subscribe((dialogNodes: any[]) => this.dialogNodes = dialogNodes);
  // }

  // getMetaDialog() {
  //   this._dialogService.getMetaDialog()
  //     .subscribe((meta: any[]) => this.meta = meta);
  // }
}
