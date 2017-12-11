import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {AngularSplitModule} from 'angular-split';
import { SecondaryPaneComponent } from './secondary-pane.component';

import {ToolbarModule} from 'primeng/primeng';
import {ToggleButtonModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';

const ngPrimeModules = [ToolbarModule, ToggleButtonModule, ButtonModule];

@NgModule({
    declarations: [
        AppComponent,
        SecondaryPaneComponent
    ],
    imports: [
        BrowserModule,
        ngPrimeModules,
        AngularSplitModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
