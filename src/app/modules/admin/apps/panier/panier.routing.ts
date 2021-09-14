import { Route } from '@angular/router';
import { PanierComponent } from 'app/modules/admin/apps/panier/panier.component';
import { PanierListComponent } from 'app/modules/admin/apps/panier/list/list.component';
import { PanierDetailsComponent } from 'app/modules/admin/apps/panier/details/details.component';
import { PanierCategoriesResolver, PanierCourseResolver, PanierCoursesResolver } from 'app/modules/admin/apps/panier/panier.resolvers';

export const panierRoutes: Route[] = [
    {
        path     : '',
        component: PanierComponent,
        resolve  : {
            categories: PanierCategoriesResolver
        },
        children : [
            {
                path     : '',
                pathMatch: 'full',
                component: PanierListComponent,
                resolve  : {
                    courses: PanierCoursesResolver
                }
            },
            {
                path     : ':id',
                component: PanierDetailsComponent,
                resolve  : {
                    course: PanierCourseResolver
                }
            }
        ]
    }
];
