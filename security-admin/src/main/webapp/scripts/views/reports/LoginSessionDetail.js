/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

 
define(function(require){
    'use strict';

	var Backbone		= require('backbone');
	var App				= require('App');
	var XAEnums 		= require('utils/XAEnums');
	var XAEnums 		= require('utils/XAUtils');
	var XALinks			= require('modules/XALinks');
	var LoginSessionDetail_tmpl = require('hbs!tmpl/reports/LoginSessionDetail_tmpl');
	
	var LoginSessionDetail = Backbone.Marionette.ItemView.extend(
	/** @lends LoginSessionDetail */
	{
		_viewName : LoginSessionDetail,
		
    	template: LoginSessionDetail_tmpl,
        templateHelpers :function(){
        },
    	/** ui selector cache */
    	ui: {
    		loginTime : '[data-id="loginTime"]'
    	},

		/** ui events hash */
		events: function() {
			var events = {};
			//events['change ' + this.ui.input]  = 'onInputChange';
			return events;
		},

    	/**
		* intialize a new LoginSessionDetail ItemView 
		* @constructs
		*/
		initialize: function(options) {
			console.log("initialized a LoginSessionDetail ItemView");

			_.extend(this, _.pick(options, ''));
			this.bindEvents();
		},

		/** all events binding here */
		bindEvents : function(){
			/*this.listenTo(this.model, "change:foo", this.modelChanged, this);*/
			/*this.listenTo(communicator.vent,'someView:someEvent', this.someEventHandler, this)'*/
		},

		/** on render callback */
		onRender: function() {
			this.initializePlugins();
			App.sessionId = this.model.get('id');
			var date = new Date(this.model.get('authTime')).toString();
			var timezone = date.replace(/^.*GMT.*\(/, "").replace(/\)$/, "");
			this.ui.loginTime.html(Globalize.format(new Date(this.model.get('authTime')),  "MM/dd/yyyy hh:mm:ss tt")+' '+timezone);
		},
		/** all post render plugin initialization */
		initializePlugins: function(){
		},
		/** on close */
		onClose: function(){
		}

	});

	return LoginSessionDetail;
});
