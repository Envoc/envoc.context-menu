'use strict';

describe('Module Tests', function() {

  var module;
  var dependencies;
  dependencies = [];

  var hasModule = function(module) {
    return dependencies.indexOf(module) >= 0;
  };

  beforeEach(function() {
    module = angular.module('envoc.contextMenu');
    dependencies = module.requires;
  });


  it('should load config module', function() {
    expect(hasModule('envoc.contextMenu.config')).toBe(true);
  });


  it('should load directives module', function() {
    expect(hasModule('envoc.contextMenu.directives')).toBe(true);
  });


  it('should load services module', function() {
    expect(hasModule('envoc.contextMenu.services')).toBe(true);
  });


});
