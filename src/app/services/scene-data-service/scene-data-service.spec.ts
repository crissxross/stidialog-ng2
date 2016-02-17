import {
  it,
  iit,
  describe,
  ddescribe,
  expect,
  inject,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders
} from 'angular2/testing';
import {provide} from 'angular2/core';
import {SceneDataService} from './scene-data-service';


describe('SceneDataService Service', () => {

  beforeEachProviders(() => [SceneDataService]);


  it('should ...', inject([SceneDataService], (service:SceneDataService) => {

  }));

});
