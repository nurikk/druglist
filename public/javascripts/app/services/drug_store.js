angular.module('drugmaster').service('drug_store', ['localStorageService', function (localStorageService){
  var store_key = 'used_drugs';
  var drugs = {
    get: function (){
      return localStorageService.get(store_key);
    },
    set: function (drugs){
      localStorageService.set(store_key, drugs);
    }
  };
  return drugs;
}]);