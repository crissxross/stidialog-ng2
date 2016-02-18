import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
// Don't need Response below if not using observables in this service
// import {Http, Response} from 'angular2/http';

@Injectable()
export class SceneDataService {

  // Using a PROMISE because SQLite (Ionic) returns a promise

  private _sceneUrl = '/mock-data/mock-dialog.json';
  // private _simpleUrl = '/mock-data/simple-dialog.json';

  constructor(private http: Http) { }

  getSceneDialog() {
    return this.http.get(this._sceneUrl)
      .toPromise()
      .then(res => res.json().dialogNodes, this.handleError)
      .then(data => {
        // console.log(data);
        return data;
      });
  }

  getSceneMeta() {
    return this.http.get(this._sceneUrl)
      .toPromise()
      .then(res => res.json().meta, this.handleError)
      .then(data => {
        // console.log(data);
        return data;
      });
  }

  // getSceneData() {
  //   return this.http.get(this._sceneUrl)
  //     .toPromise()
  //     .then(res => res.json().data, this.handleError)
  //     .then(data => { console.log(data); return data; });
  // }

  private handleError(error: any) {
    console.error(error);
    return Promise.reject(error.message || error.json().error || 'Server error');
  }

}
