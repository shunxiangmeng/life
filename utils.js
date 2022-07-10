function http_request(method, url, query, data, callback) {
	var xmlhttp;
	if (window.XMLHttpRequest){
		// IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
		xmlhttp = new XMLHttpRequest();
	} else {
		// IE6, IE5 浏览器执行代码
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && (xmlhttp.status == 200 || xmlhttp.status == 201)) {
			if (callback != null) {
				callback(JSON.parse(xmlhttp.responseText));
			}
		}
	}
	xmlhttp.open(method, url+query, true);
	xmlhttp.setRequestHeader("X-LC-Id", "KaJCHDQOnTAMEFXevwVkiQVj-gzGzoHsz");
	xmlhttp.setRequestHeader("X-LC-Key", "gSbhSM8oUPrcJwTFGIjA3Hsq");
	xmlhttp.setRequestHeader("Content-Type", "application/json; charset=utf-8");
	xmlhttp.send(data);
}