import {bindable, customElement} from 'aurelia-framework';
import { inject } from 'aurelia-framework';
import {Config} from 'resources/config';

//start-aurelia-decorators
@customElement('need-info')
@inject(Config)

//end-aurelia-decorators
export class NeedInfo {
  //start-aurelia-decorators
  constructor(Config) {
    this.styleString = 'height:24px;width:${parseInt("1")/parseInt(quantityrequested) * 100}%';
    this.configStatus = Config.status;
  }
  @bindable locale;
  @bindable id;
  @bindable itemrequested;
  @bindable quantityrequested;
  @bindable quantitysatisfied;
  @bindable percentsatisfied;
  @bindable requestedon;
  @bindable configStatus;
  //end-aurelia-decorators
}
