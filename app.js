/**
 * Flip 7 Score Tracker
 * Tracks points per round. First player to reach 200 points wins.
 */

const translations = {
    en: {
        title: '🎴 Flip 7 Score Tracker',
        subtitle: 'Track points per round. First player to reach 200 points wins!',
        players: 'Players',
        enterPlayerName: 'Enter player name',
        addPlayer: 'Add Player',
        round: 'Round',
        enterScores: 'Enter Scores',
        submitRound: 'Submit Round Scores',
        resetGame: 'Reset Game',
        scoreBoard: 'Score Board',
        roundHistory: 'Round History',
        winner: '🎉 Winner!',
        continuePlaying: 'Continue Playing',
        noPlayers: 'No players yet. Add players to start tracking scores.',
        addPlayersToEnter: 'Add players to enter round scores',
        addPlayersToSee: 'Add players to see the score board',
        noRoundsYet: 'No rounds played yet. Submit scores to see history.',
        total: 'Total',
        removePlayer: 'Remove this player? Their scores will be lost.',
        pleaseEnterName: 'Please enter a player name',
        playerExists: 'Player name already exists',
        pleaseAddPlayer: 'Please add at least one player first',
        enterValidScores: 'Please enter valid scores for all players',
        resetConfirm: 'Are you sure you want to reset the entire game? All scores and history will be lost.',
        winsWith: 'wins with',
        points: 'points!',
        removePlayerTitle: 'Remove player'
    },
    vi: {
        title: '🎴 Flip 7 Theo Dõi Điểm',
        subtitle: 'Theo dõi điểm mỗi vòng. Người chơi đầu tiên đạt 200 điểm sẽ thắng!',
        players: 'Người Chơi',
        enterPlayerName: 'Nhập tên người chơi',
        addPlayer: 'Thêm Người Chơi',
        round: 'Vòng',
        enterScores: 'Nhập Điểm',
        submitRound: 'Xác Nhận Điểm Vòng',
        resetGame: 'Đặt Lại Game',
        scoreBoard: 'Bảng Điểm',
        roundHistory: 'Lịch Sử Vòng',
        winner: '🎉 Người Thắng!',
        continuePlaying: 'Tiếp Tục Chơi',
        noPlayers: 'Chưa có người chơi. Thêm người chơi để bắt đầu theo dõi điểm.',
        addPlayersToEnter: 'Thêm người chơi để nhập điểm vòng',
        addPlayersToSee: 'Thêm người chơi để xem bảng điểm',
        noRoundsYet: 'Chưa có vòng nào. Xác nhận điểm để xem lịch sử.',
        total: 'Tổng',
        removePlayer: 'Xóa người chơi này? Điểm số của họ sẽ bị mất.',
        pleaseEnterName: 'Vui lòng nhập tên người chơi',
        playerExists: 'Tên người chơi đã tồn tại',
        pleaseAddPlayer: 'Vui lòng thêm ít nhất một người chơi trước',
        enterValidScores: 'Vui lòng nhập điểm hợp lệ cho tất cả người chơi',
        resetConfirm: 'Bạn có chắc muốn đặt lại toàn bộ game? Tất cả điểm số và lịch sử sẽ bị mất.',
        winsWith: 'thắng với',
        points: 'điểm!',
        removePlayerTitle: 'Xóa người chơi'
    }
};

class Flip7Tracker {
    constructor() {
        this.currentLang = this.loadLanguage() || 'en';
        const saved = this.loadGameState();
        this.players = saved?.players || [];
        this.currentRound = saved?.currentRound || 1;
        this.roundHistory = saved?.roundHistory || [];
        this.gameWinner = saved?.gameWinner || null; // Track who won the game
        this.init();
    }

    init() {
        this.updateLanguage();
        this.renderPlayers();
        this.renderRoundInputs();
        this.renderScoreBoard();
        this.renderRoundHistory();
        this.attachEventListeners();
        this.updateRoundNumber();
    }

