import { NgModule } from '@angular/core';
import { AngularReactBrowserModule } from '@angular-react/core';
import { FabDialogModule, FabButtonModule } from '@angular-react/fabric';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TestModule } from './test.module';

@NgModule({
  imports:      [ AngularReactBrowserModule, FabButtonModule, FabDialogModule, TestModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
