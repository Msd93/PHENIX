import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-template-globale-phenix',
  templateUrl: './template-globale-phenix.component.html',
  styleUrls: ['./template-globale-phenix.component.scss']
})
export class TemplateGlobalePhenixComponent implements OnInit {
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
          id               : 'laptop-336373_640 (9)',
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
