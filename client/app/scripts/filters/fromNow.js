'use strict';

clientApp.filter('fromNow', function() {
  return function(dateString) {
    return moment(new Date(dateString)).fromNow()
  };
});
