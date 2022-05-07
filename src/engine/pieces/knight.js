import Piece from './piece';
import Square from '../square';

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this);
        let availableMoves = []
        
        board.validateAndPush(location.row + 2, location.col + 1, availableMoves);
        board.validateAndPush(location.row + 2, location.col - 1, availableMoves);
        board.validateAndPush(location.row - 2, location.col + 1, availableMoves);
        board.validateAndPush(location.row - 2, location.col - 1, availableMoves);

        board.validateAndPush(location.row + 1, location.col + 2, availableMoves);
        board.validateAndPush(location.row - 1, location.col + 2, availableMoves);
        board.validateAndPush(location.row + 1, location.col - 2, availableMoves);
        board.validateAndPush(location.row - 1, location.col - 2, availableMoves);
        
        return availableMoves;
    }
}
