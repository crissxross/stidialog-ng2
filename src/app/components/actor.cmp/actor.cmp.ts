import {Component, Input} from 'angular2/core';


@Component({
  selector: 'actor-cmp',
  template: require('./actor.cmp.html'),
  styles: [require('./actor.cmp.css')],
  providers: [],
  directives: [],
  pipes: []
})
export class ActorCmp {
  @Input() aNode: string[];

  constructor() {
    // do stuff
  }

}
