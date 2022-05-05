import Piece from './piece';
import Square from '../square';

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        let availableMoves = []
        for (let i  = 1; i < 8; i++) {
            // Forwards diagonal
            if (location.row + i < 8 && location.col + i < 8) {
                availableMoves.push(Square.at(location.row + i, location.col + i));
            }
            if (location.row - i >= 0 && location.col - i >= 0) {
                availableMoves.push(Square.at(location.row - i, location.col - i));
            }
            // Backwards diagonal
            if (location.row + i < 8 && location.col - i >= 0) {
                availableMoves.push(Square.at(location.row + i, location.col - i));
            }
            if (location.row - i >= 0 && location.col + i < 8) {
                availableMoves.push(Square.at(location.row - i, location.col + i));
            }
        }
        //Horisontally
        for (let i  = location.col + 1; i < 8; i++) {
            availableMoves.push(Square.at(location.row, i));
        }
        for (let i  = 0; i < location.col; i++) {
            availableMoves.push(Square.at(location.row, i));
        }
        // Vertically
        for (let j  = location.row + 1; j < 8; j++) {
            availableMoves.push(Square.at(j, location.col));
        }
        for (let j = 0; j < location.row; j++) {
            availableMoves.push(Square.at(j, location.col));
        }
        return availableMoves;
    }
}
