import {Component, Input} from 'angular2/core';


@Component({
  selector: 'player-cmp',
  template: require('./player.cmp.html'),
  styles: [require('./player.cmp.css')],
  providers: [],
  directives: [],
  pipes: []
})
export class PlayerCmp {
  // @Input() pSpeech: string;
  @Input() pNode;
  @Input() pThought: string;

  constructor() {
    // do stuff
  }

}
