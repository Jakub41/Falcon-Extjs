/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */

Ext.define('jakub.view.main.ActivityGridViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.activityGridViewModel',
    requires: 'jakub.model.ActivityModel',
    stores: {
        activityStore: {
            model: 'jakub.model.ActivityModel',
            autoLoad: true,
            proxy: {
                type: 'ajax',
                url: '/CSV/FromFalcon/activities.csv',
                reader: 'csv'
            }
        }
    }
});