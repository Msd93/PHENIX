import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector       : 'order',
    templateUrl    : './order.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}
