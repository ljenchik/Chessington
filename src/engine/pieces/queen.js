import Piece from './piece';
import Square from '../square';

export default class Queen extends Piece {
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
        return availableMoves;
    }
}
