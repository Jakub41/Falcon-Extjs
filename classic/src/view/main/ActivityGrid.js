/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */

 //View
Ext.define('myapp.view.main.ActivityGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'activityGrid',
    viewModel: 'activityGrid',

    bind: {
      store: '{activityStore}'
    },

    tbar: [{
      xtype: 'label',
      text: 'activities.csv'
    }],
    columns: [{
      text: 'Activity',
      flex: 1,
      dataIndex: 'Activity'
    }, {
      text: 'Planned Start',
      flex: 1,
      dataIndex: 'Planned Start'
    }, {
      text: 'Actual Start',
      flex: 1,
      dataIndex: 'Actual Start'
    }, {
      text: 'Planned End',
      flex: 1,
      dataIndex: 'Planned End'
    }, {
      text: 'Actual End',
      flex: 1,
      dataIndex: 'Actual End'
    }, {
      text: 'Responsible user',
      flex: 1,
      dataIndex: 'Responsible user'
    }]
});
