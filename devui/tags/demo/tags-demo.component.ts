import {
  Component
} from '@angular/core';
import { DevuiSourceData } from 'ng-devui/shared/devui-codebox/devui-source-data';

@Component({
  selector: 'd-demo-tags',
  templateUrl: './tags-demo.component.html'
})

export class TagsDemoComponent {
  basicSource: Array<DevuiSourceData> = [
    {title: 'HTML', language: 'xml', code:  require('!!raw-loader!./basic/basic.component.html')},
    {title: 'TS', language: 'typescript', code:  require('!!raw-loader!./basic/basic.component.ts')}
  ];

  customSource: Array<DevuiSourceData> = [
    {title: 'HTML', language: 'xml', code:  require('!!raw-loader!./custom/custom.component.html')},
    {title: 'TS', language: 'typescript', code:  require('!!raw-loader!./custom/custom.component.ts')},
    {title: 'SCSS', language: 'css', code:  require('!!raw-loader!./custom/custom.component.scss')}
  ];
  navItems = [
    { dAnchorLink: 'single-tag', value: '单个标签'},
    { dAnchorLink: 'tags-group', value: '标签组'}
  ];

  constructor() {
  }

}
