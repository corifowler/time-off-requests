import { Store, StoreModule } from '@ngrx/store';

import { timeOffRequests, selectedTimeOffRequest } from './stores/timeOffRequests.store';

export const APP_STORES = [
    StoreModule.provideStore({
        timeOffRequests,
        selectedTimeOffRequest
    })
];