import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class DialogService {

  constructor(private http: Http) { }

    private _dialogUrl = '/mock-data/mock-dialog.json';

  // HERE is TEMPORARY - hard coding data for now...
  // loadSpeeches() {
  //   let speechNodes = [
  //     { "actor": "I am the actor. This is my first speechNode." },
  //     { "player": "I am the player and this is my first speechNode." },
  //     { "actor": "This is my second speechNode as the actor." },
  //     { "player": "This is my second speechNode as the player." }
  //   ];
  // }


// ----------------------------------------------------------------
  // BELOW IS FOR HTTP getting dialog json ------------------------


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

  // getActorDialog() {
  //   return this.http.get(this._dialogUrl)
  //     .map((res: Response) => res.json().dialogNodes.actor)
  //     .catch(this.handleError);
  // }

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
