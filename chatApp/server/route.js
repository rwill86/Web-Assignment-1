var url = require('url');
var fs = require('fs');

//function renderHTML(path, response){
	//fs.readFile(path, null, function(error, data){
		//if(error){
			 //response.writeHead(404);
			 //response.write('File not found');
		//} else{
			 //response.write(data);
		//}
		 //response.end();
	//});
//}

module.exports = function(app, path){
	 console.log('Routes Started');
	 //handleRequest: function(request, response){
		 //var path = url.parse(request.url).pathname;
		 //if(path == '/' || path == '/index'){
			 //renderHTML('../dist/chat/index.html', app);
		 //} //else if(path == '/account'){
			 //renderHTML('./www/account.html', response);
		 //} else if(path == '/login'){
			 //renderHTML('./www/login.html', response);
		 //}else{
			 //renderHTML(null, response);
			 //response.writeHead(404);
             //response.write('Route not defined');
             //response.end();
		 //}
	 //}
};
