/**
 *
 * Q1. print the below patter
 *           * * * *
 *           * * * *
 *           * * * *
 *           * * * *
 */
function squareStartPattern(n) {
  for (let i = 0; i < n; i++) {
    let patter = "";
    for (let j = 0; j < n; j++) {
      patter += "* ";
    }
    console.log(patter);
  }
}

// squareStartPattern(5);

/**
Q2.print the below patter         
 
            * * 
            * * * 
            * * * *
 *  
 */

function rightangleTriangle(n) {
  for (let i = 0; i < n; i++) {
    let patter = "";
    for (let j = 0; j <= i; j++) {
      patter += "* ";
    }
    console.log(patter);
  }
}

// rightangleTriangle(4);

/**
 * 
 * Q3. Pritn numberi right angel
        1 
        2 2 
        3 3 3 
        4 4 4 4
 *  
 *  
 */
function numericRightAngel(n) {
  for (let i = 0; i < n; i++) {
    let patter = "";
    for (let j = 0; j <= i; j++) {
      patter += i + 1 +" ";
    }
    console.log(patter);
  }
}

