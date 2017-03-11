
var sofs = new Function();

sofs.prototype.query = function(post_body) {
	
	var params = "data="+encodeURIComponent(post_body);
	
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "sofs.php", false);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.send(params);
	
	return xhr.responseText;
}

sofs.prototype.fread = function(file_path) {

}

sofs.prototype.fwrite = function(file_path, file_body) {

}

sofs.prototype.fappend = function(file_path, file_body) {

}

sofs.prototype.fexist = function(file_path) {

}

sofs.prototype.fsize = function(file_path) {

}