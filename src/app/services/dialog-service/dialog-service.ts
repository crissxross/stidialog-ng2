import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
import 'rxjs/Rx'; // add all operators to Observable - temporary


@Injectable()
export class DialogService {

  private _dialogUrl = '/mock-data/mock-dialog.json';
  private _simpleUrl = '/mock-data/simple-dialog.json';
  // private actorSpeeches: string[];

  constructor(private http: Http) { }

  getActorSimpleDialog() {
    return this.http.get(this._simpleUrl)
      .map((res: Response) => res.json().actor[0]) // TESTING
      .do(actor => console.log(actor)) // see results in console
      .catch(this.handleError);
  }

  getPlayerSimpleDialog() {
    return this.http.get(this._simpleUrl)
      .map((res: Response) => res.json().player)
      .do(player => console.log(player)) // see results in console
      .catch(this.handleError);
  }

  // getSimpleDialog() {
  //   return this.http.get(this._simpleUrl)
  //     .map((res: Response) => res.json())
  //     .do(data => console.log(data)) // see results in console
  //     .subscribe(data => this.dialogNodes = data);
  // }

  // ----------------------------------------------------------------
  // BELOW is for HTTP getting mock-dialog.json ------------------------


  getDialog() {
    return this.http.get(this._dialogUrl)
      .map((res: Response) => res.json().dialogNodes)
      .catch(this.handleError);
  }

  getMetaDialog() {
    return this.http.get(this._dialogUrl)
      .map((res: Response) => res.json().meta)
      .catch(this.handleError);
  }


  getSceneDialog() {
    return this.http.get(this._dialogUrl)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}

// -------- JUST FOR TESTING --------------------------------

let speeches = [
  "Speech 1. My first speech.",
  "Speech 2. My second speech.",
  "Speech 3. My third speech.",
  "Speech 4. My fourth speech."
];

// let interval = Observable.interval(2000).take(4).map(x => (x - 1) + 1);

// interval.subscribe(i => console.log(speeches[i]));


// ----------- NOTE (quote from Rangle's ng2 book):
// "... refCount. This is auto connect method, that will start broadcasting as soon as there are more than one subscriber."
// BUT the whole thing below does NOT work properly - unless I comment out - why??
// Is it because the default behaviour has changed in rx5?
var clock = Observable.interval(1000)
  .take(speeches.length - 1).map(x => x + 1).startWith(0);
  // .publish().refCount();

console.log('a subscribed');
clock.subscribe(i => console.log('a: ' + speeches[i]));

setTimeout(function () {
  console.log('b subscribed');
  clock.subscribe(i => console.log('   b: ' + speeches[i]));
}, 2500);



// --------- Interesting but NOT what I was after (uses SCAN)
// let i = 0;

// Observable.interval(1000).take(6)
//   .scan(function(speechArray) {
//     let speech = speeches[i];
//     i++;
//     speechArray.push(speech);
//     return speechArray;
//   }, [])
//   .subscribe(function(speechArray) {
//     console.log(speechArray);
//   })


// ---------- forEach LOOP
// speeches.forEach(speech => {
//   console.log('forEach:', speech);
// });

// ------------ NOT what I was hoping for!!!
// Observable.fromArray(speeches)
//   .mergeMap(speeches => {
//     return Observable.interval(1000)
//       .map(() => speeches);
//   }).take(6)
//   .subscribe(speeches => console.log('Obs', speeches));

// -------------- DOES NOT WORK!!
// let speechStream = Observable.fromArray(speeches)
//   .toArray()
//   .mergeMap(speeches => {
//     return Observable.interval(1000)
//       .map(() => speeches.forEach(speech => speech))
//   }).take(4)
//   .subscribe(speechStream => console.log('SPEECHSTREAM', speechStream));

// --------------- BASIC INTERVAL COUNTER
// var counter = Observable.interval(1000).take(6);
// counter.subscribe(function(i) {
//     console.log('Counter subscription:', i);
// });

// ---------- BASIC OBS FROM ARRAY
// Observable.fromArray([1, 2, 3, 4, 5])
// .map(x => x * 2)
// .filter(x => x > 5)
//   .subscribe(x => console.log(`christine's obs test log`, x)); // 6, 8, 10
// -------------------------------------------------
