<?php
//echo "helloworld";exit;
//phpinfo();exit;

$request_uri = $_SERVER["REQUEST_URI"];
preg_match('/^\/(list|view)\//', $request_uri, $matches);
$url_params = $_GET;
//print_r($matches);

if (!empty($matches)) {
	if ($matches[1] == "list") {
		include("config/menu.php");
		if ($url_params["type"] && $config["menu"]["type"][$url_params["type"]]) {
			$type = $config["menu"]["type"][$url_params["type"]];
			$curr_food = $config["menu"][$type];
			include("page/index.html");
			//print_r($curr_food);
			exit;
		}
	} else if ($matches[1] == "view") {
		include("config/menu.php");
		if ($url_params["fid"] && $url_params["type"] && $config["menu"]["type"][$url_params["type"]]) {
			$type = $config["menu"]["type"][$url_params["type"]];
			$curr_food = $config["menu"][$type];
			if (!empty($curr_food[$url_params["fid"]-1])) {
				$single_food = $curr_food[$url_params["fid"]-1];
				include("page/detail.html");
				//print_r($single_food);
				exit;
			}
		}
	} else {
		header("location: http://www.qiehaole.com/list/?type=1");
		exit;
	}
} else {
	header("location: http://www.qiehaole.com/list/?type=1");
	exit;
}

//include("List.html");
