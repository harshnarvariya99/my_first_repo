let b= [1,2,3,4,5,6,7,8];



let sum=0;
let count=0;

for(let i=0; i<b.length;i++){
     if(b[i]%2==0){
       sum= sum + b[i];
       count++;
     }
}

console.log(sum/count)