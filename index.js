
angular.module('pruebaFormulario',[])
	   .controller('formularioController', formularioController);
	   
	   formularioController.$inject = ['$filter'];
	   
	   function formularioController($filter){
	   			var vm = this;
	   			
	   			vm.email = 'ajota';
	   			
	   			
	   			vm.guardarEmail = function(form){
	   				console.log(form);
	   				if(form.$valid){
	   					alert(vm.email);
	   					
	   				}else{
	   					form.$rollbackViewValue();
	   				}
	   			}
	   }