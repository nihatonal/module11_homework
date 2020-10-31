function isPrime(num) {
    if (num > 1000) {
      console.log(
        "Please, provide a number less than 1000"
      );
    } else if (num <= 1 ) {
      return "Primes are integers greater than ONE";
    } else if (num % 2 === 0) {
      return num + " : It is a Prime";
    } else {
      return num + " : Sorry, it is not a Prime";
    }
  }
  var a = 1;
  var b = 25;
  var c = 986;
  console.log(isPrime(a));
  console.log(isPrime(b));
  console.log(isPrime(c));