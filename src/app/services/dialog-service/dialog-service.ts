import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
import 'rxjs/Rx'; // add all operators to Observable - temporary

import {SceneDataService} from '../scene-data-service/scene-data-service';


@Injectable()
export class DialogService {

  public dialogNodes;
  public sceneMeta;
  public actorNodes;
  public playerNodes;

  constructor(private sceneDataService: SceneDataService) { }

  getSceneDialog() {
    this.dialogNodes = this.sceneDataService.getSceneDialog();
    console.log("dialogNodes:", this.dialogNodes);
    return this.dialogNodes;
  }

  getSceneMeta() {
    let scMetaData = this.sceneDataService.getSceneMeta();
    console.log("scMetaData!!!", scMetaData);
    return this.sceneMeta = Observable.from(scMetaData);
  }

  getActorSimpleDialog() {
    let actorData = this.sceneDataService.getActorSimpleDialog();
    console.log("actorData:", actorData);
    return this.actorNodes = Observable.from(actorData);
  }

  getPlayerSimpleDialog() {
    let playerData = this.sceneDataService.getPlayerSimpleDialog();
    console.log("playerData:", playerData);
    return this.playerNodes = Observable.from(playerData);
  }

}

// -------- JUST FOR TESTING --------------------------------

// let speeches = [
//   "Speech 1. My first speech.",
//   "Speech 2. My second speech.",
//   "Speech 3. My third speech.",
//   "Speech 4. My fourth speech."
// ];

// let interval = Observable.interval(2000).take(4).map(x => (x - 1) + 1);

// interval.subscribe(i => console.log("INTERVAL", speeches[i]));


// ----------- NOTE (quote from Rangle's ng2 book):
// "... refCount. This is auto connect method, that will start broadcasting as soon as there are more than one subscriber."
// BUT the whole thing below does NOT work properly - unless I comment out - why??
// Is it because the default behaviour has changed in rx5?

// var clock = Observable.interval(1000)
//   .take(speeches.length - 1).map(x => x + 1).startWith(0);
  // .publish().refCount();

// console.log('a subscribed');
// clock.subscribe(i => console.log('a: ' + speeches[i]));

// setTimeout(function () {
//   console.log('b subscribed');
//   clock.subscribe(i => console.log('   b: ' + speeches[i]));
// }, 2500);
