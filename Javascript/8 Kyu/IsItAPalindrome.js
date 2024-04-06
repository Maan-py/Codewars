function isPalindrome(x) {
  // your code here
  if (x.length === 0 || x.length === 1) {
    return true;
  }

 if(x[0] === x[x.length - 1]){
   return isPalindrome(x.slice(1, x.length - 1))
 }

  return false;
}

console.log(isPalindrome("racecar"));
