/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */

 //View
Ext.define('jakub.view.main.ActivityGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'activityGrid',
    requires:'jakub.view.main.ActivityGridViewModel',
    viewModel: 'activityGridViewModel',
    bind: {
      store: '{activityStore}'
    },
	title: 'Activities',
    columns: [{
      text: 'Activity',
      flex: 1,
      dataIndex: 'Activity'
    }, {
      text: 'Planned Start',
      flex: 1,
	  align: 'center',
      dataIndex: 'Planned Start'
    }, {
      text: 'Actual Start',
      align: 'center',
      flex: 1,
      dataIndex: 'Actual Start'
    }, {
      text: 'Planned End',
      flex: 1,
      align: 'center',
      dataIndex: 'Planned End'
    }, {
      text: 'Actual End',
      flex: 1,
      align: 'center',
      dataIndex: 'Actual End'
    }, {
    	text: 'On Schedule',
    	align: 'center',
    	width: 120,
    	renderer: function (value, metaData, record) {
    		var actStr = record.get('Actual End');
    		var plannedStr = record.get('Planned End');
    		var actStrArr = actStr.split('.', 3);
    		var plannedStrArr = plannedStr.split('.', 3);
    		var actualEndDate = new Date(actStrArr[2], actStrArr[1], actStrArr[0]);
    		var plannedEndDate = new Date(plannedStrArr[2], plannedStrArr[1], plannedStrArr[0]);
    		if (actualEndDate > plannedEndDate) {
    			metaData.style = "color:red;";
    			return 'NO';
    		}
    		else {
    			metaData.style = "color:green;";
    			return 'YES';
    		}
    	}
    },{
    	text: 'Total Days',
    	align: 'center',
    	columns: [
			{
				text: 'Assigned',
				renderer: function (value, metaData, record) {
					var	plannedStrStr = record.get('Planned Start'),
						plannedEndStr = record.get('Planned End'),
						plannedStrArr = plannedStrStr.split('.', 3),
						plannedEndStrArr = plannedEndStr.split('.', 3),
						plannedStrDate = new Date(plannedStrArr[2], plannedStrArr[1], plannedStrArr[0]),
						plannedEndDate = new Date(plannedEndStrArr[2], plannedEndStrArr[1], plannedEndStrArr[0]);
					return Math.round((plannedEndDate - plannedStrDate) / (1000 * 60 * 60 * 24));
				}
			},
			{
				text: 'Taken',
				renderer: function (value, metaData, record) {
					var actualStrStr = record.get('Actual Start'),
						actualEndStr = record.get('Actual End'),
						actualStrArr = actualStrStr.split('.', 3),
						actualEndStrArr = actualEndStr.split('.', 3),
						actualStrDate = new Date(actualStrArr[2], actualStrArr[1], actualStrArr[0]),
						actualEndDate = new Date(actualEndStrArr[2], actualEndStrArr[1], actualEndStrArr[0]);

					return Math.round((actualEndDate - actualStrDate) / (1000 * 60 * 60 * 24));
				}
			}
    	]
    },
	{
      text: 'Responsible User',
      flex: 1,
      dataIndex: 'Responsible user'
	}]
});
