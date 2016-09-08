(function () {
  'use strict';

  angular
    .module('servicesDemo')
    .factory('StudentService', StudentService);

  function StudentService($http, $q) {
    var students = [];
    var groups = [];
    var resolvedData = false;

    return {
      getStudents: function () {
        if(students.length == 0 && !resolvedData) {
          return $http.get('./js/students.json').then(function(result) {
            students = result.data;
            resolvedData = true;
            return students;
          });
        } else {
          return $q(function (resolve, reject) {
            resolve(students);
          });
        }
      },
      deleteStudent: function(student) {
        students.splice(students.indexOf(student), 1);
      },

      getGroups: function() {
        return groups;
      },
      newGroup: function(){
        var newGroup = {title: "Group " + groups.length, students: []};
        groups.push(newGroup);
        return newGroup;
      },
      addToGroup: function(group, student) {
        group.students.push(student);
      },
      removeFromGroup: function (group, student) {
        student.grouped = false;
        group.students.splice(group.students.indexOf(student), 1);
      }
    }
  }
})();
