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
		addClickHandler(controls[i],i);
	}

	function addClickHandler(elem, index) {
    	elem.addEventListener('click', function(e) {
			var current = document.querySelector(".g-banner .m-banner .m-controls .cur");
			var clicked = controls[index];
			current.className = "";
			clicked.className = "cur";
			var banners = document.querySelector(".g-banner .m-banner .banners").childNodes;
			console.log(banners.length);
			for (var i=0;i<banners.length;i++){
				banners[i].className="banner-picture";
			}
			banners[index].className+=" current";
        }, false);
	}
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
	var controls = document.querySelector(".g-banner .m-banner .m-controls").childNodes;
	var banners = document.querySelector(".g-banner .m-banner .banners").childNodes;
	for (var i=0;i<banners.length;i++){
		if(banners[i].className=="banner-picture current"){
			for (var j=0;j<controls.length;j++){
				controls[j].className="";
			}
			controls[i].className = "cur";
		}
	}
}
var autoSlide = function(){timer=setInterval(slide,5000);}();

