

var url = require("url");
var bookStoreModule = require('./bookStoreModule');
var http = require('http');
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;




app.get("/bestSeller", function(req, res){

	var msg = bookStoreModule.bestSeller();

	app.set("json spaces", 1);
	res.json(msg);
});


app.get("/getAllEmp", function(req, res){

	var msg = bookStoreModule.getAllEmp();

	app.set("json spaces", 1);
	res.json(msg);
});


app.get("/BooksByID/:bookID", function(req, res){

	var msg = bookStoreModule.getBookById(req.params.bookID);

	app.set("json spaces", 1);
	res.json(msg);
});




app.get("/find", function(req, res){

	var urlPath = url.parse(req.url, true);
	var query = urlPath.query;
	var msg = null;


	if(query.price != null && query.title == null){


		msg = bookStoreModule.getBookByPrice(query.price);


	}
	else if(query.title != null && query.price == null){


		msg = bookStoreModule.getBookByTitle(query.title);

	}
	else if(query.title != null && query.price != null){


		msg = bookStoreModule.getBookByBoth(query.price, query.title);


	}
	else{

		msg= "Custom Error Page, Params should be sent as : URL/find ? price=xx & title=xx";
	}


	res.json(msg);


});




app.listen(port);



console.log('listening on port '+port);