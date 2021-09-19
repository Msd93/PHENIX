import { Route } from '@angular/router';
import { GlobalComponent } from 'app/modules/admin/dashboards/global/global.component';
import { AnalyticsResolver } from 'app/modules/admin/dashboards/global/global.resolvers';

export const analyticsRoutes: Route[] = [
    {
        path     : '',
        component: GlobalComponent,
        resolve  : {
            data: AnalyticsResolver
        }
    }
];
