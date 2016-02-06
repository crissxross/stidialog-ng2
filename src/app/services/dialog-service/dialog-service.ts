import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class DialogService {

  constructor(private http: Http) { }

  private _dialogUrl = '/mock-data/mock-dialog.json';

  private _simpleUrl = '/mock-data/simple-dialog.json';


  getActorSimpleDialog() {
    return this.http.get(this._simpleUrl)
      .map((res: Response) => res.json().actor)
      .catch(this.handleError);
  }

  getPlayerSimpleDialog() {
    return this.http.get(this._simpleUrl)
      .map((res: Response) => res.json().player)
      .catch(this.handleError);
  }

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
