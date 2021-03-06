// Meteor Imports
	import { Meteor } from 'meteor/meteor';
	import { Mongo } from 'meteor/mongo';
	import 'reflect-metadata';
	import 'zone.js/dist/zone';
	
// Angular Imports 
	import { Component, ViewEncapsulation, provide } from '@angular/core';
	import { bootstrap } from 'angular2-meteor-auto-bootstrap';
	import { APP_BASE_HREF } from '@angular/common';
	import { HTTP_PROVIDERS } from '@angular/http';
	import { InjectUser } from 'angular2-meteor-accounts-ui';
		
// Angular Material Imports
	import { MATERIAL_PROVIDERS, MATERIAL_DIRECTIVES } from 'ng2-material';
	import { MeteorComponent } from 'angular2-meteor';
	import { OVERLAY_PROVIDERS } from '@angular2-material/core/overlay/overlay';
		
// Toolbar
  import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';

// Icon
  	import { MD_ICON_DIRECTIVES, MdIconRegistry } from '@angular2-material/icon';

// Import SimpleMDE
	// let mde = require("./simplemde");
	// import * as mde from './simplemde';
	// import SimpleMDE from 'simplemde';
	// import mde = require("./simplemde");

// Declare Global Variable
	declare var SimpleMDE: any;

// Define Editor Component
	@Component({
		selector: 'tuxlab-mdeditor',
		templateUrl: '/client/imports/ui/components/mdeditor/mdeditor.html',
		directives: [MATERIAL_DIRECTIVES,
					 MD_TOOLBAR_DIRECTIVES,
					 MD_ICON_DIRECTIVES],
		viewProviders: [ MdIconRegistry ],
		providers: [ OVERLAY_PROVIDERS ],
		encapsulation: ViewEncapsulation.None
	})

// Export Editor Class 
	export class MDEditor {
		testData: String = "# Title";
		
		constructor(mdIconRegistry: MdIconRegistry) {
			// Create Icon Font
			mdIconRegistry.registerFontClassAlias('tux', 'tuxicon');
			mdIconRegistry.setDefaultFontSetClass('tuxicon');
			
			// let simplemde = new SimpleMDE();
			// var simplemde = new SimpleMDE();	
		}
	}
