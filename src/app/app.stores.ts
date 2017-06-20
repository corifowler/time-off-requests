import { Store, StoreModule } from '@ngrx/store';

import { timeOffRequests, selectedTimeOffRequest, appState } from './stores/timeOffRequests.store';

export const APP_STORES = [
    StoreModule.provideStore({
        timeOffRequests,
        selectedTimeOffRequest,
        appState
    })
];