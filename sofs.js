
var sofs = new Function();

sofs.prototype.query = function(obj)
{
	var params = "data="+encodeURIComponent(JSON.stringify(obj));
	
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "sofs.php", false);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.send(params);
	
	return xhr.responseText;
}

sofs.prototype.fread = function(fpath)
{
	var obj = new Object();
	obj.fmode = "fread";
	obj.fpath = fpath;
	
	return this.query(obj);
}

sofs.prototype.fwrite = function(fpath, fbody)
{
	var obj = new Object();
	obj.fmode = "fwrite";
	obj.fpath = fpath;
	obj.fbody = fbody;
	
	return this.query(obj);
}

sofs.prototype.fappend = function(fpath, fbody)
{
	var obj = new Object();
	obj.fmode = "fappend";
	obj.fpath = fpath;
	obj.fbody = fbody;
	
	return this.query(obj);
}

sofs.prototype.fsize = function(fpath)
{
	var obj = new Object();
	obj.fmode = "fsize";
	obj.fpath = fpath;
	
	return this.query(obj);
}

sofs.prototype.fexist = function(fpath)
{

}
