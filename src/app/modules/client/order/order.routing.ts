import { Route } from '@angular/router';
import { OrderComponent } from 'app/modules/client/order/order.component';
import { OrderListComponent } from 'app/modules/client/order/list/list.component';
import { OrderDetailsComponent } from 'app/modules/client/order/details/details.component';
import { OrderCategoriesResolver, OrderOrderItemResolver, OrderOrderItemsResolver } from 'app/modules/client/order/order.resolvers';

export const orderRoutes: Route[] = [
    {
        path     : '',
        component: OrderComponent,
        resolve  : {
            categories: OrderCategoriesResolver
        },
        children : [
            {
                path     : '',
                pathMatch: 'full',
                component: OrderListComponent,
                resolve  : {
                    courses: OrderOrderItemsResolver
                }
            },
            {
                path     : ':id',
                component: OrderDetailsComponent,
                resolve  : {
                    course: OrderOrderItemResolver
                }
            }
        ]
    }
];
