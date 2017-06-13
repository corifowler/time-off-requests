import { Routes } from '@angular/router';

import { ApprovalsComponent } from './components/approvals/approvals.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SubmitRequestComponent } from './components/submit-request/submit-request.component';

export const APP_ROUTES= [
    { path: '', component: DashboardComponent },
    { path: 'approvals', component: ApprovalsComponent },
    { path: 'submit-request', component: SubmitRequestComponent }
];