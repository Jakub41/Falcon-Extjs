/* Custom proxy class to convert CSV to JSON */
Ext.define('jakub.utils.CSVReader', {
	extend: 'Ext.data.reader.Json',
	alias: 'reader.csv',
	// override
	getResponseData: function (response) {
		try {
			return this.readRecords(response.responseText);
		} catch (ex) {
			error = new Ext.data.ResultSet({
				total: 0,
				count: 0,
				records: [],
				success: false,
				message: ex.message
			});
			this.fireEvent('exception', this, response, error);
			console.log(error);
			return error;
		}
	},
	// override
	readRecords: function (strData) {
		var result = CSVConvertor.converToJson(strData);
		return this.callParent([result]);
	}
});