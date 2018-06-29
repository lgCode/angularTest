var myApp=angular.module('myApp',[]);  
myApp.controller('listCtrl',function($scope){  
   $scope.logchore="motorola";  
});  


myApp.directive('test',function(){  
    return {  
        'restrict':'E',  
        scope:{  
            title:"@"  
        },  
        template:'<div >{{title}}</div>'  

    }  
});  