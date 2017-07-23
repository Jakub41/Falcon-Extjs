/* Custom proxy class to convert CSV to JSON */
Ext.define('jakub.utils.CSVConvertor', {
	alternateClassName: 'CSVConvertor',
	statics: {
		converToJson: function (csvData) {
			try {
				if (csvData.records.length > 0) {
					return csvData.records;
				}
			} catch (e) { }

			var dataArr = Ext.util.CSV.decode(csvData);
			var fields = dataArr[0];
			var records = new Array();

			for (var i = 1; i < dataArr.length - 1; i++) {
				var record = {};
				for (j = 0; j < fields.length; j++) {
					if (fields[j])
						record[fields[j]] = dataArr[i][j];
				}
				records.push(record);
			}
			return records;
		}
	}
});