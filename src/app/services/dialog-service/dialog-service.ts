import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class DialogService {

  private _dialogUrl = '/mock-data/mock-dialog.json';
  private _simpleUrl = '/mock-data/simple-dialog.json';

  constructor(private http: Http) { }

  getActorSimpleDialog() {
    return this.http
      .get(this._simpleUrl)
      .map((res: Response) => res.json().actor)
      .do(actor => console.log(actor)) // see results in console
      .catch(this.handleError);
  }

  getPlayerSimpleDialog() {
    return this.http
      .get(this._simpleUrl)
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

// JUST FOR TESTING --------------------------------
// var counter = Observable.interval(1000).take(4);

//   var subscription1 = counter.subscribe(function(i) {
//     console.log('Subscription 1:', i);
// });

Observable.fromArray([1, 2, 3, 4, 5])
.map(x => x * 2)
.filter(x => x > 5)
  .subscribe(x => console.log(`christine's observable test log`, x)); // 6, 8, 10
// -------------------------------------------------
