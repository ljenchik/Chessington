import Square from '../square';
import Piece from './piece';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let location = board.findPiece(this);
        let availableMoves = [];
        // Horisontally
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
