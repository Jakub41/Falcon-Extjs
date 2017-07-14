/**
 * This view is an example list of people.
 */
Ext.define('jakub.view.main.List', {
    extend: 'Ext.grid.Grid',
    xtype: 'usersGrid',

    viewModel: 'main',

    bind: {
      store: '{usersStore}'
    },

    tbar: [{
      xtype: 'label',
      text: 'Users.csv'
    }],
    columns: [{
      text: 'Name',
      flex: 1,
      dataIndex: 'Name'
    }, {
      text: 'Firstname',
      flex: 1,
      dataIndex: 'Firstname'
    }, {
      text: 'Lastname',
      flex: 1,
      dataIndex: 'Lastname'
    }, {
      text: 'Department',
      flex: 1,
      dataIndex: 'Department'
    }, {
      text: 'E-Mail *',
      flex: 1,
      dataIndex: 'E-Mail *'
    }, {
      text: 'Login',
      flex: 1,
      dataIndex: 'Login'
    }, {
      text: 'Status',
      flex: 1,
      dataIndex: 'Status'
    }]
});

Ext.define('jakub.view.main.ActivityGrid', {
    extend: 'Ext.grid.Grid',
    xtype: 'activityGrid',
    viewModel: 'main',

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
