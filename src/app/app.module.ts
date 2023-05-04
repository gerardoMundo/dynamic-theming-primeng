import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { ComponentsModule } from './components/components.module';
import { PageModule } from './pages/page.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PrimeNgModule, ComponentsModule, PageModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
