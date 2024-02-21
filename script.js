function connectFour(array) {
    // Your code goes here
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if ((array[i][j] == 'R' && array[i+1][j] == 'R' && array[i+2][j] == 'R' && array[i+3][j] == 'R')) {
                return "R";
            } else if ((array[i][j] == 'Y' && array[i+1][j] == 'Y' && array[i+2][j] == 'Y' && array[i+3][j] == 'Y')) {
                return "Y";
            }
        }
    }
    // Horizontal
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < 4; j++) {
            if ((array[i][j] == 'R' && array[i][j+1] == 'R' && array[i][j+2] == 'R' && array[i][j+3] == 'R')) {
                return "R";
            } else if ((array[i][j] == 'Y' && array[i][j+1] == 'Y' && array[i][j+2] == 'Y' && array[i][j+3] == 'Y')) {
                return "Y";
            }
        }
    }
    // Diagonal
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 4; j++) {
            if ((array[i][j] == 'R' && array[i+1][j+1] == 'R' && array[i+2][j+2] == 'R' && array[i+3][j+3] == 'R')) {
                return "R";
            } else if ((array[i][j] == 'Y' && array[i+1][j+1] == 'Y' && array[i+2][j+2] == 'Y' && array[i+3][j+3] == 'Y')) {
                return "Y";
            }
        }
    }
    // Reverse Diagonal
    for (let i = 0; i < 3; i++) {
        for (let j = 6; j > 2; j--) {
            if ((array[i][j] == 'R' && array[i+1][j-1] == 'R' && array[i+2][j-2] == 'R' && array[i+3][j-3] == 'R')) {
                return "R";
            } else if ((array[i][j] == 'Y' && array[i+1][j-1] == 'Y' && array[i+2][j-2] == 'Y' && array[i+3][j-3] == 'Y')) {
                return "Y";
            }
        }
    }
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i][j] == "-") {
                return "in progress"
            }
        }
    }
    return "draw";
}
