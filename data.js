



var employees = [

    {"firstName":"Ster", "lastName":"War", "booksSold":108, "age":56},
    {"firstName":"Shachar", "lastName":"Romi", "booksSold":98, "age":24},
    {"firstName":"Sharon", "lastName":"Romi", "booksSold":87, "age":25},
    

];


var books = [

    {"id":1, "name":"Game Of Thrones"}, 
    {"id":2, "name":"pulp fiction"},
    {"id":3, "name":"kill bill"},
    {"id":4, "name":"fear and loathing in las vegas"}
    
];










exports.getEmployees = function() {


	return employees;
}



exports.getBooks = function() {


	return books;
}



