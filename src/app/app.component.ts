import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <split direction="horizontal">
          <split-area>first</split-area>
          <split-area style="background-color: aliceblue"><app-secondary-pane></app-secondary-pane></split-area>
      </split>
  `,
  styles: []
})
export class AppComponent {

}
