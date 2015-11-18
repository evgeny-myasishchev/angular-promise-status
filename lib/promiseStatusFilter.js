(function () {  
  'use strict';

  angular
    .module('app')
    .filter('promiseStatus', promiseStatus);

  function promiseStatus() {
    return function(promise, status) {
      console.log(arguments);
      status.inProgress = true;
      status.resolved = false;
      status.rejected = false;
      promise
        .then(function() {
          status.resolved = true;
        })
        .catch(function() {
          status.rejected = true;
        })
        .finally(function() {
          status.inProgress = false;
        });
    }
  }
})();