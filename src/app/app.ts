import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/common';

import '../style/app.scss';

import {Api} from './services/api/api';
import {SceneDataService} from './services/scene-data-service/scene-data-service';
import {Home} from './components/home/home';
import {Scene} from './components/scene/scene';
import {SceneCmp} from './components/scene.cmp/scene.cmp';
import {Experiments} from './components/experiments/experiments';
/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'app', // <app></app>
    providers: [...FORM_PROVIDERS, Api, SceneDataService],
    directives: [...ROUTER_DIRECTIVES],
    pipes: [],
    styles: [require('./app.scss')],
    template: require('./app.html')
})
@RouteConfig([
    {path: '/', component: Home, name: 'Home'},
    {path: '/Scene', component: Scene, name: 'Scene'},
    { path: '/SceneCmp', component: SceneCmp, name: 'SceneCmp' },
    {path: '/Experiments', component: Experiments, name: 'Experiments'}
])
export class App {
    url: string = 'http://www.crissxross.net/';

    constructor(public api: Api) {
    }
}
