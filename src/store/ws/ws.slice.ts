import { Injector } from '@angular/core';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { prepareThunk, prepareThunkActionReducers } from '@redux-multipurpose/core';

import { 
    INITIAL_STATE_WEB_SERVICES
} from './ws.model';

import {
    ExampleProvider
} from '../../providers';

//Manually inject providers
const wsProvidersInjector = Injector.create({ providers: [
    { provide: ExampleProvider }
]});
const exampleProvider = wsProvidersInjector.get(ExampleProvider);

//Thunks
export const retrieveExampleDataThunk = prepareThunk('ws', 'retrieveExampleData', exampleProvider.retrieveExampleData);

//Ws actions and reducers
const wsSlice = createSlice({
    name: 'ws',
    initialState: INITIAL_STATE_WEB_SERVICES,
    reducers: {
        resetWsData(state, action: PayloadAction) {
            return INITIAL_STATE_WEB_SERVICES;
        }
    },
    extraReducers: prepareThunkActionReducers([
        { thunk: retrieveExampleDataThunk, substate: 'example', adapter: null }
    ])
});

export const wsReducer = wsSlice.reducer;
export const resetWsData = wsSlice.actions.resetWsData;