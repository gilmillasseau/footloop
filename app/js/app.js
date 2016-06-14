/**
 * Created by gilmillasseau on 03/06/16.
 */

var app = angular.module('app', ['pascalprecht.translate']);

app.constant('config', {
    'url': 'build'
});

app.config(['$translateProvider', function ($translateProvider) {

    $translateProvider.translations('en', {
        'app.name': 'FootLoop',
        'navbar.contact': 'Contact',
        'navbar.about': 'About',
        'navbar.download': 'Download',
        'navbar.download.url': 'https://itunes.apple.com/us/app/id1122845606',

        'section.main.description': 'Now you will always have an opinion for everything about football',
        'section.main.about.title': 'About',
        'section.main.about.description1': 'Can´t find the words to express yourself?',
        'section.main.about.description2': 'Or simply drawing blank?',
        'section.main.about.description3': 'Footloop brings you a entirely new way of expressing creative opinions regarding football. Use it with your friends and just enjoy it, Cheers?',

        'section.main.share': 'Share app with friends',
        'section.main.share.else': 'or else',
        'section.main.contactUs': 'Contact us',
        'section.main.contactUs.legend': 'We are interested to talk with you about anything',

        'social.twitter.url': 'https://twitter.com/FootLoopApp',
        'social.facebook.url': 'http://facebook.com',
        
        'social.linkedin.florian.url': 'https://pt.linkedin.com/in/florian-oliveira-87181395',
        'social.linkedin.pereira.url': 'https://pt.linkedin.com/in/joão-eduardo-pereira-2b73471a',
        'social.linkedin.gil.url': 'https://pt.linkedin.com/in/gilmillasseau',
        
        'footer.florian': 'Florian Oliveira',
        'footer.pereira': 'J. Pereira',
        'footer.gil': 'Gil Millasseau',
        'footer.developer': 'Designed and Developed by: '
    });

    // add translation table
    $translateProvider.useStaticFilesLoader({
        prefix: 'locale-',
        suffix: '.json'
    });
    $translateProvider.preferredLanguage('en');
}]);


// CONTROLLERS ============================================
// home page controller
app.controller('mainController',['$scope', '$location', '$anchorScroll', function ($scope, $location, $anchorScroll) {

    $scope.menuOpen = false;

    $scope.toggleMenu = function () {
        $scope.menuOpen = !$scope.menuOpen;
    };

    $scope.menuGoTo = function (destiny) {
        $scope.toggleMenu();
        $scope.navigateTo(destiny)
    };

    $scope.navigateTo = function (anchor) {
        $location.hash(anchor);
        $anchorScroll();
    }
}]);