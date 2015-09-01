angular.module('fez', ['ngDragDrop'])

.controller('mainCtrl', ['$scope', function($scope) {
  $scope.sections = []

  $scope.addEditor = function (sectionType) {
    if(sectionType == 'section') {
      var sectionName = prompt('Enter section name')
      $scope.sections.push({name: sectionName})
    }
    else if(sectionType == 'subsection') {
      var section = '' // Get the section name
      for(var x in $scope.sections) {
        if(x == section) {
          var subSectionName = prompt('Enter subsection name')
          $scope.sections.push({subsections})
        }
      }
    }
  }
}])
