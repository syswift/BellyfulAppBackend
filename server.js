var app = require('express')(); // Create an instance of an Express app

var mobileApp = require('azure-mobile-apps')(); // Create an instance of a Mobile App with default settings

mobileApp.tables.add('post'); // Create a table for 'Book' with default settings
mobileApp.tables.add('Users'); //cc
mobileApp.tables.add('client');
mobileApp.tables.add('Fridge');

app.use(mobileApp);
app.listen(process.env.PORT || 3000);
