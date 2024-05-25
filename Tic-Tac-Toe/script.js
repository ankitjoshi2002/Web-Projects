document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    const status = document.getElementById('status');
    const restartBtn = document.getElementById('restart-btn');

    let currentPlayer = 'X';
    let gameActive = true;
    let gameState = ['', '', '', '', '', '', '', '', ''];

    // Winning conditions
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    // Function to handle cell click
    const handleCellClick = (e) => {
        const cell = e.target;
        const cellIndex = parseInt(cell.getAttribute('data-cell'));

        if (gameState[cellIndex] !== '' || !gameActive) {
            return;
        }

        gameState[cellIndex] = currentPlayer;
        cell.textContent = currentPlayer;

        if (checkWin() || checkDraw()) {
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            status.textContent = `Player ${currentPlayer}'s turn`;
        }
    };

    // Function to check for a win
    const checkWin = () => {
        for (let condition of winConditions) {
            const [a, b, c] = condition;
            if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                status.textContent = `Player ${currentPlayer} wins!`;
                return true;
            }
        }
        return false;
    };

    // Function to check for a draw
    const checkDraw = () => {
        if (gameState.every(cell => cell !== '')) {
            status.textContent = 'It\'s a draw!';
            return true;
        }
        return false;
    };

    // Function to restart the game
    const restartGame = () => {
        gameActive = true;
        currentPlayer = 'X';
        gameState = ['', '', '', '', '', '', '', '', ''];
        status.textContent = `Player ${currentPlayer}'s turn`;

        board.querySelectorAll('.cell').forEach(cell => {
            cell.textContent = '';
        });
    };

    // Event listeners
    board.addEventListener('click', handleCellClick);
    restartBtn.addEventListener('click', restartGame);

    // Initial status message
    status.textContent = `Player ${currentPlayer}'s turn`;
});
