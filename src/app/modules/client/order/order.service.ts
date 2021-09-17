import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { Category, OrderItem } from 'app/modules/client/order/order.types';

@Injectable({
    providedIn: 'root'
})
export class OrderService
{
    // Private
    private _categories: BehaviorSubject<Category[] | null> = new BehaviorSubject(null);
    private _orderItem: BehaviorSubject<OrderItem | null> = new BehaviorSubject(null);
    private _orderItems: BehaviorSubject<OrderItem[] | null> = new BehaviorSubject(null);

    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for categories
     */
    get categories$(): Observable<Category[]>
    {
        return this._categories.asObservable();
    }

    /**
     * Getter for orderItems
     */
    get orderItems$(): Observable<OrderItem[]>
    {
        return this._orderItems.asObservable();
    }

    /**
     * Getter for orderItem
     */
    get orderItem$(): Observable<OrderItem>
    {
        return this._orderItem.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get categories
     */
    getCategories(): Observable<Category[]>
    {
        return this._httpClient.get<Category[]>('api/client/order/categories').pipe(
            tap((response: any) => {
                this._categories.next(response);
            })
        );
    }

    /**
     * Get orderItems
     */
    getOrderItems(): Observable<OrderItem[]>
    {
        return this._httpClient.get<OrderItem[]>('api/client/order/orderItems').pipe(
            tap((response: any) => {
                this._orderItems.next(response);
            })
        );
    }

    /**
     * Get orderItem by id
     */
    getOrderItemById(id: string): Observable<OrderItem>
    {
        return this._httpClient.get<OrderItem>('api/client/order/orderItems/orderItem', {params: {id}}).pipe(
            map((orderItem) => {

                // Update the orderItem
                this._orderItem.next(orderItem);

                // Return the orderItem
                return orderItem;
            }),
            switchMap((orderItem) => {

                if ( !orderItem )
                {
                    return throwError('Could not found orderItem with id of ' + id + '!');
                }

                return of(orderItem);
            })
        );
    }
}
