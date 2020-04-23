(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/aboutus/aboutus.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/aboutus/aboutus.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <h3>About Us</h3> \n      <hr>\n      <div class=\"row\">\n        <div class=\"col-lg-4\">\n          <img src=\"assets/images/aboutus/aboutus_1.jpg\" width=\"100%\" class=\"img-responsive\" />\n        </div>\n        <div class=\"col-lg-8\">\n          <p style=\"line-height: 2.5;\">\n            AAA is 100% black owned tree felling and landscaping firm.<br>\n          With over 10 years’ experience in tree felling and landscaping we bring the change you want to see in your courtyard; backyard and streets. Backed by our young, energetic, trained, and dedicated professional team.  - We provide an excellent service at a minimal cost.  We comply with safety and regulations measures. To bring peace to our clients we are fully insured for both third party and public liability.  AAA your safe, reliable and cost effective tree felling company- how can we help you?\n          </p>        \n        </div>\n      </div>\n      <div class=\"row\">\n          <div class=\"col-lg-12\">\n            <img src=\"assets/images/aboutus/about-banner.jpg\" width=\"100%\" class=\"img-responsive\" />\n          </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-layout>\r\n  <mat-sidenav-container>\r\n    <mat-sidenav #sidenav role=\"navigation\">\r\n      <app-sidenav-list (sidenavClose)=\"sidenav.close()\"></app-sidenav-list>\r\n    </mat-sidenav>\r\n    <mat-sidenav-content>\r\n      <app-header (sidenavToggle)=\"sidenav.toggle()\"></app-header>\r\n      <main>\r\n        <router-outlet></router-outlet>\r\n      </main>\r\n      <app-footer></app-footer>\r\n    </mat-sidenav-content>\r\n  </mat-sidenav-container>\r\n</app-layout>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/banner/banner.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/banner/banner.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"carouselExampleSlidesOnly\" class=\"carousel slide\" data-ride=\"carousel\">\n    <div class=\"carousel-inner\">\n        <div class=\"carousel-item active\">\n            <img class=\"d-block w-100\" src=\"assets/images/banner/banner_10.jpg\" alt=\"First slide\">\n        </div>\n        <!-- <div class=\"carousel-item\">\n            <img class=\"d-block w-100\" src=\"assets/images/banner/banner_2.jpg\" alt=\"Second slide\">\n        </div>\n        <div class=\"carousel-item\">\n            <img class=\"d-block w-100\" src=\"assets/images/banner/banner_3.jpg\" alt=\"Third slide\">\n        </div> -->\n    </div>\n</div>\n<br>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/contactus/contactus.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/contactus/contactus.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h4>CONTACT US</h4>\n    <p>Please use any of the following options</p>\n  <hr>\n  \n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-12 col-md-8\">\n        <mat-card style=\"margin-bottom: 15px;\"  color=\"primary\">\n            <mat-card-header  color=\"primary\">\n               <mat-card-title> <h4 class=\"site-text\">Send Us a Message</h4></mat-card-title>\n               <hr>\n           </mat-card-header>\n           <!-- <img mat-card-image src=\"assets/images/home/home_2.jpg\" alt=\"Photo of a Shiba Inu\"> -->\n           <mat-card-content>\n            <form [formGroup]=\"ContactForm\" autocomplete=\"off\" class=\"col-12 white\" (ngSubmit)=\"OnSubmit(ContactForm)\" (blur)=\"logValidationErrors()\">\n                  <div class=\"input-field-class\">\n          \n                    <div class=\"row\">\n                      <mat-form-field  class=\"col-12\">\n                        <mat-label>Full Name</mat-label>\n                        <input matInput placeholder=\"Full Name\" #fullName ngModel formControlName=\"fullName\" (blur)=\"logValidationErrors()\">\n                        <mat-icon matPrefix>person_outline</mat-icon>\n                        <mat-error *ngIf=\"formErrors.fullName\"><b>{{formErrors.fullName}}</b></mat-error>\n                      </mat-form-field>\n                    </div>\n          \n                    <div class=\"row\">\n                      <mat-form-field  class=\"col\">\n                        <mat-label>Email Address</mat-label>    \n                        <input matInput placeholder=\"Email Address\" #emailAddress ngModel formControlName=\"emailAddress\" (blur)=\"logValidationErrors()\">\n                        <mat-icon matPrefix>mail</mat-icon>\n                        <mat-error *ngIf=\"formErrors.emailAddress\"><b>{{formErrors.emailAddress}}</b></mat-error>\n                      </mat-form-field>\n                    </div>\n          \n                    <div class=\"row\">\n                      <mat-form-field class=\"col\">\n                        <mat-label>Subject</mat-label>      \n                        <input matInput (keyup)=\"applyFilter($event.target.value)\"  placeholder=\"Subject\" #subject ngModel formControlName=\"subject\" (blur)=\"logValidationErrors()\">\n                        <mat-icon matPrefix>mail</mat-icon>\n                        <mat-error *ngIf=\"formErrors.subject\"><b>{{formErrors.subject}}</b></mat-error>\n                      </mat-form-field>\n                    </div>\n          \n                    <div class=\"row\">\n                        <mat-form-field class=\"col stretch-height\" >\n                            <mat-label>Message</mat-label>\n                            <textarea matInput rows=\"10\" (keyup)=\"applyFilter($event.target.value)\"  placeholder=\"Message\" formControlName=\"message\" (blur)=\"logValidationErrors()\"></textarea>\n                            <mat-error *ngIf=\"formErrors.message\"><b>{{formErrors.message}}</b></mat-error>\n                          </mat-form-field>\n                    </div>\n          \n                    <div class=\"row s12\">\n                      <button color=\"primary\" [disabled]=\"!ContactForm.valid\" mat-raised-button>Sign - UP</button>\n                    </div>\n                  </div>\n               </form>\n           </mat-card-content>\n          </mat-card> \n      </div>\n      <div class=\"col-12 col-md-4\">\n        <h4>Call Us</h4>\n      <hr>\n      <p>\n          <span style=\"margin: 6px;\"><mat-icon matPrefix>call</mat-icon></span><b>Landline : </b> +27 (0)31 261 1907 <br>\n          <span style=\"margin: 6px;\"><mat-icon matPrefix>stay_current_portrait</mat-icon></span><b>Mobile : </b>+27 (0)78 253 9442  <br>\n          <span style=\"margin: 6px;\"><mat-icon matPrefix>mail</mat-icon></span><b>Email  : </b> \n          <a href=\"mailto:info@tau-treefelling?Subject=Hello%20again\" target=\"_top\">info@tau-treefelling.co.za</a><br>        \n        Or\n        <br>\n        <span style=\"margin: 6px;\"><mat-icon matPrefix>mail</mat-icon></span><b>Email  : </b> \n          <a href=\"mailto:info@tau-treefelling?Subject=Hello%20again\" target=\"_top\">tau@tau-treefelling.co.za</a>  \n        <br>       \n      </p>\n      <br>\n      <h4>Physical Address : </h4>\n      <hr>\n      <p> \n        1 Helston Road <br>Manor Gardens <br>Durban,<br> 4001     \n      </p>\n      </div>\n    </div>\n  \n    <div class=\"row\">\n      <div class=\"col\">\n        <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460.154426062503!2d30.979720315110836!3d-29.859819981949762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef7aa035588fdc3%3A0xbbf19900bf754834!2s1+Helston+Rd%2C+Westridge%2C+Berea%2C+4091!5e0!3m2!1sen!2sza!4v1544405290074\" width=\"100%\" height=\"450\" frameborder=\"0\" style=\"border:1 px solid grey\" allowfullscreen></iframe>\n      </div>\n    </div>\n  </div>\n  </div>\n  \n  \n  \n  \n    <!-- <div class=\"col-lg-8 col-md-8 col-sm-12 col-xs-12\">\n      <h4>Send Us a Message</h4>\n      <hr>      \n      <form [formGroup]=\"ContactForm\" novalidate>\n        \n          <div class=\"form-group\">\n              <label>Full Name:</label>\n              <input class=\"form-control\" formControlName=\"FullName\" type=\"text\">\n          </div>        \n          <div *ngIf=\"ContactForm.controls['FullName'].invalid && (ContactForm.controls['FullName'].dirty || ContactForm.controls['FullName'].touched)\" class=\"alert alert-danger\">\n             <div *ngIf=\"ContactForm.controls['FullName'].errors.required\">\n                Your full name is required.\n             </div>\n          </div>\n  \n          <div class=\"form-group\">\n              <label>Your Email:</label>\n              <input class=\"form-control\" formControlName=\"EmailFrom\" type=\"text\">\n          </div>        \n          <div *ngIf=\"ContactForm.controls['EmailFrom'].invalid && (ContactForm.controls['EmailFrom'].dirty || ContactForm.controls['EmailFrom'].touched)\" class=\"alert alert-danger\">\n             <div *ngIf=\"ContactForm.controls['EmailFrom'].errors.required\">\n                Your email is required.\n             </div>\n          </div>\n  \n          <div class=\"form-group\">\n              <label>Subject To:</label>\n              <input class=\"form-control\" formControlName=\"Subject\" type=\"text\">\n          </div>\n          <div *ngIf=\"ContactForm.controls['Subject'].invalid && (ContactForm.controls['Subject'].dirty || ContactForm.controls['Subject'].touched)\" class=\"alert alert-danger\">\n              <div *ngIf=\"ContactForm.controls['Subject'].errors.required\">\n                Subject is required.\n              </div>\n          </div>\n    \n          <div class=\"form-group\">\n              <label>Message :</label>\n              <textarea class=\"form-control\" formControlName=\"Message\" type=\"textarea\" rows=\"10\"></textarea>\n          </div>\n          <div *ngIf=\"ContactForm.controls['Message'].invalid && (ContactForm.controls['Message'].dirty || ContactForm.controls['Message'].touched)\" class=\"alert alert-danger\">\n              <div *ngIf=\"ContactForm.controls['Message'].errors.required\">\n                Message is required.\n              </div>\n          </div>\n    \n          <button type=\"submit\"\n              [disabled]=\"ContactForm.pristine || ContactForm.invalid\" class=\"btn btn-success\" (click)= 'SendMail()'>\n              Send Mail\n          </button>\n          <div class=\"form-group message\">\n              <p style=\" text-align: center; font-weight: bold;\" [style.color]=\"hasErrors ? 'red': 'green'\">\n                {{ responseSent }}\n              </p>\n          </div>\n           <div *ngIf=\"isLoading\" class=\"relative\">\n              <app-spinner></app-spinner>\n          </div>          \n      </form>\n      <br />\n      \n       <p>Form value: {{ emailUsForm.value | json }}</p>\n      <p>Form status: {{ emailUsForm.status | json }}</p>\n  \n    </div>\n  \n    <div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\">\n      <h4>Call Us</h4>\n      <hr>\n      <p>\n        <b>Landline : </b> +27 (0) 31 261 1907 <br> <b>Or     : </b> +27 (0) 31 829 9130 <br>\n        <b>Mobile : </b>+27 (0) 78 253 9442  <br>\n        <b>Or     : </b>+27 (0) 65 822 3164  <br><br>\n        <b>Email  : </b>tau@tascconsulting.co.za / info@tascconsulting.co.za  <br>       \n      </p>\n      <br>\n      <h4>Physical Address : </h4>\n      <hr>\n      <p>\n        1 Helston Road,<br> Westridge,<br> Berea,<br>Durban, <br> 4091      \n      </p>\n    </div>\n    \n  </div>\n  \n  <div class=\"row\">\n    <h4>Find Us</h4>\n    <hr>\n    <br>\n    <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n      <p>\n        <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460.154426062503!2d30.979720315110836!3d-29.859819981949762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef7aa035588fdc3%3A0xbbf19900bf754834!2s1+Helston+Rd%2C+Westridge%2C+Berea%2C+4091!5e0!3m2!1sen!2sza!4v1544405290074\" width=\"100%\" height=\"450\" frameborder=\"0\" style=\"border:1 px solid grey\" allowfullscreen></iframe>\n    </p>\n    </div>\n    \n  \n  </div> -->\n  \n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/footer/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" id=\"footer\" >\n    <div class=\"container\" style=\"padding:10px;\">\n        <div class=\"container\">\n            <br>\n              <div id=\"footer\" class=\"row\" style=\"margin-top: 50px;\">\n                  <div class=\"col-lg-4 col-xs-12\">\n                    <p><b>What we offer</b></p> \n                    <hr>\n                    <ul>\n                        <li>Tree felling and Trimming</li>\n                        <li>Site clearing and stump removal</li>\n                        <li>Palm trimming and grass cutting</li>\n                    </ul>      \n                  </div>\n              \n                  <div class=\"col-lg-4 col-xs-12  \">\n                      <p><b>Provinces that we now cover</b></p>\n                      <hr/>\n                          <ul>\n                              <li>Eastern Cape</li>\n                              <li>Free State</li>\n                              <li>Gauteng</li>\n                              <li>KwaZulu-Natal</li>\n                              <li>Limpopo</li>\n                              <li>Mpumalanga</li>\n                              <li>North West</li>\n                              <li>Northern Cape</li>\n                              <li>Western Cape</li>\n                          </ul>                            \n                  </div>\n              \n                  <div class=\"col-lg-4 col-xs-12  \">\n                      <p><b>Contact Us</b></p>\n                      <hr/> \n                      <p>\n                        For any information regarding the companies services. </p>                   \n                       <div class=\"row\">\n                           <div class=\"col-lg-4\">\n                           <p>   Visit Us At :</p> \n                           </div>\n                           <div class=\"col-lg-8\">\n                              <p>1 Helston Road,<br> Westridge, Berea,<br>Durban, 4091.</p>\n                          </div>\n                       </div>  \n  \n                      <div class=\"row\">\n                              <div class=\"col-lg-12\">\n                                  <p> \n                                    <span style=\"margin: 6px;\"><mat-icon matPrefix>call</mat-icon></span><b>Landline : </b> +27 (0) 31 261 1907 <br> <b>Or     : </b> +27 (0) 31 829 9130 <br>\n                                    <span style=\"margin: 6px;\"><mat-icon matPrefix>stay_current_portrait</mat-icon></span><b>Mobile : </b>+27 (0) 78 253 9442  <br>\n                                    <span style=\"margin: 6px;\"><mat-icon matPrefix>mail</mat-icon></span><b>Email  : </b>\n                                    <a href=\"mailto:info@tau-treefelling?Subject=Hello%20again\" target=\"_top\">info@tau-treefelling.co.za</a>  <br> \n                              </p> \n                             </div>\n                          </div>                              \n                                                               \n                  </div>  \n              </div>\n              \n              <div class=\"row\">\n                <div class=\"col-lg-8 col-md-8 col-sm-12\">\n                    <p> &copy; Tree - Felling : Copyright &copy; 2020 - All rights reserved</p>\n                </div>\n              </div>\n          </div>\n  \n    </div>  \n  </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/gallery/gallery.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/gallery/gallery.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h4>Our Gallery</h4>\n  <hr>\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <h5>Some of our tools</h5>\n            <hr>\n            <div class=\"row\">\n              <div *ngFor='let tool of toolsImageList' class=\"well col-lg-3\">\n                <img  class=\"img-responsive\" width=\"100%\" [src]=\"tool.Src\"/>\n              </div>\n            </div>\n        </div> \n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n          <h5>Some of our projects</h5>\n          <hr>\n          <div class=\"row\">\n            <div *ngFor='let project of projectImageList' class=\"well col-lg-3\">\n              <img  class=\"img-responsive\" width=\"100%\" [src]=\"project.Src\"/>\n            </div>\n          </div>\n      </div> \n    </div>\n  </div>\n  <hr>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section fxLayout=\"column\" fxFlexAlign=\"stretch\">\n    <div fxFlexAlign=\"center\">\n      <h3>Welcome to Tree Felling</h3>\n    </div>\n    <app-banner></app-banner>\n    <br>\n\n    <div class=\"flex-container\" \n        fxLayout=\"row\" \n        fxLayout.xs=\"column\">\n      <div class=\"flex-item\" fxFlex=70 style=\"border: 2px green solid;\"> \n        <app-request-qoute></app-request-qoute>\n      </div>\n      <div class=\"flex-item\" fxFlex=30> \n        <img  class=\"img-responsive\" width=\"100%\" src=\"assets/images/logo/logo_1.jpg\"/>\n      </div>\n    </div> \n    \n</section>\n   "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/layout.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/layout.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" class=\"layout-wrapper\" >\n    <div fxFlex=\"80%\" fxFlex.lt-md=\"100%\" class=\"flex-wrapper\">\n       <ng-content></ng-content>\n    </div>\n </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navigation/header/header.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navigation/header/header.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n    <div fxHide.gt-xs>\n        <button mat-icon-button (click)=\"onToggleSidenav()\">\n            <mat-icon>menu</mat-icon>\n        </button>\n    </div>\n    <div>\n        <a routerLink=\"/home\">Tree-Filling</a>\n    </div>\n    <div fxFlex fxLayout fxLayoutAlign=\"end\" fxHide.xs>\n        <ul fxLayout fxLayoutGap=\"15px\" class=\"navigation-items\">\n            <li>\n                <a routerLink=\"/aboutus\">About-Us</a>\n            </li>\n            <li>\n                <a routerLink=\"/services\">Services</a>\n            </li>\n            <li>\n                <a routerLink=\"/gallery\">Gallery</a>\n            </li>\n            <li>\n                <a routerLink=\"/contactus\">Contact Us</a>\n            </li>\n        </ul>\n    </div>\n  </mat-toolbar>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navigation/sidenav-list/sidenav-list.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navigation/sidenav-list/sidenav-list.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-nav-list>\n    <a mat-list-item routerLink=\"/home\" (click)=\"onSidenavClose()\">\n      <mat-icon>home</mat-icon> <span class=\"nav-caption\">Home</span>\n    </a>\n    <a mat-list-item routerLink=\"/aboutus\" (click)=\"onSidenavClose()\">\n      <mat-icon>account_balance</mat-icon><span class=\"nav-caption\">About Us</span>\n    </a>\n    <a mat-list-item routerLink=\"/services\" (click)=\"onSidenavClose()\">\n      <mat-icon>add_photo_alternate</mat-icon><span class=\"nav-caption\">Services</span>\n    </a>\n    <a mat-list-item routerLink=\"/gallery\" (click)=\"onSidenavClose()\">\n      <mat-icon>add_photo_alternate</mat-icon><span class=\"nav-caption\">Gallery</span>\n    </a>\n    <a mat-list-item routerLink=\"/contactus\" (click)=\"onSidenavClose()\">\n      <mat-icon>local_post_office</mat-icon><span class=\"nav-caption\">Contact Us</span>\n    </a>\n  </mat-nav-list>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/request-qoute/request-qoute.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/request-qoute/request-qoute.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card style=\"margin-bottom: 15px;\"  color=\"primary\">\n  <mat-card-header  color=\"primary\">\n     <mat-card-title> <h4 class=\"site-text\">Request Qoute</h4></mat-card-title>\n     <hr>\n </mat-card-header>\n <!-- <img mat-card-image src=\"assets/images/home/home_2.jpg\" alt=\"Photo of a Shiba Inu\"> -->\n <mat-card-content>\n  <form [formGroup]=\"RequestQouteForm\" autocomplete=\"off\" class=\"col-12 white\" (ngSubmit)=\"OnSubmit(RequestQouteForm)\" (blur)=\"logValidationErrors()\">\n        <div class=\"input-field-class\">\n\n          <div class=\"row\">\n            <mat-form-field  class=\"col-12\">\n              <mat-label>Full Name</mat-label>\n              <input matInput placeholder=\"Full Name\" #fullName ngModel formControlName=\"fullName\" (blur)=\"logValidationErrors()\">\n              <mat-icon matPrefix>person_outline</mat-icon>\n              <mat-error *ngIf=\"formErrors.fullName\"><b>{{formErrors.fullName}}</b></mat-error>\n            </mat-form-field>\n          </div>\n\n          <div class=\"row\">\n            <mat-form-field  class=\"col\">\n              <mat-label>Email Address</mat-label>    \n              <input matInput placeholder=\"Email Address\" #emailAddress ngModel formControlName=\"emailAddress\" (blur)=\"logValidationErrors()\">\n              <mat-icon matPrefix>mail</mat-icon>\n              <mat-error *ngIf=\"formErrors.emailAddress\"><b>{{formErrors.emailAddress}}</b></mat-error>\n            </mat-form-field>\n          \n            <mat-form-field  class=\"col\">\n              <mat-label>Contact Phone No.</mat-label>    \n              <input matInput placeholder=\"Contact Phone Number\" #contactPhoneNumber ngModel formControlName=\"contactPhoneNumber\" (blur)=\"logValidationErrors()\">\n              <mat-icon matPrefix>call</mat-icon>\n              <mat-error *ngIf=\"formErrors.contactPhoneNumber\"><b>{{formErrors.contactPhoneNumber}}</b></mat-error>\n            </mat-form-field>\n          </div>\n\n          <div class=\"row\">\n              <mat-form-field class=\"col stretch-height\" >\n                  <mat-label>Any additional Notes</mat-label>\n                  <textarea matInput rows=\"5\" (keyup)=\"applyFilter($event.target.value)\"  placeholder=\"Message\" formControlName=\"message\" (blur)=\"logValidationErrors()\"></textarea>\n                  <mat-error *ngIf=\"formErrors.message\"><b>{{formErrors.message}}</b></mat-error>\n                </mat-form-field>\n          </div>\n\n          <div class=\"row s12\">\n            <button color=\"primary\" [disabled]=\"!RequestQouteForm.valid\" mat-raised-button>Request</button>\n          </div>\n        </div>\n     </form>\n </mat-card-content>\n</mat-card> "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/services/services.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/services/services.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n   <div class=\"row\">\n     <div class=\"col-lg-12\">\n        <h3>Our Services</h3> \n        <hr>\n         <ul>\n            <li>Tree felling and Trimming</li>\n            <li>Site clearing and stump removal</li>\n            <li>Palm trimming and grass cutting</li>\n         </ul>\n     </div>\n   </div>\n\n   <div class=\"row\">\n        <div class=\"col-lg-4\">\n          <img src=\"assets/images/services/service_1.jpg\" width=\"100%\" class=\"img-responsive\" />\n        </div>\n        <div class=\"col-lg-4\">\n          <img src=\"assets/images/services/service_2.jpg\" width=\"100%\" class=\"img-responsive\" />\n        </div>\n        <div class=\"col-lg-4\">\n          <img src=\"assets/images/services/service_3.jpg\" width=\"100%\" class=\"img-responsive\" />\n        </div>\n    </div>\n    <br>\n\n</div>"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/aboutus/aboutus.component.css":
/*!***********************************************!*\
  !*** ./src/app/aboutus/aboutus.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0dXMvYWJvdXR1cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/aboutus/aboutus.component.ts":
/*!**********************************************!*\
  !*** ./src/app/aboutus/aboutus.component.ts ***!
  \**********************************************/
/*! exports provided: AboutusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusComponent", function() { return AboutusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutusComponent = /** @class */ (function () {
    function AboutusComponent() {
    }
    AboutusComponent.prototype.ngOnInit = function () {
    };
    AboutusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-aboutus',
            template: __webpack_require__(/*! raw-loader!./aboutus.component.html */ "./node_modules/raw-loader/index.js!./src/app/aboutus/aboutus.component.html"),
            styles: [__webpack_require__(/*! ./aboutus.component.css */ "./src/app/aboutus/aboutus.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutusComponent);
    return AboutusComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aboutus/aboutus.component */ "./src/app/aboutus/aboutus.component.ts");
/* harmony import */ var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contactus/contactus.component */ "./src/app/contactus/contactus.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"], pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'aboutus', component: _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_3__["AboutusComponent"] },
    { path: 'services', component: _services_services_component__WEBPACK_IMPORTED_MODULE_6__["ServicesComponent"] },
    { path: 'gallery', component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_5__["GalleryComponent"] },
    { path: 'contactus', component: _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_4__["ContactusComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-sidenav-container, mat-sidenav-content, mat-sidenav {\r\n    height: 100%;\r\n}\r\n\r\nmat-sidenav {\r\n    width: 250px;\r\n}\r\n\r\nmain {\r\n    padding: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1zaWRlbmF2LWNvbnRhaW5lciwgbWF0LXNpZGVuYXYtY29udGVudCwgbWF0LXNpZGVuYXYge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5tYXQtc2lkZW5hdiB7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbn1cclxuXHJcbm1haW4ge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./banner/banner.component */ "./src/app/banner/banner.component.ts");
/* harmony import */ var _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./aboutus/aboutus.component */ "./src/app/aboutus/aboutus.component.ts");
/* harmony import */ var _navigation_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navigation/header/header.component */ "./src/app/navigation/header/header.component.ts");
/* harmony import */ var _navigation_sidenav_list_sidenav_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./navigation/sidenav-list/sidenav-list.component */ "./src/app/navigation/sidenav-list/sidenav-list.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./contactus/contactus.component */ "./src/app/contactus/contactus.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _shared_services_email_service_email_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/services/email-service/email.service */ "./src/app/shared/services/email-service/email.service.ts");
/* harmony import */ var _shared_services_image_service_image_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/services/image-service/image.service */ "./src/app/shared/services/image-service/image.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _request_qoute_request_qoute_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./request-qoute/request-qoute.component */ "./src/app/request-qoute/request-qoute.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _banner_banner_component__WEBPACK_IMPORTED_MODULE_9__["BannerComponent"],
                _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_10__["AboutusComponent"],
                _navigation_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                _navigation_sidenav_list_sidenav_list_component__WEBPACK_IMPORTED_MODULE_12__["SidenavListComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
                _layout_layout_component__WEBPACK_IMPORTED_MODULE_15__["LayoutComponent"],
                _services_services_component__WEBPACK_IMPORTED_MODULE_16__["ServicesComponent"],
                _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_17__["ContactusComponent"],
                _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_18__["GalleryComponent"],
                _request_qoute_request_qoute_component__WEBPACK_IMPORTED_MODULE_22__["RequestQouteComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'ng-cli-universal' }),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_13__["MaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_21__["ToastrModule"].forRoot({
                    progressBar: true
                })
            ],
            providers: [_shared_services_email_service_email_service__WEBPACK_IMPORTED_MODULE_19__["EmailService"], _shared_services_image_service_image_service__WEBPACK_IMPORTED_MODULE_20__["ImageService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/banner/banner.component.css":
/*!*********************************************!*\
  !*** ./src/app/banner/banner.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhbm5lci9iYW5uZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/banner/banner.component.ts":
/*!********************************************!*\
  !*** ./src/app/banner/banner.component.ts ***!
  \********************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BannerComponent = /** @class */ (function () {
    function BannerComponent() {
    }
    BannerComponent.prototype.ngOnInit = function () {
    };
    BannerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-banner',
            template: __webpack_require__(/*! raw-loader!./banner.component.html */ "./node_modules/raw-loader/index.js!./src/app/banner/banner.component.html"),
            styles: [__webpack_require__(/*! ./banner.component.css */ "./src/app/banner/banner.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BannerComponent);
    return BannerComponent;
}());



/***/ }),

/***/ "./src/app/contactus/contactus.component.css":
/*!***************************************************!*\
  !*** ./src/app/contactus/contactus.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3R1cy9jb250YWN0dXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/contactus/contactus.component.ts":
/*!**************************************************!*\
  !*** ./src/app/contactus/contactus.component.ts ***!
  \**************************************************/
/*! exports provided: ContactusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusComponent", function() { return ContactusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_email_service_email_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/email-service/email.service */ "./src/app/shared/services/email-service/email.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactusComponent = /** @class */ (function () {
    function ContactusComponent(toastr, fb, emailService) {
        var _this = this;
        this.toastr = toastr;
        this.fb = fb;
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
        // This object will hold the messages to be displayed to the user
        // Notice, each key in this object has the same name as the
        // corresponding form control
        this.formErrors = {
            'fullName': '',
            'emailAddress': '',
            'subject': '',
            'message': ''
        };
        // This object contains all the validation messages for this form
        this.validationMessages = {
            'fullName': {
                'required': 'Full name is required.',
                'minlength': 'Full name must be greater than 2 characters.',
                'maxlength': 'Full name must be less than 100 characters.'
            },
            'emailAddress': {
                'required': 'Email address is required.',
                'minlength': 'Email address address must be greater than 11 characters.',
                'maxlength': 'Email address address must be less than 150 characters.',
                'emailDomain': 'Email address domian should be devine-tech.com'
            },
            'subject': {
                'required': 'Subject is required.',
                'minlength': 'Subject must be greater than 5 characters.',
                'maxlength': 'Subject must be less than 150 characters.',
            },
            'message': {
                'required': 'Message is required.',
                'minlength': 'Message must be greater than 5 characters.',
                'maxlength': 'Message must be less than 150 characters.',
            }
        };
        this.hasError = function (controlName, errorName) {
            return _this.ContactForm.controls[controlName].hasError(errorName);
        };
    }
    ContactusComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ContactForm = this.fb.group({
            fullName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(60)]),
            emailAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(150)]),
            subject: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(60)]),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(200)]),
        });
        this.ContactForm.valueChanges.subscribe(function (data) {
            _this.logValidationErrors(_this.ContactForm);
        });
    };
    ContactusComponent.prototype.logValidationErrors = function (group) {
        var _this = this;
        if (group === void 0) { group = this.ContactForm; }
        Object.keys(group.controls).forEach(function (key) {
            var abstractControl = group.get(key);
            _this.formErrors[key] = '';
            if (abstractControl && !abstractControl.valid
                && (abstractControl.touched || abstractControl.dirty)) {
                var messages = _this.validationMessages[key];
                for (var errorKey in abstractControl.errors) {
                    if (errorKey) {
                        _this.formErrors[key] += messages[errorKey] + ' ';
                    }
                }
            }
            if (abstractControl instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) {
                _this.logValidationErrors(abstractControl);
            }
        });
    };
    ContactusComponent.prototype.OnSubmit = function (form) {
        // var formData = form.value;
        // const userData: User = this.getUserInformation(formData)
        // this.userService.registerUser(userData)
        //   .subscribe((data: any) => {
        //     if (data.succeeded == true) {
        //       this.resetForm(form);
        //       this.toastr.success('User registration successful', "Success!");
        //     }
        //     else
        //       this.toastr.error(data.errors[0].description);
        //   });
    };
    ContactusComponent.prototype.getUserInformation = function (formData) {
        return {
            UserName: formData.emailAddress,
            Password: formData.passwordGroup.password,
            Email: formData.emailAddress,
            FirstName: formData.firstName,
            LastName: formData.lastName
        };
    };
    ContactusComponent.prototype.resetForm = function (form) {
        if (form != null)
            form.reset();
        this.contactData = {
            UserName: '',
            Password: '',
            Email: '',
            FirstName: '',
            LastName: ''
        };
    };
    ContactusComponent.ctorParameters = function () { return [
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _shared_services_email_service_email_service__WEBPACK_IMPORTED_MODULE_3__["EmailService"] }
    ]; };
    ContactusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contactus',
            template: __webpack_require__(/*! raw-loader!./contactus.component.html */ "./node_modules/raw-loader/index.js!./src/app/contactus/contactus.component.html"),
            styles: [__webpack_require__(/*! ./contactus.component.css */ "./src/app/contactus/contactus.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _shared_services_email_service_email_service__WEBPACK_IMPORTED_MODULE_3__["EmailService"]])
    ], ContactusComponent);
    return ContactusComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/gallery/gallery.component.css":
