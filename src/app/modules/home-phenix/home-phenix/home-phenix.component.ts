import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
// import { HelpCenterService } from 'app/modules/admin/apps/help-center/help-center.service';
// import { FaqCategory } from 'app/modules/admin/apps/help-center/help-center.type';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home-phenix',
  templateUrl: './home-phenix.component.html',
  styleUrls: ['./home-phenix.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomePhenixComponent implements OnInit, OnDestroy {

    selectedValue: any;
  searchTxt: any;

  items = [{
    value : 100,
    viewValue : 100
  },{
    value : 200,
    viewValue : 200
  },{
    value : 300,
    viewValue : 300
  }];
    transform(items: any[], searchTxt: string): any[] {
        if(!items || !items.length) return items;
        if(!searchTxt || !searchTxt.length) return items;
        return items.filter(item => {
          return item.viewValue.toString().toLowerCase().indexOf(searchTxt.toLowerCase()) > -1
        });
      }
//   faqCategory: FaqCategory;
  private _unsubscribeAll: Subject<any> = new Subject();
  components: any[];
  /**
   * Constructor
   */
  constructor(
    private _matDialog: MatDialog)
  {
    this.components = [
        {
            id               : 'laptop-336373_640 (4)',
            name             : 'Photo name',
            summary          : 'Lorem ipsum.',
            exampleSpecs     : {
                prefix: 'autocomplete-'
            },
            additionalApiDocs: [
                {
                    name: 'Testing',
                    path: 'material-autocomplete-testing.html'
                }
            ]
        },
        {
            id               : 'laptop-336373_640 (11)',
            name              : 'Photo name',
            summary          : 'Lorem ipsum.',
            exampleSpecs     : {
                prefix: 'badge-'
            },
            additionalApiDocs: [
                {
                    name: 'Testing',
                    path: 'material-badge-testing.html'
                }
            ]
        },
        {
            id               : 'laptop-336373_640 (11)',
            name             : 'Photo name',
            summary          : 'Lorem ipsum.',
            exampleSpecs     : {
                prefix: 'bottom-sheet-'
            },
            additionalApiDocs: [
                {
                    name: 'Testing',
                    path: 'material-bottom-sheet-testing.html'
                }
            ]
        },
        {
            id               : 'laptop-336373_640 (10)',
            name              : 'Photo name',
            summary          : 'Lorem ipsum.',
            exampleSpecs     : {
                prefix : 'button-',
                exclude: ['button-toggle-']
            },
            additionalApiDocs: [
                {
                    name: 'Testing',
                    path: 'material-button-testing.html'
                }
            ]
        },
        {
            id               : 'laptop-336373_640 (1)',
            name              : 'Photo name',
            summary          : 'Lorem ipsum.',
            exampleSpecs     : {
                prefix: 'button-toggle-'
            },
            additionalApiDocs: [
                {
                    name: 'Testing',
                    path: 'material-button-toggle-testing.html'
                }
            ]
        },
        {
            id               : 'laptop-336373_640 (2)',
            name              : 'Photo name',
            summary          : 'Lorem ipsum.',
            exampleSpecs     : {
                prefix: 'card-'
            },
            additionalApiDocs: [
                {
                    name: 'Testing',
                    path: 'material-card-testing.html'
                }
            ]
        },
        {
            id               : 'laptop-336373_640 (3)',
            name             : 'Photo name',
            summary          : 'Lorem ipsum.',
            exampleSpecs     : {
                prefix: 'checkbox-'
            },
            additionalApiDocs: [
                {
                    name: 'Testing',
                    path: 'material-checkbox-testing.html'
                }
            ]
        },
        {
            id               : 'laptop-336373_640 (4)',
            name              : 'Photo name',
            summary          : 'Lorem ipsum.',
            exampleSpecs     : {
                prefix: 'chips-'
            },
            additionalApiDocs: [
                {
                    name: 'Testing',
                    path: 'material-chips-testing.html'
                }
            ]
        },
        {
            id               : 'laptop-336373_640 (5)',
            name              : 'Photo name',
            summary          : 'Lorem ipsum.',
            exampleSpecs     : {
                prefix: 'core-'
            },
            additionalApiDocs: [
                {
                    name: 'Testing',
                    path: 'material-core-testing.html'
                }
            ]
        },
        {
            id               : 'laptop-336373_640 (6)',
            name              : 'Photo name',
            summary          : 'Lorem ipsum.',
            exampleSpecs     : {
                prefix: 'date'
            },
            additionalApiDocs: [
                {
                    name: 'Testing',
                    path: 'material-datepicker-testing.html'
                }
            ]
        },
        {
            id               : 'lamp',
            name              : 'Photo name',
            summary          : 'Lorem ipsum.',
            exampleSpecs     : {
                prefix: 'dialog-'
            },
            additionalApiDocs: [
                {
                    name: 'Testing',
                    path: 'material-dialog-testing.html'
                }
            ]
        },
        {
            id               : 'laptop-336373_640 (8)',
            name              : 'Photo name',
            summary          : 'Lorem ipsum.',
            exampleSpecs     : {
                prefix: 'divider-'
            },
            additionalApiDocs: [
                {
                    name: 'Testing',
                    path: 'material-divider-testing.html'
                }
            ]
        }, 
      
        
    ];
}
  
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void
  {
  }

  /**
     * Add a new note
     */
   addNewNote(): void
   {
       this._matDialog.open(LoginComponent, {
           autoFocus: false,
           data     : {
               note: {}
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