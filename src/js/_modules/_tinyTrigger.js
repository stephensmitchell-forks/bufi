!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var r;"undefined"!=typeof window?r=window:"undefined"!=typeof global?r=global:"undefined"!=typeof self&&(r=self),r.tinyTrigger=e()}}(function(){var e,r,n;return function t(e,r,n){function o(f,u){if(!r[f]){if(!e[f]){var c=typeof require=="function"&&require;if(!u&&c)return c(f,!0);if(i)return i(f,!0);throw new Error("Cannot find module '"+f+"'")}var a=r[f]={exports:{}};e[f][0].call(a.exports,function(r){var n=e[f][1][r];return o(n?n:r)},a,a.exports,t,e,r,n)}return r[f].exports}var i=typeof require=="function"&&require;for(var f=0;f<n.length;f++)o(n[f]);return o}({1:[function(e,r,n){var t=document;var o=[].slice;r.exports=function(e,r,n){var t;var o=f(e,n);for(t in o){i(o[t],r)}};function i(e,r){var n;if(t.createEventObject){return e.fireEvent("on"+r,t.createEventObject())}n=t.createEvent("HTMLEvents");n.initEvent(r,true,true);return!e.dispatchEvent(n)}function f(e,r){return typeof e=="string"?r?o.call(t.querySelectorAll(e),0):[t.querySelector(e)]:e.length?o.call(e,0):[e]}},{}]},{},[1])(1)});