/*!***********************************************!*\
  !*** ./src/app/gallery/gallery.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n    border: 1px solid rgb(8, 240, 124);\r\n  border-radius: 4px;\r\n  padding: 5px;\r\n  margin: 3px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQ0FBa0M7RUFDcEMsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1giLCJmaWxlIjoic3JjL2FwcC9nYWxsZXJ5L2dhbGxlcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoOCwgMjQwLCAxMjQpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgbWFyZ2luOiAzcHg7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/gallery/gallery.component.ts":
/*!**********************************************!*\
  !*** ./src/app/gallery/gallery.component.ts ***!
  \**********************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_image_service_image_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/image-service/image.service */ "./src/app/shared/services/image-service/image.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GalleryComponent = /** @class */ (function () {
    function GalleryComponent(imageService) {
        this.imageService = imageService;
        this.ImageList = [];
        this.toolsImageList = [];
        this.projectImageList = [];
    }
    GalleryComponent.prototype.getAllImages = function () {
        var _this = this;
        return this.imageService.getAllImages().subscribe(function (images) {
            _this.toolsImageList = images.filter(function (image) { return image.Category == 'tool'; });
            _this.projectImageList = images.filter(function (image) { return image.Category == 'project'; });
        });
    };
    ;
    GalleryComponent.prototype.ngOnChanges = function () {
        this.getAllImages();
    };
    GalleryComponent.prototype.ngOnInit = function () {
        this.getAllImages();
    };
    GalleryComponent.ctorParameters = function () { return [
        { type: _shared_services_image_service_image_service__WEBPACK_IMPORTED_MODULE_1__["ImageService"] }
    ]; };
    GalleryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! raw-loader!./gallery.component.html */ "./node_modules/raw-loader/index.js!./src/app/gallery/gallery.component.html"),
            styles: [__webpack_require__(/*! ./gallery.component.css */ "./src/app/gallery/gallery.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_image_service_image_service__WEBPACK_IMPORTED_MODULE_1__["ImageService"]])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.component.css":
/*!*********************************************!*\
  !*** ./src/app/layout/layout.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9sYXlvdXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! raw-loader!./layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.css */ "./src/app/layout/layout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var materialComponents = [
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["CarouselModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["WavesModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [materialComponents],
            exports: [materialComponents]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/navigation/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/navigation/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\r\n    text-decoration: none;\r\n    color: white;\r\n    font-size: 0.8em;\r\n}\r\n\r\na:hover, a:active{\r\n    color: lightgray;\r\n}\r\n\r\n.navigation-items{\r\n    list-style-type: none;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\nmat-toolbar{\r\n    border-radius: 3px;\r\n}\r\n\r\n@media(max-width: 959px){\r\n    mat-toolbar{\r\n        border-radius: 0px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0k7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb24vaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG59XHJcblxyXG5hOmhvdmVyLCBhOmFjdGl2ZXtcclxuICAgIGNvbG9yOiBsaWdodGdyYXk7XHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uLWl0ZW1ze1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxubWF0LXRvb2xiYXJ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDk1OXB4KXtcclxuICAgIG1hdC10b29sYmFye1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/navigation/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/navigation/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        var _this = this;
        this.sidenavToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onToggleSidenav = function () {
            _this.sidenavToggle.emit();
        };
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "sidenavToggle", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/navigation/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/navigation/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/navigation/sidenav-list/sidenav-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/navigation/sidenav-list/sidenav-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\r\n    text-decoration: none;\r\n    color: white;\r\n}\r\n\r\na:hover, a:active{\r\n    color: lightgray;\r\n}\r\n\r\n.nav-caption{\r\n    display: inline-block;\r\n    padding-left: 6px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9zaWRlbmF2LWxpc3Qvc2lkZW5hdi1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9uYXZpZ2F0aW9uL3NpZGVuYXYtbGlzdC9zaWRlbmF2LWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5hOmhvdmVyLCBhOmFjdGl2ZXtcclxuICAgIGNvbG9yOiBsaWdodGdyYXk7XHJcbn1cclxuXHJcbi5uYXYtY2FwdGlvbntcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmctbGVmdDogNnB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/navigation/sidenav-list/sidenav-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/navigation/sidenav-list/sidenav-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: SidenavListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavListComponent", function() { return SidenavListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidenavListComponent = /** @class */ (function () {
    function SidenavListComponent() {
        var _this = this;
        this.sidenavClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSidenavClose = function () {
            _this.sidenavClose.emit();
        };
    }
    SidenavListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SidenavListComponent.prototype, "sidenavClose", void 0);
    SidenavListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidenav-list',
            template: __webpack_require__(/*! raw-loader!./sidenav-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/navigation/sidenav-list/sidenav-list.component.html"),
            styles: [__webpack_require__(/*! ./sidenav-list.component.css */ "./src/app/navigation/sidenav-list/sidenav-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidenavListComponent);
    return SidenavListComponent;
}());



/***/ }),

/***/ "./src/app/request-qoute/request-qoute.component.css":
/*!***********************************************************!*\
  !*** ./src/app/request-qoute/request-qoute.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .mat-card-header{\r\n    background-color: #12882f !important;\r\n  } \r\n  \r\n  ::ng-deep .mat-card-title{\r\n    color: white;\r\n    padding-top: 10px;\r\n  } \r\n  \r\n  ::ng-deep .mat-card-content{\r\n    padding:5px !important;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVxdWVzdC1xb3V0ZS9yZXF1ZXN0LXFvdXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQ0FBb0M7RUFDdEM7O0VBRUE7SUFDRSxZQUFZO0lBQ1osaUJBQWlCO0VBQ25COztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCIiwiZmlsZSI6InNyYy9hcHAvcmVxdWVzdC1xb3V0ZS9yZXF1ZXN0LXFvdXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLm1hdC1jYXJkLWhlYWRlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjg4MmYgIWltcG9ydGFudDtcclxuICB9IFxyXG4gIFxyXG4gIDo6bmctZGVlcCAubWF0LWNhcmQtdGl0bGV7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgOjpuZy1kZWVwIC5tYXQtY2FyZC1jb250ZW50e1xyXG4gICAgcGFkZGluZzo1cHggIWltcG9ydGFudDtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/request-qoute/request-qoute.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/request-qoute/request-qoute.component.ts ***!
  \**********************************************************/
/*! exports provided: RequestQouteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestQouteComponent", function() { return RequestQouteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_email_service_email_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/email-service/email.service */ "./src/app/shared/services/email-service/email.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RequestQouteComponent = /** @class */ (function () {
    function RequestQouteComponent(toastr, fb, emailService) {
        var _this = this;
        this.toastr = toastr;
        this.fb = fb;
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
        // This object will hold the messages to be displayed to the user
        // Notice, each key in this object has the same name as the
        // corresponding form control
        this.formErrors = {
            'fullName': '',
            'emailAddress': '',
            'contactPhoneNumber': '',
            'message': ''
        };
        // This object contains all the validation messages for this form
        this.validationMessages = {
            'fullName': {
                'required': 'Full name is required.',
                'minlength': 'Full name must be greater than 2 characters.',
                'maxlength': 'Full name must be less than 100 characters.'
            },
            'emailAddress': {
                'required': 'Email address is required.',
                'minlength': 'Email address address must be greater than 11 characters.',
                'maxlength': 'Email address address must be less than 150 characters.',
                'emailDomain': 'Email address domian should be devine-tech.com'
            },
            'contactPhoneNumber': {
                'required': 'Phone number is required.',
                'minlength': 'Phone number must be greater than 5 characters.',
                'maxlength': 'Phone number must be less than 150 characters.',
            },
            'message': {
                'required': 'Message is required.',
                'minlength': 'Message must be greater than 5 characters.',
                'maxlength': 'Message must be less than 150 characters.',
            }
        };
        this.hasError = function (controlName, errorName) {
            return _this.RequestQouteForm.controls[controlName].hasError(errorName);
        };
    }
    RequestQouteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.RequestQouteForm = this.fb.group({
            fullName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(60)]),
            emailAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(150)]),
            contactPhoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(60)]),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(200)]),
        });
        this.RequestQouteForm.valueChanges.subscribe(function (data) {
            _this.logValidationErrors(_this.RequestQouteForm);
        });
    };
    RequestQouteComponent.prototype.logValidationErrors = function (group) {
        var _this = this;
        if (group === void 0) { group = this.RequestQouteForm; }
        Object.keys(group.controls).forEach(function (key) {
            var abstractControl = group.get(key);
            _this.formErrors[key] = '';
            if (abstractControl && !abstractControl.valid
                && (abstractControl.touched || abstractControl.dirty)) {
                var messages = _this.validationMessages[key];
                for (var errorKey in abstractControl.errors) {
                    if (errorKey) {
                        _this.formErrors[key] += messages[errorKey] + ' ';
                    }
                }
            }
            if (abstractControl instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) {
                _this.logValidationErrors(abstractControl);
            }
        });
    };
    RequestQouteComponent.prototype.OnSubmit = function (form) {
        // var formData = form.value;
        // const userData: User = this.getUserInformation(formData)
        // this.userService.registerUser(userData)
        //   .subscribe((data: any) => {
        //     if (data.succeeded == true) {
        //       this.resetForm(form);
        //       this.toastr.success('User registration successful', "Success!");
        //     }
        //     else
        //       this.toastr.error(data.errors[0].description);
        //   });
    };
    RequestQouteComponent.ctorParameters = function () { return [
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _shared_services_email_service_email_service__WEBPACK_IMPORTED_MODULE_3__["EmailService"] }
    ]; };
    RequestQouteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-request-qoute',
            template: __webpack_require__(/*! raw-loader!./request-qoute.component.html */ "./node_modules/raw-loader/index.js!./src/app/request-qoute/request-qoute.component.html"),
            styles: [__webpack_require__(/*! ./request-qoute.component.css */ "./src/app/request-qoute/request-qoute.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _shared_services_email_service_email_service__WEBPACK_IMPORTED_MODULE_3__["EmailService"]])
    ], RequestQouteComponent);
    return RequestQouteComponent;
}());



