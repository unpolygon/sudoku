var matrix = [
    [0, 0, 6, 0, 0, 0, 0, 0, 0],
[0, 9, 0, 2, 0, 0, 5, 0, 0],
[0, 1, 0, 0, 0, 0, 7, 2, 0],
[1, 0, 0, 5, 0, 0, 0, 0, 0],
[0, 0, 0, 6, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 9, 0],
[0, 0, 7, 0, 0, 0, 0, 8, 0],
[3, 0, 0, 0, 0, 0, 0, 0, 0]
];

export function solveSudoku(mat){
    // mat = matrix;
    matrix = mat;
    // console.log('WTF :',typeof matrix);
    let zeroList = findZero();
    // console.log('WTF :',matrix);
    if(solve(0,0,zeroList)) return matrix
    else return null
    // console.log('WTF :',matrix);
}

function isSave(i,row,col){
    // in row and col
    for(let x = 0 ; x < 9 ; x++){
        if (matrix[row][x] === i) return false; // in row 
        if (matrix[x][col] === i) return false; // in col
    }

    // box
    let rowBox = row - (row % 3);
    let colBox = col - (col % 3);
    for (let r = rowBox; r < rowBox+3; r++){
        for (let c = colBox; c < colBox+3; c++){
            if (matrix[r][c] === i) return false
        }
    }
    // console.log('isSave');
    return true
}

function solve(row,indexColumn,zeroList){
    if(row >= zeroList.length) return true;
    if(indexColumn >= zeroList[row].length) return solve(row+1,0,zeroList);
    
    const col = zeroList[row][indexColumn];
    // console.log(row,col,matrix);
    for(let i = 1; i <= 9; i++){
        if (isSave(i,row,col)){
            matrix[row][col] = i;
            console.log(row,col,i);
            // next
            if(solve(row,indexColumn+1,zeroList)){
                console.log('finish');
                return true;
            }
        }
    }

    matrix[row][col] = 0;
    return false;
}

function findZero(){
    let zeroList = [];
    for(let row = 0 ; row < 9; row++){
        let colList = [];
        for(let col = 0; col < 9; col++){
            if (matrix[row][col] === 0) colList.push(col);
            matrix[row][col] = parseInt(matrix[row][col]);
        }
        zeroList.push(colList);
    }
    console.log('zeroList: ', typeof zeroList, zeroList);
    return zeroList;
}



