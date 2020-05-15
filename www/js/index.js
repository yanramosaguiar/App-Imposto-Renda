angular.module("IRPF",[]);
angular.module("IRPF").controller("IRPFCtrl", function ($scope){
    $scope.app = "IRPF";
    $scope.aliquota = 0;
    $scope.parcela = 0;
    $scope.resultado = 0;
    $scope.dependentes = 189.59;
    $scope.contaaliquota = 0;
    $scope.tetoINSS = 671.72;
    
    $scope.fazerCalculo = function(calculo){
        if($scope.calculo.salariobruto <= 1903.98){
            $scope.aliquota = 0;
            $scope.parcela = 0;
            $scope.texto = "Até 1903.98";
        }else if($scope.calculo.salariobruto > 1903.98 && $scope.calculo.salariobruto <= 2826.65){
            $scope.aliquota = 7.5;
            $scope.parcela = 142.8;
            $scope.texto = "De 1903.98 até 2826.65";
        }else if($scope.calculo.salariobruto > 2826.65 && $scope.calculo.salariobruto <= 3751.05){
            $scope.aliquota = 15;
            $scope.parcela = 354.8;
            $scope.texto = "De 2826.65 até 3751.05";
        }else if($scope.calculo.salariobruto > 3751.05 && $scope.calculo.salariobruto <= 4664.68){
            $scope.aliquota = 22.5;
            $scope.parcela = 636.13;
            $scope.texto = "De 3751.05 até 4664.68";
        }else if($scope.calculo.salariobruto > 4664.68){
            $scope.aliquota = 27.5;
            $scope.parcela = 869.36;
            $scope.texto = "Acima de 4664,68";
        }

        $scope.dependentes = $scope.calculo.dependentes * 189.59;

        $scope.contaSalario = $scope.calculo.salariobruto - $scope.tetoINSS - $scope.dependentes;
        $scope.valorImposto = (($scope.contaSalario * $scope.aliquota)/100) - $scope.parcela;

        $scope.planoDeSaude = ($scope.calculo.planoDeSaude);

        $scope.liquido = $scope.calculo.salariobruto - $scope.tetoINSS - $scope.valorImposto - $scope.planoDeSaude;

        $scope.exibeResultados = true;
        /*$scope.contaAliquota = $scope.calculo.salariobruto - (($scope.aliquota * $scope.calculo.salariobruto)/100) - $scope.parcela;
        
        $scope.contaAliquota += $scope.dependentes;*/
    }

    $scope.esconderResultados = function(){
        $scope.exibeResultados = false;
    }
});