    attachEventListeners() {
        const addPlayerBtn = document.getElementById('addPlayerBtn');
        const playerNameInput = document.getElementById('playerNameInput');
        const submitRoundBtn = document.getElementById('submitRoundBtn');
        const resetGameBtn = document.getElementById('resetGameBtn');
        const closeWinnerBtn = document.getElementById('closeWinnerBtn');
        const langBtn = document.getElementById('langBtn');

        addPlayerBtn.addEventListener('click', () => this.addPlayer());
        playerNameInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.addPlayer();
            }
        });

        submitRoundBtn.addEventListener('click', () => this.submitRound());
        resetGameBtn.addEventListener('click', () => this.resetGame());
        closeWinnerBtn.addEventListener('click', () => this.closeWinnerBanner());
        langBtn.addEventListener('click', () => this.toggleLanguage());

        // Enable submit button when all scores are entered
        document.addEventListener('input', () => this.validateRoundInputs());
    }

    toggleLanguage() {
        this.currentLang = this.currentLang === 'en' ? 'vi' : 'en';
        this.saveLanguage();
        this.updateLanguage();
        this.renderPlayers();
        this.renderRoundInputs();
        this.renderScoreBoard();
        this.renderRoundHistory();
    }

    updateLanguage() {
        const t = translations[this.currentLang];
        document.documentElement.lang = this.currentLang;
        
        // Update elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t[key]) {
                el.textContent = t[key];
            }
        });

        // Update placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (t[key]) {
                el.placeholder = t[key];
            }
        });

        // Update language button
        const langBtn = document.getElementById('langBtn');
        const currentLangSpan = document.getElementById('currentLang');
        if (langBtn && currentLangSpan) {
            currentLangSpan.textContent = this.currentLang.toUpperCase();
        }
    }

    t(key) {
        return translations[this.currentLang][key] || key;
    }

    addPlayer() {
        const input = document.getElementById('playerNameInput');
        const name = input.value.trim();

        if (!name) {
            alert(this.t('pleaseEnterName'));
            return;
        }

        if (this.players.some(p => p.name.toLowerCase() === name.toLowerCase())) {
            alert(this.t('playerExists'));
            return;
        }

        const player = {
            id: Date.now().toString(),
            name: name,
            totalPoints: 0
        };

        this.players.push(player);
        input.value = '';
        this.saveGameState();
        this.renderPlayers();
        this.renderRoundInputs();
        this.renderScoreBoard();
    }

    removePlayer(playerId) {
        if (confirm(this.t('removePlayer'))) {
            this.players = this.players.filter(p => p.id !== playerId);
            this.saveGameState();
            this.renderPlayers();
            this.renderRoundInputs();
            this.renderScoreBoard();
            this.renderRoundHistory();
        }
    }

    renderRoundInputs() {
        const container = document.getElementById('roundScoreInputs');
        const submitBtn = document.getElementById('submitRoundBtn');

        if (this.players.length === 0) {
            container.innerHTML = `<div class="empty-state"><p>${this.t('addPlayersToEnter')}</p></div>`;
            submitBtn.disabled = true;
            return;
        }

        container.innerHTML = this.players.map(player => `
            <div class="score-input-row">
                <label for="score-${player.id}">${this.escapeHtml(player.name)}</label>
                <input 
                    type="number" 
                    id="score-${player.id}" 
                    min="0" 
                    max="200" 
                    step="1"
                    value="0"
                    placeholder="0"
                    data-player-id="${player.id}"
                >
            </div>
        `).join('');

        this.validateRoundInputs();
    }

    validateRoundInputs() {
        const submitBtn = document.getElementById('submitRoundBtn');
        if (this.players.length === 0) {
            submitBtn.disabled = true;
            return;
        }

        const inputs = document.querySelectorAll('.score-input-row input');
        let allValid = true;

        inputs.forEach(input => {
            const value = input.value.trim();
            if (value === '' || isNaN(value) || parseFloat(value) < 0) {
                allValid = false;
            }
        });

        submitBtn.disabled = !allValid;
    }

    submitRound() {
        if (this.players.length === 0) {
            alert(this.t('pleaseAddPlayer'));
            return;
        }

        const roundScores = {};
        let roundTotal = 0;
        let hasInvalidInput = false;

        this.players.forEach(player => {
            const input = document.getElementById(`score-${player.id}`);
            const score = parseFloat(input.value) || 0;

            if (score < 0 || isNaN(score)) {
                hasInvalidInput = true;
                return;
            }

            roundScores[player.id] = score;
            roundTotal += score;
        });

        if (hasInvalidInput) {
            alert(this.t('enterValidScores'));
            return;
        }

        // Update player totals (cumulative across all rounds)
        this.players.forEach(player => {
            const roundScore = roundScores[player.id];
            // Add round score to total (accumulated across all rounds)
            player.totalPoints += roundScore;
        });

        // Calculate top 1, 2, 3 based on total points after this round
        const sortedByTotal = [...this.players].sort((a, b) => b.totalPoints - a.totalPoints);
        const top3 = sortedByTotal.slice(0, 3).map((p, index) => ({
            rank: index + 1,
            playerId: p.id
        }));

        // Record round history with top 3 rankings
        const historyEntry = {
            round: this.currentRound,
            scores: roundScores,
            top3: top3
        };
        this.roundHistory.push(historyEntry);

        // Advance to next round
        this.currentRound++;

        this.saveGameState();
        this.renderRoundInputs();
        this.renderScoreBoard();
        this.renderRoundHistory();
        this.updateRoundNumber();
        
        // Check for winner based on total points across all rounds
        // Winner is the player with highest total points (>= 200)
        this.checkForWinner();
    }

    checkForWinner() {
        // Winner is the FIRST player to reach 200 points
        // If we already have a winner, don't check again
        if (this.gameWinner) {
            return;
        }

        // Calculate scores before this round
        let scoresBeforeRound = {};
        this.players.forEach(p => scoresBeforeRound[p.id] = 0);
        
        // Sum all scores except the last round
        for (let i = 0; i < this.roundHistory.length - 1; i++) {
            const entry = this.roundHistory[i];
            this.players.forEach(player => {
                scoresBeforeRound[player.id] += (entry.scores[player.id] || 0);
            });
        }

        // Check who reached 200 in the most recent round
        const lastRound = this.roundHistory[this.roundHistory.length - 1];
        if (!lastRound) {
            return;
        }

        // Find players who reached 200 in this round (were below 200 before, now >= 200)
        const newWinners = this.players.filter(player => {
            const before = scoresBeforeRound[player.id];
            const after = player.totalPoints;
            return before < 200 && after >= 200;
        });

        if (newWinners.length > 0) {
            // If multiple players reached 200 in the same round,
            // the one with the highest round score wins
            // (they reached 200 first in that round)
            const winner = newWinners.reduce((prev, current) => {
                const prevRoundScore = lastRound.scores[prev.id] || 0;
                const currentRoundScore = lastRound.scores[current.id] || 0;
                return currentRoundScore > prevRoundScore ? current : prev;
            });

            this.gameWinner = winner.id;
            this.saveGameState();
            this.showWinnerBanner(winner.name, winner.totalPoints);
        }
    }

    showWinnerBanner(playerName, totalPoints) {
        const banner = document.getElementById('winnerBanner');
        const winnerText = document.getElementById('winnerText');
        winnerText.textContent = `${playerName} ${this.t('winsWith')} ${totalPoints} ${this.t('points')}`;
        banner.classList.remove('hidden');
    }

    closeWinnerBanner() {
        const banner = document.getElementById('winnerBanner');
        banner.classList.add('hidden');
    }

    resetGame() {
        if (confirm(this.t('resetConfirm'))) {
            // Reset all game data - starts a new game
            // All total points and round history will be cleared
            this.players = [];
            this.currentRound = 1;
            this.roundHistory = [];
            this.gameWinner = null;
            localStorage.removeItem('flip7GameState');
            this.renderPlayers();
            this.renderRoundInputs();
            this.renderScoreBoard();
            this.renderRoundHistory();
            this.updateRoundNumber();
        }
    }

    updateRoundNumber() {
        const roundNumberEl = document.getElementById('currentRoundNumber');
        if (roundNumberEl) {
            roundNumberEl.textContent = this.currentRound;
        }
    }

    renderPlayers() {
        const container = document.getElementById('playersList');

        if (this.players.length === 0) {
            container.innerHTML = `<div class="empty-state"><p>${this.t('noPlayers')}</p></div>`;
            return;
        }

        container.innerHTML = this.players.map(player => `
            <div class="player-tag">
                <span>${this.escapeHtml(player.name)}</span>
                <button class="remove-btn" onclick="tracker.removePlayer('${player.id}')" title="${this.t('removePlayerTitle')}">×</button>
            </div>
        `).join('');
    }

    renderScoreBoard() {
        const container = document.getElementById('scoreBoard');

        if (this.players.length === 0) {
            container.innerHTML = `<div class="empty-state"><p>${this.t('addPlayersToSee')}</p></div>`;
            return;
        }

        // Sort players by total points (descending)
        const sortedPlayers = [...this.players].sort((a, b) => b.totalPoints - a.totalPoints);

        // Find the actual winner (first player to reach 200 points)
        const actualWinner = this.gameWinner 
            ? this.players.find(p => p.id === this.gameWinner)
            : null;

        container.innerHTML = sortedPlayers.map(player => {
            // Only highlight the actual winner (first player to reach 200 points)
            const isWinner = actualWinner && player.id === actualWinner.id;
            const winnerClass = isWinner ? 'winner' : '';
            const progress = Math.min((player.totalPoints / 200) * 100, 100);
            const progressClass = isWinner ? 'winner' : '';

            return `
                <div class="player-score-card ${winnerClass}">
                    <div class="player-header">
                        <div class="player-name">${this.escapeHtml(player.name)}</div>
                        <div class="player-total">${player.totalPoints} / 200</div>
                    </div>
                    <div class="progress-bar-container">
                        <div class="progress-bar ${progressClass}" style="width: ${progress}%">
                            ${progress >= 15 ? `${Math.round(progress)}%` : ''}
                        </div>
                        ${progress < 15 ? `<div class="progress-text">${Math.round(progress)}%</div>` : ''}
                    </div>
                </div>
            `;
        }).join('');
    }

    renderRoundHistory() {
        const container = document.getElementById('roundHistory');

        if (this.roundHistory.length === 0) {
            container.innerHTML = `<div class="empty-state"><p>${this.t('noRoundsYet')}</p></div>`;
            return;
        }

        let tableHTML = `
            <table class="history-table">
                <thead>
                    <tr>
                        <th>${this.t('round')}</th>
                        ${this.players.map(p => `<th>${this.escapeHtml(p.name)}</th>`).join('')}
                        <th>Top 1</th>
                        <th>Top 2</th>
                        <th>Top 3</th>
                    </tr>
                </thead>
                <tbody>
        `;

        // Calculate cumulative scores for each round to determine rankings
        let cumulativeScores = {};
        this.players.forEach(p => cumulativeScores[p.id] = 0);

        this.roundHistory.forEach(entry => {
            // Update cumulative scores up to this round
            this.players.forEach(player => {
                cumulativeScores[player.id] += (entry.scores[player.id] || 0);
            });

            // Sort players by cumulative score after this round
            const sortedByTotal = [...this.players]
                .map(p => ({ ...p, currentTotal: cumulativeScores[p.id] }))
                .sort((a, b) => b.currentTotal - a.currentTotal);

            tableHTML += '<tr>';
            tableHTML += `<td class="round-number">${entry.round}</td>`;

            // Show round scores
            this.players.forEach(player => {
                const score = entry.scores[player.id] || 0;
                tableHTML += `<td>${score}</td>`;
            });

            // Show top 3
            const top1 = sortedByTotal[0];
            const top2 = sortedByTotal[1];
            const top3 = sortedByTotal[2];

            tableHTML += `<td class="top-cell top1">${top1 ? this.escapeHtml(top1.name) : '-'}</td>`;
            tableHTML += `<td class="top-cell top2">${top2 ? this.escapeHtml(top2.name) : '-'}</td>`;
            tableHTML += `<td class="top-cell top3">${top3 ? this.escapeHtml(top3.name) : '-'}</td>`;
            tableHTML += '</tr>';
        });

        // Add totals row
        tableHTML += '<tr style="font-weight: 700; background: var(--bg-color);">';
        tableHTML += `<td>${this.t('total')}</td>`;
        this.players.forEach(player => {
            tableHTML += `<td class="total-score">${player.totalPoints}</td>`;
        });
        tableHTML += '<td colspan="3">-</td>';
        tableHTML += '</tr>';

        tableHTML += '</tbody></table>';
        container.innerHTML = tableHTML;
    }

    saveGameState() {
        const state = {
            players: this.players,
            currentRound: this.currentRound,
            roundHistory: this.roundHistory,
            gameWinner: this.gameWinner
        };
        localStorage.setItem('flip7GameState', JSON.stringify(state));
    }

    loadGameState() {
        try {
            const saved = localStorage.getItem('flip7GameState');
            if (saved) {
                return JSON.parse(saved);
            }
        } catch (error) {
            console.error('Error loading game state:', error);
        }
        return null;
    }

    saveLanguage() {
        localStorage.setItem('flip7Language', this.currentLang);
    }

    loadLanguage() {
        try {
            return localStorage.getItem('flip7Language') || 'en';
        } catch (error) {
            return 'en';
        }
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// Initialise tracker when page loads
let tracker;
document.addEventListener('DOMContentLoaded', () => {
    tracker = new Flip7Tracker();
});