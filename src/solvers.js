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

  let blankBoard = new Board({'n': n});

  let recurse = function(row = 0){
    for(let col = 0; col < blankBoard.attributes.n; col++){
      blankBoard.togglePiece(row, col);
      if(!blankBoard.hasAnyColConflicts() && row<n-1){
        recurse(row+1);
      } if(blankBoard.hasAnyColConflicts()){
        blankBoard.togglePiece(row,col);
      }
    }
  }
  recurse();
if(!blankBoard.hasAnyColConflicts()){
  solution = blankBoard.rows();

}

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
// _isInBounds: function(rowIndex, colIndex) {
//   return (
//     0 <= rowIndex && rowIndex < this.get('n') &&
//     0 <= colIndex && colIndex < this.get('n')
//   );
// },
window.countNRooksSolutions = function(n) {
  let count = 0;
  let blankBoard = new Board({'n': n});

  let recurse = function(row = 0){
    if(row === n){
      count++
      return;
    }
    for(let col = 0; col < blankBoard.attributes.n; col++){
      blankBoard.togglePiece(row, col);
      if(!blankBoard.hasAnyRooksConflicts()){
        recurse(row+1);
      } 
        blankBoard.togglePiece(row,col);
      
      }
  }
  recurse();
return count;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  let count = 0;
  let blankBoard = new Board({'n': n});

  let recurse = function(row = 0){
    if(row === n){
      count++
      return;
    }
    for(let col = 0; col < blankBoard.attributes.n; col++){
      blankBoard.togglePiece(row, col);
      if(!blankBoard.hasAnyQueensConflicts()){
        recurse(row+1);
      } 
        blankBoard.togglePiece(row,col);
      }
  }
  recurse();
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return blankBoard.rows();
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  let count = 0;
  let blankBoard = new Board({'n': n});

  let recurse = function(row = 0){
    if(row === n){
      count++
      return;
    }
    for(let col = 0; col < blankBoard.attributes.n; col++){
      blankBoard.togglePiece(row, col);
      if(!blankBoard.hasAnyQueensConflicts()){
        recurse(row+1);
      } 
        blankBoard.togglePiece(row,col);
      }
  }
  recurse();
  return count;
  // var solutionCount = undefined; //fixme

  // console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  // return solutionCount;
};


// window.countNRooksSolutions = function(n) {
  //debugger;
  // if(n < 2){
  //   return 1;
  // }
  // let count = 1;
  // let startingColumn = 0;
  // let blankBoard = function(){
  //   return new Board({'n': n});
  // };
  // let solutionBoard = blankBoard();
  // let findSolutions = function(row = 1, newBoard = false){
  // debugger;
  // if(newBoard === true) {
  //   solutionBoard = blankBoard();
  //   solutionBoard.togglePiece(0, startingColumn);
  // }
  //   for(col = 0; col < solutionBoard.attributes.n; col++){
  //     solutionBoard.togglePiece(row, col);
  //     if(!solutionBoard.hasAnyColConflicts() && row<n-1){
  //       findSolutions(row+1);
  //     } if(solutionBoard.hasAnyColConflicts()){
  //       solutionBoard.togglePiece(row,col);
  //     } if(row === n-1 && !solutionBoard.hasAnyColConflicts() && !solutionBoard.hasAnyRowConflicts() && startingColumn < n-1) {
  //         count++;
  //         if(solutionBoard.get(1)[solutionBoard.get(1).length]){
  //           startingColumn++;
  //           findSolutions(1, true);
  //         } else {
  //           //findSolutions(1, false)
  //           //solutionBoard.togglePiece(row, )
  //         }
  //         startingColumn++;
  //         findSolutions(1, true);
  //     }
  //   }

  // }
  // findSolutions(1, true);
  // console.log(count);
  // return (count*(n-1));
  
// let solutionBoard = new Board({'n': n});
// let firstSolution = findNRooksSolution(n);
// for (let k = 0; k < firstSolution.length; k++){
//   solutionBoard.set(k, firstSolution[k]);
// }

//   solutionBoard.togglePiece(0,0);

// //debugger;
// let findSolutions = function(row = 0, col = 1){
//   if (blankBoard.attributes.n<1){
//    col = 0;
//   }
//   for(col; col < blankBoard.attributes.n; col++){
//     blankBoard.togglePiece(row, col);
//     if(!blankBoard.hasAnyColConflicts() && row<n-1){
//       findSolutions(row+1);
//     } if(blankBoard.hasAnyColConflicts()){
//       blankBoard.togglePiece(row,col);
//     }
//     if(row === n-1 && !blankBoard.hasAnyColConflicts() && !blankBoard.hasAnyRowConflicts()){
//       count++;
//       findSolutions(0, col++);
//     }

//   }

// }

//let solutionCount;