var portfolioScript = {}

portfolioScript.previewToggle = true
var SHOWING = false;

portfolioScript.show = function show(id) {
	id = id.replace("Header", "");
	let selectedBio = document.getElementById(id);
	if (SHOWING) {
		return;
	}
	if (selectedBio.style.display != "none") {
		return;
	}
	SHOWING = true;
	let frontpage = document.getElementById("frontpage");
	let aboutMe = document.getElementById("aboutMe");
	let coding = document.getElementById("coding");
	let projects = document.getElementById("projects");
	let contactinfo = document.getElementById("contactinfo");
	let headerarray = [frontpage, aboutMe, coding, projects, contactinfo];
	let selectedHeader = document.getElementById(id + "Header");
	let headerDiv = document.getElementById("header");
	selectedHeader.style.color = "red";
	for (let i in headerarray) {
		if (headerarray[i].id == id) {
			continue;
		}
		let header = document.getElementById(headerarray[i].id + "Header");
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

portfolioScript.addLinkPreview = function addLinkPreview() {
	let aboutMe = document.getElementById("aboutMe");
	for (const aTag of aboutMe.getElementsByTagName("a")) {
		let iframe = document.createElement("iframe");
		iframe.classList.add("linkPreview");
		iframe.src = aTag.href;
		/*iframe.src = "iFrame.php?url=" + aTag.href;*/
		aTag.appendChild(iframe);
	}

	let coding = document.getElementById("coding");
	for (const aTag of coding.getElementsByTagName("a")) {
		let iframe = document.createElement("iframe");
		iframe.classList.add("linkPreview");
		iframe.src = aTag.href;
		/*iframe.src = "iFrame.php?url=" + aTag.href;*/
		aTag.appendChild(iframe);
	}

	let projects = document.getElementById("projects");
	for (const aTag of projects.getElementsByTagName("a")) {
		let iframe = document.createElement("iframe");
		iframe.classList.add("linkPreview");
		iframe.src = aTag.href;
		/*iframe.src = "iFrame.php?url=" + aTag.href;*/	
		aTag.appendChild(iframe);
	}

	let allATags = document.getElementsByTagName("a");
	for (const aTag of allATags) {
		aTag.target = "_blank"
	}
}

portfolioScript.onMouseOver = function onMouseOver(header) {
	if (header.style.color != "red") {
		header.style.color = "#999E9E";
	}
}

portfolioScript.onMouseLeave = function onMouseLeave(header) {
	if (header.style.color != "red") {
		if (header.id == "previewToggle") {
			header.style.color = (portfolioScript.previewToggle) ? "#096bac" : "#df148b";
		} else {
			header.style.color = "black";
		}
	}
}

portfolioScript.switchPreviewToggle = function switchPreviewToggle(toggleEle) {
	portfolioScript.previewToggle = !portfolioScript.previewToggle;
	let toggle = (portfolioScript.previewToggle) ? "On" : "Off";
	toggleEle.innerHTML = "Preview toggle: " + toggle
}

portfolioScript.onLeaveYoutubePreview = function onLeaveYoutubePreview(e) {
	let linkPreview = $(e).children(".linkPreview");
	linkPreview.hide();
	if (linkPreview.attr("src").indexOf("youtube") > -1) {
		linkPreview[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
	};
}

portfolioScript.reducePianoAudio = function reducePianoAudio() {
	let videoEle = document.getElementById("pianoPlaying");
	videoEle.volume = 0.15;
}