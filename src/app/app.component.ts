import { Component } from '@angular/core';
import { Band } from './band';
import { BANDS } from './bands-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'List of Bands I Like';

  bandList = BANDS;
  selectedBand: Band = new Band('');

  addBandToList(bandName: string) {
    this.bandList.push(new Band(bandName));
  }

  selectBand(selectedBand: Band) {
    this.selectedBand = selectedBand;
  }

  deleteFromList(bandToDelete: Band) {
    const bandList = [...this.bandList];
    this.bandList = bandList.filter(band => band.name !== bandToDelete.name);
  }
}
