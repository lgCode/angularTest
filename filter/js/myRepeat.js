/**
 * @time 2018/05/04 15:34:01
 * @author lg
 * @desc Angular外部引用控制器文件
 */

app.controller('myRepeat', ['$scope', function ($scope) {
    $scope.testEmail = "aaa@qq.com";
    $scope.names = [
        {name: "张明明", sex: "女", age: 24, score: 95},
        {name: "李清思", sex: "女", age: 27, score: 87},
        {name: "刘小华", sex: "男", age: 28, score: 86},
        {name: "陈忠忠", sex: "男", age: 23, score: 97},
        {name: "陈王", sex: "男", age: 23, score: 97},
        {name: "陈王", sex: "男", age: 23, score: 96}
    ];
}]);