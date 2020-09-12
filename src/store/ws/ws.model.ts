import { createEntityAdapter } from '@reduxjs/toolkit';

import { createWsInitialState } from '@redux-multipurpose/core';

export const INITIAL_STATE_WEB_SERVICES = createWsInitialState([
    'example'
]);