var portfolioScript = {}

var SHOWING = false;

portfolioScript.show = function show(id) {
	id = id.replace("Header", "");
	var selectedBio = document.getElementById(id);
	if (SHOWING) {
		return;
	}
	if (selectedBio.style.display != "none") {
		return;
	}
	SHOWING = true;
	var frontpage = document.getElementById("frontpage");
	var aboutMe = document.getElementById("aboutMe");
	var coding = document.getElementById("coding");
	var projects = document.getElementById("projects");
	var contactinfo = document.getElementById("contactinfo");
	var headerarray = [frontpage, aboutMe, coding, projects, contactinfo];
	var selectedHeader = document.getElementById(id + "Header");
	var headerDiv = document.getElementById("header");
	selectedHeader.style.color = "red";
	for (var i in headerarray) {
		if (headerarray[i].id == id) {
			continue;
		}
		var header = document.getElementById(headerarray[i].id + "Header");
		header.style.color = "black";
		$("#" + headerarray[i].id).fadeOut(275);
	}
	$("#" + id).delay(400).fadeIn(300);
	setTimeout(function () {
		SHOWING = false;
	}, 580)
}

portfolioScript.createBufferBlock = function createBufferBlock() {
	let header = document.getElementById("header");
	let bufferBlock = document.getElementById("bufferDiv");
	let textContainer = document.getElementById("textContainer")
	bufferBlock.style.height = header.offsetHeight + "px";
	textContainer.style.top = bufferBlock.style.height + "px";
}

portfolioScript.onMouseOver = function onMouseOver(header) {
	if (header.style.color != "red") {
		var ele = header.id;
		document.getElementById(ele).style.color = "#999E9E";
	}
}

portfolioScript.onMouseLeave = function onMouseLeave(header) {
	if (header.style.color != "red") {
		var ele = header.id;
		document.getElementById(ele).style.color = "black";
	}
}

/*function generateOnClick() {
	let projects = document.getElementById("projectContainer").children;
	for (let i = 0; i < projects.length; i++) {
		projects[i].onclick = function () {
			let frame = document.getElementById("projectFrame");
			frame.src = "project" + (i + 1) + "/index.html";
		}
	}
}*/
		
/*function resizeFrame(frame) {
	frame.style.width = frame.contentWindow.document.documentElement.scrollWidth + 'px';
	frame.style.height = frame.contentWindow.document.documentElement.scrollHeight + 'px';
}*/