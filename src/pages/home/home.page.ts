import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { select } from '@redux-multipurpose/core';

import { WsDataOptions, WsDataListOptions } from 'ionic-angular-utilities';

import { testDataArray, WsActions } from '../../store';

import { ExampleDTO } from '../../entities/dto/exampleDTO';
import { TestDataDTO } from '../../entities/dto/testDataDTO';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, AfterViewInit
{
  @select(["ws", "example", "data"])
  exampleArray$: Observable<ExampleDTO>;

  @select(["ws", "example", "loading"])
  exampleLoading$: Observable<boolean>;

  @select(["ws", "example", "error"])
  exampleError$: Observable<any>;


  @select(testDataArray)
  testData$: Observable<TestDataDTO[]>;

  @select(["ws", "testData", "data", "available"])
  testDataAvailable$: Observable<null | boolean>;

  @select(["ws", "testData", "loading"])
  testDataLoading$: Observable<boolean>;

  @select(["ws", "testData", "error"])
  testDataError$: Observable<any>;


  @ViewChild('itemTemplate')
  dataItemTemplate: ElementRef;


  wsDataOptions: WsDataOptions;

  wsDataListOptions: WsDataListOptions;

  constructor(private wsActions: WsActions) {}

  ngOnInit()
  {
    //this.wsActions.retrieveExampleData();
    //this.wsActions.getTestData();

    this.wsDataOptions = {
      loading$: this.exampleLoading$,
      loadingSpinnerName: 'fadingSquare',
      loadingSpinnerWithContainer: true,
      error$: this.exampleError$,
      errorMessage: 'An error occured during example data retrieve. Please retry',
      errorRetryButtonFill: 'outline',
      errorRetryButtonLabel: 'Retry'
    };

    this.wsDataListOptions = {
      loading$: this.testDataLoading$,
      loadingSpinnerName: 'scalingDot',
      loadingSpinnerWithContainer: true,
      error$: this.testDataError$,
      errorMessage: 'An error occured during test data retrieve. Please retry',
      errorRetryButtonFill: 'solid',
      errorRetryButtonColor: 'secondary',
      errorRetryButtonShape: 'round',
      errorRetryButtonLabel: 'Retry',
      data$: this.testData$,
      dataItemTemplate: null,
      dataAvailableCondition: this.testDataAvailable$,
      emptyListMessage: 'The are no tests'
    };
  }

  ngAfterViewInit()
  {
    //Please note that list item template can be passed to component only after view init
    this.wsDataListOptions.dataItemTemplate = this.dataItemTemplate;
  }

  retrieveExamples()
  {
    this.wsActions.retrieveExampleData();
  }

  retrieveTests()
  {
    this.wsActions.getTestData();
  }
}
