webpackJsonp([1,4],{328:function(e,t,n){"use strict";var a=n(0),o=n(329),i=n(212);n.d(t,"a",function(){return c});var r=this&&this.__decorate||function(e,t,n,a){var o,i=arguments.length,r=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(i<3?o(r):i>3?o(t,n,r):o(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r},s=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c=function(){function e(e,t,n){this.route=e,this.zone=t,this.router=n,this.defaultPage=o.a[0],this.pagesList=o.a,e.snapshot.data.page&&(this.routedPage=e.snapshot.data.page)}return e.prototype.ngOnInit=function(){this.routedPage?this.selectedPage=this.routedPage:this.selectedPage=this.defaultPage},e.prototype.onSelect=function(e){this.selectedPage=e,this.router.navigateByUrl("/"+this.selectedPage.name.toLowerCase())},e=r([n.i(a._6)({selector:"app-page-content",template:n(665),styles:[n(663)]}),s("design:paramtypes",["function"==typeof(t=void 0!==i.b&&i.b)&&t||Object,"function"==typeof(c=void 0!==a.S&&a.S)&&c||Object,"function"==typeof(l=void 0!==i.c&&i.c)&&l||Object])],e);var t,c,l}()},329:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a=[{id:1,name:"Home"},{id:2,name:"About"},{id:3,name:"Projects"},{id:4,name:"Resume"}];!function(){function e(){}e}()},388:function(e,t){function n(e){throw new Error("Cannot find module '"+e+"'.")}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=388},389:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(477),o=n(0),i=n(510),r=n(509);i.a.production&&n.i(o.a)(),n.i(a.a)().bootstrapModule(r.a)},507:function(e,t,n){"use strict";var a=n(0),o=n(212),i=n(329),r=n(328);n.d(t,"a",function(){return f});var s=this&&this.__decorate||function(e,t,n,a){var o,i=arguments.length,r=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(i<3?o(r):i>3?o(t,n,r):o(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r},c=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},l=[{path:"",redirectTo:"/home",pathMatch:"full"},{path:"home",component:r.a,data:{page:i.a[0]}},{path:"about",component:r.a,data:{page:i.a[1]}},{path:"projects",component:r.a,data:{page:i.a[2]}},{path:"resume",component:r.a,data:{page:i.a[3]}}],f=function(){function e(){}return e=s([n.i(a.b)({imports:[o.a.forRoot(l)],exports:[o.a]}),c("design:paramtypes",[])],e)}()},508:function(e,t,n){"use strict";var a=n(0);n.d(t,"a",function(){return r});var o=this&&this.__decorate||function(e,t,n,a){var o,i=arguments.length,r=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(i<3?o(r):i>3?o(t,n,r):o(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},r=function(){function e(){this.title="Erik Hoffman Website!"}return e=o([n.i(a._6)({selector:"app-root",template:n(664),styles:[n(662)]}),i("design:paramtypes",[])],e)}()},509:function(e,t,n){"use strict";var a=n(146),o=n(0),i=n(467),r=n(473),s=n(508),c=n(328),l=n(507);n.d(t,"a",function(){return u});var f=this&&this.__decorate||function(e,t,n,a){var o,i=arguments.length,r=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(i<3?o(r):i>3?o(t,n,r):o(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r},d=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},u=function(){function e(){}return e=f([n.i(o.b)({declarations:[s.a,c.a],imports:[a.a,i.a,r.a,l.a],providers:[],bootstrap:[s.a]}),d("design:paramtypes",[])],e)}()},510:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a={production:!0}},662:function(e,t){e.exports=""},663:function(e,t){e.exports=""},664:function(e,t){e.exports="<app-page-content><router-outlet></router-outlet></app-page-content>\n"},665:function(e,t){e.exports='<div class="header">\n  <div class="navbar">\n    <ul class="header-list">\n      <li *ngFor="let page of pagesList">\n        <a class="header-link"\n        [class.selected]="page === selectedPage || (page === defaultPage && !selectedPage)"\n        (click)="onSelect(page)">\n        {{page.name}}</a>\n      </li>\n    </ul>\n  </div>\n</div>\n<div class="centre">\n  <div class="dialog">\n    <div class="curtain">\n      <div class="curtain__panel curtain__panel--left">\n      </div>\n      <div class="curtain__panel curtain__panel--right">\n      </div>\n    </div>\n    <div class="dialog-text">\n      <div #maintext id="main-text" *ngIf="selectedPage.id === 1">\n        <br><br>\n        <h1 id="main-name">Erik Hoffman</h1>\n        <br>\n        Welcome to my website and portfolio.\n        <br><br>\n        Currently employed by:\n        <br><br>\n        <b>CIBC as an Intermediate Application Developer (Full Stack)</b>\n        <br><br>\n        Currently learning:\n        <br><br>\n        <b>Amazon Web Services through Linuxacademy.com</b>\n        <br><br><br><br>\n        <div class="portfolio-section">\n          <a class="linkind">\n            <div id="cardGameLink"><font size="6">Current Side Project</font></div>\n          </a>\n        </div>\n        <br><br>\n      </div>\n\n\n\n      <div #abouttext id="about-text" *ngIf="selectedPage.id === 2">\n        <br><br>I entered the Computer Science Honours program at University of Guelph in Fall 2012. <br><br> I have a minor\n        in mathematics and have completed a large variety of electives in Computer Science. Some of my favourites include artificial\n        intelligence and information organization and retrieval. <br><br>I graduated in Winter 2016.<br><br><br>\n      </div>\n\n\n\n\n      <div #portfoliotext id="portfolio-text" *ngIf="selectedPage.id === 3">\n        <br><br>\n        <div class="portfolio-section">\n          <a class="link-portfolio" href="https://bitbucket.org/ErikHoffman/connect-four-elixir">Functional Connect Four in Elixir</a>\n          <br>\n          <p>Created in a functional programming study group during my final semester at University of Guelph.<br><br>\n          Used the Elixir programming language to create a connect four game to communicate over IRC with other members of the class.\n          Learned about the advantages of functional as well\n          as the hurdles one must overcome (mutability, recursion, etc.).\n        </div>\n\n        <div class="portfolio-section">\n          <a class="link-portfolio" href="../stateM_creator/stateM_creator.html">\n            State Machine Creator\n          </a>\n          <p>\n          A UI made in phaserJS that lets you create simple state machines and save them to a file.\n          <br>This is a work in progress as I want to keep up to date with javascript and also try different 2d engines for web.<br>\n          <p>\n        </div>\n\n        <div class="portfolio-section">\n          <a class="link-portfolio" href="https://bitbucket.org/benbaird/truform">Truform App</a>\n          <p>\n            An app made in a team for a course at University of Guelph. The entire course followed the development of\n            this app and was graded along the way during meetings with the professor.\n            Myself and three others created this using an Arduino computer with a gyroscope and accelerometer\n            linked to a smartphone to measure workout form from a user.\n            <br><br>My major role in the project involved creating the algorithm that would measure the data of\n            the workout and give output on whether or not the form of the\n            workout was performed well.\n          </p>\n        </div>\n        <br><br><br>\n      </div>\n\n      <div #resumetext class="resume-text" *ngIf="selectedPage.id === 4">\n        <a class="linkind">Download as PDF</a>\n      </div>\n    </div>\n\n    <div class="footer">\n      <br>This website is hosted on github pages <a class="link-orange" href="https://github.com/ErikHoffman?tab=repositories"><div id="github">Here</div></a>\n      <br>Contact Me:<br>\n      Email: erik_hoffman@outlook.com<br>\n      <a href="https://www.linkedin.com/profile/preview?locale=en_US&trk=prof-0-sb-preview-primary-button">\n      <img class="bounce-image" id ="linkedinlogo" src="../../assets/linkedin.png" title="Link to my linkedin profile" style="height:45px;width:45px;position:relative;"></a>\n      <a href="https://bitbucket.org/ErikHoffman/profile/repositories?visibility=all">\n      <img class="bounce-image" id ="bitbucketlogo" src="../../assets/bitbucket_new_logo.png" title="Link to my bitbucket" style="width:45px;height:45px;position:relative;"></a>\n    </div>\n  </div>\n</div>\n'},697:function(e,t,n){e.exports=n(389)}},[697]);