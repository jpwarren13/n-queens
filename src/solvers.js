/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  //find solution
    //start with rook at position top left corner (0,0)
      //move one row down and one column over
        //check for collisions
          //do something to increment either one space over or down depending on collision/s
            //increment until end of board
  //check if solution already exists
    //json stringify against solutions object/s
  //find another solution if possible
    //if over n factorial then stop
  let solutions = {
    //0: [[0,1,0]
        //[1,0,0]
        //[0,0,1]
       //];
  };
  let blankBoard = new Board({'n': n});
  let i = 0;
  let j = 0;
  let startingPosition = blankBoard.get(i)[j];
  let currentPosition = startingPosition;
  for(let k = 0; k < n; k++) {
    
    if(hasRowConflictAt(i)){}
    if(hasColConflictAt(j)){}
  }
  // let solution = 
  // [[1]]; //fixme

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
let solutionCount;

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount(n);
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  if (n < 5 && n >2){
    return 0;
  }

  var solutionCount = function rFact(n)
  {
      if (n === 0)
        { return 1; }
      else
        { return n * rFact( n - 1 ); }
  }; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount(n);
  // var solutionCount = undefined; //fixme

  // console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  // return solutionCount;
};
