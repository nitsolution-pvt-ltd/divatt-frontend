(self["webpackChunkuLearnSuperAdmin"] = self["webpackChunkuLearnSuperAdmin"] || []).push([["src_app_pages_dashboard_dashboard_module_ts"],{

/***/ 99366:
/*!*************************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard-routing.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageRoutingModule": function() { return /* binding */ DashboardPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.page */ 76446);




const routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_0__.DashboardPage
    }
];
let DashboardPageRoutingModule = class DashboardPageRoutingModule {
};
DashboardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DashboardPageRoutingModule);



/***/ }),

/***/ 71659:
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageModule": function() { return /* binding */ DashboardPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-routing.module */ 99366);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page */ 76446);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);








let DashboardPageModule = class DashboardPageModule {
};
DashboardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardPageRoutingModule
        ],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.DashboardPage]
    })
], DashboardPageModule);



/***/ }),

/***/ 76446:
/*!***************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPage": function() { return /* binding */ DashboardPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./dashboard.page.html */ 60419);
/* harmony import */ var _dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page.scss */ 24494);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);





let DashboardPage = class DashboardPage {
    constructor(menuCtrl) {
        this.menuCtrl = menuCtrl;
        this.Customers = '65';
        this.Orders = '65';
        this.Employees = '55';
        this.Employees2 = '85';
        this.Employees3 = '55';
        this.Employees4 = '39';
        this.chartOptions = {
            series: [
                {
                    name: "series1",
                    data: [31, 40, 28, 51, 42, 109, 100]
                },
                {
                    name: "series2",
                    data: [11, 32, 45, 32, 34, 52, 41]
                }
            ],
            chart: {
                height: 350,
                type: "area"
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: "smooth"
            },
            xaxis: {
                type: "datetime",
                categories: [
                    "2018-09-19T00:00:00.000Z",
                    "2018-09-19T01:30:00.000Z",
                    "2018-09-19T02:30:00.000Z",
                    "2018-09-19T03:30:00.000Z",
                    "2018-09-19T04:30:00.000Z",
                    "2018-09-19T05:30:00.000Z",
                    "2018-09-19T06:30:00.000Z"
                ]
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm"
                }
            }
        };
        this.chartOption = {
            series: [
                {
                    name: "Website Blog",
                    type: "column",
                    data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
                },
                {
                    name: "Social Media",
                    type: "line",
                    data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
                }
            ],
            chart: {
                height: 350,
                type: "line"
            },
            stroke: {
                width: [0, 4]
            },
            title: {
                text: "Traffic Sources"
            },
            dataLabels: {
                enabled: true,
                enabledOnSeries: [1]
            },
            labels: [
                "01 Jan 2001",
                "02 Jan 2001",
                "03 Jan 2001",
                "04 Jan 2001",
                "05 Jan 2001",
                "06 Jan 2001",
                "07 Jan 2001",
                "08 Jan 2001",
                "09 Jan 2001",
                "10 Jan 2001",
                "11 Jan 2001",
                "12 Jan 2001"
            ],
            xaxis: {
                type: "datetime"
            },
            yaxis: [
                {
                    title: {
                        text: "Website Blog"
                    }
                },
                {
                    opposite: true,
                    title: {
                        text: "Social Media"
                    }
                }
            ]
        };
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.menuCtrl.enable(true);
    }
    generateData(baseval, count, yrange) {
        var i = 0;
        var series = [];
        while (i < count) {
            var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
            var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
            var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;
            series.push([x, y, z]);
            baseval += 86400000;
            i++;
        }
        return series;
    }
};
DashboardPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.MenuController }
];
DashboardPage.propDecorators = {
    chart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ["chart",] }]
};
DashboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-dashboard',
        template: _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DashboardPage);



/***/ }),

