export function removeSudoku(mat,level){
    let row,col
    let cells = [10,20,30,40,50]
    while(cells[level]){
        row = Math.floor(Math.random()*9)
        col = Math.floor(Math.random()*9)
        mat[row][col] = 0
        cells[level] -= 1
    }
    return mat
}