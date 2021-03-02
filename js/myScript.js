const url = "https://covid.mathdro.id/api"; 

let app = angular.module('MyApp',[]);

app.controller('MyCtrl',($scope, $http) => {

    $scope.title = "Stay Home Stay Safe";
    console.log("App loaded");


// calling api

    $http.get(url).then((response)=>{
        console.log(response.data);
        $scope.all_data = response.data;

    },(error)=>{
        console.log(error);
    })

    // get country data
    $scope.get_c_data = () => {
        let country = $scope.c;
        if (country == ""){
            return
        }

        $http.get(`${url}/countries/${country}`)
        .then((response)=>{
            console.log(response.data)
            $scope.c_data = response.data
        }),(error)=>{
            console.log(error)
        }
    };
})