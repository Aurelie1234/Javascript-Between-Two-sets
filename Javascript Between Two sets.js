function getTotalX(a, b) {
    // Write your code here
  
let factors=[]
let smallest=b[0];
let isFactor = true;
let count = 0;
for (let i=0; i<b.length; i++){
    if (b[i]<smallest){
        smallest=b[i];
    }
}
for (let j=1; j<=smallest; j++){
    isFactor = true;
    for (let k=0; k<b.length; k++){
        if (b[k]%j!=0){
            isFactor = false;
            break;
        }
        
    }
    if(isFactor){
        factors.push(j);
        }
    
}
for (let x=0; x<factors.length; x++){
    isFactor = true;
    for (let y=0; y<a.length; y++){
       if(factors[x]%a[y]!=0){
            isFactor = false;
            break;
  
       }
    }
    if(isFactor){
        count++;
    }
}
return count;
}
