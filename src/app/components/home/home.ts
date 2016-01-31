import {Component, OnInit} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {RouterLink} from 'angular2/router';

import {Api} from 'app/services/api/api';

@Component({
    selector: 'home',
    directives: [...FORM_DIRECTIVES, RouterLink],
    pipes: [],
    styles: [require('./home.scss')],
    template: require('./home.html')
})
export class Home implements OnInit {

    constructor(public api: Api) {
        // Do stuff
    }

    ngOnInit() {
        console.log('Hello Home');
    }

}
