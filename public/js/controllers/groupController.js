(function () {
  'use strict';

  angular
    .module('servicesDemo')
    .controller('GroupController', GroupController);

  function GroupController($scope, StudentService) {
    $scope.page = {
      title : "Groups!"
    };

    $scope.groups = StudentService.getGroups();

    $scope.newGroup = function() {
      StudentService.newGroup();
    }

    $scope.removeFromGroup = function(group, student) {
      // DELETE the student
      StudentService.removeFromGroup(group, student);
    }

    $scope.totalGroupPoints = function(group) {
      return group.students.reduce(function (total, student) {
        return total + student.points;
      }, 0);
    }

    $scope.increasePoints = function(student) {
      student.points++;
    }

    $scope.decreasePoints = function(student) {
      student.points--;
    }
  }
})();
