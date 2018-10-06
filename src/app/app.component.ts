import { Component, ViewChild, TemplateRef } from '@angular/core';
import { ɵc as WidgetLibraryService } from 'angular6-json-schema-form';

import { LineInputComponent } from './components/line-input/line-input.component';
import { LineSelectorComponent } from './components/line-selector/line-selector.component';
import { LineRateComponent } from './components/line-rate/line-rate.component';
import { LineAddItemComponent } from './components/line-add-item/line-add-item.component';
import { LineAddObjectComponent } from './components/line-add-object/line-add-object.component';
import { LineRaidoGroupComponent } from './components/line-raido-group/line-raido-group.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'javascript-exam-system';

  isCollapsed = false;
  triggerTemplate = null;
  @ViewChild('trigger') customTrigger: TemplateRef<void>;

  constructor(private widgetLibrary: WidgetLibraryService) {
    this.widgetLibrary.registerWidget('line-input', LineInputComponent);
    this.widgetLibrary.registerWidget('line-selector', LineSelectorComponent);
    this.widgetLibrary.registerWidget('line-rate', LineRateComponent);
    this.widgetLibrary.registerWidget('line-add-item', LineAddItemComponent);
    this.widgetLibrary.registerWidget('line-add-object', LineAddObjectComponent);
    this.widgetLibrary.registerWidget('line-radio-group', LineRaidoGroupComponent);

    // disable copy action
    document.addEventListener('copy', (event: any) => {
      event.clipboardData.setData('text/plain', '');
      event.preventDefault();
  });
  }

  /** custom trigger can be TemplateRef **/
  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }

}
