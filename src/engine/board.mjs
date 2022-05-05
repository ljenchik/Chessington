import Player from './player.js';
import GameSettings from './gameSettings.js';
import Square from './square.js';

export default class Board {
    constructor(currentPlayer) {
        this.currentPlayer = currentPlayer ? currentPlayer : Player.WHITE;
        this.board = this.createBoard();
    }

    createBoard() {
        const board = new Array(GameSettings.BOARD_SIZE);
        for (let i = 0; i < board.length; i++) {
            board[i] = new Array(GameSettings.BOARD_SIZE);
        }
        return board;
    }

    setPiece(square, piece) {
        this.board[square.row][square.col] = piece;
    }

    getPiece(square) {
        return this.board[square.row][square.col];
    }

    findPiece(pieceToFind) {
        for (let row = 0; row < this.board.length; row++) {
            for (let col = 0; col < this.board[row].length; col++) {
                if (this.board[row][col] === pieceToFind) {
                    return Square.at(row, col);
                }
            }
        }
        throw new Error('The supplied piece is not on the board');
    }

    movePiece(fromSquare, toSquare) {
        const movingPiece = this.getPiece(fromSquare);        
        if (!!movingPiece && movingPiece.player === this.currentPlayer) {
            this.setPiece(toSquare, movingPiece);
            this.setPiece(fromSquare, undefined);
            this.currentPlayer = (this.currentPlayer === Player.WHITE ? Player.BLACK : Player.WHITE);
        }
    }

    isValidSquare (row, column) {
        if (row >=0 && row < 8 && column >=0 && column < 8) {
            return true;
        }
        return false;
    }

    isValidMove(row, column) {
        let newSquare = Square.at(row, column);
        let pieceAndPlace= this.getPiece(newSquare);
        console.log(pieceAndPlace.player.black)
        console.log(pieceAndPlace);
        if (this.currentPlayer === Player.WHITE) {
            if (isValidSquare(row, column) && pieceAndPlace === undefined || pieceAndPlace.player.black) {
                return true;
            }
            return false;
        }
        if (this.currentPlayer === Player.BLACK) {
            if (isValidSquare(row, column) && pieceAndPlace === undefined || pieceAndPlace.player.white) {
                return true;
            }
            return false;
        }
    }
}
