let outer = () => {
   let b= 10
   let inner = () => {
      let a = 20
      console.log(a+b)
   }
   
   return inner
} 
console.log(outer()) // first executed
console.log(outer()) // second executed