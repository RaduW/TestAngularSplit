import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-secondary-pane',
    template: `
        <div style="background-color: aquamarine; height:100%;">
            <split direction="vertical">
                <split-area>
                    <div style="height:100%; background-color: bisque; display:flex; flex-direction: column;">
                        <p-toolbar class="header">
                <div class="ui-toolbar-group-left">
                    <button pButton type="button" label="New" icon="fa-plus"></button>
                    <i class="fa fa-bars"></i>
                    <button pButton type="button" label="Open" icon="fa-folder-open"></button>
                </div>
            </p-toolbar>
                        <div class="content">
                            Content
                            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dignissimos, expedita facilis laboriosam
                                modi
                                officia, omnis quam quas quod sint vitae voluptate voluptatem voluptatum? Amet harum inventore ipsa sapiente
                                vitae?
                            </div>
                            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dignissimos, expedita facilis laboriosam
                                modi
                                officia, omnis quam quas quod sint vitae voluptate voluptatem voluptatum? Amet harum inventore ipsa sapiente
                                vitae?
                            </div>
                            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dignissimos, expedita facilis laboriosam
                                modi
                                officia, omnis quam quas quod sint vitae voluptate voluptatem voluptatum? Amet harum inventore ipsa sapiente
                                vitae?
                            </div>
                            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dignissimos, expedita facilis laboriosam
                                modi
                                officia, omnis quam quas quod sint vitae voluptate voluptatem voluptatum? Amet harum inventore ipsa sapiente
                                vitae?
                            </div>
                            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dignissimos, expedita facilis laboriosam
                                modi
                                officia, omnis quam quas quod sint vitae voluptate voluptatem voluptatum? Amet harum inventore ipsa sapiente
                                vitae?
                            </div>
                            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dignissimos, expedita facilis laboriosam
                                modi
                                officia, omnis quam quas quod sint vitae voluptate voluptatem voluptatum? Amet harum inventore ipsa sapiente
                                vitae?
                            </div>

                        </div>
                    </div>
                </split-area>
                <split-area>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dignissimos, expedita facilis laboriosam modi
                        officia, omnis quam quas quod sint vitae voluptate voluptatem voluptatum? Amet harum inventore ipsa sapiente vitae?
                    </div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dignissimos, expedita facilis laboriosam modi
                        officia, omnis quam quas quod sint vitae voluptate voluptatem voluptatum? Amet harum inventore ipsa sapiente vitae?
                    </div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dignissimos, expedita facilis laboriosam modi
                        officia, omnis quam quas quod sint vitae voluptate voluptatem voluptatum? Amet harum inventore ipsa sapiente vitae?
                    </div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dignissimos, expedita facilis laboriosam modi
                        officia, omnis quam quas quod sint vitae voluptate voluptatem voluptatum? Amet harum inventore ipsa sapiente vitae?
                    </div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dignissimos, expedita facilis laboriosam modi
                        officia, omnis quam quas quod sint vitae voluptate voluptatem voluptatum? Amet harum inventore ipsa sapiente vitae?
                    </div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dignissimos, expedita facilis laboriosam modi
                        officia, omnis quam quas quod sint vitae voluptate voluptatem voluptatum? Amet harum inventore ipsa sapiente vitae?
                    </div>
                </split-area>
            </split>
        </div>
    `,
    styles: ['.header{ flex:0 0 1 ; background-color: coral;}', '.content{ flex:1 0 0; background-color: chartreuse; overflow:auto;}']
})
export class SecondaryPaneComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
