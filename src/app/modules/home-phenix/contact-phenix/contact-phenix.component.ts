import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
// import { HelpCenterService } from 'app/modules/admin/apps/help-center/help-center.service';
// import { FaqCategory } from 'app/modules/admin/apps/help-center/help-center.type';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-contact-phenix',
  templateUrl: './contact-phenix.component.html',
  styleUrls: ['./contact-phenix.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContactPhenixComponent implements OnInit {

  // faqCategory: FaqCategory;
  private _unsubscribeAll: Subject<any> = new Subject();
  formFieldHelpers: string[] = [''];
  /**
   * Constructor
   */
  constructor(
    private _matDialog: MatDialog,private _formBuilder: FormBuilder){}
  
    /**
     * Get the form field helpers as string
     */
     getFormFieldHelpersAsString(): string
     {
         return this.formFieldHelpers.join(' ');
     }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void
  {
      // // Get the FAQs
      // this._helpCenterService.faqs$
      //     .pipe(takeUntil(this._unsubscribeAll))
      //     .subscribe((faqCategories) => {
      //         this.faqCategory = faqCategories[0];
      //     });
  }

  /**
    
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