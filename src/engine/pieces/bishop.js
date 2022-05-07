import Square from '../square';
import Piece from './piece';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this)
        let availableMoves = []
        // Forwards diagonal up
        for (let i  = 1; i < 8 ; i++) {
            if (!board.validateAndPush(location.row + i, location.col + i, availableMoves)) {
                break;
            }
        }
        // Forwards diagonal down
        for (let i  = 1; i < 8; i++) {
            if (!board.validateAndPush(location.row - i, location.col - i, availableMoves)) {
                break;
            }
        }
        // Backwards diagonal up
        for (let i  = 1; i < 8; i++) {
            if (!board.validateAndPush(location.row + i, location.col - i, availableMoves)) {
                break;
            }
        }
        for (let i  = 1; i < 8; i++) {
            // Backwards diagonal down
            if (!board.validateAndPush(location.row - i, location.col + i, availableMoves)) {
                break;
            }
        }
        return availableMoves;
    }
}
