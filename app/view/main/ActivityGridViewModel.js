/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */

Ext.define('jakub.view.main.ActivityGridViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.activityGrid',

    stores: {
      activityStore: {
        autoLoad: true,
        fields: ['Activity', 'Planned Start', 'Actual Start', 'Planned End', 'Actual End', 'Responsible user'],
        proxy: {
          type: 'ajax',
          url: 'http://localhost:1841/activities.csv',
          reader: 'csv'
        }
      }
    }
});
