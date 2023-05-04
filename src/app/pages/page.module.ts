import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [MainPageComponent],
  imports: [CommonModule, PrimeNgModule, ComponentsModule],
  exports: [MainPageComponent],
})
export class PageModule {}
