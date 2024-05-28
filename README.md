# RiskMap

## Overview
Client map  application for [PetaBencana platform](https://petabencana.id) . Read more project information [here](https://github.com/urbanriskmap/petabencana-docs/blob/master/README.md).
<br>
<br>
This platform is built using the Aurelia framework, with a few prerequisites. To get started, follow the prerequiste & installation steps.
____

### Supported deployments
* mapakalamidad.ph
* petabencana.id
* tabahinaqsha.pk

### Prerequiste
* Install NodeJS = 14.x
    * You can download it from [here](https://nodejs.org/en/).
* Install NPM 
    * Even though you may have the latest NodeJS, that doesn't mean you have the latest version of NPM. You can check your version with `npm -v`. If you need to update, run `npm install npm -g`.
* Install Aurelia CLI
    * `npm install aurelia-cli -g`

### Installation steps 
* Install the project dependencies
    * `npm install`
* Check if there is an environment.js file created in the src folder, if not create it. Check the troubleshooting guide for more details.
* By default, the deployment will be Indonesian. If you want to deploy a new country, create a file in deployments under the aurelia_project folder with the file name corresponding to the two-letter country code. Check the map configuration for more details.
* Add the new country deployment-specific env params in the environment.js file in the aurelia_project folder. Check the environment configuration for more details.

### Steps to run the App
* Run `npm start`. This will start a dev server on http://localhost:9000/
* In the package.json file, within the scripts section, we utilize the $DEP variable in the start script to specify the country for local deployment. 
* To run your specific deployment locally change the dep value to your specific country id, which was specified in the specific country file in the deployment folder.

___

### Project Structure
The project structure is as follows:
- **assets**: Static assets such as fonts, images, vector graphics, and icons
- **aurelia_project**: Aurelia generated folder containing config (Check Configuration section for more details) and framework specific libraries
- **scripts**: Generated scripts from the build process
- **src**: The main application code with the following files and subfolders
  * **components**: Contains custom-elements to be used in routes (Read more about Aurelia Custom Elements [here](http://aurelia.io/hub.html#/doc/article/aurelia/framework/latest/cheat-sheet/9))
  * **resources**: Contains globally available resource files
    * **locales**: translation files for supported locales (en and id currently)
    * **style_sheets**: contains the parent .less files that get imported in the .less files accompanying all HTML templates
    * **config.js**: Check Configuration section for more details
    * **reportCard.js**: singleton class shared across all cards
  * **routes**: Read more about how Aurelia Routing works [here](http://aurelia.io/hub.html#/doc/article/aurelia/router/latest/router-configuration/1)
    * **cards**: Contains card decks for GRASP interface (View and view model for each card. Read Card decks section for more information.)
    * **landing**: Contains template route for maps
- **test**: The tests to run (Check Testing section for more details)

___

### Card Decks
- Refer assets/card-decks/README.md
___

### Routing
* *App router is configured in /src/app.js*
    * '/' & '/map' *map landing page*
    * '/map/:city' *query parameter (city): flyTo supported city*
    * '/map/:city/:report' *query parameter (city & report): flyTo queried report id in a supported city*
    * '/cards/:disaster/:id' *query parameter (disaster type & one time card id): Disaster type specifies which card-deck to load, card id is the link to access report cards, (use test123 as card id in dev & local environments*

* *Additional query parameters*
    * ?lang : Use for setting language to one of the supported languages (en || id).
    * ?tab : Use for opening the side pane set to one of the following tabs (report || map || info)
    * ?terms : Use for directly opening the privacy policy or user agreement popup (u_a || p_p)
    * eg. https://dev.petabencana.id/map?lang=en&tab=info

___

### Configuration
* Environment configuration
* In the environment.js file create a new object with the country name you want to add for deployment. The object should contain these key values.
    * *to run in local, update the following values in /aurelia_project/environments/local.js*
    * `debug` : (true/false) enable aurelia router logs in browser console
    * `testing` : (true/false) enable aurelia-testing plugin
    * `title` : local deployment name/title of the platform
    * `report_timeperiod` : This is the time period for reporting data
    * `tile_layer` : set map tile source url (allows using multiple tileLayers for development, staging, production, etc)
    * `data_server` : set url of cognicity server (Default value is http://localhost:8001/ if using [cognicity-serverless] (https://github.com/petabencana/cognicity-serverless))
    * `card_Server` : set url for generating cards
    * `app` : set it to map landing page url (Default value is http://localhost:9000/ if using this platform)
    * `default_language`: set it to one of the languages in `supported_languages` (Default is 'en')
    * `supported_languages`: set it to an array of languages you support (Default is ['en', 'id']. In case you add more languages, update  the array and add corresponding locale information in /src/resources/locales/TWO_LETTER_LANGUAGE_CODE.js)
    * `deep_links` : This key holds an array of objects representing deep links to various platforms or services. Each object contains a name key indicating the platform ['facebook', 'twitter', 'telegram'] and a link key containing the corresponding deep link URL.
    * `enable_test_cardid`: set to false to disable cardid=test123 in prod environments (Default is true for local and dev environments)

* Map Configuration
* For the new country deployment, create a new file with the name of country code in the deployments folder. The file should contain the configuration of country codes for the map. The country coordinates will be obtained from a GIS expert. Add these details manually in this specific format.
    * `id` : set the country code as an identifier
    * `height_units` : Units used for height measurement in platform
    * `supported_languages` : set it to an array of languages you support (Default is ['en', 'id']. In case you add more languages, update  the array and add corresponding locale information in /src/resources/locales/TWO_LETTER_LANGUAGE_CODE.js)
    * `map` : set the map realted configuration fron the country. It should contain 8 sections.
    * `instance_regions` : These are the provinces of the country, should contain these key and values
        * `region` : set a readable country code with district code without number
        * `bounds` : set the geographical bounds of the region using southwest['sw'] and northeast['ne'] coordinates
        * `center` : set the coordinates of center point of region.
    * `default_region` : set the default province with key values
        * `region` : set the default name/id for identifier
        * `bounds` : set the geographical bounds of the region using southwest['sw'] and northeast['ne'] coordinates
        * `center` : set the coordinates of center point of 
    * `sub_regions` : set the sub_regions of the region
        * `province` : set the name of the province to which region belongs
        * `center` : set the coordinates of center point of region.
    * `region_center` : set the center point of the entire regin covered by the map. It's represented by latitude and longitude coordinates.
    * `start_city_center` : set the center point of the intial city view when the map is loaded. It's represented by latitude and longitude coordinates.
    * `starting_zoom` : set the initial zoom level of the map when it's first loaded.
    * `minimum_zoom` : set the minimum level of zoom allowed on the map.
* After adding a new country deployment specific codes in the deployment folder follow the below steps to deploy it locally.
    * *to add new cities, update the `instance regions` in /src/resources/config.js > Config.map*
    * change and add appropriate locales in deployment specific folders.
    * Change and add appropriate links in sidepane.js
    * change and add city specific details in landing.js
    * Default supported cities are Jakarta, Surabaya, Bandung (Refer [here](https://docs.petabencana.id/routes/cities.html) for updates)
    * For every new instance region (city) added, set a three letter `region` code. And set the `bounds` to have southwest and northeast bounds of the city in `sw` and `ne` respectively.
    * The value set in `default_region` sets the initial map view in http://localhost:9000/map
    * *Set `map.center` in /src/routes/cards/location/location.js to the center of the new instance region you have added in map config files*

___   

### To build
* To generate a production build
    * Run `npm run build`
    * This will generate new scripts in scripts/ and also auto increment the reference numbers in index.html. Upload the following to the deployment destination (e.g. S3 bucket) protecting the structure:
```
assets/*
scripts/*
index.html
favicon.ico
```
___

### Troubleshooting Guide
* If there is no environment file is created. Then create a new file environment.js in the src folder and copy the contents from the environment.js file from the aurelia_project folder.
___

### Testing
Testing environment supported by [BrowserStack](https://www.browserstack.com/)

Do ('npm test') to build the project and run the tests.

If you want to run BrowserStack, you need to provide environment variables with your
username and password. Put `export BROWSERSTACK_USERNAME=yourUsername` and `export BROWSERSTACK_KEY=yourAccessKey` into
your ~/.bashrc or ~/.bash_profile in order for karma to pick up the browserstack credentials. Now run `source ~/bash_profile` and
npm test in order to build the bundle and run karama unit tests against it.

##e2e testing:

End to end testing is implemented using protractor, webdriver, and browserstack. First install protractor: `npm install -g protractor` then download the webdriver binaries: `webdriver-manager update`. In order to run the tests, the front end must be being served. Run au run in a separate terminal, and then run `protractor protractor.conf.js` which will start the tests. Protractor can be a little finicky, so you should let it run without interacting with other browser windows.

Mockapi to be used in the future.

## Contribution Guidelines

- Issues are tracked on [github](https://github.com/urbanriskmap/petabencana.id/issues).

### Release

The release procedure is as follows:
* Update the CHANGELOG.md file with the newly released version, date, and a high-level overview of changes. Commit the change.
* Update JSDoc documentation if required (see above).
* Create a tag in git from the current head of master. The tag version should be the same as the version specified in the package.json file - this is the release version.
* Update the version in the package.json file and commit the change.
* Further development is now on the updated version number until the release process begins again.

### License
