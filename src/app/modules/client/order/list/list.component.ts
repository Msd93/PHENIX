import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSelectChange } from '@angular/material/select';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { BehaviorSubject, combineLatest, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { OrderService } from 'app/modules/client/order/order.service';
import { Category, OrderItem } from 'app/modules/client/order/order.types';

@Component({
    selector       : 'order-list',
    templateUrl    : './list.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderListComponent implements OnInit, OnDestroy
{
    categories: Category[];
    orderItems: OrderItem[];
    filteredOrderItems: OrderItem[];
    filters: {
        categorySlug$: BehaviorSubject<string>;
        query$: BehaviorSubject<string>;
        hideCompleted$: BehaviorSubject<boolean>;
    } = {
        categorySlug$ : new BehaviorSubject('all'),
        query$        : new BehaviorSubject(''),
        hideCompleted$: new BehaviorSubject(false)
    };

    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _changeDetectorRef: ChangeDetectorRef,
        private _router: Router,
        private _orderService: OrderService
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Get the categories
        this._orderService.categories$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((categories: Category[]) => {
                this.categories = categories;

                // Mark for check
                this._changeDetectorRef.markForCheck();
            });

        // Get the orderItems
        this._orderService.orderItems$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((orderItems: OrderItem[]) => {
                this.orderItems = this.filteredOrderItems = orderItems;

                // Mark for check
                this._changeDetectorRef.markForCheck();
            });

        // Filter the orderItems
        combineLatest([this.filters.categorySlug$, this.filters.query$, this.filters.hideCompleted$])
            .subscribe(([categorySlug, query, hideCompleted]) => {

                // Reset the filtered orderItems
                this.filteredOrderItems = this.orderItems;

                // Filter by category
                if ( categorySlug !== 'all' )
                {
                    this.filteredOrderItems = this.filteredOrderItems.filter(orderItem => orderItem.category === categorySlug);
                }

                // Filter by search query
                if ( query !== '' )
                {
                    this.filteredOrderItems = this.filteredOrderItems.filter(orderItem => orderItem.title.toLowerCase().includes(query.toLowerCase())
                        || orderItem.description.toLowerCase().includes(query.toLowerCase())
                        || orderItem.category.toLowerCase().includes(query.toLowerCase()));
                }

                // Filter by completed
                if ( hideCompleted )
                {
                    this.filteredOrderItems = this.filteredOrderItems.filter(orderItem => orderItem.progress.completed === 0);
                }
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Filter by search query
     *
     * @param query
     */
    filterByQuery(query: string): void
    {
        this.filters.query$.next(query);
    }

    /**
     * Filter by category
     *
     * @param change
     */
    filterByCategory(change: MatSelectChange): void
    {
        this.filters.categorySlug$.next(change.value);
    }

    /**
     * Show/hide completed orderItems
     *
     * @param change
     */
    toggleCompleted(change: MatSlideToggleChange): void
    {
        this.filters.hideCompleted$.next(change.checked);
    }

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any
    {
        return item.id || index;
    }
    
}
