(function () {  
  'use strict';

  angular
    .module('app')
    .filter('promiseStatus', promiseStatus);

  function promiseStatus() {
    return function(promise) {
      var status = {
        inProgress: true,
        resolved: false,
        rejected: false
      };
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
      return status;
    }
  }
})();