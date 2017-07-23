/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('jakub.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',
    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
		'jakub.view.main.EffectChart',
		'jakub.view.main.UsersGrid',
		'jakub.view.main.ActivityGrid',
        'jakub.view.main.MainController',
        'jakub.view.main.MainModel',
        'jakub.view.main.List',
		'jakub.controller.UploadController'
    ],
    controller: 'main',
    viewModel: 'main',
    ui: 'navigation',
    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,
    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },
    tabBar: {
    	flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },
    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },
    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },
    items: [{
        title: 'Users',
        iconCls: 'fa-user',
        layout: 'fit',
        items: [{
            xtype: 'usersGrid'
        }]
    }, {
        title: 'Activities',
        iconCls: 'fa-bolt',
        layout: 'fit',
        items: [{
            xtype: 'activityGrid'
        }]
    }, {
        title: 'Effects',
        iconCls: 'fa-bar-chart',
        layout: 'fit',
		items: [{
			xtype: 'panel',
			layout: 'fit',
			title: 'Effects',
			items: [{
				xtype: 'effectiveChart'
			}]
		}]
    },{
        title: 'Upload',
        iconCls: 'fa-upload',
        layout: 'fit',
        items: [{
			xtype: 'grid',
        	title: 'Upload CSV',
        	controller: 'uploadController',
        	tbar: [
				{
					xtype: 'fileuploadfield',
					reference: 'uploadControl',
					fieldLabel: 'CSV File',
					labelAlign: 'right',
					buttonText: 'Select CSV..',
					width: 300
				}, {
					xtype: 'splitter'
				}, {
					xtype: 'button',
					text: 'Upload',
					handler: 'onUploadClick'
				}, {
					xtype: 'displayfield',
					labelAlign: 'right',
					fieldLabel: 'File Name',
					fieldStyle: 'color:green; font-weight:bold',
					bind: {
						value: '{fileName}'
					}
				}, {
					xtype: 'tbfill'
				}, {
					xtype: 'button',
					text: 'Reset',
					handler: 'onReset'
				}
        	],
        	store: new Ext.data.Store(),
        	columns: []
        }]
    }]
});