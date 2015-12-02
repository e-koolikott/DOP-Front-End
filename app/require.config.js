require.config({
  paths: {
    authenticatedUserService: 'services/authenticatedUserService',
    serverCallService: 'services/serverCallService',
    authenticationService: 'services/authenticationService',
    searchService: 'services/searchService',
    dopHeader: 'directives/header/header',
    editPortfolioModeHeader: 'directives/editPortfolioModeHeader/editPortfolioModeHeader',
    dopFooter: 'directives/footer/footer',
    dopSidebar: 'directives/sidebar/sidebar',
    translationService: 'services/translationService',
    dopAlert: 'directives/alert/alert',
    alertService: 'services/alertService',
    inputValueControl: 'directives/input-value-control',
    dopDetailedSearch: 'directives/detailedSearch/detailedSearch',
    dopMainFabButton: 'directives/mainFabButton/mainFabButton',
    addPortfolioDialogController: 'views/addPortfolioDialog/addPortfolioDialog',
    addMaterialDialogController: 'views/addMaterialDialog/addMaterialDialog',
    loginDialogController: 'views/loginDialog/loginDialog',
    dopTableOfContents: 'directives/tableOfContents/tableOfContents',
    commons: 'utils/commons',
    dopTargetGroupSelector: 'directives/targetGroupSelector/targetGroupSelector',
    dopCommentsCard: 'directives/commentsCard/commentsCard',
    dopRating: 'directives/rating/rating',
    angular: '../bower_components/angular/angular',
    'angular-animate': '../bower_components/angular-animate/angular-animate',
    'angular-aria': '../bower_components/angular-aria/angular-aria',
    'angular-click-outside': '../bower_components/angular-click-outside/clickoutside.directive',
    'angular-material': '../bower_components/angular-material/angular-material',
    'angular-material-icons': '../bower_components/angular-material-icons/angular-material-icons.min',
    'angular-resource': '../bower_components/angular-resource/angular-resource',
    'angular-route': '../bower_components/angular-route/angular-route',
    'angular-translate': '../bower_components/angular-translate/angular-translate',
    'angular-translate-loader-url': '../bower_components/angular-translate-loader-url/angular-translate-loader-url',
    'angular-youtube-mb': '../bower_components/angular-youtube-mb/src/angular-youtube-embed',
    requirejs: '../bower_components/requirejs/require',
    dopTaxonSelector: 'directives/taxonSelector/taxonSelector',
    'angular-screenfull': '../bower_components/angular-screenfull/dist/angular-screenfull',
    screenfull: '../bower_components/screenfull/dist/screenfull',
    'angular-scroll': '../bower_components/angular-scroll/angular-scroll',
    jsog: '../bower_components/jsog/lib/JSOG',
    ngInfiniteScroll: '../bower_components/ngInfiniteScroll/build/ng-infinite-scroll',
    jquery: '../bower_components/jquery/dist/jquery',
    'ng-file-upload-shim': '../bower_components/ng-file-upload-shim/ng-file-upload-shim',
    'ng-file-upload': '../bower_components/ng-file-upload/ng-file-upload',
    ngclipboard: '../bower_components/ngclipboard/dist/ngclipboard.min'
  },
  shim: {
    angular: {
      exports: 'angular'
    },
    'angular-animate': [
      'angular'
    ],
    'angular-aria': [
      'angular'
    ],
    'angular-material': [
      'angular-animate',
      'angular-aria'
    ],
    'angular-translate': [
      'angular'
    ],
    'angular-translate-loader-url': [
      'angular-translate'
    ],
    'angular-route': [
      'angular'
    ],
    'angular-youtube-mb': [
      'angular'
    ],
    'angular-resource': [
      'angular'
    ],
    'angular-material-icons': [
      'angular'
    ],
    'angular-screenfull': [
      'angular',
      'screenfull'
    ],
    'angular-scroll': [
      'angular'
    ],
    'ng-file-upload-shim': [
      'angular'
    ],
    'ng-file-upload': [
      'angular'
    ],
    ngInfiniteScroll: [
      'angular',
      'jquery'
    ],
    ngclipboard: [
      'angular'
    ],
    app: [
      'angular',
      'angular-translate',
      'angular-translate-loader-url',
      'angular-youtube-mb',
      'commons'
    ],
    priority: [
      'angular'
    ]
  },
  packages: [

  ]
});

require([
  'jquery',
  'angular',
  'app',
  'angular-translate',
  'angular-translate-loader-url',
  'angular-youtube-mb',
  'angular-route',
  'angular-material',
  'angular-material-icons',
  'angular-screenfull',
  'angular-scroll',
  'ng-file-upload-shim',
  'ng-file-upload',
  'ngclipboard',
  'translationService',
  'authenticatedUserService',
  'serverCallService',
  'authenticationService',
  'searchService',
  'dopHeader',
  'editPortfolioModeHeader',
  'dopFooter',
  'dopSidebar',
  'dopAlert',
  'alertService',
  'inputValueControl',
  'dopDetailedSearch',
  'dopMainFabButton',
  'addPortfolioDialogController',
  'addMaterialDialogController',
  'loginDialogController',
  'dopTaxonSelector',
  'dopTableOfContents',
  'jsog',
  'ngInfiniteScroll',
  'dopTargetGroupSelector',
  'dopCommentsCard',
  'dopRating'
], function (jquery, angular, app) {
  'use strict';
  var $html = angular.element(document.getElementsByTagName('html')[0]);

  angular.element().ready(function() {
    angular.bootstrap($html, [app.name]);
  });
});
