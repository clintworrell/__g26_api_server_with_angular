(function () {
  'use strict';

  angular
    .module('servicesDemo')
    .controller('StudentController', StudentController);

  function StudentController($scope, StudentService) {
    $scope.page = {
      title : "All Students"
    };

    $scope.groups = StudentService.getGroups();

    $scope.getStudents = function() {
      StudentService.getStudents().then(function(students) {
        console.log(students);
        $scope.students = students;
      });
    }
    
    $scope.deleteStudent = function(student) {
      StudentService.deleteStudent(student);
    }

    $scope.addToGroup = function (group, student) {
      student.grouped = true;
      StudentService.addToGroup(group, student)
    }

    $scope.getStudents();
  }
})();
