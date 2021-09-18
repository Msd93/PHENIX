import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ColorPickerControl, ColorsTable } from '@iplab/ngx-color-picker';
const IMG: any = [
  {img: 'coffee-beans-6603499_1280.jpg'},
  {img: 'rabbits-4890861_1280.jpg'},
  {img: 'coffee-beans-6603499_1280.jpg'},
  {img: 'street-6099209_1920.jpg'},
  {img: 'yellow-macaw-6607739_640.jpg'},
  {img: 'waterfalls-6476336_1280.jpg'},
  {img: 'rabbits-4890861_1280.jpg'},
  {img: 'bird-6602049_1280.jpg'},
  {img: 'waterfalls-6476336_1280.jpg'},
  {img: 'yellow-macaw-6607739_640.jpg'},
  {img: 'street-6099209_1920.jpg'},
  {img: 'street-6099209_1920.jpg'},
  {img: 'waterfalls-6476336_1280.jpg'},
  {img: 'yellow-macaw-6607739_640.jpg'},
  {img: 'street-6099209_1920.jpg'},
  {img: 'yellow-macaw-6607739_640.jpg'},
];

@Component({
  templateUrl: './search-photo.component.html',
  styleUrls: ['./search-photo.component.scss'],
  encapsulation  : ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchPhotoComponent implements OnInit {

  drawerMode: 'over' | 'side' = 'side';
  drawerOpened: boolean = true;

  images = IMG;
  public chromeControl = new ColorPickerControl()
                              .setValueFrom(ColorsTable.aquamarine)
                              .hidePresets()
                              .hideAlphaChannel();

  public sketchControl = new ColorPickerControl().setValueFrom('#479698').hidePresets();

  selectedHex;
  constructor() { }

  ngOnInit(): void {
  }

  setHex(): void{
    this.selectedHex = this.sketchControl.value.toHexString();
    console.log('valeur HEX => ', this.selectedHex);
  }
  /**Filter closed */
  closeFilter(){
    this.drawerOpened = false;
  }
}