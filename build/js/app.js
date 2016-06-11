(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/gilmillasseau/Development/gilfilipe.github.io/app/js/app.js":[function(require,module,exports){
'use strict';

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
app.controller('mainController', ["$scope", function ($scope) {
    console.log('main');
}]);

},{}]},{},["/Users/gilmillasseau/Development/gilfilipe.github.io/app/js/app.js"])


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvanMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7Ozs7OztBQUlBLElBQUksTUFBTSxRQUFRLE9BQU8sT0FBTyxDQUFDOztBQUVqQyxJQUFJLE9BQU8sQ0FBQyxzQkFBc0IsVUFBVSxvQkFBb0I7O0lBRTVELG1CQUFtQixhQUFhLE1BQU07UUFDbEMsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsbUJBQW1COztRQUVuQiw0QkFBNEI7UUFDNUIsNEJBQTRCO1FBQzVCLG1DQUFtQztRQUNuQyxtQ0FBbUM7UUFDbkMsbUNBQW1DOztRQUVuQyxzQkFBc0I7UUFDdEIsMkJBQTJCO1FBQzNCLDBCQUEwQjtRQUMxQixpQ0FBaUM7O1FBRWpDLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsY0FBYzs7OztJQUlsQixtQkFBbUIscUJBQXFCO1FBQ3BDLFFBQVE7UUFDUixRQUFROztJQUVaLG1CQUFtQixrQkFBa0I7Ozs7O0FBTXpDLElBQUksV0FBVyw2QkFBa0IsVUFBVSxRQUFRO0lBQy9DLFFBQVEsSUFBSTs7a3ZHQUdrdUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKipcbiAqIENyZWF0ZWQgYnkgZ2lsbWlsbGFzc2VhdSBvbiAwMy8wNi8xNi5cbiAqL1xuXG52YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFsncGFzY2FscHJlY2h0LnRyYW5zbGF0ZSddKTtcblxuYXBwLmNvbmZpZyhbJyR0cmFuc2xhdGVQcm92aWRlcicsIGZ1bmN0aW9uICgkdHJhbnNsYXRlUHJvdmlkZXIpIHtcblxuICAgICR0cmFuc2xhdGVQcm92aWRlci50cmFuc2xhdGlvbnMoJ2VuJywge1xuICAgICAgICAnYXBwLm5hbWUnOiAnRm9vdExvb3AnLFxuICAgICAgICAnbmF2YmFyLmNvbnRhY3QnOiAnQ29udGFjdCcsXG4gICAgICAgICduYXZiYXIuYWJvdXQnOiAnQWJvdXQnLFxuICAgICAgICAnbmF2YmFyLmRvd25sb2FkJzogJ0Rvd25sb2FkJyxcblxuICAgICAgICAnc2VjdGlvbi5tYWluLmRlc2NyaXB0aW9uJzogJ05vdyB5b3Ugd2lsbCBhbHdheXMgaGF2ZSBhbiBvcGluaW9uIGZvciBldmVyeXRoaW5nIGFib3V0IGZvb3RiYWwnLFxuICAgICAgICAnc2VjdGlvbi5tYWluLmFib3V0LnRpdGxlJzogJ0Fib3V0JyxcbiAgICAgICAgJ3NlY3Rpb24ubWFpbi5hYm91dC5kZXNjcmlwdGlvbjEnOiAnQ2FuwrR0IGZpbmQgdGhlIHdvcmRzIHRvIGV4cHJlc3MgeW91cnNlbGY/JyxcbiAgICAgICAgJ3NlY3Rpb24ubWFpbi5hYm91dC5kZXNjcmlwdGlvbjInOiAnT3Igc2ltcGx5IGRyYXdpbmcgYmxhbms/JyxcbiAgICAgICAgJ3NlY3Rpb24ubWFpbi5hYm91dC5kZXNjcmlwdGlvbjMnOiAnRm9vdGxvb3AgYnJpbmdzIHlvdSBhIGVudGlyZWx5IG5ldyB3YXkgb2YgZXhwcmVzc2luZyBjcmVhdGl2ZSBvcGluaW9ucyByZWdhcmRpbmcgZm9vdGJhbGwuIFVzZSBpdCB3aXRoIHlvdXIgZnJpZW5kcyBhbmQganVzdCBlbmpveSBpdCwgQ2hlZXJzPycsXG5cbiAgICAgICAgJ3NlY3Rpb24ubWFpbi5zaGFyZSc6ICdTaGFyZSBhcHAgd2l0aCBmcmllbmRzJyxcbiAgICAgICAgJ3NlY3Rpb24ubWFpbi5zaGFyZS5lbHNlJzogJ29yIGVsc2UnLFxuICAgICAgICAnc2VjdGlvbi5tYWluLmNvbnRhY3RVcyc6ICdDb250YWN0IHVzJyxcbiAgICAgICAgJ3NlY3Rpb24ubWFpbi5jb250YWN0VXMubGVnZW5kJzogJ1dlIGFyZSBpbnRlcmVzdGVkIHRvIHRhbGsgd2l0aCB5b3UgYWJvdXQgYW55dGhpbmcnLFxuXG4gICAgICAgICdmb290ZXIuZmxvcmlhbic6ICdkZXNpZ25lZCBieSBGbG9yaWFuJyxcbiAgICAgICAgJ2Zvb3Rlci5wZXJlaXJhJzogJ21vYmlsZSBkZXYgYnkgSi4gUGVyZWlyYScsXG4gICAgICAgICdmb290ZXIuZ2lsJzogJ3dlYiBkZXYgYnkgR2lsIE1pbGxhc3NlYXUnXG4gICAgfSk7XG5cbiAgICAvLyBhZGQgdHJhbnNsYXRpb24gdGFibGVcbiAgICAkdHJhbnNsYXRlUHJvdmlkZXIudXNlU3RhdGljRmlsZXNMb2FkZXIoe1xuICAgICAgICBwcmVmaXg6ICdsb2NhbGUtJyxcbiAgICAgICAgc3VmZml4OiAnLmpzb24nXG4gICAgfSk7XG4gICAgJHRyYW5zbGF0ZVByb3ZpZGVyLnByZWZlcnJlZExhbmd1YWdlKCdlbicpO1xufV0pO1xuXG5cbi8vIENPTlRST0xMRVJTID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBob21lIHBhZ2UgY29udHJvbGxlclxuYXBwLmNvbnRyb2xsZXIoJ21haW5Db250cm9sbGVyJywgZnVuY3Rpb24gKCRzY29wZSkge1xuICAgIGNvbnNvbGUubG9nKCdtYWluJyk7XG59KTsiXX0=
