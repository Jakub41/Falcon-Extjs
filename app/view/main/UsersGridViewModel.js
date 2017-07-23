Ext.define('jakub.view.main.UsersGridViewModel', {
    extend: 'Ext.app.ViewModel',
    requires: 'jakub.model.UsersModel',
    alias: 'viewmodel.usersGridViewModel',
    stores: {
        usersStore: {
            model: 'jakub.model.UsersModel',
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url: '/CSV/FromFalcon/users.csv',
                reader: 'csv'
            }
        }
    }
});