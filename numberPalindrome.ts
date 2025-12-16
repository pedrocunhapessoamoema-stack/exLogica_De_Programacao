function numberPalindrome(number:string){
   
  if(number ===number.split('').reverse().join('')){
    console.log('E palindrome!')
  }else{
    console.log('Não e palindrome')
  }
}


numberPalindrome('121');
numberPalindrome('789')
