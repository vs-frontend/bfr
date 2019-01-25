import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ItemCardComponent } from './item-card.component';

@NgModule({
  declarations: [
    ItemCardComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    MatProgressBarModule
   ],
  exports: [ ItemCardComponent ]
})
export class ItemCardModule { }
