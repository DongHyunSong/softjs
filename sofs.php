<?php

$dir_base = getcwd()."/files/";
exec("mkdir -p ".$dir_base);
exec("chmod 777 ".$dir_base);

$data = isset($_POST["data"]) ? $_POST["data"] : "";
if ($data)
{
	$data = urldecode($data);
	$json = json_decode($data, true);
	
	$fmode = $json["fmode"];
	
	if ($fmode == "fwrite")
	{
		$fpath = $dir_base.$json["fpath"];
		$fbody = $json["fbody"];
		
		$handle = fopen($fpath, "w");
		echo fwrite($handle, $fbody);
		fclose($handle);
	}
	else if ($fmode == "fread")
	{
		$fpath = $dir_base.$json["fpath"];
		
		$handle = fopen($fpath, "r");
		echo fread($handle, filesize($fpath));
		fclose($handle);
	}
	else if ($fmode == "fappend")
	{
		$fpath = $dir_base.$json["fpath"];
		$fbody = $json["fbody"];
		
		$handle = fopen($fpath, "a");
		echo fwrite($handle, $fbody);
		fclose($handle);
	}
	else if ($fmode == "fsize")
	{
		$fpath = $dir_base.$json["fpath"];
		
		echo filesize($fpath);
	}
}

?>