import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'is-status-badge',
  templateUrl: './status-badge.component.html',
  styleUrls: ['./status-badge.component.scss']
})
export class StatusBadgeComponent implements OnInit, OnChanges {
  @Input() status: string;
  @Input() height: number;
  @Input() width: number;
  @Input() fontSize: number;
  @Input() hasDropdown: boolean;
  statusText: string;

  constructor() { }

  ngOnInit() {
    this.getStatusText(this.status);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.status && changes.status.currentValue) {
      this.getStatusText(changes.status.currentValue);
    }
  }

  getStatusText(status: string) {
    switch (status) {
      case 'UPDATE':
        this.statusText = 'UPDATE';
        break;
      case 'DELETE':
        this.statusText = 'DELETE';
        break;

        default:
        this.statusText = '';
    }
  }
}
