import { Component } from '@angular/core';
import { Band } from './band';
import { BANDS } from './bands-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'List of Bands/Artists I Like';

  bandList = BANDS;
  selectedBand: Band = new Band('');
  duplicateDetected: boolean = false;

  addBandToList(newBand: Band) {

    // reset duplicate boolean before checking new band
    this.duplicateDetected = false;

    // check too see if band name already exists in list
    for(let band of this.bandList) {
      if (band.name == newBand.name) {
        alert("Cannot add duplicate band.");
        this.duplicateDetected = true;
      }
    }

    if (!this.duplicateDetected) {
      this.bandList.push(new Band(newBand.name));
    }

  }

  selectBand(selectedBand: Band) {
    this.selectedBand = selectedBand;
  }

  deleteFromList(bandToDelete: Band) {
    const bandList = [...this.bandList];
    this.bandList = bandList.filter(band => band.name !== bandToDelete.name);
  }

  doneEditing() {
    this.selectedBand = new Band('');
  }
}
