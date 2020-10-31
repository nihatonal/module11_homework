function countNumber(a, b) {
    let intervalId = setInterval(() => {
      console.log(a);
      a++;
      if (a > b) {
        clearInterval(intervalId)
      } else {
        return null;
      }
     }, 1000);
      
  }
   countNumber(5,15);