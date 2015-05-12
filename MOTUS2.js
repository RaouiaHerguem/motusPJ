var app = angular.module("motus", []);
app.controller("motus", function($scope) {


var db = openDatabase('motusdb', '1.0', 'La liste des mots', 2 * 1024);
 db.transaction(function (tx) {
tx.executeSql('SELECT * FROM words', [], function (tx, results){
var j = Math.random() * 27;
var m =results.rows.item(j).word;
$scope.mot1=m;
alert(m);

},null);
});

alert($scope.mot1);
$scope.mot="MIGNIONS";
$scope.n=0;

$scope.builtMatrix=function(){
var tableau=new Array(8);

for(var i=0;i<8;i++)
 {tableau[i]=new Array(8);
 for(j=0;j<tableau[i].length;j++)
	{tableau[i][j]={ligne:i,colonne:j,img:"./Lettres/Vide.jpg",etat:0};
	
	}
	}
	for(j=0;j<8;j++)
		tableau[j][0].img="./Lettres/"+$scope.mot[0]+"2.jpg";
	
	
	return(tableau);
	}
 
 $scope.test=function(){
 
 for (i=0;i<$scope.essai.length;i++)
 {if (angular.uppercase($scope.essai[i])==$scope.mot[i])
		{$scope.matrix[$scope.n][i].etat=2;
		}
	else{
		for (j=0;j<$scope.mot.length;j++)
			{if (angular.uppercase($scope.essai[i])==$scope.mot[j]) 
				{$scope.matrix[$scope.n][i].etat=1;
				 break;
				}
			}	
		}		
 }
 
 for (j=0;j<$scope.essai.length;j++)
	$scope.matrix[$scope.n][j].img="./Lettres/"+$scope.essai[j]+$scope.matrix[$scope.n][j].etat+".jpg";
	$scope.n++;
 }

$scope.matrix=$scope.builtMatrix();






});