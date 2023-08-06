import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Band } from '../band';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  @Input() selectedBand: Band = new Band('');
  @Output() onAddBand = new EventEmitter();

  onAdd(bandName: string) {
    if (bandName) {
      this.onAddBand.emit(bandName);
    }
    else {
      alert("You cannot add a band that doesn't have a name!");
    }
  }
}