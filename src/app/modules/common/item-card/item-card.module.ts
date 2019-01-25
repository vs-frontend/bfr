import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ItemCardComponent } from './item-card.component';

@NgModule({
  declarations: [
    ItemCardComponent
  ],
  imports: [ MatCardModule ],
  exports: [ ItemCardComponent ]
})
export class ItemCardModule { }
