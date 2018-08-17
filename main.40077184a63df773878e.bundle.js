webpackJsonp([1,4],{328:function(e,t,i){"use strict";var n=i(0),s=i(329),r=i(513),o=i(148);i.d(t,"a",function(){return l});var a=this&&this.__decorate||function(e,t,i,n){var s,r=arguments.length,o=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(r<3?s(o):r>3?s(t,i,o):s(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o},c=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},l=function(){function e(e,t,i){this.route=e,this.zone=t,this.router=i,this.selectedPage={id:-1,name:"unrouted",imgUrl:""},this.defaultPage=s.a[0],this.pagesList=s.a,this.projectsList=r.a,this.showDropdown=!1}return e.prototype.ngOnInit=function(){var e=this;this.navigationSubscription=this.router.events.subscribe(function(t){t instanceof o.b&&e.routeToPage(t)})},e.prototype.routeToPage=function(e){var t=this,i=e.url.slice(1);Object.keys(this.pagesList).forEach(function(e){t.pagesList[e].name.toUpperCase()===i.toUpperCase()&&(t.selectedPage=t.pagesList[e])}),this.selectedPage.id===-1&&(this.selectedPage=this.defaultPage)},e.prototype.getDropdownStatus=function(){return this.showDropdown?"block":"none"},e.prototype.onSelect=function(e,t){this.selectedPage=e,this.showDropdown=!1,t&&(document.getElementById("mobile-dropdown-main").style.display="none"),this.router.navigateByUrl("/"+this.selectedPage.name.toLowerCase())},e.prototype.ngOnDestroy=function(){this.navigationSubscription&&this.navigationSubscription.unsubscribe()},e=a([i.i(n._6)({selector:"app-page-content",template:i(673),styles:[i(668)]}),c("design:paramtypes",["function"==typeof(t=void 0!==o.c&&o.c)&&t||Object,"function"==typeof(l=void 0!==n.S&&n.S)&&l||Object,"function"==typeof(d=void 0!==o.d&&o.d)&&d||Object])],e);var t,l,d}()},329:function(e,t,i){"use strict";i.d(t,"a",function(){return n});var n=[{id:1,name:"Home",imgUrl:"../assets/house-icon_silver.svg"},{id:2,name:"About",imgUrl:"../assets/coffee-cup_silver.svg"},{id:3,name:"Projects",imgUrl:"../assets/code-icon_silver.svg"},{id:4,name:"Resume",imgUrl:"../assets/paper-icon_silver.svg"}];!function(){function e(){}e}()},330:function(e,t,i){"use strict";var n=i(0),s=i(514);i.d(t,"a",function(){return a});var r=this&&this.__decorate||function(e,t,i,n){var s,r=arguments.length,o=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(r<3?s(o):r>3?s(t,i,o):s(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=function(){function e(){this.gamesOptions=[{id:100,name:"100 Games"},{id:1e3,name:"1000 Games"},{id:1e4,name:"10000 Games"},{id:1e5,name:"100000 Games"},{id:1e6,name:"1000000 Games (a little slow but still works)"}],this.selectedValue=this.gamesOptions[1],this.suitesChars=["S","C","H","D"],this.numbers=["A","2","3","4","5","6","7","8","9","10","J","Q","K"],this.deck=[],this.wins=0,this.gamesRan=0,this.highestSuiteCount=0,this.piles=[],this.suitesPrinted=0,this.elementNames=["suiteOne","suiteTwo","suiteThree","suiteFour"],this.suites=[],this.stack=[],this.stackFlipped=[]}return e.prototype.resetGame=function(){this.deck=[],this.piles=[],this.suites=[];for(var e=0;e<4;e++)this.suites[e]=[];this.stackFlipped=[],this.suitesPrinted=0},e.prototype.shuffle=function(){for(var e,t,i=this.deck.length;i;)e=Math.random()*i--|0,t=this.deck[i],this.deck[i]=this.deck[e],this.deck[e]=t},e.prototype.placeFromPile=function(e){for(;e.length>0;){var t=!1,i=!1;if(e[e.length-1].suite===this.suites[0][0].suite?(this.suites[0].push(e.pop()),t=!0):i=this.numberMatch(e[e.length-1],this.suites[0]),i===!0&&t===!1&&(i=!1,0===this.suites[1].length&&e[e.length-1].numberSymbol===this.suites[0][0].numberSymbol?(this.suites[1].push(e.pop()),t=!0):this.suites[1].length>0&&(e[e.length-1].suite===this.suites[1][0].suite?(this.suites[1].push(e.pop()),t=!0):i=this.numberMatch(e[e.length-1],this.suites[1]))),i===!0&&t===!1&&(i=!1,0===this.suites[2].length&&e[e.length-1].numberSymbol===this.suites[1][0].numberSymbol?(this.suites[2].push(e.pop()),t=!0):this.suites[2].length>0&&(e[e.length-1].suite===this.suites[2][0].suite?(this.suites[2].push(e.pop()),t=!0):i=this.numberMatch(e[e.length-1],this.suites[2]))),i===!0&&t===!1&&(0===this.suites[3].length&&e[e.length-1].numberSymbol===this.suites[2][0].numberSymbol?(this.suites[3].push(e.pop()),t=!0):this.suites[3].length>0&&e[e.length-1].suite===this.suites[3][0].suite&&(this.suites[3].push(e.pop()),t=!0)),t===!1)return{placed:!1,pile:e}}return{placed:!0,pile:e}},e.prototype.numberMatch=function(e,t){for(var i=0;i<t.length;i++)if(e.numberSymbol===t[i].numberSymbol)return!0;return!1},e.prototype.countSuites=function(){return this.suites[0].length+this.suites[1].length+this.suites[2].length+this.suites[3].length},e.prototype.runGame=function(){for(var e=0;e<this.selectedValue.id;e++){this.resetGame();for(var t=0;t<this.suitesChars.length;t++)for(var i=0;i<this.numbers.length;i++){var n=void 0;n=new s.a(this.suitesChars[t],this.numbers[i]),this.deck.push(n)}this.shuffle();for(var r=this.deck.map(function(e){return e}),t=0;t<4;t++){this.piles[t]=[];for(var i=0;i<4;i++)this.piles[t].push(this.deck.pop())}this.suites[0].push(this.deck.pop());for(var o,a,c=this.countSuites();c<=52;){a=0;for(var t=0;t<4;t++)this.piles[t].length>0&&(o=this.placeFromPile(this.piles[t]),o.placed&&(a++,this.piles[t]=o.pile));if(this.deck.length>0&&(o=this.placeFromPile(this.deck),o.placed?(a++,this.deck=o.pile):this.stackFlipped.push(this.deck.pop())),this.stackFlipped.length>0&&(o=this.placeFromPile(this.stackFlipped),o.placed&&(a++,this.stackFlipped=o.pile)),52===this.countSuites()||0===a&&0===this.deck.length)break}if(c=this.countSuites(),(0===this.highestSuiteCount||c>this.highestSuiteCount)&&(this.highestSuiteCount=c),52===c){this.resetWinningSuitesDivs();for(var l=0;l<4;l++)this.suites[l].length>0&&this.appendCardElement(l,this.elementNames[l],!0);this.wins++,document.getElementById("winloss").innerHTML=this.wins+" WIN(S)!";var d=document.createElement("p");d.innerHTML="Deck "+this.wins+" on run "+(e+this.gamesRan+1),document.getElementById("winningDecks").appendChild(d);for(var u in r){var p=document.createElement("img");p.setAttribute("style","height:20px;"),p.setAttribute("src","../assets/Vector-Playing-Cards-master/cards-svg/"+r[u].numberSymbol+r[u].suite+".svg"),document.getElementById("winningDecks").appendChild(p)}}}this.gamesRan+=this.selectedValue.id;var h=document.getElementById("gameCounter");h.innerHTML="",h.innerHTML=""+this.gamesRan,document.getElementById("suiteCount").innerHTML=""+this.highestSuiteCount;var f=this.wins/this.gamesRan;document.getElementById("winPercentage").innerHTML=f+"%"},e.prototype.resetWinningSuitesDivs=function(){for(var e=0;e<4;e++)for(var t=(this.elementNames[e],document.getElementById(this.elementNames[e]));t.firstChild;)t.removeChild(t.firstChild)},e.prototype.appendCardElement=function(e,t,i){var n,s=this.suites[e][this.suitesPrinted].suite;if(i)for(var r=0,o=this.suites[e];r<o.length;r++){var a=o[r];n=document.createElement("img"),n.setAttribute("style","height:100px;width:14.28%;"),n.setAttribute("src","../assets/Vector-Playing-Cards-master/cards-svg/"+a.numberSymbol+s+".svg"),document.getElementById(t).appendChild(n)}else{for(var a=0;a<this.numbers.length;a++)n=document.createElement("img"),n.setAttribute("style","height:100px"),n.setAttribute("src","../assets/Vector-Playing-Cards-master/cards-svg/"+this.suites[e][a].numberSymbol+s+".svg"),document.getElementById(t).appendChild(n);for(var a=0;a<this.numbers.length;a++)n=document.createElement("img"),n.setAttribute("style","height:100px"),n.setAttribute("src","../assets/Vector-Playing-Cards-master/cards-svg/"+this.suites[e][a].numberSymbol+s+".svg"),document.getElementById(t).appendChild(n)}},e=r([i.i(n._6)({selector:"app-osmosis-solitaire",styles:[i(669)],template:i(674)}),o("design:paramtypes",[])],e)}()},331:function(e,t,i){"use strict";var n=i(0);i.d(t,"a",function(){return o});var s=this&&this.__decorate||function(e,t,i,n){var s,r=arguments.length,o=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(r<3?s(o):r>3?s(t,i,o):s(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},o=function(){function e(){}return e=s([i.i(n._6)({selector:"app-state-machine",styles:[i(670)],template:i(675)}),r("design:paramtypes",[])],e)}()},390:function(e,t){function i(e){throw new Error("Cannot find module '"+e+"'.")}i.keys=function(){return[]},i.resolve=i,e.exports=i,i.id=390},391:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(479),s=i(0),r=i(515),o=i(511);r.a.production&&i.i(s.a)(),setTimeout(function(){i.i(n.a)().bootstrapModule(o.a)},1e3)},509:function(e,t,i){"use strict";var n=i(0),s=i(148),r=i(329),o=i(328),a=i(330),c=i(331);i.d(t,"a",function(){return p});var l=this&&this.__decorate||function(e,t,i,n){var s,r=arguments.length,o=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(r<3?s(o):r>3?s(t,i,o):s(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o},d=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},u=[{path:"",redirectTo:"/home",pathMatch:"full"},{path:"home",component:o.a,data:{page:r.a[0]}},{path:"about",component:o.a,data:{page:r.a[1]}},{path:"projects",component:o.a,data:{page:r.a[2]},children:[{path:"osmosisSolitaire",component:a.a},{path:"stateMachineCreator",component:c.a}]},{path:"resume",component:o.a,data:{page:r.a[3]}}],p=function(){function e(){}return e=l([i.i(n.b)({imports:[s.a.forRoot(u,{useHash:!0})],exports:[s.a]}),d("design:paramtypes",[])],e)}()},510:function(e,t,i){"use strict";var n=i(0),s=i(148);i.d(t,"a",function(){return a});var r=this&&this.__decorate||function(e,t,i,n){var s,r=arguments.length,o=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(r<3?s(o):r>3?s(t,i,o):s(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=function(){function e(e){this.route=e,this.title="Erik Hoffman Website!"}return e=r([i.i(n._6)({selector:"app-root",template:i(671),styles:[i(667)]}),o("design:paramtypes",["function"==typeof(t=void 0!==s.c&&s.c)&&t||Object])],e);var t}()},511:function(e,t,i){"use strict";var n=i(146),s=i(0),r=i(469),o=i(475),a=i(510),c=i(328),l=i(512),d=i(330),u=i(331),p=i(509);i.d(t,"a",function(){return m});var h=this&&this.__decorate||function(e,t,i,n){var s,r=arguments.length,o=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(r<3?s(o):r>3?s(t,i,o):s(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o},f=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},m=function(){function e(){}return e=h([i.i(s.b)({declarations:[a.a,c.a,l.a,d.a,u.a],imports:[n.a,r.a,o.a,p.a],providers:[],bootstrap:[a.a]}),f("design:paramtypes",[])],e)}()},512:function(e,t,i){"use strict";var n=i(0);i.d(t,"a",function(){return o});var s=this&&this.__decorate||function(e,t,i,n){var s,r=arguments.length,o=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(r<3?s(o):r>3?s(t,i,o):s(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},o=function(){function e(){}return e.prototype.rotateChevron=function(){return this.showDescription?"rotate(90deg)":"rotate(360deg)"},e=s([i.i(n._6)({selector:"app-portfolio-section",inputs:["name","description","dates","link"],template:i(672)}),r("design:paramtypes",[])],e)}()},513:function(e,t,i){"use strict";i.d(t,"a",function(){return n});var n=[{id:1,name:"State Machine Creator",description:"A UI that lets you create simple state machines and save them to a file.<br><br>I enjoy using state machines to create very basic workflows in order to plan applications or algorithms so making this tool seemed to make sense.",dates:"Date: 2015 - Ongoing",link:"projects/stateMachineCreator"},{id:2,name:"Functional Connect Four in Elixir",description:"Created in a functional programming study group during my final semester at University of Guelph.<br><br>Used the Elixir programming language to create a connect four game to communicate over IRC with other members of the class. Learned about the advantages of functional as well as the hurdles one must overcome (mutability, recursion, etc.).",dates:"Date: 2016",link:"https://bitbucket.org/ErikHoffman/connect-four-elixir"},{id:3,name:"Truform - Android Workout App",description:"Group project for a course at University of Guelph that followed the development of this Android app and was graded iteratively during meetings with the professor.<br><br>My group created this using an Arduino computer with a gyroscope and accelerometer linked to a smartphone to measure workout form from a user. My role in the project was creating the algorithm that measures the data of the workout and gives output on whether or not the form of the workout was performed well.",dates:"Date: 2015",link:"https://bitbucket.org/benbaird/truform"}];!function(){function e(){}e}()},514:function(e,t,i){"use strict";i.d(t,"a",function(){return n});var n=function(){function e(e,t){this.suite=e,this.numberSymbol=t}return e}()},515:function(e,t,i){"use strict";i.d(t,"a",function(){return n});var n={production:!0}},667:function(e,t){e.exports=".background-image{height:100%;width:100%;position:fixed;margin:0;background-image:url(assets/ottawa-photo.png);background-repeat:no-repeat;background-attachment:fixed;background-size:cover;will-change:transform;-webkit-animation:fadein 2s;animation:fadein 2s}"},668:function(e,t){e.exports=""},669:function(e,t){e.exports="*{font-family:Whitney SSm A,Whitney SSm B,Lato,Lucida Grande,Lucida Sans Unicode,Tahoma,Sans-Serif}.osmosis-container{margin-top:50px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.osmosis-buttons{margin-bottom:15px;margin-top:10px}.osmosis-buttons,.play-game{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-wrap:wrap;flex-wrap:wrap}.play-game{margin:0 auto;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.button{background-color:#88bbd6;border:1px solid #000;color:#fff;padding:15px 32px;text-align:center;text-decoration:none;display:inline-block;font-size:16px}.suites{background:#2c3e50;background:-webkit-linear-gradient(90deg,#4ca1af,#375e6f);background:-webkit-linear-gradient(left,#4ca1af,#375e6f);background:linear-gradient(90deg,#4ca1af,#375e6f);border:3px solid #000;width:45%;margin:1%;padding:1%;overflow-x:hidden}.suite{border:1px solid #000;width:100%;min-height:100px;background-color:#000}.suiteTitle{height:25px;margin-top:10px;text-align:center}.info{margin:1%;padding:1%;width:45%;background:#2c3e50;background:-webkit-linear-gradient(90deg,#4ca1af,#2c3e50);background:-webkit-linear-gradient(left,#4ca1af,#2c3e50);background:linear-gradient(90deg,#4ca1af,#2c3e50);border:3px solid #000}"},670:function(e,t){e.exports="div{margin:0}.smc-area{width:95%;margin:0 auto;margin-top:1%;background-color:#cdcdcd;padding:1%}.creator-wrapper{margin-top:5%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.info{width:20%;margin-right:1%;border:1px solid #000}.state-area{max-width:80%;min-width:0;-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center}.state-row{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;vertical-align:top;width:100%;top:0}.state-square{-ms-flex-item-align:start;align-self:flex-start;border:1px solid #000;width:60px;height:60px}.state-square:hover{background-color:#ff7f27}"},671:function(e,t){e.exports='<div class="background-image" *ngIf="!this.route._routerState.snapshot.url.includes(\'projects/\')"></div>\n<app-page-content>\n</app-page-content>\n'},672:function(e,t){e.exports='<div class="portfolio-section">\r\n  <div class="portfolio-section-header">\r\n    <img [style.transform]="rotateChevron()" class="portfolio-section-chevron" (click)="showDescription = !showDescription" alt="Show description" src="assets/chevron-right.svg">\r\n    <a class="portfolio-section-link" routerLink="{{link}}">{{name}}</a>\r\n  </div>\r\n  <br>\r\n  <div [ngClass]="{active: showDescription === true}" class="portfolio-section-description">\r\n    <div [innerHTML]="description"></div>\r\n  </div>\r\n  <div class="portfolio-section-date">{{dates}}</div>\r\n</div>\r\n'},673:function(e,t){e.exports='<div class="page-content" *ngIf="selectedPage.id >= 0 && !this.route._routerState.snapshot.url.includes(\'projects/\')">\n  <div class="header">\n    <div class="navbar">\n      <ul class="header-list">\n        <li *ngFor="let page of pagesList">\n          <a class="header-link"\n          [class.selected]="page === selectedPage || (page === defaultPage && !selectedPage)"\n          (click)="onSelect(page)">\n            <div class="header-link-row">\n              <img src={{page.imgUrl}} class="header-link-image">\n              <a>{{page.name}}</a>\n            </div>\n          </a>\n        </li>\n      </ul>\n      <div class="mobile-header">\n        <div class="mobile-navigation">\n          <img (click)="showDropdown = !showDropdown" class="hamburger" src="assets/HAMBURGER_MENU-200.png">\n          <h1 class="mobile-header-title">Erik Hoffman</h1>\n        </div>\n        <div [style.display]="getDropdownStatus()" id="mobile-dropdown-main" class="mobile-dropdown">\n          <div *ngFor="let page of pagesList">\n            <button (click)="onSelect(page, \'true\')" class="mobile-dropdown-option">\n              <div class="header-link-row">\n                <img src={{page.imgUrl}} class="header-link-image">\n                {{page.name}}\n              </div>\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="centre">\n    <div class="dialog">\n      <div class="curtain">\n        <div class="curtain__panel curtain__panel--left">\n        </div>\n        <div class="curtain__panel curtain__panel--right">\n        </div>\n      </div>\n      <div class="dialog-text">\n        <div #maintext id="main-text" *ngIf="selectedPage.id === 1">\n          <h1 class="page-title">Home</h1>\n          Welcome to my website and portfolio.<br><br>\n          My name is Erik Hoffman and I\'m a software developer who enjoys using algorithms to solve problems and create cool stuff!\n          <br><br>\n          I\'m currently employed by:\n          <br><br>\n          <b>CIBC as an Intermediate Application Developer (Full Stack)</b>\n          <br><br>\n          and I\'m currently learning:\n          <br><br>\n          <b>Amazon Web Services and Cloud Computing with the goal of becoming a cloud engineer or architect!</b>\n          <br><br>\n\n\n          <div class="portfolio-wrapper">\n            <div class="portfolio-section">\n                <div routerLink="projects/osmosisSolitaire" class="portfolio-section-link main-page-link">Current Side Project</div>\n            </div>\n          </div>\n          <br><br>\n        </div>\n\n\n\n        <div #abouttext id="about-text" *ngIf="selectedPage.id === 2">\n          <h1 class="page-title">About Me</h1>\n          I entered the Computer Science Honours program at University of Guelph in Fall 2012. <br><br> I have a minor\n          in mathematics and have completed a large variety of electives in Computer Science. Some of my favourites include artificial\n          intelligence and information organization and retrieval. <br><br>I graduated in Winter 2016.<br><br>\n          My current passions include cloud computing, artificial intelligence and web frameworks, particularly Angular4!<br><br>\n        </div>\n\n\n\n\n        <div #portfoliotext id="portfolio-text" *ngIf="selectedPage.id === 3">\n          <h1 class="page-title">Projects</h1>\n\n          <div class="portfolio-wrapper">\n            <div *ngFor="let project of projectsList">\n              <app-portfolio-section\n                name={{project.name}}\n                description={{project.description}}\n                dates={{project.dates}}\n                link={{project.link}}>\n              </app-portfolio-section>\n            </div>\n          </div>\n          <br><br><br>\n        </div>\n\n        <div #resumetext class="resume-text" *ngIf="selectedPage.id === 4">\n          <h1 class="page-title">Resume</h1>\n          <a class="uncontained-link" target="_blank" href="assets/Erik_CIS_Resume.pdf">Download as PDF</a>\n        </div>\n      </div>\n\n      <div class="footer">\n        <br>\n        <a class="link-orange" target="_blank" href="https://github.com/ErikHoffman?tab=repositories"><div id="github">This website is hosted on github pages</div></a><br>\n        <a class="link-orange" target="_blank" href="https://bitbucket.org/ErikHoffman/erik-hoffman-website-angular-4"><div id="bitbucket">Check out the unbuilt Angular4 code!</div></a>\n        <br>Contact Me:<br>\n        Email: erik_hoffman@outlook.com<br>\n        <a href="https://www.linkedin.com/profile/preview?locale=en_US&trk=prof-0-sb-preview-primary-button">\n        <img class="bounce-image" id ="linkedinlogo" src="../../assets/linkedin.png" title="Link to my linkedin profile" style="height:45px;width:45px;position:relative;"></a>\n        <a href="https://bitbucket.org/ErikHoffman/profile/repositories?visibility=all">\n        <img class="bounce-image" id ="bitbucketlogo" src="../../assets/bitbucket_new_logo.png" title="Link to my bitbucket" style="width:45px;height:45px;position:relative;"></a>\n      </div>\n    </div>\n  </div>\n</div>\n<router-outlet></router-outlet>\n'},674:function(e,t){e.exports='<div class="osmosis-container">\r\n  <div class="info" id="info">\r\n    About: A simple application that runs this very hard version of solitaire through simulations (there is no strategy to the game however)\r\n    to find out just how hard it is to win.\r\n    <div class="osmosis-buttons">\r\n      <a routerLink="/home" class="router-link" style="text-decoration:none;">\r\n        <button class="button">Home</button>\r\n      </a>\r\n      <a target="_blank" href="https://en.wikipedia.org/wiki/Osmosis_(solitaire)" style="text-decoration:none;">\r\n        <button class="button">The Game Rules</button>\r\n      </a>\r\n    </div>\r\n\r\n    <div class="play-game">\r\n      Games to play\r\n      <select [(ngModel)]="selectedValue">\r\n        <option *ngFor="let g of gamesOptions" [ngValue]="g">{{g.name}}</option>\r\n      </select>\r\n      <div class="osmosis-buttons">\r\n        <button class="button" (click)="runGame()">Run </button>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <br>Games Ran: <div id="gameCounter"></div>\r\n    <br>Highest All Suites Count (closeness to winning): <div id="suiteCount"></div>\r\n    <br>Win Percentage: <div id="winPercentage"></div>\r\n    <br> <div id="winloss"></div>\r\n    Winning decks (bottom card is first):\r\n    <div id="winningDecks"></div>\r\n  </div>\r\n  <div class="suites" id="suites">\r\n      Last Winning Suite Set\r\n      <div class="suiteTitle">Suite 1</div>\r\n    <div class="suite" id="suiteOne">\r\n    </div>\r\n\r\n      <div class="suiteTitle">Suite 2</div>\r\n    <div class="suite" id="suiteTwo">\r\n    </div>\r\n\r\n      <div class="suiteTitle">Suite 3</div>\r\n    <div class="suite" id="suiteThree">\r\n    </div>\r\n\r\n      <div class="suiteTitle">Suite 4</div>\r\n    <div class="suite" id="suiteFour">\r\n    </div>\r\n  </div>\r\n</div>\r\n'},675:function(e,t){e.exports='<div class="smc-area">\r\n  <b><div style="display: flex; justify-content: center;margin: 0 auto;">!!!Under construction</div></b>\r\n  <a routerLink="/home" class="router-link">\r\n    <button class="button">Home</button>\r\n  </a>\r\n  State Machine Creator - Erik Hoffman\r\n  <div class="creator-wrapper">\r\n    <div class="info">\r\n      Left click on a square to show menu.<br><br>\r\n      Left click on created state and select "Create Edge" to create edge between states.\r\n    </div>\r\n    <div class="state-area">\r\n      <div class="state-row" *ngFor="let rows of \' \'.repeat(100).split(\'\')">\r\n        <div class="state-square" *ngFor="let number of \' \'.repeat(100).split(\'\')"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n'},707:function(e,t,i){e.exports=i(391)}},[707]);