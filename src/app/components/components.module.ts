import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ToggleButtonComponent } from './toggle-button/toggle-button.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

@NgModule({
  declarations: [ToggleButtonComponent],
  imports: [CommonModule, FormsModule, PrimeNgModule],
  exports: [ToggleButtonComponent],
})
export class ComponentsModule {}
