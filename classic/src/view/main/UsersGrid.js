/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */

 //View
Ext.define('jakub.view.main.UsersGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'usersGrid',
    viewModel: 'usersGrid',

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
