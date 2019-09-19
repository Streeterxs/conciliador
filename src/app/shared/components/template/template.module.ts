import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PageComponent } from './page/page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    PageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PageComponent
  ],
})
export class TemplateModule { }
