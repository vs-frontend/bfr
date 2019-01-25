import { Component, Input } from '@angular/core';
import { CardThemedItem } from './item-card.model';

@Component({
  selector: 'bfr-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent {

  @Input()
  project: CardThemedItem;

  @Input()
  specialization: CardThemedItem;

  @Input()
  type: CardThemedItem;

  @Input()
  number: number;

  @Input()
  title: string;

  @Input()
  text: string;

  @Input()
  taskUrl: string;

  @Input()
  assigneeUrl: string;

  @Input()
  assigneeInitials: string;

  @Input()
  testerUrl: string;

  @Input()
  testerInitials: string;

  @Input()
  estimatedHours: number;

  @Input()
  doneHours: number;

  @Input()
  doneRatio: number;
}
