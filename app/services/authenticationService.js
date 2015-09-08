define(['app'], function(app) {
    var instance;
    var isAuthenticationInProgress;
    
    app.factory('authenticationService',['$location', '$rootScope', 'serverCallService', 'authenticatedUserService', 'alertService',
    function($location, $rootScope, serverCallService, authenticatedUserService, alertService) {

        function loginSuccess(authenticatedUser) {
            if (isEmpty(authenticatedUser)) {
                log('No data returned by logging in');
                alertService.setErrorAlert('ERROR_LOGIN_FAILED');
                $rootScope.errorMessageShow = true;
                $rootScope.errorMessageNoLoginData = true;
                enableLogin();
            } else {
                authenticatedUserService.setAuthenticatedUser(authenticatedUser);

                if (authenticatedUser.firstLogin) {
                    $location.url('/' + authenticatedUser.user.username);
                }
            }
        };

        function loginFail(data, status) {
            log('Logging in failed.');
            alertService.setErrorAlert('ERROR_LOGIN_FAILED');
            enableLogin();
        };

        function logoutSuccess(data) {
            enableLogin();
        };

        function logoutFail(data, status) {
            //ignore
        };

        function disableLogin() {
            isAuthenticationInProgress = true;
        }

        function enableLogin() {
            isAuthenticationInProgress = false;
        }

        return {

            logout : function() {              
                serverCallService.makePost("rest/logout", {}, logoutSuccess, logoutFail);

                $rootScope.authenticatedUser = null;

                localStorage.removeItem("authenticatedUser");
            },

            loginWithIdCard : function() {
                if (isAuthenticationInProgress) {
                    return;
                }
            
                disableLogin();
                serverCallService.makeGet("rest/login/idCard", {}, loginSuccess, loginFail);
            }, 

            loginWithTaat : function() {
                localStorage.removeItem(LOGIN_ORIGIN);
                localStorage.setItem(LOGIN_ORIGIN, $location.url());
                window.location = "/rest/login/taat";
            }
        };
    }]);
});