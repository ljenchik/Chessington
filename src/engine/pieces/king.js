import Piece from './piece';
import Square from '../square';


export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this);
        let availableMoves = []

        availableMoves.push(Square.at(location.row + 1, location.col));
        availableMoves.push(Square.at(location.row - 1, location.col));
        availableMoves.push(Square.at(location.row, location.col + 1));
        availableMoves.push(Square.at(location.row, location.col - 1));

        availableMoves.push(Square.at(location.row + 1, location.col + 1));
        availableMoves.push(Square.at(location.row - 1, location.col - 1));
        availableMoves.push(Square.at(location.row + 1, location.col - 1));
        availableMoves.push(Square.at(location.row - 1, location.col + 1));


        /*
        let location = board.findPiece(this);
        let newMoves = [];
        for (let i = -1; i < 2; i++) {
            for (let j = -1; j < 2; j++) {
                if(i != 0 || j != 0 && board.isValidSquare(location.row + i, location.col + j)) newMoves.push(Square.at(location.row + i, location.col + j));
            }
        }
        console.log(newMoves);
        return newMoves;
    }*/
        
        return availableMoves;
    }
    
}
