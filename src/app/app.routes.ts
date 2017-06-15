import { Routes } from '@angular/router';

import { ApprovalsComponent } from './components/approvals/approvals.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RequestComponent } from './components/request/request.component';
import { SubmitRequestComponent } from './components/submit-request/submit-request.component';

export const APP_ROUTES= [
    { path: '', component: DashboardComponent },
    { path: 'requests', component: ApprovalsComponent },
    { path: 'requests/:id', component: RequestComponent },
    { path: 'submit-request', component: SubmitRequestComponent }
];