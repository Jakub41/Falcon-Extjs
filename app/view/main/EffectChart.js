Ext.define('jakub.view.main.EffectChart', {
    extend: 'Ext.chart.CartesianChart',
    xtype: 'effectiveChart',
    legend: {
        position: 'right'
    },
    tbar: ['->', {
        xtype: 'segmentedbutton',
        width: 200,
        defaults: { ui: 'default-toolbar' },
        items: [{
                text: 'Stack',
                pressed: true
            },
            {
                text: 'Group'
            }
        ],
        listeners: {
            toggle: function(segmentedButton, button, pressed) {
                var chart = segmentedButton.up('cartesian'),
                    series = chart.getSeries()[0],
                    value = segmentedButton.getValue();

                series.setStacked(value === 0);
                chart.redraw();
            }
        }
    }, {
        text: 'Download',
        handler: function() {
            var chart = this.up('cartesian');
            if (Ext.os.is.Desktop) {
                chart.download({
                    filename: 'Effects'
                });
            } else {
                chart.preview();
            }
        }
    }],
    animation: {
        easing: 'backOut',
        duration: 500
    },
    store: {
        autoLoad: true,
        fields: ['Time', 'Plan', 'Actual'],
        proxy: {
            type: 'ajax',
            url: '/CSV/FromFalcon/effects.csv',
            reader: 'csv'
        }
    },
    animation: Ext.isIE8 ? false : true,
    axes: [{
        type: 'numeric',
        position: 'left',
        title: {
            text: 'Values'
        },
        grid: true
    }, {
        type: 'category',
        position: 'bottom',
        label: {
            rotate: {
                degrees: -45
            }
        },
        title: {
            text: 'Time'
        },
        grid: true,
        renderer: function(axis, label, layoutContext) {
            var dateLabel = label.split('.', 3),
                date = new Date(dateLabel[2], dateLabel[1], dateLabel[0]);
            return typeof date == 'object' ? Ext.Date.format(date, 'm/d/y') : label;
        }
    }],
    series: [{
        type: 'bar',
        xField: 'Time',
        yField: ['Plan', 'Actual'],
        highlight: {
            strokeStyle: 'black',
            fillStyle: 'gold'
        },
        tooltip: {
            trackMouse: true,
            width: 120,
            height: 50,
            renderer: function(toolTip, record, item) {
                var dateLabel = record.get('Time').split('.', 3),
                    date = new Date(dateLabel[2], dateLabel[1], dateLabel[0]);
                toolTip.setHtml('Date: ' + (typeof date == 'object' ? Ext.Date.format(date, 'm/d/y') : record.get('Time')) + '<br>' + item.field + ": " + Ext.util.Format.number(record.get(item.field), '0.00'));
            }
        }
    }]
})