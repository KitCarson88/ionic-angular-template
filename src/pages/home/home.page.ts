import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { select } from '@redux-multipurpose/core';
import { WsDataOptions } from 'ionic-angular-utilities';

import { WsActions } from '../../store';
import { ExampleDTO } from '../../entities/dto/exampleDTO';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit
{
  @select(["ws", "example", "data"])
  exampleArray$: Observable<ExampleDTO>;

  @select(["ws", "example", "loading"])
  exampleLoading$: Observable<boolean>;

  @select(["ws", "example", "error"])
  exampleError$: Observable<any>;

  wsDataOptions: WsDataOptions;

  constructor(private wsActions: WsActions) {}

  ngOnInit()
  {
    this.wsActions.retrieveExampleData();

    this.wsDataOptions = {
      loading$: this.exampleLoading$,
      loadingSpinnerName: 'fadingSquare',
      loadingSpinnerWithContainer: true,
      error$: this.exampleError$,
      errorMessage: 'Si è verificato un errore nel recupero delle informazioni. Riprovare',
      errorRetryButtonFill: 'outline',
      errorRetryButtonLabel: 'Riprova'
    };
  }

  exampleRetry()
  {
    this.wsActions.retrieveExampleData();
  }
}
