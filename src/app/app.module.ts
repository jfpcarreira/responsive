import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TesteComponent } from './components/teste/teste.component';
import { TopbarComponent } from './components/layout/topbar/topbar.component';
import { LeftmenuComponent } from './components/layout/leftmenu/leftmenu.component';
import { MaincontentComponent } from './components/layout/maincontent/maincontent.component';
import { BreadcrumbComponent } from './components/layout/breadcrumb/breadcrumb.component';


@NgModule({
  declarations: [
    AppComponent,
    TesteComponent,
    TopbarComponent,
    LeftmenuComponent,
    MaincontentComponent,
    BreadcrumbComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
