
//
var APP_ID = "989152715769-5dmdgb43mtqhup9vfglu00qagguqstn4.apps.googleusercontent.com";
var SCOPES = ["https://www.googleapis.com/auth/tasks"];

//
function init() {
    gapi.auth.authorize({
        client_id: APP_ID,
        scope: SCOPES.join(" "),
        immediate: true
    }, function (authResult) {
        if (authResult && !authResult.error) {
            gapi.client.load('tasks', 'v1', function() {                
                angular.bootstrap(document, ["taskis"]);
            });
        } else {            
            jQuery.get("view/signin.html", function(html){
                jQuery("body").append(html);
                UIkit.modal("#signin").show();
            });
        }
    });
}

//
function signin() {
    gapi.auth.authorize({
        client_id: APP_ID, 
        scope: SCOPES.join(" "), 
        immediate: false
    }, function (authResult) {
        if (authResult && !authResult.error) {            
            gapi.client.load('tasks', 'v1', function() {                
                angular.bootstrap(document, ["taskis"]);
            });
        }
    });    
}

//
angular
    .module("taskis", ["ui.router"])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/home");
        $stateProvider
            .state("home", {
                url: "/home",
                templateUrl: "view/home.html",
                controller: function($scope) {

                    //
                    var request = gapi.client.tasks.tasklists.list({
                        'maxResults': 10
                    });

                    //
                    request.execute(function(resp) {
                                                
                        //
                        $scope.projects = resp.items;
                    });
                }
            })
            .state("about", {});
    })
    .component("layout", {
        templateUrl: "view/layout.html" 
    });
    