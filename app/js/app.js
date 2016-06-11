/**
 * Created by gilmillasseau on 03/06/16.
 */

var app = angular.module('app', ['pascalprecht.translate']);

app.config(['$translateProvider', function ($translateProvider) {

    $translateProvider.translations('en', {
        'app.name': 'FootLoop',
        'navbar.contact': 'Contact',
        'navbar.about': 'About',
        'navbar.download': 'Download',

        'section.main.description': 'Now you will always have an opinion for everything about footbal',
        'section.main.about.title': 'About',
        'section.main.about.description1': 'Can´t find the words to express yourself?',
        'section.main.about.description2': 'Or simply drawing blank?',
        'section.main.about.description3': 'Footloop brings you a entirely new way of expressing creative opinions regarding football. Use it with your friends and just enjoy it, Cheers?',

        'section.main.share': 'Share app with friends',
        'section.main.share.else': 'or else',
        'section.main.contactUs': 'Contact us',
        'section.main.contactUs.legend': 'We are interested to talk with you about anything',

        'footer.florian': 'designed by Florian',
        'footer.pereira': 'mobile dev by J. Pereira',
        'footer.gil': 'web dev by Gil Millasseau'
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
app.controller('mainController', function ($scope) {
    console.log('main');
});