import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ColorPickerControl, ColorsTable } from '@iplab/ngx-color-picker';
const IMG: any = [
  {img: 'coffee-beans-6603499_1280.jpg', download: 1215, like: 2500},
  {img: 'rabbits-4890861_1280.jpg', download: 615, like: 2133},
  {img: 'coffee-beans-6603499_1280.jpg', download: 435, like: 1243},
  {img: 'street-6099209_1920.jpg', download: 123, like: 8000},
  {img: 'yellow-macaw-6607739_640.jpg', download: 897, like: 867},
  {img: 'waterfalls-6476336_1280.jpg', download: 15, like: 55},
  {img: 'rabbits-4890861_1280.jpg', download: 125, like: 213},
  {img: 'bird-6602049_1280.jpg', download: 150, like: 233},
  {img: 'waterfalls-6476336_1280.jpg', download: 1655, like: 433},
  {img: 'yellow-macaw-6607739_640.jpg', download: 15, like: 765},
  {img: 'street-6099209_1920.jpg', download: 45, like: 765},
  {img: 'street-6099209_1920.jpg', download: 15, like: 934},
  {img: 'waterfalls-6476336_1280.jpg', download: 15, like: 321},
  {img: 'yellow-macaw-6607739_640.jpg', download: 8500, like: 10000},
  {img: 'street-6099209_1920.jpg', download: 435, like: 653},
  {img: 'yellow-macaw-6607739_640.jpg', download: 678, like: 764},
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