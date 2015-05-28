
var util = require('util');
var data = require('./data');

var emp,books;






books=data.getBooks();
emp = data.getEmployees();

	

//jsom data//


exports.bestSeller = function() {

	var i = 0 , temp = 0;
	var maxString = emp[i].booksSold;

	for(i = 0 ; i < emp.length; i++){


		if(maxString < emp[i].booksSold){

			maxString = emp[i].booksSold;
			temp = i;
		}

	}


	return emp[temp];
}



exports.getBookById = function(id) {

	var i=0 , check = 0;


	for(i = 0 ; i < books.length; i++){


		if(id == books[i].id){

			check = 1;
			break;
		}

	}

}

exports.getAllEmp = function() {


	return emp;
}
