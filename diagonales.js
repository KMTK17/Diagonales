let arr = [[-10,3,0,5,-4],[2,-1,0,2,-8],[9,-2,-5,6,0],[9,-7,4,8,-2],[3,7,8,-5,0]]

let diag_1 = [];
let diag_2 = [];
let suma_diag1 = 0;
let suma_diag2 = 0;
let dif = 0;

console.log(arr);

for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[0].length;j++){
        if(i==j){
            diag_1[i]= arr[i][j];
        }
        if((i+j)==arr.length-1){
            diag_2[i]=arr[i][j];
        }
    }
 }

suma_diag1 = diag_1.reduce((a,b)=>a+b,0);
suma_diag2 = diag_2.reduce((a,b)=>a+b,0);
dif = suma_diag2 - suma_diag1

if(dif<0){
    dif = dif * (-1);
}


console.log(diag_1);
console.log('Suma de Diagonal principal:',suma_diag1);
console.log(diag_2);
console.log('Suma de Diagonal Secundaria:',suma_diag2);
 console.log('la diferencia entre las diagonales es:',dif);

