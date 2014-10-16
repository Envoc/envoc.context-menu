// Create all modules and define dependencies to make sure they exist
// and are loaded in the correct order to satisfy dependency injection
// before all nested files are concatenated by Grunt

// Config
angular.module('envoc.contextMenu.config', [])
  .value('envoc.contextMenu.config', {
    debug: true
  });

// Modules
angular.module('envoc.contextMenu.directives', []);
angular.module('envoc.contextMenu.services', []);
angular.module('envoc.contextMenu', [
  'envoc.contextMenu.config',
  'envoc.contextMenu.directives',
  'envoc.contextMenu.services'
]);
