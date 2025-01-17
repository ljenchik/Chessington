import Player from './player';
import GameSettings from './gameSettings';
import Square from './square';
import King from './pieces/king';

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
        if (this.isValidSquare(row, column)) {
            let newSquare = Square.at(row, column);
            let piece = this.getPiece(newSquare);
            return piece === undefined || piece.player !== this.currentPlayer
        }
    }

    validateAndPush(row, column, availableMoves) {
        if (this.isValidSquare(row, column)) {
            let newSquare = Square.at(row, column);
            let piece = this.getPiece(newSquare);
            if ((piece === undefined || piece.player !== this.currentPlayer) && !King.prototype.isPrototypeOf(piece)) {
                availableMoves.push(newSquare);
            }   
            return piece === undefined;
        } else {
            return false;
        }
    }

    pawnDiagonalMove(row, column, availableMoves) {
        if (this.isValidSquare(row, column)) {
            let newSquare = Square.at(row, column);
            let piece = this.getPiece(newSquare);
            if (piece !== undefined && piece.player !== this.currentPlayer && !King.prototype.isPrototypeOf(piece)) {
                availableMoves.push(newSquare);
            }   
        }
    }
}