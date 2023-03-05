import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CarouselModule } from '@coreui/angular';
import { FooterAppComponent } from './components/footer-app/footer-app.component';
import { HeaderAppComponent } from './components/header-app/header-app.component';

const modules = [
    CommonModule,
    CarouselModule
  ];
  
  @NgModule({
    declarations: [
  ],
    imports: modules,
    exports: [...modules],
    providers: []
  })
  export class SharedModule {
    static forRoot(): ModuleWithProviders<SharedModule> {
      return {
        ngModule: SharedModule
      };
    }
  }
