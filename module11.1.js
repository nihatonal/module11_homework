function checkArray(array) {
    let totaleven = 0,
      totalodd = 0,
      totalzero = 0;
    array.forEach((element) => {
      if (typeof element === "number" && !isNaN(element)) {
        if (element === 0) {
          totalzero++;
        } else if (element % 2 === 0) {
          totaleven++;
        } else {
          totalodd++;
        }
      }
    });
  
    console.log("Odd elements :", totalodd);
    console.log("Even elements :", totaleven);
    console.log("Zero elements :", totalzero);
  }
  
  checkArray([16, 11, 22, "Test", undefined, NaN,  0, 0, 2]);