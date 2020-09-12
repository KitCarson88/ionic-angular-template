import { NgModule, Optional, SkipSelf } from "@angular/core";

import { initializeStore } from '@redux-multipurpose/core';

import
{
  WsActions
} from './index';

import rootReducer from './store.reducer';

const ACTIONS = [
  WsActions
];

const RESOLVERS = [
];

@NgModule({
  imports: [],
  providers: [...ACTIONS, ...RESOLVERS]
})
export class StoreModule
{
  constructor(
    @Optional() @SkipSelf() parentModule: StoreModule
  )
  {
    if (parentModule)
      throw new Error("StoreModule is already loaded. Import it in the AppModule only");

    const middlewares = [  ];

    initializeStore({
      reducers: rootReducer(),
      devTools: true,
      middlewares,
      logLevel: 'log',
      router: null
    });
  }
}