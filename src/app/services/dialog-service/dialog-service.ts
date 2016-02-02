import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class DialogService {

  constructor(private http: Http) { }

  private _dialogUrl = '/mock-data/mock-dialog.json';

  getDialog() {
    return this.http.get(this._dialogUrl)
      .map((res: Response) => res.json().dialogNodes)
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
