Ext.define('jakub.controller.UploadController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.uploadController',
	onUploadClick: function () {
		var uploadControl = this.lookupReference('uploadControl');
		var file = uploadControl.extractFileInput().files[0];
		var reader = new FileReader();
		var _this = this;
		if (file) {
			if (file.name.split('.').pop() == 'csv') {
				reader.readAsText(file);

				reader.onload = function () {
					_this.getViewModel().set('fileName', file.name);
					_this.processCSVData(reader.result);
				}
			}
			else {
				Ext.Msg.alert('Upload Error', "File Type is not supported");
			}
		}
		else {
			Ext.Msg.alert('Select File', "Select CSV File");
		}
	},
	processCSVData: function (data) {
		var dataArray = CSVConvertor.converToJson(data);
		var fields = Object.keys(dataArray[0]);
		var columns = this.createGridColumns(fields);
		var grid = this.getView();
		grid.getStore().loadData(dataArray);
		grid.reconfigure(columns);
	},
	createGridColumns: function (fields) {
		var columns = [];
		for (var i = 0; i < fields.length; i++) {
			var column = {
				text: fields[i],
				dataIndex: fields[i],
				flex:1
			}
			columns.push(column);
		}

		return columns;
	},
	onReset: function () {
		this.getView().reconfigure([]);
		this.getView().getStore().removeAll();
		this.getViewModel().set('fileName', '');
	}
})