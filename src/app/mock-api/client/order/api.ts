import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import { FuseMockApiService } from '@fuse/lib/mock-api/mock-api.service';
import { categories as categoriesData, orderItems as orderItemsData, demoOrderItemSteps as demoOrderItemStepsData } from 'app/mock-api/client/order/data';

@Injectable({
    providedIn: 'root'
})
export class OrderMockApi
{
    private _categories: any[] = categoriesData;
    private _orderItems: any[] = orderItemsData;
    private _demoOrderItemSteps: any[] = demoOrderItemStepsData;

    /**
     * Constructor
     */
    constructor(private _fuseMockApiService: FuseMockApiService)
    {
        // Register Mock API handlers
        this.registerHandlers();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register Mock API handlers
     */
    registerHandlers(): void
    {
        // -----------------------------------------------------------------------------------------------------
        // @ Categories - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/client/order/categories')
            .reply(() => {

                // Clone the categories
                const categories = cloneDeep(this._categories);

                // Sort the categories alphabetically by title
                categories.sort((a, b) => a.title.localeCompare(b.title));

                return [200, categories];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ OrderItems - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/client/order/orderItems')
            .reply(() => {

                // Clone the orderItems
                const orderItems = cloneDeep(this._orderItems);

                return [200, orderItems];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ OrderItem - GET
        // -----------------------------------------------------------------------------------------------------
        this._fuseMockApiService
            .onGet('api/client/order/orderItems/orderItem')
            .reply(({request}) => {

                // Get the id from the params
                const id = request.params.get('id');

                // Clone the orderItems and steps
                const orderItems = cloneDeep(this._orderItems);
                const steps = cloneDeep(this._demoOrderItemSteps);

                // Find the orderItem and attach steps to it
                const orderItem = orderItems.find(item => item.id === id);
                if ( orderItem )
                {
                    orderItem.steps = steps;
                }

                return [
                    200,
                    orderItem
                ];
            });
    }
}