/***/ }),

/***/ "./src/app/services/services.component.css":
/*!*************************************************!*\
  !*** ./src/app/services/services.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n    border: 1px solid #ddd;\r\n  border-radius: 4px;\r\n  padding: 5px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmljZXMvc2VydmljZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtFQUN4QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaIiwiZmlsZSI6InNyYy9hcHAvc2VydmljZXMvc2VydmljZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/services/services.component.ts":
/*!************************************************!*\
  !*** ./src/app/services/services.component.ts ***!
  \************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! raw-loader!./services.component.html */ "./node_modules/raw-loader/index.js!./src/app/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.css */ "./src/app/services/services.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/app/shared/services/email-service/email.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/services/email-service/email.service.ts ***!
  \****************************************************************/
/*! exports provided: EmailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailService", function() { return EmailService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmailService = /** @class */ (function () {
    function EmailService() {
    }
    EmailService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], EmailService);
    return EmailService;
}());



/***/ }),

/***/ "./src/app/shared/services/image-service/image.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/services/image-service/image.service.ts ***!
  \****************************************************************/
/*! exports provided: ImageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageService", function() { return ImageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ImageService = /** @class */ (function () {
    function ImageService(http) {
        this.http = http;
        this.imageUrl = "assets/api/images/image.json";
    }
    ImageService.prototype.getAllImages = function () {
        return this.http.get(this.imageUrl);
    };
    ImageService.prototype.getImageById = function (imageId) {
        return this.getAllImages().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (images) { return images.find(function (image) { return image.ImageId == imageId; }); }));
    };
    ImageService.prototype.getCategories = function () {
        return this.getAllImages().toPromise()
            .then(function (images) { return images.map(function (image) { return image.Category; }); });
    };
    ImageService.prototype.getImagesByCategory = function (category) {
        if (category === 'all') {
            return this.getAllImages().toPromise();
        }
        return this.getAllImages().toPromise().then(function (images) { return images.filter(function (image) { return image.Category === category; }); });
    };
    ImageService.prototype.getImagesForCategory = function () {
        var _this = this;
        var imagesForCategory = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.getCategories().then(function (depts) {
            var departmentSet = new Set(depts);
            departmentSet.forEach(function (categ) {
                _this.getAllImages().toPromise()
                    .then(function (images) { return images.filter(function (image) { return image.Category === categ; }); })
                    .then(function (images) { return imagesForCategory.next({ category: categ, images: images }); });
            });
        });
        return imagesForCategory;
    };
    ImageService.prototype.handleError = function (err) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        var errorMessage = '';
        if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = "An error occurred: " + err.error.message;
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = "Server returned code: " + err.status + ", error message is: " + err.message;
        }
        console.error(errorMessage);
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(errorMessage);
    };
    ImageService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    ImageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ImageService);
    return ImageService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: getBaseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseUrl", function() { return getBaseUrl; });
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
var providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Dev\PracticeDev\Vabereki\MrTau\Tree-Filling\TreeFilling\TreeFilling\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map