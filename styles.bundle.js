webpackJsonp([2,4],{

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(660);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(697)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js?{\"sourceMap\":false}!../node_modules/postcss-loader/index.js!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js?{\"sourceMap\":false}!../node_modules/postcss-loader/index.js!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 660:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(661)();
// imports


// module
exports.push([module.i, "*{\n\tfont-family: \"Whitney SSm A\", \"Whitney SSm B\", \"Lato\", \"Lucida Grande\", \"Lucida Sans Unicode\", Tahoma, Sans-Serif;\n}\n\n.button {\n\tbackground-color:#88BBD6;\n\tborder: none;\n\tcolor: white;\n\tpadding: 15px 32px;\n\ttext-align: center;\n\ttext-decoration: none;\n\tdisplay: inline-block;\n\tfont-size: 16px;\n}\n\nhtml {\n  background-color:#E9E9E9;\n}\n\nbody {\n\tmargin: 0;\n}\n\nul {\n\tdisplay:inline-block;\n\tlist-style-type: none;\n\tpadding: 0;\n\tposition:relative;\n\ttext-align:center;\n}\n\nli {\n\tdisplay:inline;\n\tpadding:1vw;\n\tmargin-right:auto;\n\tfont-size: 30px;\n\tcolor:#7D7D7D;\n\ttext-decoration:none;\n}\n\n.selected {\n\tcolor:#FFFFFF;\n}\n\n.link-portfolio {\n\ttext-decoration: none;\n\tcolor:#7D7D7D;\n\tfont-size: 25px;\n\tmargin-top: 25px;\n}\n\n.link-portfolio:hover {\n\tcolor:#FFFFFF;\n}\n\n@media only screen and (max-width: 1001px) {\n\tli {\n\t\tfont-size: 25px;\n\t}\n}\n\n@media only screen and (max-width: 700px) {\n\tli {\n\t\tfont-size: 20px;\n\t}\n}\n\n.header-link:link {\n\tcolor:#7D7D7D;\n}\n\n.header-link:hover {\n\tcolor:#FFFFFF;\n\tcursor: pointer;\n}\n\n.header-link {\n\ttext-decoration: none;\n}\n\n.header-link.selected {\n\tcolor:#FFFFFF;\n}\n\n.header {\n\tposition:fixed;\n\tdisplay:inline-block;\n\twidth: 100%;\n\tmargin: 0 auto;\n\tborder-radius: 0;\n\theight: 135px;\n\tbackground-color: #CDCDCD;\n\tborder-top: 3px solid #000000;\n\tborder-bottom: 3px solid #000000;\n\tmargin-bottom: 10px;\n\tz-index: 3;\n}\n\n@media only screen and (max-width: 1001px) {\n\t.header {\n\t\tposition: absolute;\n\t\theight: 120px;\n\t\tfont-size: 20px;\n\t}\n}\n\n@media only screen and (max-width: 700px) {\n\t.header {\n\t\tposition: absolute;\n\t\theight: 105px;\n\t\tfont-size: 15px;\n\t}\n}\n\n.navbar {\n\tposition:absolute;\n\tvertical-align:center;\n\ttext-align: center;\n\tdisplay:inline-block;\n\tmargin: 0 auto;\n\twidth:100%;\n\ttop:25%;\n\t-webkit-animation: slideIn 1s forwards;\n\t        animation: slideIn 1s forwards;\n}\n\n@media only screen and (max-width: 700px) {\n\t.header-list {\n\t\tdisplay: none;\n\t}\n}\n\n@-webkit-keyframes slideIn {\n\t0% {\n\t\t-webkit-transform: translateX(-50%);\n\t\t        transform: translateX(-50%);\n\t}\n\t100% {\n\t\t-webkit-transform: translateX(0);\n\t\t        transform: translateX(0);\n\t}\n}\n\n@keyframes slideIn {\n\t0% {\n\t\t-webkit-transform: translateX(-50%);\n\t\t        transform: translateX(-50%);\n\t}\n\t100% {\n\t\t-webkit-transform: translateX(0);\n\t\t        transform: translateX(0);\n\t}\n}\n\n.dialog {\n\twidth: 50%;\n\toverflow:auto;\n\tbackground-color:#CDCDCD;\n\tborder:1px solid #CDCDCD;\n\tposition: relative;\n\ttop: 300px;\n\tmargin-bottom: 200px;\n\tleft: 25%;\n\ttext-align:center;\n\tfont-size:20px;\n}\n\n@media only screen and (max-width: 1001px) {\n\t.dialog {\n\t\twidth: 60%;\n\t\ttop: 250px;\n\t\tleft: 20%;\n\t\tmargin-bottom: 150px;\n\t}\n}\n\n@media only screen and (max-width: 700px) {\n\t.dialog {\n\t\twidth: 90%;\n\t\ttop: 200px;\n\t\tleft: 5%;\n\t\tmargin-bottom: 100px;\n\t}\n}\n\n.dialog:hover {\n\tborder:1px solid #000000;\n}\n\n.dialog-text {\n\twidth: 75%;\n\tmargin: 0 auto;\n\tdisplay:inline-block;\n\tright:12.5%;\n\toverflow:auto;\n\ttext-align:center;\n\tfont-size:20px;\n}\n\n.portfolio-section {\n\tmargin-top: 20px;\n\tpadding: 30px 10px 30px 10px;\n\tborder: 1px solid #000000;\n}\n\n.portfolio-section:before {\n\tcontent: '';\n\tposition: absolute;\n\ttop: 0px;\n\tleft: 0px;\n\twidth: 0px;\n\theight: 42px;\n\tbackground: rgba(255,255,255,0.3);\n\tborder-radius: 5px;\n\t-webkit-transition: all 2s ease;\n\ttransition: all 2s ease;\n}\n\n.footer {\n\tposition:relative;\n\toverflow:auto;\n\tbackground-color: #233237;\n\tborder: 1px solid #233237;\n\tborder-top-right-radius: 0px;\n\tborder-top-left-radius: 0px;\n\tclear: both;\n\tfont-weight:bold;\n\tfont-size:25px;\n\ttext-align: center;\n\tcolor: #CD5C5C;\n}\n\n@media only screen and (max-width: 1001px) {\n\t.footer {\n\t\tfont-size: 20px\n\t}\n}\n\n@media only screen and (max-width: 700px) {\n\t.footer {\n\t\tfont-size: 15px;\n\t}\n}\n\n.linkind\n{\n\tcolor:#7D7D7D;\n\tfont-size: 1.8vw;\n\tmargin-right:auto;\n\tpadding:1vw;\n\tdisplay:inline;\n\ttext-decoration: none;\n}\n\n.linkind:hover {\n\tcolor:#FFFFFF;\n}\n\n.link-orange {\n\tcolor:#FFA07A;\n\ttext-decoration: none;\n}\n\n.link-orange:hover {\n\tcolor:#7D7D7D\n}\n\n.bounce-image:hover {\n\t-webkit-animation: bounce 1s;\n\t        animation: bounce 1s;\n}\n\n@media only screen and (max-width: 700px) {\n\t.bounce-image:hover {\n\t\t-webkit-animation: none;\n\t\t        animation: none;\n\t}\n}\n\n@-webkit-keyframes bounce {\n\t0%, 20%, 60%, 100% {\n\t\t-webkit-transform: translateY(0);\n\t\ttransform: translateY(0);\n\t}\n\n\t40% {\n\t\t-webkit-transform: translateY(-20px);\n\t\ttransform: translateY(-20px);\n\t}\n\n\t80% {\n\t\t-webkit-transform: translateY(-10px);\n\t\ttransform: translateY(-10px);\n\t}\n}\n\n@keyframes bounce {\n\t0%, 20%, 60%, 100% {\n\t\t-webkit-transform: translateY(0);\n\t\ttransform: translateY(0);\n\t}\n\n\t40% {\n\t\t-webkit-transform: translateY(-20px);\n\t\ttransform: translateY(-20px);\n\t}\n\n\t80% {\n\t\t-webkit-transform: translateY(-10px);\n\t\ttransform: translateY(-10px);\n\t}\n}\n\n\n\n.curtain {\n\theight: 100%;\n\twidth: 100%;\n\tposition: absolute;\n\tpointer-events: none;\n}\n\n.curtain__panel {\n\tborder-radius: 0;\n\theight: 100%;\n\tfloat: left;\n\tz-index: 2;\n\tposition: relative;\n\tbackground: #233237;\n}\n\n.curtain__panel--left {\n\t-webkit-animation: widthShrink 3s ease forwards;\n\tanimation: widthShrink 3s ease forwards;\n\twidth: 50%;\n}\n.curtain__panel--right {\n\t-webkit-animation: widthShrink 3s ease forwards;\n\tanimation: widthShrink 3s ease forwards;\n\tfloat: right;\n\twidth: 50%;\n}\n\n@keyframes widthShrink {\n\tfrom { width: 50%; }\n\tto { width: 0%; }\n}\n\n@-webkit-keyframes widthShrink {\n\tfrom { width: 50%; }\n\tto { width: 0%; }\n}\n", ""]);

// exports


/***/ }),

/***/ 661:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),

/***/ 697:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
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

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
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

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 701:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(390);


/***/ })

},[701]);
//# sourceMappingURL=styles.bundle.map