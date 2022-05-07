import Square from '../square';
import Piece from './piece';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this);
        let availableMoves = [];
        // Horisontally right
        for (let i = location.col + 1; i < 8; i++) {
            if (!board.validateAndPush(location.row, i, availableMoves)) {
                break;
            }
        }

        // Horisontally left
        for (let i = location.col - 1; i >= 0; i--) {
            if (!board.validateAndPush(location.row, i, availableMoves)) {
                break;
            }
        }
        // Vertically up
        for (let i = location.row + 1; i < 8; i++) {
            if (!board.validateAndPush(i, location.col, availableMoves)) {
                break;
            }
        }
        // Vertically down
        for (let i = location.row - 1; i >= 0; i--) {
            if (!board.validateAndPush(i, location.col, availableMoves)) {
                break;
            }
        }
        
    console.log(availableMoves);
    return availableMoves;
    }
}
      
