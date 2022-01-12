import { ComponentFactoryResolver, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { InfoComponent } from './components/info/info.component';
import { SearchComponent } from './components/search/search.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ButtonComponent,
    InfoComponent,
    SearchComponent
  ],
  imports: [
    FontAwesomeModule,
    CommonModule
  ],
  exports: [
    HeaderComponent,
    ButtonComponent,
    InfoComponent,
    SearchComponent
  ]
})
export class SharedModule { 
  public components : any[] = [
    HeaderComponent,
    ButtonComponent,
    InfoComponent,
    SearchComponent
  ]
}
