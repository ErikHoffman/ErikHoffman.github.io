(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/styles.css":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./src/styles.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loading-area {\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 100vh;\r\n    overflow: hidden;\r\n}\r\n\r\nhtml {\r\n    background: #1e242a;\r\n    color: #F5F5F5;\r\n}\r\n\r\n.loading-area .spinner {\r\n    height: 200px;\r\n    width: 200px;\r\n    -webkit-animation: rotate 2s linear infinite;\r\n            animation: rotate 2s linear infinite;\r\n    -webkit-transform-origin: center center;\r\n            transform-origin: center center;\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    margin: auto;\r\n}\r\n\r\n.loading-area .spinner .path {\r\n    stroke-dasharray: 1, 200;\r\n    stroke-dashoffset: 0;\r\n    -webkit-animation: dash 1.5s ease-in-out infinite;\r\n            animation: dash 1.5s ease-in-out infinite;\r\n    stroke-linecap: round;\r\n    stroke: #ddd;\r\n}\r\n\r\n@-webkit-keyframes rotate {\r\n    100% {\r\n        -webkit-transform: rotate(360deg);\r\n                transform: rotate(360deg);\r\n    }\r\n}\r\n\r\n@keyframes rotate {\r\n    100% {\r\n        -webkit-transform: rotate(360deg);\r\n                transform: rotate(360deg);\r\n    }\r\n}\r\n\r\n@-webkit-keyframes dash {\r\n    0% {\r\n        stroke-dasharray: 1, 200;\r\n        stroke-dashoffset: 0;\r\n    }\r\n    50% {\r\n        stroke-dasharray: 89, 200;\r\n        stroke-dashoffset: -35px;\r\n    }\r\n    100% {\r\n        stroke-dasharray: 89, 200;\r\n        stroke-dashoffset: -124px;\r\n    }\r\n}\r\n\r\n@keyframes dash {\r\n    0% {\r\n        stroke-dasharray: 1, 200;\r\n        stroke-dashoffset: 0;\r\n    }\r\n    50% {\r\n        stroke-dasharray: 89, 200;\r\n        stroke-dashoffset: -35px;\r\n    }\r\n    100% {\r\n        stroke-dasharray: 89, 200;\r\n        stroke-dashoffset: -124px;\r\n    }\r\n}\r\n\r\n@keyframes fadein {\r\n    from {\r\n        opacity: 0;\r\n    }\r\n    to {\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n/* Firefox < 16 */\r\n\r\n/* Safari, Chrome and Opera > 12.1 */\r\n\r\n@-webkit-keyframes fadein {\r\n    from {\r\n        opacity: 0;\r\n    }\r\n    to {\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n/* Internet Explorer */\r\n\r\n/* Opera < 12.1 */\r\n\r\n* {\r\n    font-family: Ubuntu;\r\n}\r\n\r\n.page-title {\r\n    margin-top: 20px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.mobile-navigation {\r\n    position: relative;\r\n    display: flex;\r\n    align-items: center;\r\n    overflow: auto;\r\n    width: 100%;\r\n}\r\n\r\n.mobile-header {\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n}\r\n\r\n.mobile-header-title {\r\n    float: right;\r\n    margin-right: 5%;\r\n    margin-left: auto;\r\n    justify-content: flex-end;\r\n    color: \r\n}\r\n\r\n@media only screen and (max-width: 450px) {\r\n    .mobile-header-title {\r\n        font-size: 15px;\r\n    }\r\n}\r\n\r\n.mobile-dropdown {\r\n    position: relative;\r\n    display: none;\r\n}\r\n\r\n.mobile-dropdown-option {\r\n    padding-top: 30px;\r\n    padding-bottom: 30px;\r\n    width: 100%;\r\n    font-size: 30px;\r\n    border: 1px solid #000000;\r\n    border-radius: 0;\r\n    text-align: center;\r\n    background-color: #233237;\r\n    color: #C0C0C0;\r\n}\r\n\r\n.button {\r\n    background-color: #88BBD6;\r\n    border: 1px solid #000;\r\n    color: white;\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n}\r\n\r\nul {\r\n    display: inline-block;\r\n    list-style-type: none;\r\n    padding: 0;\r\n    position: relative;\r\n    text-align: center;\r\n}\r\n\r\nli {\r\n    display: inline-flex;\r\n    align-items: center;\r\n    padding-left: 15px;\r\n    padding-right: 15px;\r\n    font-size: 30px;\r\n    text-decoration: none;\r\n}\r\n\r\n@media only screen and (max-width: 1001px) {\r\n    li {\r\n        font-size: 25px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 700px) {\r\n    li {\r\n        font-size: 20px;\r\n    }\r\n}\r\n\r\n.header-link:link {\r\n    color: #70C989;\r\n}\r\n\r\n.header-link:hover {\r\n    color: #FFFFFF;\r\n    cursor: pointer;\r\n}\r\n\r\n.header-link {\r\n    text-decoration: none;\r\n    color: #70C989;\r\n}\r\n\r\n.header-link.selected {\r\n    color: #FFFFFF;\r\n}\r\n\r\n.header-link-image {\r\n    width: 25px;\r\n    height: 25px;\r\n    padding-right: 8px;\r\n    padding-bottom: 3px;\r\n}\r\n\r\n.header-link-row {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.header {\r\n    position: fixed;\r\n    display: inline-block;\r\n    width: 100%;\r\n    margin: 0 auto;\r\n    border-radius: 0;\r\n    background: #0F1626;\r\n    border-top: 3px solid #000000;\r\n    border-bottom: 3px solid #000000;\r\n    margin-bottom: 10px;\r\n    z-index: 3;\r\n}\r\n\r\n@media only screen and (max-width: 1001px) {\r\n    .header {\r\n        position: fixed;\r\n        font-size: 20px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 700px) {\r\n    .header {\r\n        position: absolute;\r\n        font-size: 15px;\r\n    }\r\n}\r\n\r\n.navbar {\r\n    vertical-align: center;\r\n    text-align: center;\r\n    margin: 0 auto;\r\n    width: 100%;\r\n    -webkit-animation: slideIn 1s forwards;\r\n            animation: slideIn 1s forwards;\r\n}\r\n\r\n@media only screen and (max-width: 700px) {\r\n    .header-list {\r\n        display: none;\r\n    }\r\n    .mobile-header {\r\n        display: block;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 700px) {\r\n    .mobile-header {\r\n        display: none;\r\n    }\r\n}\r\n\r\n@-webkit-keyframes slideIn {\r\n    0% {\r\n        -webkit-transform: translateX(-50%);\r\n                transform: translateX(-50%);\r\n    }\r\n    100% {\r\n        -webkit-transform: translateX(0);\r\n                transform: translateX(0);\r\n    }\r\n}\r\n\r\n@keyframes slideIn {\r\n    0% {\r\n        -webkit-transform: translateX(-50%);\r\n                transform: translateX(-50%);\r\n    }\r\n    100% {\r\n        -webkit-transform: translateX(0);\r\n                transform: translateX(0);\r\n    }\r\n}\r\n\r\n.dialog {\r\n    margin: 0 auto;\r\n    width: 70%;\r\n    overflow: auto;\r\n    background: #0F1626;\r\n    /*background: -webkit-linear-gradient(to right, #4CA1AF, #375E6F);  /* Chrome 10-25, Safari 5.1-6 */\r\n    /*background: linear-gradient(to right, #4CA1AF, #375E6F); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n    border: 3px solid #000000;\r\n    position: relative;\r\n    opacity: 100;\r\n    top: 200px;\r\n    margin-bottom: 200px;\r\n    text-align: center;\r\n    font-size: 120%;\r\n}\r\n\r\n@media only screen and (max-width: 1001px) {\r\n    .dialog {\r\n        width: 70%;\r\n        margin-bottom: 150px;\r\n        font-size: 20px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 700px) {\r\n    .dialog {\r\n        width: 90%;\r\n        margin-bottom: 100px;\r\n        font-size: 18px;\r\n    }\r\n}\r\n\r\n.dialog-text {\r\n    width: 90%;\r\n    margin: 0 auto;\r\n    overflow: auto;\r\n    text-align: center;\r\n}\r\n\r\n.portfolio-wrapper {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n}\r\n\r\n.portfolio-wrapper>* {\r\n    /*All of the portfolio sections*/\r\n    margin-left: 10px;\r\n    margin-right: 10px;\r\n    /* min-height: 94px; */\r\n    height: 600px;\r\n    flex: 1 1 300px;\r\n    margin-top: 20px;\r\n    padding: 30px 30px 30px 30px;\r\n    border: 1px solid #F5F5F5;\r\n    /* background: #9BB1D0; */\r\n    background: #0F1626;\r\n    position: relative;\r\n    overflow: auto;\r\n}\r\n\r\n@media only screen and (max-width: 1001px) {\r\n    .portfolio-section {\r\n        min-width: 0px;\r\n    }\r\n}\r\n\r\n.portfolio-section-header {\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n    display: flex;\r\n    align-items: center;\r\n    float: left;\r\n}\r\n\r\n.portfolio-section-description {\r\n    margin-top: 10px;\r\n    align-items: center;\r\n    text-align: left;\r\n}\r\n\r\n@media only screen and (max-width: 1230px) {\r\n    .portfolio-wrapper>* {\r\n        height: auto;\r\n        overflow: auto;\r\n    }\r\n}\r\n\r\n.portfolio-section-date {\r\n    /* position: absolute;\r\n\tbottom: 5px;\r\n\tleft: 10px; */\r\n    text-align: left;\r\n}\r\n\r\n.portfolio-section-chevron {\r\n    height: 50px;\r\n    min-width: 50px;\r\n    cursor: pointer;\r\n}\r\n\r\n.portfolio-section-link {\r\n    text-decoration: none;\r\n    color: #70c989;\r\n    text-align: left;\r\n    display: flex;\r\n}\r\n\r\n.portfolio-section-link.main-page-link {\r\n    text-align: center;\r\n    cursor: pointer;\r\n    font-size: 100%;\r\n}\r\n\r\n.portfolio-section-link:hover {\r\n    color: #FFFFFF;\r\n}\r\n\r\n.portfolio-section-link:hover .right-arrow {\r\n    fill: #FFFFFF;\r\n}\r\n\r\n.footer {\r\n    position: relative;\r\n    overflow: auto;\r\n    background-color: #233237;\r\n    border: 1px solid #233237;\r\n    border-top-right-radius: 0px;\r\n    border-top-left-radius: 0px;\r\n    clear: both;\r\n    font-weight: bold;\r\n    font-size: 25px;\r\n    text-align: center;\r\n    color: #CD5C5C;\r\n}\r\n\r\n@media only screen and (max-width: 1001px) {\r\n    .footer {\r\n        font-size: 20px\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 700px) {\r\n    .footer {\r\n        font-size: 15px;\r\n    }\r\n}\r\n\r\n.uncontained-link {\r\n    color: #C0C0C0;\r\n    text-decoration: none;\r\n    display: block;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.uncontained-link:hover {\r\n    color: #FFFFFF;\r\n}\r\n\r\n.link-orange {\r\n    color: #FFA07A;\r\n    text-decoration: none;\r\n}\r\n\r\n.link-orange:hover {\r\n    color: #7D7D7D\r\n}\r\n\r\n.bounce-image:hover {\r\n    -webkit-animation: bounce 1s;\r\n            animation: bounce 1s;\r\n}\r\n\r\n.header-link-row:hover>.header-link-image {\r\n    -webkit-animation: bounce 1s;\r\n            animation: bounce 1s;\r\n}\r\n\r\n@media only screen and (max-width: 700px) {\r\n    .bounce-image:hover {\r\n        -webkit-animation: none;\r\n                animation: none;\r\n    }\r\n    .header-link-row:hover>.header-link-image {\r\n        -webkit-animation: none;\r\n                animation: none;\r\n    }\r\n}\r\n\r\n@-webkit-keyframes bounce {\r\n    0%,\r\n    20%,\r\n    60%,\r\n    100% {\r\n        -webkit-transform: translateY(0);\r\n        transform: translateY(0);\r\n    }\r\n    40% {\r\n        -webkit-transform: translateY(-20px);\r\n        transform: translateY(-20px);\r\n    }\r\n    80% {\r\n        -webkit-transform: translateY(-10px);\r\n        transform: translateY(-10px);\r\n    }\r\n}\r\n\r\n@keyframes bounce {\r\n    0%,\r\n    20%,\r\n    60%,\r\n    100% {\r\n        -webkit-transform: translateY(0);\r\n        transform: translateY(0);\r\n    }\r\n    40% {\r\n        -webkit-transform: translateY(-20px);\r\n        transform: translateY(-20px);\r\n    }\r\n    80% {\r\n        -webkit-transform: translateY(-10px);\r\n        transform: translateY(-10px);\r\n    }\r\n}\r\n\r\n.curtain {\r\n    height: 100%;\r\n    width: 100%;\r\n    position: absolute;\r\n    pointer-events: none;\r\n}\r\n\r\n.curtain__panel {\r\n    border-radius: 0;\r\n    height: 100%;\r\n    float: left;\r\n    z-index: 2;\r\n    position: relative;\r\n    background: #233237;\r\n}\r\n\r\n.curtain__panel--left {\r\n    -webkit-animation: widthShrink 3s ease forwards;\r\n    animation: widthShrink 3s ease forwards;\r\n    width: 50%;\r\n}\r\n\r\n.curtain__panel--right {\r\n    -webkit-animation: widthShrink 3s ease forwards;\r\n    animation: widthShrink 3s ease forwards;\r\n    float: right;\r\n    width: 50%;\r\n}\r\n\r\n@keyframes widthShrink {\r\n    from {\r\n        width: 50%;\r\n    }\r\n    to {\r\n        width: 0%;\r\n    }\r\n}\r\n\r\n@-webkit-keyframes widthShrink {\r\n    from {\r\n        width: 50%;\r\n    }\r\n    to {\r\n        width: 0%;\r\n    }\r\n}\r\n\r\n.router-link {\r\n    text-decoration: none;\r\n}\r\n\r\n.container {\r\n    margin-left: 5%;\r\n    display: inline-block;\r\n    cursor: pointer;\r\n}\r\n\r\n.bar1,\r\n.bar2,\r\n.bar3 {\r\n    width: 35px;\r\n    height: 5px;\r\n    background-color: #F5F5F5;\r\n    margin: 6px 0;\r\n    transition: 0.4s;\r\n}\r\n\r\n.change .bar1 {\r\n    -webkit-transform: rotate(-45deg) translate(-9px, 6px);\r\n    transform: rotate(-45deg) translate(-9px, 6px);\r\n}\r\n\r\n.change .bar2 {\r\n    opacity: 0;\r\n}\r\n\r\n.change .bar3 {\r\n    -webkit-transform: rotate(45deg) translate(-8px, -8px);\r\n    transform: rotate(45deg) translate(-8px, -8px);\r\n}\r\n\r\n.right-arrow {\r\n    fill: #70C989;\r\n    margin-left: 5px;\r\n    height: 18px;\r\n    vertical-align: middle;\r\n}"

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/raw-loader!../node_modules/postcss-loader/lib??embedded!./styles.css */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! X:\Code\Website\erikhoffman-github-angular\src\styles.css */"./src/styles.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map