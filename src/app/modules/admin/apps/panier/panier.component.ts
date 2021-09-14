import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector       : 'panier',
    templateUrl    : './panier.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PanierComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}
