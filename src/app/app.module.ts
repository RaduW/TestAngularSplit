import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {AngularSplitModule} from 'angular-split';
import { SecondaryPaneComponent } from './secondary-pane.component';

@NgModule({
    declarations: [
        AppComponent,
        SecondaryPaneComponent
    ],
    imports: [
        BrowserModule,
        AngularSplitModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
