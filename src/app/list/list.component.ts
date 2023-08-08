import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Band } from '../band';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() bands: Band[] = [];
  @Output() onBandSelected = new EventEmitter();
  @Output() onDeleteBand = new EventEmitter();

  onSelect(selectedBand: Band) {
    this.onBandSelected.emit(selectedBand);
  }

  onDelete(bandToDelete: Band) {
    this.onDeleteBand.emit(bandToDelete);
  }
}