import {Component, OnInit} from 'angular2/core';


@Component({
  selector: 'scene',
  template: require('app/components/scene/scene.html'),
  styles: [require('app/components/scene/scene.css')],
  providers: [],
  directives: [],
  pipes: []
})
export class Scene implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('Hello scene');
  }

}
