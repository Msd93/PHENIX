import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FuseFindByKeyPipeModule } from '@fuse/pipes/find-by-key';
import { SharedModule } from 'app/shared/shared.module';
import { OrderComponent } from 'app/modules/client/order/order.component';
import { OrderDetailsComponent } from 'app/modules/client/order/details/details.component';
import { OrderListComponent } from 'app/modules/client/order/list/list.component';
import { MatTabsModule } from '@angular/material/tabs';
import { orderRoutes } from './order.routing';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
    declarations: [
        OrderComponent,
        OrderDetailsComponent,
        OrderListComponent
    ],
    imports     : [
        RouterModule.forChild(orderRoutes),
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatProgressBarModule,
        MatSelectModule,
        MatSidenavModule,
        MatSlideToggleModule,
        MatTooltipModule,
        FuseFindByKeyPipeModule,
        SharedModule,
        MatTabsModule,
        ReactiveFormsModule
    ]
})
export class OrderModule
{
}
