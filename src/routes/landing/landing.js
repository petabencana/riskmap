import $ from 'jquery';
import {Config} from '../../resources/config';
import { bindable, customElement, demoIntercept } from "aurelia-framework";
import { inject, observable } from "aurelia-framework";
import { HttpClient, Headers } from 'aurelia-http-client';

//start-aurelia-decorators
@customElement("landing")

@inject(Config, HttpClient)
//end-aurelia-decorators

export class Landing {
  //start-aurelia-decorators
  @bindable
  helper;
  @bindable cities;
  @bindable selcity;
  @bindable switchCity;
  @bindable termscontents;
  @bindable initializetab;
  @bindable changeCity;
  //end-aurelia-decorators
  @observable query;
  constructor(Config) {
    this.config = Config.map;
    this.configData = Config;
  }

  activate(params, routerConfig) {
    this.queried_city = params.city;
    this.report_id = params.report;
    this.queried_lang = (this.configData.supported_languages.indexOf(params.lang) > -1) ? params.lang : null;
    this.queried_tab = (params.tab === 'info' || params.tab === 'map' || params.tab === 'report') ? params.tab : null;
    this.queried_terms = (params.terms === 'u_a' || params.terms === 'p_p') ? params.terms : null;
  }

  queryChanged(newval, oldval) {
    this.searchText = newval;
    const map = Object.keys(this.config.instance_regions);
    let newObj = map.filter(value => {
      return value.indexOf(newval) != -1 ? value : null;
    });
    this.searchResult = newObj;
  }

  isCitySupported(querycity) {
    return querycity in this.config.instance_regions;
  }

  switchCity(city) {
    this.changeCity(city, true);
    this.closePane();
  }

  //report button on the map
  reportTab(event) {
    $('#reportLink').toggle('slide');
  }

  openClose(event) {
    console.log(event)
    $('#reportData').show()
  }

  resizeSidePane() {
    $('#sidePane').css({
      'height': ($(window).height() - $('#topBar').height()) + 'px'
    });
  }

  attached() {
    // If desktop, open side pane to 'info' tab
    
    // else if (this.queried_terms) {
    //   $('#screen').show();
    //   $('#termsPopup').show();
    // }

    // Modify side pane height on the fly
    this.resizeSidePane();
    $(window).resize(() => {
      this.resizeSidePane();
    });
    if (!(/Mobi/.test(navigator.userAgent)) && !this.report_id) {
      this.mapModel.togglePane('#sidePane', 'show', false);
    }
  }

  toggleLightbox(imageurl) {
    this.imageurl = imageurl;
  }

  initiateReport(type) {
    return new Promise((resolve, reject) => {
      if (type) {
        const client = new HttpClient()
          .configure(x => {
            x.withHeader('x-api-key', this.config.data_server_key);
          });
        const url = this.config.data_server +
        'cards/';
        const body = {
          username: 'web_guest',
          language: 'id',
          network: 'website'
        };

        client.post(url, body)
          .then(result => {
            if (result.statusCode && result.statusCode === 200) {
              resolve(JSON.parse(result.response).cardId);
            } else {
              reject(result);
            }
          })
          .catch(error => reject(error));
      } else {
        reject('Error with report id');
      }
    });
  }

  reportDisaster(type) {
    let self = this;
    self.initiateReport(type).then(cardId => {
      window.location = self.config.cards_server + type + '/' + cardId;
    });
  }

  select_report(typeReport) {
    let toggleSrc = function(element, baseIcon, extention = '.png') {
      $(element).attr('src', function(index, attr) {
        return attr == baseIcon+extention ? baseIcon+'_Hover' + extention : baseIcon + extention;
      });
    };

    if (typeReport === 'fire') {
      toggleSrc('#fire', '/assets/icons/Add_Report_Icon_Fire');
      $('#fireLink').toggle('slide');
    }

    if (typeReport === 'haze') {
      toggleSrc('#haze', '/assets/icons/Add_Report_Icon_Haze');
      $('#hazeLink').toggle('slide');
    }

    if (typeReport === 'earthquake') {
      toggleSrc('#earthquake', '/assets/icons/Add_Report_Icon_Earthquake');
      $('#earthquakeLink').toggle('slide');
    }

    if (typeReport === 'earthquakeAccess') {
      toggleSrc('#earthquakeAccess', '/assets/icons/Earthquake_2', '.svg');
      $('#earthquakeAccessLink').toggle('slide');
    }

    if (typeReport === 'volcano') {
      toggleSrc('#volcano', '/assets/icons/Add_Report_Icon_Volcano');
      $('#volcanoLink').toggle('slide');
    }
  }
}
