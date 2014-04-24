/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var App = require('app');

App.MainDashboardView = Em.View.extend({

  name: 'mainDashboardView',
  templateName: require('templates/main/dashboard'),

  selectedBinding: 'controller.selectedCategory',
  categories: function() {
    var items = [{
      name: 'widgets',
      url: 'dashboard.widgets',
      label: Em.I18n.t('dashboard.widgets.title'),
      isActive: function () {
        return 'widgets' === this.get('selected');
      }.property('selected')
    },
    {
      name: 'charts',
      url: 'dashboard.charts.heatmap',
      label: Em.I18n.t('dashboard.heatmaps.title'),
      isActive: function () {
        return 'charts' === this.get('selected');
      }.property('selected')
    }];
    return items;
  }.property(''),
  NavItemView: Ember.View.extend({
    tagName: 'li',
    classNameBindings: 'isActive:active'.w(),
    isActive: function () {
      return this.get('item') === this.get('parentView.selected');
    }.property('item', 'parentView.selected')
  })
});
