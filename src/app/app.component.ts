import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <div class='the-app'>
            <p-toolbar >
                <div class="ui-toolbar-group-left">
                    <button pButton type="button" label="New" icon="fa-plus"></button>
                    <i class="fa fa-bars"></i>
                    <button pButton type="button" label="Open" icon="fa-folder-open"></button>
                </div>
            </p-toolbar>
            <split direction="horizontal" style="flex: 1 1 0;">
                <split-area>first</split-area>
                <split-area style="background-color: aliceblue">
                    <app-secondary-pane></app-secondary-pane>
                </split-area>
            </split>
            
        </div>
    `,
    styles: ['.the-app { height:100%; background-color: darkseagreen; display:flex; flex-direction: column;}']
})
export class AppComponent {

}
