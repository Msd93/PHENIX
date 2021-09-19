import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ApexAxisChartSeries, ApexChart, ApexLegend, ApexOptions, ApexTitleSubtitle, ApexXAxis, ChartComponent } from 'ng-apexcharts';
import { GlobalService } from './global.service';

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    title: ApexTitleSubtitle;
    legend: ApexLegend;
  };
  
@Component({
    selector       : 'global',
    templateUrl    : './global.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GlobalComponent implements OnInit, OnDestroy
{
    chartGithubIssues: ApexOptions = {};
    chartTaskDistribution: ApexOptions = {};
    chartBudgetDistribution: ApexOptions = {};
    chartWeeklyExpenses: ApexOptions = {};
    chartMonthlyExpenses: ApexOptions = {};
    chartYearlyExpenses: ApexOptions = {};
    data: any;
    selectedGlobal: string = 'Backend App';
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    public chartOptions: Partial<ChartOptions>;
    public chartOptions1: Partial<ChartOptions>;
    legend: any;
    title: { text: string; };
    chartOptions2: { legend: { show: boolean; position: string; }; series: { name: string; data: number[]; }[]; chart: { height: number; type: string; }; title: { text: string; }; xaxis: { categories: string[]; }; };
    
    
    // Pie
    pieChartLabels:string[] = ['Photo', 'Video', 'Texture'];
    pieChartData:number[] = [45, 35, 25];
    pieChartType:string = 'pie';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
    /**
     * Constructor
     */
    constructor(
        private _globalService: GlobalService,
        private _router: Router

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
        this.chartOptions = {
            legend : {
                show: true,
                position: 'left',
              },
            series: [
              {
                name: "Page View",
                data: [70, 41, 69, 72, 57, 62]
              },
            ],
            chart: {
              height: 300,
              type: "bar"
            },
            title: {
              text: "Page View"
            },
            xaxis: {
              categories: ["00:00", "02:00",  "04:00",  "06:00",  "07:00",  "09:00"],
            },

          };

          this.chartOptions1 = {
            legend : {
                show: true,
                position: 'left',
              },
            series: [
              {
                name: "Transaction",
                data: [70, 41, 69, 72, 57, 62]
              },
            ],
            chart: {
              height: 300,
              type: "bar"
            },
            title: {
              text: "Transactions"
            },
            xaxis: {
              categories: ["00:00", "02:00",  "04:00",  "06:00",  "07:00",  "09:00"],
            },

          };

          this.chartOptions2 = {
            legend : {
                show: true,
                position: 'left',
              },
            series: [
              {
                name: "Transaction",
                data: [70, 41, 69, 72, 57, 62],
              },
            ],
            chart: {
              height: 300,
              type: "line"
            },
            title: {
              text: "Transaction Amount $"
            },
            xaxis: {
              categories: ["00:00", "02:00",  "04:00",  "06:00",  "07:00",  "09:00"],
            },

          };

        // Get the data
        this._globalService.data$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((data) => {

                // Store the data
                this.data = data;

                // Prepare the chart data
                // this._prepareChartData();
            });

        // Attach SVG fill fixer to all ApexCharts
        window['Apex'] = {
            chart: {
                events: {
                    mounted: (chart: any, options?: any): void => {
                        this._fixSvgFill(chart.el);
                    },
                    updated: (chart: any, options?: any): void => {
                        this._fixSvgFill(chart.el);
                    }
                }
            }
        };
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
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any
    {
        return item.id || index;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Fix the SVG fill references. This fix must be applied to all ApexCharts
     * charts in order to fix 'black color on gradient fills on certain browsers'
     * issue caused by the '<base>' tag.
     *
     * Fix based on https://gist.github.com/Kamshak/c84cdc175209d1a30f711abd6a81d472
     *
     * @param element
     * @private
     */
    private _fixSvgFill(element: Element): void
    {
        // Current URL
        const currentURL = this._router.url;

        // 1. Find all elements with 'fill' attribute within the element
        // 2. Filter out the ones that doesn't have cross reference so we only left with the ones that use the 'url(#id)' syntax
        // 3. Insert the 'currentURL' at the front of the 'fill' attribute value
        Array.from(element.querySelectorAll('*[fill]'))
             .filter(el => el.getAttribute('fill').indexOf('url(') !== -1)
             .forEach((el) => {
                 const attrVal = el.getAttribute('fill');
                 el.setAttribute('fill', `url(${currentURL}${attrVal.slice(attrVal.indexOf('#'))}`);
             });
    }

}
