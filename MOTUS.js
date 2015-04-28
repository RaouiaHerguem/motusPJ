function GrilleMotus(){
    var lignes=new Array(8);
    for (var i=0;i<8;i++){
        lignes[i]=new Array(8);    
    }
    for(i=0;i<8;i++){
        for(var j=0;j<8;j++){
            lignes[i][j]=0;
        }    
    }
    return(Lignes);
}

var etatLettre = [{val: 0, name:'Vide.jpg'}];

var app = angular.module("MyMotus", []).controller("matrixPage", function($scope){
	$scope.gameTitle= "Motus";
        $scope.matrice=[[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]];
        
        
        //$scope.matrice = GrilleMotus();
        /*
        $scope.wordEntred=function(lignes){
        var xp = document.getElementById('txt').value;
        for(j=0;j<8;j++){
            for(i=0;i<8;i++){
                lignes[j][i] = xp[i];
            }   
        }  
        */
       
        /*
    $scope.image = function(element){		
        for( i=0;i<etatLettre.length;i++){
            if (etatLettre[i].val == element){
		$scope.img=etatLettre.name;
		break;
            }	
        }
    } 
             */       
    }
    );

	

