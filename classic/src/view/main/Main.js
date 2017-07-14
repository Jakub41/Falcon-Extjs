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

        'jakub.view.main.MainController',
        'jakub.view.main.MainModel',
        'jakub.view.main.List'
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
        //title: 'Users',
        iconCls: 'fa-user',
        // The following grid shares a store with the classic version's grid as well!
        items: [{
            xtype: 'usersGrid'
        }]
    }, {
        title: 'Activities.csv',
        iconCls: 'fa-bolt',
        items: [{
            xtype: 'activityGrid'
        }]
    }, {
        title: 'Effects.csv',
        iconCls: 'fa-bar-chart',
        items: [{
            xtype: 'cartesian',
            legend: {
                position: 'right'
            },
            tbar: [{
                xtype: 'label',
                text: 'Effects.csv'
            }],
            store: {
                autoLoad: true,
                fields: ['Time', 'Plan', 'Actual'],
                proxy: {
                    type: 'ajax',
                    url: 'http://localhost:1841/effects.csv',
                    reader: 'csv'
                }
            },
            axes: [{
                type: 'numeric',
                position: 'left',
                title: '(%)',
                grid: true
            }, {
                type: 'category',
                position: 'bottom',
                grid: true
            }],
            series: [{
                type: 'bar',
                // stacked: false,
                xField: 'Time',
                yField: ['Plan', 'Actual']
            }]
        }]
    }]
});