angular.module("demoApp", ["ngMaterial", 'ui.router', "ngMdIcons", 'app.home', 'app.add', 'app.complicated', 'app.foo', 'app.subtract'])

    .controller("todoController", function ($state,routeService) {
        var _self = this;
        _self.myFunc = function(){
            routeService.routeStatus = 0;
            $state.go('home')
        }

    })

.directive('dragdir', function() {
    return function(scope, element) {
        // this gives us the native JS object
        var el = element[0];

        el.draggable = true;

        el.addEventListener(
            'dragstart',
            function(e) {
                e.dataTransfer.effectAllowed = 'move';
                e.dataTransfer.setData('Text', this.id);
                this.classList.add('drag');
                return false;
            },
            false
        );

        el.addEventListener(
            'dragend',
            function(e) {
                this.classList.remove('drag');
                return false;
            },
            false
        );
    }
})

.directive('droppable', function($state,routeService) {
    return {
        scope: {
            drop: '&' // parent
        },
        link: function(scope, element) {
            var el = element[0];
            el.addEventListener('drop', function(e) {
                    // Stops some browsers from redirecting.
                    if (e.stopPropagation) e.stopPropagation();

                    this.classList.remove('over');

                    var item = document.getElementById(e.dataTransfer.getData('Text'));
                    if($state.current.name == 'home'){
                        routeService.routeStatus = 0;
                        switch (item.id){
                            case 'firstButton' :
                                $state.go('add');
                                break;
                            case  'secondButton' :
                                $state.go('subtract');
                                break;
                            case 'thirdButton' :
                                $state.go('foo');
                                break;
                            case 'fourthButton' :
                                $state.go('complicated');
                                break;
                            default:
                                $state.go('home')
                        }
                    }else{
                        if(routeService.routeStatus == 0){
                            routeService.routeStatus++;
                            switch (item.id){
                                case 'firstButton' :
                                    routeService.lastRoute = 'a';
                                    console.log(routeService.lastRoute);
                                    $state.go($state.current.name,{key : 'a', attempt : 1});
                                    break;
                                case  'secondButton' :
                                    routeService.lastRoute = 'b';
                                    console.log(routeService.lastRoute);
                                    $state.go($state.current.name,{key : 'b', attempt : 1});
                                    break;
                                case 'thirdButton' :
                                    routeService.lastRoute = 'c';
                                    console.log(routeService.lastRoute);
                                    $state.go($state.current.name,{key : 'c', attempt : 1});
                                    break;
                                case 'fourthButton' :
                                    routeService.lastRoute = 'd';
                                    console.log(routeService.lastRoute);
                                    $state.go($state.current.name,{key : 'd', attempt : 1});
                                    break;
                                default:
                                    $state.go('home')
                            }
                        }else if(routeService.routeStatus == 1){
                            routeService.routeStatus++;

                            switch (item.id){
                                case 'firstButton' :
                                    $state.go($state.current.name,{key : 'a',second:routeService.lastRoute ,attempt : 2});
                                    break;
                                case  'secondButton' :
                                    $state.go($state.current.name,{key : 'b',second:routeService.lastRoute , attempt : 2});
                                    break;
                                case 'thirdButton' :
                                    $state.go($state.current.name,{key : 'c',second:routeService.lastRoute , attempt : 2});
                                    break;
                                case 'fourthButton' :
                                    $state.go($state.current.name,{key : 'd',second:routeService.lastRoute , attempt : 2});
                                    break;
                                default:
                                    $state.go('home')
                            }
                        }else{
                            routeService.routeStatus = 0;
                        }

                    }


                    scope.$apply('drop()');

                    return false;
                },
                false
            );
        }
    }
});

  /*  .directive('dropchange', function() {
        return {
            scope: {
                drop: '&' // parent
            },
            link: function(scope, element) {
                var el = element[0];
                el.addEventListener('drop', function(e) {
                        // Stops some browsers from redirecting.
                        console.log("Yessssss");
                        if (e.stopPropagation) e.stopPropagation();

                        this.classList.remove('over');

                        var item = document.getElementById(e.dataTransfer.getData('Text'));

                        if($state.current.name == 'home'){
                            switch (item.id){
                                case 'firstButton' :
                                    $state.go('add');
                                    break;
                                case  'secondButton' :
                                    $state.go('subtract');
                                    break;
                                case 'thirdButton' :
                                    $state.go('foo');
                                    break;
                                case 'fourthButton' :
                                    $state.go('complicated');
                                    break;
                                default:
                                    $state.go('home')
                            }
                        }else{
                            switch (item.id){
                                case 'firstButton' :
                                    $state.go('add');
                                    break;
                                case  'secondButton' :
                                    $state.go('subtract');
                                    break;
                                case 'thirdButton' :
                                    $state.go('foo');
                                    break;
                                case 'fourthButton' :
                                    $state.go('complicated');
                                    break;
                                default:
                                    $state.go('home')
                            }
                        }

                        /!*if(item.id == 'firstButton'){
                            $state.go('add')
                        }else if(item.id == 'secondButton'){
                            $state.go('subtract')
                        }else if(item.id == 'thirdButton'){
                            $state.go('foo')
                        }else{
                            $state.go('complicated')
                        }*!/


                        // call the drop passed drop function
                        scope.$apply('drop()');

                        return false;
                    },
                    false
                );
            }
        }
    });*/