import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-fav-cart',
  templateUrl: './fav-cart.component.html',
  styleUrls: ['./fav-cart.component.scss'],
  host: { class: 'fav-component' },
})
export class FavCartComponent implements OnInit {
  constructor(
    private _DataService: DataService,
    private cdRef: ChangeDetectorRef
  ) {}
  dataList: any;

  ngOnInit(): void {
    // to get all data fav t oadd to data list to get size
    this._DataService.favDataShare.subscribe(() => {
      this.dataList = this._DataService.favDataShare.getValue()
        ? [...this._DataService.favDataShare.getValue().values()]
        : '';
      this.cdRef.detectChanges();
      // console.log(this.dataList);
    });
  }
  // ------------------- to delete fav item
  deleteItem(item: any): void {
    let dataItem: any = this._DataService.favDataShare.getValue();
    dataItem.delete(item.recipe_id);
    console.log(dataItem);

    this._DataService.favDataShare.next(dataItem);
    if (dataItem.size > 0) {
      localStorage.setItem('foodFav', JSON.stringify([...dataItem]));
    } else {
      localStorage.removeItem('foodFav');
    }
  }
}
