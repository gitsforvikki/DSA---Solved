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
            *
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
      patter += i + 1 + " ";
    }
    console.log(patter);
  }
}

/**Q4.Print below patter
 *              5 4 3 2 1
 *              4 3 2 1
 *              3 2 1
 *              2 1
 *              1
 */
function reverseNumericRightAngel(n) {
  for (let i = 5; i >= 1; i--) {
    let patter = "";
    for (let j = i; j >= 1; j--) {
      patter = patter + j + " ";
    }
    console.log(patter);
  }
}
//reverseNumericRightAngel(5);

/**
 * Q5. Print below patter
 *       ----*
         ---**
         --***
         -****
         *****

 */
function patternWithSpace(n) {
  for (let i = 0; i < n; i++) {
    let pattern = "";
    // this loop adding spaces
    for (let j = 0; j < n - (i + 1); j++) {
      pattern = pattern + " ";
    }
    //this line addng starts
    for (let k = 0; k < i + 1; k++) {
      pattern = pattern + "*";
    }
    console.log(pattern);
  }
}

// patternWithSpace(4)

/**
 * 
 * Q6. Print binary patter
 *          1
            10
            101
            1010  
            10101
 */
function printAlternatingOneZeroTriangle(n) {
  for (let i = 0; i < n; i++) {
    let pattern = "";
    let binary = 1;
    for (let j = 0; j <= i; j++) {
      pattern += binary;
      if (binary === 1) {
        binary = 0;
      } else if (binary === 0) {
        binary = 1;
      }
    }
    console.log(pattern);
  }
}
printAlternatingOneZeroTriangle(4)