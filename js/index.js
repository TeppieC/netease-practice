function getCookie(Name) {
    var cookie = {};
    var all = document.cookie;
    if (all === '')
        return null;
    var list = all.split(';');
    for (var i = 0; i < list.length; i++) {
        var item = list[i];
        var p = item.indexOf('=');
        var name = item.substring(0, p);
        name = decodeURIComponent(name);
        var value = item.substring(p + 1);
        value = decodeURIComponent(value);
        cookie[name] = value;
    }
    return cookie[Name];
}

function setCookie(name, value, expires, path, domain, secure) {
    var cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
    if (expires)
        cookie += ';expires=' + expires.toGMTString();
    if (path)
        cookie += ';path=' + path;
    if (domain)
        cookie += ';domain=' + domain;
    if (secure)
        cookie += ';secure=' + secure;
    document.cookie = cookie;
}

function removeCookie(name, path, domain) {
    setCookie(name, '', new Date(0), path, domain);
}

var closeNotice = function(){
	if(getCookie('hide-notice')=='true'){
		var noticeBar = document.getElementsByClassName("g-tips")[0];
		noticeBar.className+=' f-hide';
		return;}			
	var noticeBar = document.getElementsByClassName("g-tips")[0];
	var noTipButton = document.getElementsByClassName('no-tips')[0];
	noTipButton.addEventListener('click', 
		function(event) {
			noticeBar.className+=' f-hide';
			setCookie('hide-notice','true',new Date())}, false);}();

function changePage(){
	var controls = document.querySelector(".g-banner .m-banner .m-controls").childNodes;
	console.log(controls.length);
	for (var i=0;i<controls.length;i++){
		//controls[i].addEventListener('click', handler, false);
		addClickHandler(controls[i],i);
	}

	function addClickHandler(elem, index) {
    	elem.addEventListener('click', function(e) {
			var current = document.querySelector(".g-banner .m-banner .m-controls .cur");
			var clicked = controls[index];
			current.className = "";
			clicked.className = "cur";
        }, false);
	}

	/*
	var handler = function(event, index){
		var current = document.querySelector(".g-banner .m-banner .m-controls .cur");
		var clicked = controls[index];
		current.className = "";
		clicked.className = "cur";
	}*/
}
changePage();

function slide(){
	var current = document.getElementsByClassName('current')[0];
	var next = current.nextSibling;
	current.className = 'banner-picture';
	//console.log(next.nodeName);
	if (next==null){
		next = document.querySelectorAll('.m-banner .banners img')[0];
	}
	next.className += " current";
}

var autoSlide = function(){timer=setInterval(slide,5000);}();

//find the highest z-index
//set to invisible
//find its sibling
/*
(window.onload = function(){
	function getElementsByClassName(root, className) {
	  // 特性侦测
	  if (root.getElementsByClassName) {
	    // 优先使用 W3C 规范接口
	    return root.getElementsByClassName(className);
	  } else {
	    // 获取所有后代节点
	    var elements = root.getElementsByTagName('*');
	    var result = [];
	    var element = null;
	    var classNameStr = null;
	    var flag = null;

	    className = className.split(' ');

	    // 选择包含 class 的元素
	    for (var i = 0, element; element = elements[i]; i++) {
	      classNameStr = ' ' + element.getAttribute('class') + ' ';
	      flag = true;
	      for (var j = 0, name; name = className[j]; j++) {
	        if (classNameStr.indexOf(' ' + name + ' ') === -1) {
	          flag = false;
	          break;
	        }
	      }
	      if (flag) {
	        result.push(element);
	      }
	    }
	    return result;
	  }
	}

	var tipsBar = (function(){
		var tipBar = document.getElementById("m-tips");
		var noTipButton = document.getElementById('no-tips');
		// 事件处理函数
		var clickHandler = function(event, tipBar) {
				tipBar.className+='f-hide';
		};

		if(noTipButton){
			noTipButton.addEventListener('click', clickHandler, false);
		}
	}());
})()
*/



