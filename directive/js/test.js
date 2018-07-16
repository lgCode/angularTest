/**
 * @time 2018/07/13 10:44:19
 * @author lg
 * @desc  angular配置
 */

var app = angular.module('test_app', []);
app.directive('testTop', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            txtList: '@txtList'
        },
        // templateUrl: 'test_top.html',
        template:'<div >{{txtList}}</div>',
        link: function (scope, ele, attr) {
            console.log(scope.txtList);
           /* ele.on('click','.qyd_txtList li',function () {
                console.log($(this).html());
            });*/
        }
    }
});