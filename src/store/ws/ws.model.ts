import { createEntityAdapter } from '@reduxjs/toolkit';

import { createWsInitialState } from '@redux-multipurpose/core';

import { TestDataDTO } from '../../entities/dto/testDataDTO';

export const testDataAdapter = createEntityAdapter<TestDataDTO>({
    // Assume IDs are stored in a field other than `element.id` where element is one object of TestData
    selectId: element => element.id,
    // Keep the "all IDs" array sorted based on testData ids
    sortComparer: (a, b) => a.id < b.id ? -1 : 1
});

export const INITIAL_STATE_WEB_SERVICES = createWsInitialState([
	'example',
    { 'testData': { data: testDataAdapter.getInitialState({ available: null }) }}
]);