/***/ 24494:
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.scss ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 60419:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.page.html ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- common header show -->\r\n<common-header></common-header>\r\n\r\n<ion-content class=\"dashboard\">\r\n    <div class=\"page-body\">\r\n        <div class=\"page-wrapper\">\r\n            <div class=\"note-section\">\r\n                <ion-grid>\r\n                    <ion-row>\r\n                        <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"3\">\r\n                            <div class=\"note-item card-outer\">\r\n                                <div class=\"card card-box card-note\">\r\n                                    <div class=\"top\">\r\n                                        <div class=\"icon\" style=\"background: #4290FC;\">\r\n                                            <mat-icon>keyboard</mat-icon>\r\n                                        </div>\r\n                                        <div class=\"text\">Orders</div>\r\n                                    </div>\r\n                                    <div class=\"middle\">\r\n                                        <mat-icon style=\"color: #F64545\">arrow_downward</mat-icon>\r\n                                        <div>$3,485</div>\r\n                                    </div>\r\n                                    <div class=\"bottom\"><b>+36%</b> from last month</div>\r\n                                </div>\r\n                            </div>             \r\n                        </ion-col>\r\n                        <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"3\">\r\n                            <div class=\"note-item card-outer\">\r\n                                <div class=\"card card-box card-note\" style=\"box-shadow: 0 0.46875rem 2.1875rem rgb(27 201 67 / 3%), 0 0.9375rem 1.40625rem rgb(27 201 67 / 3%), 0 0.25rem 0.53125rem rgb(27 201 67 / 5%), 0 0.125rem 0.1875rem rgb(27 201 67 / 3%);\">\r\n                                    <div class=\"top\">\r\n                                        <div class=\"icon\" style=\"background: #1bc943;\">\r\n                                            <mat-icon>description</mat-icon>\r\n                                        </div>\r\n                                        <div class=\"text\">Reports</div>\r\n                                    </div>\r\n                                    <div class=\"middle\">\r\n                                        <mat-icon style=\"color: #F4772E;\">arrow_upward</mat-icon>\r\n                                        <div>436</div>\r\n                                    </div>\r\n                                    <div class=\"bottom\"><b>+65%</b> from last month</div>\r\n                                </div>\r\n                            </div>             \r\n                        </ion-col>\r\n                        <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"3\">\r\n                            <div class=\"note-item card-outer\">\r\n                                <div class=\"card card-box card-note\" style=\"box-shadow: 0 0.46875rem 2.1875rem rgb(248 50 69 / 3%), 0 0.9375rem 1.40625rem rgb(248 50 69 / 3%), 0 0.25rem 0.53125rem rgb(248 50 69 / 5%), 0 0.125rem 0.1875rem rgb(248 50 69 / 3%);\">\r\n                                    <div class=\"top\">\r\n                                        <div class=\"icon\" style=\"background: #F64545;\">\r\n                                            <mat-icon>person</mat-icon>\r\n                                        </div>\r\n                                        <div class=\"text\">Customers</div>\r\n                                    </div>\r\n                                    <div class=\"middle\">\r\n                                        <mat-icon style=\"color: #59CA44;\">arrow_downward</mat-icon>\r\n                                        <div>4867</div>\r\n                                    </div>\r\n                                    <div class=\"bottom\"><b>+22%</b> from last month</div>\r\n                                </div>\r\n                            </div>             \r\n                        </ion-col>\r\n                        <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"6\" size-lg=\"3\">\r\n                            <div class=\"note-item card-outer\">\r\n                                <div class=\"card card-box card-note\" style=\"box-shadow: 0 0.46875rem 2.1875rem rgb(60 68 177 / 3%), 0 0.9375rem 1.40625rem rgb(60 68 177 / 3%), 0 0.25rem 0.53125rem rgb(60 68 177 / 5%), 0 0.125rem 0.1875rem rgb(60 68 177 / 3%);\">\r\n                                    <div class=\"top\">\r\n                                        <div class=\"icon\" style=\"background: #3D46B1;\">\r\n                                            <mat-icon>keyboard</mat-icon>\r\n                                        </div>\r\n                                        <div class=\"text\">Sales</div>\r\n                                    </div>\r\n                                    <div class=\"middle\">\r\n                                        <mat-icon style=\"color: #4290FC;\">arrow_upward</mat-icon>\r\n                                        <div>433</div>\r\n                                    </div>\r\n                                    <div class=\"bottom\"><b>+32%</b> from last month</div>\r\n                                </div>\r\n                            </div>             \r\n                        </ion-col>\r\n                    </ion-row>\r\n                </ion-grid>\r\n            </div>\r\n            <ion-grid>\r\n                <ion-row>\r\n                    <ion-col size-md=\"6\" size-lg=\"6\">\r\n                        <div class=\"card-outer chart-box card-table\">\r\n                            <div class=\"card card-box\">\r\n                                <div class=\"card-header\">\r\n                                    <div class=\"card-header-tittle\">\r\n                                        <h6>Sales statistics</h6>\r\n                                    </div>\r\n                                    <div class=\"card-header-action\">\r\n                                        <mat-icon>stacked_line_chart</mat-icon>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"card-body\">\r\n                                    <div id=\"chart\">\r\n                                        <apx-chart\r\n                                          [series]=\"chartOptions.series\"\r\n                                          [chart]=\"chartOptions.chart\"\r\n                                          [xaxis]=\"chartOptions.xaxis\"\r\n                                          [stroke]=\"chartOptions.stroke\"\r\n                                          [tooltip]=\"chartOptions.tooltip\"\r\n                                          [dataLabels]=\"chartOptions.dataLabels\"\r\n                                        ></apx-chart>\r\n                                    `</div>\r\n                                    <div class=\"chart-segment\">\r\n                                        <ion-segment value=\"lastWeek\">\r\n                                            <ion-segment-button value=\"lastWeek\">\r\n                                              <ion-label>Last Week</ion-label>\r\n                                            </ion-segment-button>\r\n                                            <ion-segment-button value=\"lastMonth\">\r\n                                              <ion-label>Last Month</ion-label>\r\n                                            </ion-segment-button>\r\n                                            <ion-segment-button value=\"lastYear\">\r\n                                              <ion-label>Last Year</ion-label>\r\n                                            </ion-segment-button>\r\n                                        </ion-segment>\r\n                                    </div>\r\n                                    <div class=\"chart-details\">\r\n                                        <ion-row>\r\n                                            <ion-col size-md=\"12\" size-lg=\"6\">\r\n                                                <div class=\"chart-details-item\">\r\n                                                    <div class=\"chart-details-header\">\r\n                                                        <div class=\"text-bold\">Orders</div>\r\n                                                        <div class=\"text-bold\" style=\"color: #F64545;\">345</div>\r\n                                                    </div>\r\n                                                    <div class=\"chart-details-body\">\r\n                                                        <progress-bar [progress]=\"Orders\" [color]=\"'#F64545'\">\r\n                                                        </progress-bar>\r\n                                                    </div>\r\n                                                    <div class=\"chart-details-header chart-details-footer\">\r\n                                                        <div>Target</div>\r\n                                                        <div>100%</div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </ion-col>\r\n                                            <ion-col size-md=\"12\" size-lg=\"6\">\r\n                                                <div class=\"chart-details-item\">\r\n                                                    <div class=\"chart-details-header\">\r\n                                                        <div class=\"text-bold\">Customers</div>\r\n                                                        <div class=\"text-bold\" style=\"color: #F4772E;\">433</div>\r\n                                                    </div>\r\n                                                    <div class=\"chart-details-body\">\r\n                                                        <progress-bar [progress]=\"Customers\" [color]=\"'#F4772E'\">\r\n                                                        </progress-bar>\r\n                                                    </div>\r\n                                                    <div class=\"chart-details-header chart-details-footer\">\r\n                                                        <div>Target</div>\r\n                                                        <div>100%</div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </ion-col>\r\n                                        </ion-row>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </ion-col>\r\n                    <ion-col size-md=\"6\" size-lg=\"6\">\r\n                        <div class=\"card-outer chart-box card-table\">\r\n                            <div class=\"card card-box\">\r\n                                <div class=\"card-header\">\r\n                                    <div class=\"card-header-tittle\">\r\n                                        <h6>Sales statistics</h6>\r\n                                    </div>\r\n                                    <div class=\"card-header-action\">\r\n                                        <mat-icon>stacked_line_chart</mat-icon>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"card-body\">\r\n                                    <div id=\"chart\">\r\n                                        <apx-chart\r\n                                          [series]=\"chartOption.series\"\r\n                                          [chart]=\"chartOption.chart\"\r\n                                          [yaxis]=\"chartOption.yaxis\"\r\n                                          [xaxis]=\"chartOption.xaxis\"\r\n                                          [labels]=\"chartOption.labels\"\r\n                                          [stroke]=\"chartOption.stroke\"\r\n                                          [title]=\"chartOption.title\"\r\n                                          [dataLabels]=\"chartOption.dataLabels\"\r\n                                          [fill]=\"chartOption.fill\"\r\n                                          [tooltip]=\"chartOption.tooltip\"\r\n                                        ></apx-chart>\r\n                                    </div>\r\n                                    <div class=\"chart-segment\">\r\n                                        <ion-segment value=\"lastWeek\">\r\n                                            <ion-segment-button value=\"lastWeek\">\r\n                                              <ion-label>Last Week</ion-label>\r\n                                            </ion-segment-button>\r\n                                            <ion-segment-button value=\"lastMonth\">\r\n                                              <ion-label>Last Month</ion-label>\r\n                                            </ion-segment-button>\r\n                                            <ion-segment-button value=\"lastYear\">\r\n                                              <ion-label>Last Year</ion-label>\r\n                                            </ion-segment-button>\r\n                                        </ion-segment>\r\n                                    </div>\r\n                                    <div class=\"chart-details\">\r\n                                        <ion-row>\r\n                                            <ion-col size-md=\"12\" size-lg=\"6\">\r\n                                                <div class=\"chart-details-item\">\r\n                                                    <div class=\"chart-details-header\">\r\n                                                        <div class=\"text-bold\">Orders</div>\r\n                                                        <div class=\"text-bold\" style=\"color: #59CA44;\">345</div>\r\n                                                    </div>\r\n                                                    <div class=\"chart-details-body\">\r\n                                                        <progress-bar [progress]=\"Orders\" [color]=\"'#59CA44'\">\r\n                                                        </progress-bar>\r\n                                                    </div>\r\n                                                    <div class=\"chart-details-header chart-details-footer\">\r\n                                                        <div>Target</div>\r\n                                                        <div>100%</div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </ion-col>\r\n                                            <ion-col size-md=\"12\" size-lg=\"6\">\r\n                                                <div class=\"chart-details-item\">\r\n                                                    <div class=\"chart-details-header\">\r\n                                                        <div class=\"text-bold\">Customers</div>\r\n                                                        <div class=\"text-bold\" style=\"color: #32C5DB;\">433</div>\r\n                                                    </div>\r\n                                                    <div class=\"chart-details-body\">\r\n                                                        <progress-bar [progress]=\"Customers\" [color]=\"'#32C5DB'\">\r\n                                                        </progress-bar>\r\n                                                    </div>\r\n                                                    <div class=\"chart-details-header chart-details-footer\">\r\n                                                        <div>Target</div>\r\n                                                        <div>100%</div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </ion-col>\r\n                                        </ion-row>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </ion-col>\r\n                </ion-row>\r\n\r\n                <ion-row>\r\n                    <ion-col size-md=\"6\" size-lg=\"12\">\r\n                        <div class=\"card-outer\">\r\n                            <div class=\"card card-box card-table\">\r\n                                <div class=\"card-header\">\r\n                                    <div class=\"card-header-tittle\">\r\n                                        Employees status \r\n                                    </div>\r\n                                    <div class=\"card-header-action\">\r\n                                        <mat-icon>settings</mat-icon>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"card-body\">\r\n                                    <div class=\"table-responsive\">\r\n                                        <table class=\"table\">\r\n                                            <thead>\r\n                                                <tr>\r\n                                                    <th class=\"ion-text-start\">#</th>\r\n                                                    <th class=\"ion-text-start\">Name</th>\r\n                                                    <th class=\"ion-text-center\">Status</th>\r\n                                                    <th class=\"ion-text-center\">Progress</th>\r\n                                                    <th class=\"ion-text-center\">Actions</th>\r\n                                                </tr>\r\n                                            </thead>\r\n                                            <tbody>\r\n                                                <tr>\r\n                                                    <td>12</td>\r\n                                                    <td>\r\n                                                        <ion-item class=\"name-box\">\r\n                                                            <ion-avatar slot=\"start\">\r\n                                                              <img src=\"assets/images/avatar1.jpg\">\r\n                                                            </ion-avatar>\r\n                                                            <ion-label>\r\n                                                              <h2 class=\"userName\">Shanelle Wynn</h2>\r\n                                                              <h3 class=\"userRole\">UI Engineer, Apple Inc.</h3>\r\n                                                            </ion-label>\r\n                                                        </ion-item>\r\n                                                    </td>\r\n                                                    <td>\r\n                                                        <div class=\"status warning\">\r\n                                                            Pending\r\n                                                        </div>\r\n                                                    </td>\r\n                                                    <td>\r\n                                                        <progress-bar [progress]=\"Employees\" [color]=\"'#32C5DB'\">\r\n                                                        </progress-bar>\r\n                                                    </td>\r\n                                                    <td>\r\n                                                        <div class=\"action ion-text-center\">\r\n                                                            <button mat-flat-button color=\"primary\">\r\n                                                                <mat-icon>tune</mat-icon>\r\n                                                            </button>\r\n                                                        </div>\r\n                                                    </td>\r\n                                                </tr>\r\n                                                <tr>\r\n                                                    <td>12</td>\r\n                                                    <td>\r\n                                                        <ion-item class=\"name-box\">\r\n                                                            <ion-avatar slot=\"start\">\r\n                                                              <img src=\"assets/images/avatar2.jpg\">\r\n                                                            </ion-avatar>\r\n                                                            <ion-label>\r\n                                                              <h2 class=\"userName\">Shanelle Wynn</h2>\r\n                                                              <h3 class=\"userRole\">UI Engineer, Apple Inc.</h3>\r\n                                                            </ion-label>\r\n                                                        </ion-item>\r\n                                                    </td>\r\n                                                    <td>\r\n                                                        <div class=\"status warning\">\r\n                                                            Pending\r\n                                                        </div>\r\n                                                    </td>\r\n                                                    <td>\r\n                                                        <progress-bar [progress]=\"Employees2\" [color]=\"'#59CA44'\">\r\n                                                        </progress-bar>\r\n                                                    </td>\r\n                                                    <td>\r\n                                                        <div class=\"action ion-text-center\">\r\n                                                            <button mat-flat-button color=\"primary\">\r\n                                                                <mat-icon>tune</mat-icon>\r\n                                                            </button>\r\n                                                        </div>\r\n                                                    </td>\r\n                                                </tr>\r\n                                                <tr>\r\n                                                    <td>13</td>\r\n                                                    <td>\r\n                                                        <ion-item class=\"name-box\">\r\n                                                            <ion-avatar slot=\"start\">\r\n                                                              <img src=\"assets/images/avatar3.jpg\">\r\n                                                            </ion-avatar>\r\n                                                            <ion-label>\r\n                                                              <h2 class=\"userName\">Regan Norris</h2>\r\n                                                              <h3 class=\"userRole\">Senior Project Manager</h3>\r\n                                                            </ion-label>\r\n                                                        </ion-item>\r\n                                                    </td>\r\n                                                    <td>\r\n                                                        <div class=\"status danger\">\r\n                                                            failed\r\n                                                        </div>\r\n                                                    </td>\r\n                                                    <td>\r\n                                                        <progress-bar [progress]=\"Employees3\" [color]=\"'#f83245'\">\r\n                                                        </progress-bar>\r\n                                                    </td>\r\n                                                    <td>\r\n                                                        <div class=\"action ion-text-center\">\r\n                                                            <button mat-flat-button color=\"primary\">\r\n                                                                <mat-icon>tune</mat-icon>\r\n                                                            </button>\r\n                                                        </div>\r\n                                                    </td>\r\n                                                </tr>\r\n                                                <tr>\r\n                                                    <td>33</td>\r\n                                                    <td>\r\n                                                        <ion-item class=\"name-box\">\r\n                                                            <ion-avatar slot=\"start\">\r\n                                                              <img src=\"assets/images/people-1.jpg\">\r\n                                                            </ion-avatar>\r\n                                                            <ion-label>\r\n                                                              <h2 class=\"userName\">Beck Simpson</h2>\r\n                                                              <h3 class=\"userRole\">Frontend Developer</h3>\r\n                                                            </ion-label>\r\n                                                        </ion-item>\r\n                                                    </td>\r\n                                                    <td>\r\n                                                        <div class=\"status success\">\r\n                                                            Complete\r\n                                                        </div>\r\n                                                    </td>\r\n                                                    <td>\r\n                                                        <progress-bar [progress]=\"Employees4\" [color]=\"'#7A7B97'\">\r\n                                                        </progress-bar>\r\n                                                    </td>\r\n                                                    <td>\r\n                                                        <div class=\"action ion-text-center\">\r\n                                                            <button mat-flat-button color=\"primary\">\r\n                                                                <mat-icon>tune</mat-icon>\r\n                                                            </button>\r\n                                                        </div>\r\n                                                    </td>\r\n                                                </tr>\r\n                                            </tbody>\r\n                                        </table>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"card-footer\">\r\n                                    <button class=\"border-btn danger\" mat-stroked-button>Delete</button>\r\n                                    <div>\r\n                                        <button class=\"border-btn\" mat-stroked-button style=\"margin-right: 10px;\">View all</button>\r\n                                        <button class=\"fill-btn\" mat-stroked-button>Add new entry</button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </ion-grid>\r\n        </div>\r\n    </div>\r\n    <!-- common footer show -->\r\n    <common-footer></common-footer>\r\n</ion-content>\r\n\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_dashboard_dashboard_module_ts-es2015.js.map