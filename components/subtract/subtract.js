angular.module('app.subtract', [])
    .controller("SubtractController", ['$stateParams',SubtractController]);

function SubtractController($stateParams) {

    var _self = this;
    _self.trigger = true;
    _self.resultVal = 0;
    _self.onlyNumbers = /^\d+$/;
    _self.defaultVal1 = true;
    _self.defaultVal2 = true;
    _self.adVal1 = false;
    _self.subVal1 = false;
    _self.mulVal1 = false;
    _self.compVal1 = false;
    _self.adVal2 = false;
    _self.subVal2 = false;
    _self.mulVal2 = false;
    _self.compVal2 = false;
    _self.firstDigit = null;
    _self.secondDigit = null;

    if ($stateParams.attempt) {
        if ($stateParams.attempt == 1) {
            _self.defaultVal1 = false;

            switch ($stateParams.key) {
                case 'a':
                    _self.adVal1 = true;
                    break;
                case 'b':
                    _self.subVal1 = true;
                    break;
                case 'c':
                    _self.mulVal1 = true;
                    break;
                case 'd':
                    _self.compVal1 = true;
                    break;
                default:
                    _self.defaultVal1 = true;
                    _self.adVal1 = false;
                    _self.subVal1 = false;
                    _self.mulVal1 = false;
                    _self.compVal1 = false;

            }
        } else if ($stateParams.attempt == 2) {
            _self.defaultVal1 = false;
            _self.defaultVal2 = false;
            switch ($stateParams.second) {
                case 'a':
                    _self.adVal1 = true;
                    break;
                case 'b':
                    _self.subVal1 = true;
                    break;
                case 'c':
                    _self.mulVal1 = true;
                    break;
                case 'd':
                    _self.compVal1 = true;
                    break;
                default:

            }
            switch ($stateParams.key) {
                case 'a':
                    _self.adVal2 = true;
                    break;
                case 'b':
                    _self.subVal2 = true;
                    break;
                case 'c':
                    _self.mulVal2 = true;
                    break;
                case 'd':
                    _self.compVal2 = true;
                    break;
                default:
                    _self.defaultVal2 = true;
                    _self.adVal2 = false;
                    _self.subVal2 = false;
                    _self.mulVal2 = false;
                    _self.compVal2 = false;

            }
        }
    }


    _self.subtractFunc = function (a, b) {
        if (a==null || b==null) {
            return;
        }
        _self.resultVal = a-b;
        _self.trigger = false;
    };

    _self.addFunc1 = function(a,b){
        _self.firstDigit = a+b;
        _self.adVal1 = false;
        _self.defaultVal1 = true;
    };

    _self.addFunc2 = function(a,b){
        _self.secondDigit = a+b;
        _self.adVal2 = false;
        _self.defaultVal2 = true;
    };

    _self.subtractFunc1 = function(a,b){
        _self.firstDigit = a-b;
        _self.subVal1 = false;
        _self.defaultVal1 = true;
    };

    _self.subtractFunc2 = function(a,b){
        _self.secondDigit = a-b;
        _self.subVal2 = false;
        _self.defaultVal2 = true;
    };

    _self.mulFunc1 = function(a,b){
        _self.firstDigit = a*b;
        _self.mulVal1 = false;
        _self.defaultVal1 = true;
    };

    _self.mulFunc2 = function(a,b){
        _self.secondDigit = a*b;
        _self.mulVal2 = false;
        _self.defaultVal2 = true;
    };

    _self.compFunc1 = function(a,b){
        _self.firstDigit = a/b;
        _self.compVal1 = false;
        _self.defaultVal1 = true;
    };
    _self.compFunc2 = function(a,b){
        _self.secondDigit = a/b;
        _self.compVal2 = false;
        _self.defaultVal2 = true;
    }
}