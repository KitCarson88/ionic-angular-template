import { Injectable } from '@angular/core';

import { dispatch } from '@redux-multipurpose/core';
import { createSelector } from '@reduxjs/toolkit';

import {
    retrieveExampleDataThunk
} from './ws.slice';

@Injectable()
export class WsActions
{
    @dispatch()
    retrieveExampleData = () => {
        return retrieveExampleDataThunk();
    };
    
}