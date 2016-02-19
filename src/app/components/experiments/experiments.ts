import {Component, OnInit} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
import 'rxjs/Rx'; // add all operators to Observable - temporary


@Component({
  selector: 'experiments',
  template: require('./experiments.html'),
  styles: [require('./experiments.css')],
  providers: [],
  directives: [],
  pipes: []
})
export class Experiments implements OnInit {

  private speeches = [
    "Speech 1. My first speech.",
    "Speech 2. My second speech.",
    "Speech 3. My third speech.",
    "Speech 4. My fourth speech."
  ];

  constructor() { }

  ngOnInit() {
    console.log('Experiments here!');
    this.startInterval(this.speeches);
    this.startClockSpeeches(this.speeches);
  }

  startInterval(speeches) {
    let interval = Observable.interval(2000).take(4).map(x => (x - 1) + 1);

    interval.subscribe(i => console.log("INTERVAL", speeches[i]));
  }

  startClockSpeeches(speeches) {
    // ----------- NOTE (quote from Rangle's ng2 book):
    // "... refCount. This is auto connect method, that will start broadcasting as soon as there are more than one subscriber."
    // BUT the whole thing below does NOT work properly - unless I comment out - why??
    // Is it because the default behaviour has changed in rx5?
    var clock = Observable.interval(1000)
      .take(speeches.length - 1).map(x => x + 1).startWith(0);
    // .publish().refCount();

    console.log('a subscribed');
    clock.subscribe(i => console.log('a: ' + speeches[i]));

    setTimeout(function() {
      console.log('b subscribed');
      clock.subscribe(i => console.log('   b: ' + speeches[i]));
    }, 2500);

  }

}