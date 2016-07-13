// Meteor Imports
  import { Meteor } from 'meteor/meteor';
  import { Mongo } from 'meteor/mongo';
  import 'reflect-metadata';
  import 'zone.js/dist/zone';

// Angular Imports
  import { Component } from '@angular/core';

  import { APP_BASE_HREF } from '@angular/common';
  import { HTTP_PROVIDERS } from '@angular/http';


// Angular Material Imports
  import { MATERIAL_PROVIDERS, MATERIAL_DIRECTIVES } from 'ng2-material';
  import { MeteorComponent } from 'angular2-meteor';

  // Icon
  import { MD_ICON_DIRECTIVES, MdIconRegistry } from '@angular2-material/icon'

// Define Privacy Component
  @Component({
    selector: 'tuxlab-privacy',
    templateUrl: '/client/imports/ui/pages/static/privacy.html',
  })

export default class Privacy extends MeteorComponent {
  constructor() {
    super();
  }
}
