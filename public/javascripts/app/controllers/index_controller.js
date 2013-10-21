angular.module('drugmaster').controller('IndexController', ['$scope', 'known_drugs', 'drug_store',
  function ($scope, known_drugs, drug_store){

    $scope.selected = undefined;
    $scope.known_drugs = known_drugs;

    $scope.used_drugs = drug_store.get() || [];

    $scope.$watch('used_drugs', function (drugs){
      drug_store.set($scope.used_drugs);
    }, true);

    $scope.add_drug = function (drug){
      var drug;
      angular.forEach($scope.known_drugs, function (kd){
        if (kd.name === $scope.selected) {
          drug = kd;
          return;
        }
      });
      angular.extend(drug, {
        rating: 5
      });
      $scope.used_drugs.push(drug);

      $scope.selected = undefined;
    };

    $scope.remove_drug = function (drug){
      $scope.used_drugs.splice($scope.used_drugs.indexOf(drug), 1);
    }

  }])
;
