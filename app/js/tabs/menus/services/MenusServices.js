(function() {

  var MenusData = function() {
    var data, geocoder;
    geocoder = new google.maps.Geocoder();
    data = [];
    return {
      get: function() {
        return data;
      },
      set: function(StateData) {
        return data = StateData;
      }
    };
  };
  angular
    .module('app.tabs.menus.services', [])
    .service('MenusData', MenusData);

}).call(this);
