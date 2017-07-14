/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */

Ext.define('CsvReader', {
   extend: 'Ext.data.reader.Json',
   alias : 'reader.csv',

   // converts csv into json
   toJson: function(csvData){
     try {
       if (csvData.records.length > 0) {
         return csvData.records;
       }
     } catch (e) {}

     var lines = csvData.split("\n");
     var colNames = lines[0].split(",");
     var records = [];
     for(var i = 1; i < lines.length; i++) {
       if (lines[i] == "") continue;
       var record = {};
       var bits = lines[i].split(",");
       for (var j = 0; j < bits.length; j++) {
         record[colNames[j]] = bits[j];
       }
       records.push(record);
     }
     return records;
   },

   // override
   getResponseData: function(response) {
       try {
           return this.readRecords(response.responseText);
       } catch (ex) {
           error = new Ext.data.ResultSet({
               total  : 0,
               count  : 0,
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
   readRecords: function(strData) {
       var result = this.toJson(strData);
       return this.callParent([result]);
   }
});

Ext.define('jakub.view.main.UsersGridViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.usersGrid',

    stores: {
      usersStore: {
        autoLoad: true,
        fields: ['Name', 'Firstname', 'Lastname', 'Department', 'E-Mail *', 'Login', 'Status'],
        proxy: {
          type: 'ajax',
          url: 'http://localhost:1841/users.csv',
          reader: 'csv'
        }
      }
    }
});
