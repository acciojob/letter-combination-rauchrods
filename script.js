function letterCombinations(input_digit) {
  //Complete the function
	    if(input_digit.length==0){
        return [];
    }
 
     let mapobj =  {
     2:"abc",
     3:"def",
     4:"ghi",
     5:"jkl",
     6:"mno",
     7:"pqrs",
     8:"tuv",
     9:"wxyz",
 
     }
   
     let arr=[];
    
     backtracking( input_digit ,  arr , mapobj, 0, "");
 
     return arr;
     
 
       function backtracking( d,  arr, mapobj, i, ans){
 
         if(i==d.length){
 
             arr.push(ans);
 
             return;
         }
         let str = mapobj[d.charAt(i)];
 
         for(let j=0;j<str.length;j++){
           backtracking(d, arr, mapobj, i +1 ,ans + str.charAt(j));
         }
       
     }
}

module.exports = letterCombinations;
