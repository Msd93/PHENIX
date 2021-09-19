import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { GlobalService } from 'app/modules/admin/dashboards/global/global.service';

@Injectable({
    providedIn: 'root'
})
export class GlobalResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _globalService: GlobalService)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resolver
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>
    {
        return this._globalService.getData();
    }
}
