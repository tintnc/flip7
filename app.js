const APP_VERSION = 'v0.2.0';
const DEFAULT_RULES = [
    { id: 'rule-36', score: 36, icon: '🍀', label: 'Lucky 36' },
    { id: 'rule-18', score: 18, icon: '✌️', label: 'Calm 18' }
];
const CONFETTI_COLOURS = ['#ff6b6b', '#feca57', '#54a0ff', '#5f27cd', '#1dd1a1'];

const translations = {
    en: {
        title: '🎴 Flip 7 Score Tracker',
        subtitle: 'Track points per round. First player to reach 200 points wins!',
        players: 'Players',
        enterPlayerName: 'Enter player name',
        addPlayer: 'Add Player',
        resetPlayers: 'Reset All Players',
        dragHandleLabel: 'Drag to reorder',
        round: 'Round',
        enterScores: 'Enter Scores',
        simpleMode: 'Simple Mode',
        advancedMode: 'Advanced Mode',
        submitRound: 'Submit Round Scores',
        resetGame: 'Reset Game',
        scoreBoard: 'Score Board',
        roundHistory: 'Round History',
        winner: '🎉 Winner!',
        continuePlaying: 'Continue Playing',
        rulesButton: 'Rules & Settings',
        previewTitle: 'Score Preview',
        cancel: 'Cancel',
        confirmScore: 'Use This Score',
        editRoundTitle: 'Edit Round',
        saveChanges: 'Save Changes',
        rulesModalTitle: 'Score Rules',
        addRule: 'Add Rule',
        saveRules: 'Save Rules',
        versionLabel: 'Version',
        noPlayers: 'No players yet. Add players to start tracking scores.',
        addPlayersToEnter: 'Add players to enter round scores',
        addPlayersToSee: 'Add players to see the score board',
        noRoundsYet: 'No rounds played yet. Submit scores to see history.',
        total: 'Total',
        removePlayer: 'Remove this player? Their scores will be lost.',
        resetPlayersConfirm: 'Remove all players? All history will be cleared.',
        pleaseEnterName: 'Please enter a player name',
        playerExists: 'Player name already exists',
        pleaseAddPlayer: 'Please add at least one player first',
        enterValidScores: 'Please enter valid scores for all players',
        resetConfirm: 'Reset the entire game? Scores and history will be cleared.',
        winsWith: 'wins with',
        points: 'points!',
        removePlayerTitle: 'Remove player',
        invalidScore: 'Please enter a valid score.',
        invalidExpression: 'Invalid expression. Use spaces between values and a single multiplier (e.g. 5 10 +2 x2).',
        needsPreview: 'Please preview and confirm a score first.',
        freezeInstruction: 'Freeze every player\'s score before submitting.',
        statusPending: 'Pending',
        statusFrozen: 'Frozen',
        previewButton: 'Preview Score',
        confirmButton: 'Confirm Score',
        unfreeze: 'Unfreeze',
        historyEditPrompt: 'Edit this round\'s scores?',
        pendingScoreLabel: 'Pending',
        lockedScoreLabel: 'Locked',
        enterExpressionPlaceholder: 'Example: 5 10 +2 x2',
        ruleScorePlaceholder: 'Score',
        ruleIconPlaceholder: 'Icon',
        ruleLabelPlaceholder: 'Label'
    },
    vi: {
        title: '🎴 Flip 7 Theo Dõi Điểm',
        subtitle: 'Theo dõi điểm mỗi vòng. Người chơi đầu tiên đạt 200 điểm sẽ thắng!',
        players: 'Người Chơi',
        enterPlayerName: 'Nhập tên người chơi',
        addPlayer: 'Thêm Người Chơi',
        resetPlayers: 'Xóa Tất Cả Người Chơi',
        dragHandleLabel: 'Kéo để đổi vị trí',
        round: 'Vòng',
        enterScores: 'Nhập Điểm',
        simpleMode: 'Chế Độ Đơn Giản',
        advancedMode: 'Chế Độ Nâng Cao',
        submitRound: 'Xác Nhận Điểm Vòng',
        resetGame: 'Đặt Lại Game',
        scoreBoard: 'Bảng Điểm',
        roundHistory: 'Lịch Sử Vòng',
        winner: '🎉 Người Thắng!',
        continuePlaying: 'Tiếp Tục Chơi',
        rulesButton: 'Luật & Cài Đặt',
        previewTitle: 'Xem Trước Điểm',
        cancel: 'Hủy',
        confirmScore: 'Dùng Điểm Này',
        editRoundTitle: 'Chỉnh Sửa Vòng',
        saveChanges: 'Lưu Thay Đổi',
        rulesModalTitle: 'Map Điểm',
        addRule: 'Thêm Rule',
        saveRules: 'Lưu Rule',
        versionLabel: 'Phiên bản',
        noPlayers: 'Chưa có người chơi. Thêm người chơi để bắt đầu theo dõi điểm.',
        addPlayersToEnter: 'Thêm người chơi để nhập điểm vòng',
        addPlayersToSee: 'Thêm người chơi để xem bảng điểm',
        noRoundsYet: 'Chưa có vòng nào. Xác nhận điểm để xem lịch sử.',
        total: 'Tổng',
        removePlayer: 'Xóa người chơi này? Điểm số của họ sẽ bị mất.',
        resetPlayersConfirm: 'Xóa toàn bộ người chơi và lịch sử?',
        pleaseEnterName: 'Vui lòng nhập tên người chơi',
        playerExists: 'Tên người chơi đã tồn tại',
        pleaseAddPlayer: 'Vui lòng thêm ít nhất một người chơi trước',
        enterValidScores: 'Vui lòng nhập điểm hợp lệ cho tất cả người chơi',
        resetConfirm: 'Đặt lại game? Toàn bộ điểm và lịch sử sẽ bị mất.',
        winsWith: 'thắng với',
        points: 'điểm!',
        removePlayerTitle: 'Xóa người chơi',
        invalidScore: 'Vui lòng nhập điểm hợp lệ.',
        invalidExpression: 'Biểu thức không hợp lệ. Dùng dấu cách giữa các giá trị và chỉ một x2.',
        needsPreview: 'Vui lòng tính thử và xác nhận điểm trước.',
        freezeInstruction: 'Hãy khóa điểm của tất cả người chơi trước khi xác nhận vòng.',
        statusPending: 'Chờ',
        statusFrozen: 'Đã khóa',
        previewButton: 'Tính Điểm',
        confirmButton: 'Khóa Điểm',
        unfreeze: 'Mở khóa',
        historyEditPrompt: 'Bạn muốn sửa kết quả vòng này?',
        pendingScoreLabel: 'Chờ',
        lockedScoreLabel: 'Đã khóa',
        enterExpressionPlaceholder: 'Ví dụ: 5 10 +2 x2',
        ruleScorePlaceholder: 'Điểm',
        ruleIconPlaceholder: 'Biểu tượng',
        ruleLabelPlaceholder: 'Ghi chú'
    }
};

class Flip7Tracker {
    constructor() {
        this.currentLang = this.loadLanguage();
        const saved = this.loadGameState();
        this.players = saved?.players || [];
        this.currentRound = saved?.currentRound || 1;
        this.roundHistory = saved?.roundHistory || [];
        this.gameWinner = saved?.gameWinner || null;
        this.scoringMode = saved?.scoringMode || 'simple';
        this.scoreRules = Array.isArray(saved?.scoreRules) && saved.scoreRules.length ? saved.scoreRules : [...DEFAULT_RULES];
        this.roundDraft = {};
        this.draggingPlayerId = null;
        this.handleRowDragStart = this.handleRowDragStart.bind(this);
        this.handleRowDragOver = this.handleRowDragOver.bind(this);
        this.handleRowDrop = this.handleRowDrop.bind(this);
        this.handleRowDragEnd = this.handleRowDragEnd.bind(this);
        this.pendingPreview = null;
        this.editingRoundIndex = null;
        this.init();
    }

    init() {
        this.setVersionText();
        this.updateLanguage();
        this.resetRoundDraft();
        this.renderPlayers();
        this.renderRoundInputs();
        this.renderScoreBoard();
        this.renderRoundHistory();
        this.attachEventListeners();
        this.updateRoundNumber();
        this.syncScoringTabs();
    }

    setVersionText() {
        const footerVersion = document.getElementById('footerVersion');
        if (footerVersion) {
            footerVersion.textContent = APP_VERSION;
        }
    }

    attachEventListeners() {
        document.getElementById('addPlayerBtn').addEventListener('click', () => this.addPlayer());
        document.getElementById('playerNameInput').addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                this.addPlayer();
            }
        });
        document.getElementById('resetPlayersBtn').addEventListener('click', () => this.resetPlayers());
        document.getElementById('submitRoundBtn').addEventListener('click', () => this.submitRound());
        document.getElementById('resetGameBtn').addEventListener('click', () => this.resetGame());
        document.getElementById('closeWinnerBtn').addEventListener('click', () => this.closeWinnerBanner());
        document.getElementById('langBtn').addEventListener('click', () => this.toggleLanguage());
        document.getElementById('rulesBtn').addEventListener('click', () => this.openRulesModal());
        document.getElementById('addRuleBtn').addEventListener('click', () => this.addRuleRow());
        document.getElementById('saveRulesBtn').addEventListener('click', () => this.saveRules());
        document.getElementById('saveRoundEditBtn').addEventListener('click', () => this.saveRoundEdit());
        document.getElementById('confirmPreviewBtn').addEventListener('click', () => this.confirmPreviewScore());
        document.querySelectorAll('[data-close-modal]').forEach(btn => {
            btn.addEventListener('click', (event) => {
                const modal = event.target.closest('.modal');
                if (modal) {
                    this.closeModal(modal.id);
                }
            });
        });
        document.getElementById('simpleModeTab').addEventListener('click', () => this.setScoringMode('simple'));
        document.getElementById('advancedModeTab').addEventListener('click', () => this.setScoringMode('advanced'));
        document.getElementById('playersList').addEventListener('click', (event) => {
            const tag = event.target.closest('.player-tag');
            if (!tag) return;
            const playerId = tag.dataset.playerId;
            if (event.target.classList.contains('remove-btn')) {
                this.removePlayer(playerId);
            }
        });
        const roundInputs = document.getElementById('roundScoreInputs');
        roundInputs.addEventListener('input', (event) => {
            const row = event.target.closest('.score-input-row');
            if (!row) return;
            const playerId = row.dataset.playerId;
            const entry = this.ensureDraftEntry(playerId);
            if (event.target.classList.contains('simple-score')) {
                const value = parseFloat(event.target.value);
                entry.pendingScore = isNaN(value) ? null : Math.max(0, value);
                if (!entry.frozen) {
                    entry.score = null;
                }
                this.updateSubmitState();
            }
        });
        roundInputs.addEventListener('click', (event) => {
            const row = event.target.closest('.score-input-row');
            if (!row) return;
            const playerId = row.dataset.playerId;
            if (event.target.classList.contains('confirm-btn')) {
                this.handleConfirmScore(playerId);
                return;
            }
            if (event.target.classList.contains('unfreeze-btn')) {
                this.handleUnfreeze(playerId);
                return;
            }
            if (event.target.classList.contains('preview-btn')) {
                this.handlePreview(playerId);
            }
        });
        document.getElementById('roundHistory').addEventListener('click', (event) => {
            const row = event.target.closest('.history-row');
            if (!row) return;
            if (confirm(this.t('historyEditPrompt'))) {
                this.openEditRoundModal(parseInt(row.dataset.roundIndex, 10));
            }
        });
        document.getElementById('rulesList').addEventListener('click', (event) => {
            if (event.target.classList.contains('remove-rule-btn')) {
                const ruleId = event.target.dataset.ruleId;
                this.scoreRules = this.scoreRules.filter(rule => rule.id !== ruleId);
                if (!this.scoreRules.length) {
                    this.scoreRules = [...DEFAULT_RULES];
                }
                this.renderRulesList();
            }
        });
    }

    setScoringMode(mode) {
        if (this.scoringMode === mode) return;
        this.scoringMode = mode;
        this.resetRoundDraft();
        this.renderRoundInputs();
        this.syncScoringTabs();
        this.saveGameState();
    }

    syncScoringTabs() {
        document.getElementById('simpleModeTab').classList.toggle('active', this.scoringMode === 'simple');
        document.getElementById('advancedModeTab').classList.toggle('active', this.scoringMode === 'advanced');
    }

    resetRoundDraft(preserveExisting = false) {
        const previous = preserveExisting ? { ...this.roundDraft } : {};
        this.roundDraft = {};
        this.players.forEach(player => {
            this.roundDraft[player.id] = previous[player.id] || {
                pendingScore: null,
                score: null,
                expression: '',
                formula: '',
                frozen: false
            };
        });
        this.updateSubmitState();
    }

    ensureDraftEntry(playerId) {
        if (!this.roundDraft[playerId]) {
            this.roundDraft[playerId] = {
                pendingScore: null,
                score: null,
                expression: '',
                formula: '',
                frozen: false
            };
        }
        return this.roundDraft[playerId];
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
        this.players.push({ id: Date.now().toString(), name, totalPoints: 0 });
        input.value = '';
        this.resetRoundDraft(true);
        this.renderPlayers();
        this.renderRoundInputs();
        this.renderScoreBoard();
        this.saveGameState();
    }


    removePlayer(playerId) {
        if (!confirm(this.t('removePlayer'))) {
            return;
        }
        this.players = this.players.filter(player => player.id !== playerId);
        this.roundHistory.forEach(entry => {
            delete entry.scores[playerId];
        });
        if (!this.roundHistory.length) {
            this.gameWinner = null;
        } else {
            this.recomputeTotalsFromHistory();
            this.recalculateWinnerFromHistory();
        }
        this.resetRoundDraft();
        this.renderPlayers();
        this.renderRoundInputs();
        this.renderScoreBoard();
        this.renderRoundHistory();
        this.saveGameState();
    }

    resetPlayers() {
        if (!this.players.length) return;
        if (!confirm(this.t('resetPlayersConfirm'))) return;
        this.players = [];
        this.currentRound = 1;
        this.roundHistory = [];
        this.gameWinner = null;
        this.resetRoundDraft();
        this.renderPlayers();
        this.renderRoundInputs();
        this.renderScoreBoard();
        this.renderRoundHistory();
        this.saveGameState();
    }

    resetGame() {
        if (!confirm(this.t('resetConfirm'))) return;
        this.players.forEach(player => { player.totalPoints = 0; });
        this.currentRound = 1;
        this.roundHistory = [];
        this.gameWinner = null;
        this.resetRoundDraft();
        this.renderRoundInputs();
        this.renderScoreBoard();
        this.renderRoundHistory();
        this.updateRoundNumber();
        this.saveGameState();
    }

    renderPlayers() {
        const container = document.getElementById('playersList');
        if (!this.players.length) {
            container.innerHTML = `<div class="empty-state"><p>${this.t('noPlayers')}</p></div>`;
            return;
        }
        container.innerHTML = this.players.map((player) => `
            <div class="player-tag" data-player-id="${player.id}">
                <span>${this.escapeHtml(player.name)}</span>
                <button class="remove-btn" title="${this.t('removePlayerTitle')}">×</button>
            </div>
        `).join('');
    }

    renderRoundInputs() {
        const container = document.getElementById('roundScoreInputs');
        if (!this.players.length) {
            container.innerHTML = `<div class="empty-state"><p>${this.t('addPlayersToEnter')}</p></div>`;
            return;
        }

        container.innerHTML = this.players.map(player => {
            const entry = this.ensureDraftEntry(player.id);
            const icons = entry.score !== null ? this.getSpecialIcons(entry.score) : '';
            const labelIcon = icons ? `<span class="special-icon">${icons}</span>` : '';
            const statusClass = entry.frozen ? 'frozen' : 'pending';
            const statusLabel = this.t(entry.frozen ? 'statusFrozen' : 'statusPending');
            const pendingChip = !entry.frozen && entry.pendingScore !== null
                ? `<div class="score-chip">${this.t('pendingScoreLabel')}: ${entry.pendingScore}</div>`
                : '';
            const lockedChip = entry.frozen && entry.score !== null
                ? `<div class="score-chip">${this.t('lockedScoreLabel')}: ${this.formatScoreWithIcons(entry.score)}</div>`
                : '';
            const inputId = this.scoringMode === 'simple'
                ? `score-${player.id}`
                : `expression-${player.id}`;
            const inputArea = this.scoringMode === 'simple'
                ? `<input type="number" class="simple-score" id="${inputId}" min="0" step="1" value="${entry.frozen && entry.score !== null ? entry.score : (entry.pendingScore ?? 0)}" ${entry.frozen ? 'disabled' : ''}>`
                : `<textarea class="advanced-input" id="${inputId}" placeholder="${this.t('enterExpressionPlaceholder')}" ${entry.frozen ? 'disabled' : ''}>${entry.expression || ''}</textarea>`;

            const previewButton = this.scoringMode === 'advanced'
                ? `<button class="btn btn-secondary btn-small preview-btn" data-player-id="${player.id}" ${entry.frozen ? 'disabled' : ''}>${this.t('previewButton')}</button>`
                : '';

            const confirmButton = entry.frozen
                ? `<button class="btn btn-light btn-small unfreeze-btn" data-player-id="${player.id}">${this.t('unfreeze')}</button>`
                : `<button class="btn btn-primary btn-small confirm-btn" data-player-id="${player.id}" ${this.scoringMode === 'advanced' && entry.pendingScore === null ? 'disabled' : ''}>${this.t('confirmButton')}</button>`;

            return `
                <div class="score-input-row" data-player-id="${player.id}">
                    <div class="row-header">
                        <span class="drag-handle" role="button" aria-label="${this.t('dragHandleLabel')}" title="${this.t('dragHandleLabel')}">⋮⋮</span>
                        <label for="${inputId}">${this.escapeHtml(player.name)}${labelIcon}</label>
                    </div>
                    ${inputArea}
                    <div class="score-actions">
                        <span class="status-pill ${statusClass}">${statusLabel}</span>
                        ${previewButton}
                        <div class="freeze-actions">
                            ${confirmButton}
                        </div>
                        ${pendingChip}
                        ${lockedChip}
                    </div>
                </div>
            `;
        }).join('');

        this.updateSubmitState();
        this.enableRoundDragAndDrop();
    }

    enableRoundDragAndDrop() {
        const container = document.getElementById('roundScoreInputs');
        if (!container) return;
        const rows = container.querySelectorAll('.score-input-row');
        rows.forEach(row => {
            row.setAttribute('draggable', 'true');
            row.addEventListener('dragstart', this.handleRowDragStart);
            row.addEventListener('dragover', this.handleRowDragOver);
            row.addEventListener('drop', this.handleRowDrop);
            row.addEventListener('dragend', this.handleRowDragEnd);
        });
    }

    handleRowDragStart(event) {
        const row = event.currentTarget;
        this.draggingPlayerId = row.dataset.playerId;
        row.classList.add('dragging');
        event.dataTransfer.effectAllowed = 'move';
    }

    handleRowDragOver(event) {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }

    handleRowDrop(event) {
        event.preventDefault();
        const targetId = event.currentTarget.dataset.playerId;
        if (!this.draggingPlayerId || this.draggingPlayerId === targetId) {
            return;
        }
        this.reorderPlayersById(this.draggingPlayerId, targetId);
    }

    handleRowDragEnd(event) {
        event.currentTarget.classList.remove('dragging');
        this.draggingPlayerId = null;
    }

    reorderPlayersById(sourceId, targetId) {
        const fromIndex = this.players.findIndex(player => player.id === sourceId);
        const toIndex = this.players.findIndex(player => player.id === targetId);
        if (fromIndex === -1 || toIndex === -1 || fromIndex === toIndex) return;
        const [moved] = this.players.splice(fromIndex, 1);
        this.players.splice(toIndex, 0, moved);
        this.renderPlayers();
        this.renderRoundInputs();
        this.renderRoundHistory();
        this.saveGameState();
    }

    handleConfirmScore(playerId) {
        const entry = this.ensureDraftEntry(playerId);
        if (this.scoringMode === 'simple') {
            const input = document.getElementById(`score-${playerId}`);
            const value = parseFloat(input?.value ?? '');
            if (Number.isNaN(value) || value < 0) {
                alert(this.t('invalidScore'));
                return;
            }
            entry.pendingScore = Math.max(0, value);
        }
        if (entry.pendingScore === null) {
            alert(this.t(this.scoringMode === 'advanced' ? 'needsPreview' : 'invalidScore'));
            return;
        }
        entry.score = entry.pendingScore;
        entry.frozen = true;
        this.renderRoundInputs();
        this.updateSubmitState();
    }

    handleUnfreeze(playerId) {
        const entry = this.ensureDraftEntry(playerId);
        entry.frozen = false;
        entry.score = null;
        this.renderRoundInputs();
        this.updateSubmitState();
    }

    handlePreview(playerId) {
        const textarea = document.getElementById(`expression-${playerId}`);
        if (!textarea) return;
        const expression = textarea.value.trim();
        if (!expression) {
            alert(this.t('invalidExpression'));
            return;
        }
        try {
            const result = this.calculateAdvancedScore(expression);
            this.pendingPreview = { playerId, expression, total: result.total };
            document.getElementById('previewFormula').textContent = result.formula;
            document.getElementById('previewTotal').textContent = `${this.t('confirmScore')}: ${result.total}`;
            this.openModal('scorePreviewModal');
        } catch (error) {
            alert(error.message || this.t('invalidExpression'));
        }
    }

    calculateAdvancedScore(expression) {
        const tokens = expression.split(/\s+/).filter(Boolean);
        if (!tokens.length) {
            throw new Error(this.t('invalidExpression'));
        }
        let sum = 0;
        let multiplier = 1;
        let multiplierSet = false;
        const values = [];
        tokens.forEach((token) => {
            if (/^x/i.test(token)) {
                if (multiplierSet) {
                    throw new Error(this.t('invalidExpression'));
                }
                multiplierSet = true;
                const value = parseFloat(token.slice(1));
                multiplier = Number.isNaN(value) ? 1 : value;
                return;
            }
            if (token.startsWith('+')) {
                const add = parseFloat(token.slice(1));
                if (Number.isNaN(add)) {
                    throw new Error(this.t('invalidExpression'));
                }
                sum += add;
                values.push(add);
                return;
            }
            const base = parseFloat(token);
            if (Number.isNaN(base)) {
                throw new Error(this.t('invalidExpression'));
            }
            sum += base;
            values.push(base);
        });
        const total = sum * multiplier;
        const formula = multiplierSet
            ? `(${values.join(' + ')}) x${multiplier} = ${total}`
            : `${values.join(' + ')} = ${total}`;
        return { total, formula };
    }

    confirmPreviewScore() {
        if (!this.pendingPreview) return;
        const { playerId, expression, total } = this.pendingPreview;
        const entry = this.ensureDraftEntry(playerId);
        entry.pendingScore = total;
        entry.expression = expression;
        entry.frozen = false;
        entry.score = null;
        this.pendingPreview = null;
        this.closeModal('scorePreviewModal');
        this.renderRoundInputs();
        this.updateSubmitState();
    }

    updateSubmitState() {
        const submitBtn = document.getElementById('submitRoundBtn');
        if (!this.players.length) {
            submitBtn.disabled = true;
            return;
        }
        const ready = this.players.every(player => {
            const entry = this.roundDraft[player.id];
            return entry && entry.frozen && entry.score !== null;
        });
        submitBtn.disabled = !ready;
    }

    submitRound() {
        if (!this.players.length) {
            alert(this.t('pleaseAddPlayer'));
            return;
        }
        const incomplete = this.players.some(player => {
            const entry = this.roundDraft[player.id];
            return !entry || !entry.frozen || entry.score === null;
        });
        if (incomplete) {
            alert(this.t('freezeInstruction'));
            return;
        }
        const roundScores = {};
        this.players.forEach(player => {
            const entry = this.roundDraft[player.id];
            roundScores[player.id] = entry.score;
            player.totalPoints += entry.score;
        });
        this.roundHistory.push({
            round: this.currentRound,
            scores: roundScores
        });
        this.currentRound += 1;
        this.resetRoundDraft();
        this.renderRoundInputs();
        this.renderScoreBoard();
        this.renderRoundHistory();
        this.updateRoundNumber();
        this.evaluateWinner(roundScores);
        this.saveGameState();
    }

    evaluateWinner(roundScores) {
        if (this.gameWinner) return;
        const scoresBefore = {};
        this.players.forEach(player => {
            scoresBefore[player.id] = player.totalPoints - (roundScores[player.id] || 0);
        });
        const newWinners = this.players.filter(player => scoresBefore[player.id] < 200 && player.totalPoints >= 200);
        if (!newWinners.length) return;
        const winner = newWinners.reduce((prev, current) => {
            const prevRoundScore = roundScores[prev.id] || 0;
            const currentRoundScore = roundScores[current.id] || 0;
            return currentRoundScore > prevRoundScore ? current : prev;
        });
        this.gameWinner = winner.id;
        this.saveGameState();
        this.showWinnerBanner(winner.name, winner.totalPoints);
        this.triggerConfetti();
    }

    triggerConfetti() {
        const container = document.getElementById('confettiContainer');
        if (!container) return;
        container.classList.remove('hidden');
        for (let i = 0; i < 40; i += 1) {
            const piece = document.createElement('div');
            piece.className = 'confetti-piece';
            piece.style.left = `${Math.random() * 100}%`;
            piece.style.backgroundColor = CONFETTI_COLOURS[i % CONFETTI_COLOURS.length];
            piece.style.animationDelay = `${Math.random()}s`;
            container.appendChild(piece);
            setTimeout(() => piece.remove(), 3000);
        }
        setTimeout(() => {
            container.classList.add('hidden');
            container.innerHTML = '';
        }, 3500);
    }

    getLatestRoundScore(playerId) {
        for (let i = this.roundHistory.length - 1; i >= 0; i -= 1) {
            const score = this.roundHistory[i].scores[playerId];
            if (typeof score === 'number') {
                return score;
            }
        }
        return null;
    }

    getSpecialIcons(score) {
        if (score === null || score === undefined) return '';
        return this.scoreRules
            .filter(rule => Number(rule.score) === Number(score))
            .map(rule => rule.icon)
            .join(' ');
    }

    formatScoreWithIcons(score) {
        const icons = this.getSpecialIcons(score);
        return icons ? `${score} ${icons}` : `${score}`;
    }

    renderScoreBoard() {
        const container = document.getElementById('scoreBoard');
        if (!this.players.length) {
            container.innerHTML = `<div class=\"empty-state\"><p>${this.t('addPlayersToSee')}</p></div>`;
            return;
        }
        const sorted = [...this.players].sort((a, b) => b.totalPoints - a.totalPoints);
        const winner = this.gameWinner ? this.players.find(player => player.id === this.gameWinner) : null;
        container.innerHTML = sorted.map(player => {
            const isWinner = winner && player.id === winner.id;
            const progress = Math.min((player.totalPoints / 200) * 100, 100);
            const lastScoreIcon = this.getSpecialIcons(this.getLatestRoundScore(player.id));
            const iconMarkup = lastScoreIcon ? `<span class=\"special-icon\">${lastScoreIcon}</span>` : '';
            return `
                <div class=\"player-score-card ${isWinner ? 'winner' : ''}\">
                    <div class=\"player-header\">
                        <div class=\"player-name\">${this.escapeHtml(player.name)}${iconMarkup}</div>
                        <div class=\"player-total\">${player.totalPoints} / 200</div>
                    </div>
                    <div class=\"progress-bar-container\">
                        <div class=\"progress-bar ${isWinner ? 'winner' : ''}\" style=\"width: ${progress}%\">${progress >= 15 ? `${Math.round(progress)}%` : ''}</div>
                        ${progress < 15 ? `<div class=\"progress-text\">${Math.round(progress)}%</div>` : ''}
                    </div>
                </div>
            `;
        }).join('');
    }

    renderRoundHistory() {
        const container = document.getElementById('roundHistory');
        if (!this.roundHistory.length) {
            container.innerHTML = `<div class=\"empty-state\"><p>${this.t('noRoundsYet')}</p></div>`;
            return;
        }
        const cumulative = {};
        this.players.forEach(player => { cumulative[player.id] = 0; });
        const rows = this.roundHistory.map((entry, index) => {
            this.players.forEach(player => {
                cumulative[player.id] += entry.scores[player.id] || 0;
            });
            const sortedTotals = [...this.players]
                .map(player => ({ name: player.name, total: cumulative[player.id] }))
                .sort((a, b) => b.total - a.total);
            return `
                <tr class=\"history-row\" data-round-index=\"${index}\">
                    <td class=\"round-number\">${entry.round}</td>
                    ${this.players.map(player => `<td>${this.formatScoreWithIcons(entry.scores[player.id] || 0)}</td>`).join('')}
                    <td class=\"top-cell top1\">${sortedTotals[0] ? this.escapeHtml(sortedTotals[0].name) : '-'}</td>
                    <td class=\"top-cell top2\">${sortedTotals[1] ? this.escapeHtml(sortedTotals[1].name) : '-'}</td>
                    <td class=\"top-cell top3\">${sortedTotals[2] ? this.escapeHtml(sortedTotals[2].name) : '-'}</td>
                </tr>
            `;
        }).join('');
        const totalsRow = `
            <tr style=\"font-weight:700;background:var(--bg-color);\">
                <td>${this.t('total')}</td>
                ${this.players.map(player => `<td class=\"total-score\">${player.totalPoints}</td>`).join('')}
                <td colspan=\"3\">-</td>
            </tr>
        `;
        container.innerHTML = `
            <table class=\"history-table\">
                <thead>
                    <tr>
                        <th>${this.t('round')}</th>
                        ${this.players.map(player => `<th>${this.escapeHtml(player.name)}</th>`).join('')}
                        <th>Top 1</th>
                        <th>Top 2</th>
                        <th>Top 3</th>
                    </tr>
                </thead>
                <tbody>
                    ${rows}
                    ${totalsRow}
                </tbody>
            </table>
        `;
    }

    openEditRoundModal(index) {
        if (index < 0 || index >= this.roundHistory.length) return;
        this.editingRoundIndex = index;
        const entry = this.roundHistory[index];
        const form = document.getElementById('editRoundForm');
        form.innerHTML = this.players.map(player => {
            const score = entry.scores[player.id] ?? 0;
            return `
                <div class=\"score-input-row\">
                    <label>${this.escapeHtml(player.name)}</label>
                    <input type=\"number\" min=\"0\" step=\"1\" value=\"${score}\" data-player-id=\"${player.id}\">
                </div>
            `;
        }).join('');
        this.openModal('editRoundModal');
    }

    saveRoundEdit() {
        if (this.editingRoundIndex === null) return;
        const entry = this.roundHistory[this.editingRoundIndex];
        const inputs = document.querySelectorAll('#editRoundForm input');
        inputs.forEach(input => {
            const playerId = input.dataset.playerId;
            const value = parseFloat(input.value);
            entry.scores[playerId] = Number.isNaN(value) ? 0 : Math.max(0, value);
        });
        this.recomputeTotalsFromHistory();
        this.recalculateWinnerFromHistory();
        this.renderScoreBoard();
        this.renderRoundHistory();
        this.renderRoundInputs();
        this.saveGameState();
        this.editingRoundIndex = null;
        this.closeModal('editRoundModal');
    }

    recomputeTotalsFromHistory() {
        this.players.forEach(player => { player.totalPoints = 0; });
        this.roundHistory.forEach(entry => {
            this.players.forEach(player => {
                player.totalPoints += entry.scores[player.id] || 0;
            });
        });
    }

    recalculateWinnerFromHistory() {
        this.gameWinner = null;
        const cumulative = {};
        this.players.forEach(player => { cumulative[player.id] = 0; });
        for (const entry of this.roundHistory) {
            const newWinners = [];
            this.players.forEach(player => {
                const before = cumulative[player.id];
                cumulative[player.id] += entry.scores[player.id] || 0;
                if (before < 200 && cumulative[player.id] >= 200) {
                    newWinners.push({ player, roundScore: entry.scores[player.id] || 0 });
                }
            });
            if (newWinners.length) {
                newWinners.sort((a, b) => b.roundScore - a.roundScore);
                this.gameWinner = newWinners[0].player.id;
                break;
            }
        }
    }

    openRulesModal() {
        this.renderRulesList();
        this.openModal('rulesModal');
    }

    renderRulesList() {
        const list = document.getElementById('rulesList');
        if (!this.scoreRules.length) {
            this.scoreRules = [...DEFAULT_RULES];
        }
        list.innerHTML = this.scoreRules.map(rule => `
            <div class=\"rule-item\" data-rule-id=\"${rule.id}\">
                <input type=\"number\" min=\"1\" class=\"rule-score\" value=\"${rule.score}\" placeholder=\"${this.t('ruleScorePlaceholder')}\">
                <input type=\"text\" class=\"rule-icon\" value=\"${rule.icon}\" placeholder=\"${this.t('ruleIconPlaceholder')}\" maxlength=\"4\">
                <input type=\"text\" class=\"rule-label\" value=\"${rule.label || ''}\" placeholder=\"${this.t('ruleLabelPlaceholder')}\">
                <button class=\"btn btn-danger btn-small remove-rule-btn\" data-rule-id=\"${rule.id}\">×</button>
            </div>
        `).join('');
    }

    addRuleRow() {
        this.scoreRules.push({ id: `rule-${Date.now()}`, score: 0, icon: '⭐', label: '' });
        this.renderRulesList();
    }

    saveRules() {
        const rows = document.querySelectorAll('#rulesList .rule-item');
        const updated = [];
        rows.forEach(row => {
            const id = row.dataset.ruleId;
            const scoreInput = row.querySelector('.rule-score');
            const iconInput = row.querySelector('.rule-icon');
            const labelInput = row.querySelector('.rule-label');
            const score = parseFloat(scoreInput.value);
            if (!Number.isNaN(score)) {
                updated.push({
                    id,
                    score: Math.max(0, score),
                    icon: iconInput.value.trim() || '⭐',
                    label: labelInput.value.trim()
                });
            }
        });
        this.scoreRules = updated.length ? updated : [...DEFAULT_RULES];
        this.closeModal('rulesModal');
        this.renderRoundInputs();
        this.renderScoreBoard();
        this.renderRoundHistory();
        this.saveGameState();
    }

    openModal(id) {
        const modal = document.getElementById(id);
        if (modal) {
            modal.classList.remove('hidden');
        }
    }

    closeModal(id) {
        const modal = document.getElementById(id);
        if (modal) {
            modal.classList.add('hidden');
        }
        if (id === 'scorePreviewModal') {
            this.pendingPreview = null;
        }
    }

    showWinnerBanner(playerName, totalPoints) {
        const banner = document.getElementById('winnerBanner');
        const winnerText = document.getElementById('winnerText');
        winnerText.textContent = `${playerName} ${this.t('winsWith')} ${totalPoints} ${this.t('points')}`;
        banner.classList.remove('hidden');
    }

    closeWinnerBanner() {
        document.getElementById('winnerBanner').classList.add('hidden');
        const confetti = document.getElementById('confettiContainer');
        confetti.classList.add('hidden');
        confetti.innerHTML = '';
    }

    updateRoundNumber() {
        const el = document.getElementById('currentRoundNumber');
        if (el) {
            el.textContent = this.currentRound;
        }
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

    saveGameState() {
        const state = {
            players: this.players,
            currentRound: this.currentRound,
            roundHistory: this.roundHistory,
            gameWinner: this.gameWinner,
            scoringMode: this.scoringMode,
            scoreRules: this.scoreRules
        };
        localStorage.setItem('flip7GameState', JSON.stringify(state));
    }

    loadGameState() {
        try {
            const saved = localStorage.getItem('flip7GameState');
            return saved ? JSON.parse(saved) : null;
        } catch (error) {
            console.error('Error loading game state:', error);
            return null;
        }
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

    updateLanguage() {
        const t = translations[this.currentLang];
        document.documentElement.lang = this.currentLang;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t[key]) {
                el.textContent = t[key];
            }
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (t[key]) {
                el.placeholder = t[key];
            }
        });
        const langSpan = document.getElementById('currentLang');
        if (langSpan) {
            langSpan.textContent = this.currentLang.toUpperCase();
        }
    }

    t(key) {
        return translations[this.currentLang][key] || key;
    }

    escapeHtml(value) {
        const div = document.createElement('div');
        div.textContent = value;
        return div.innerHTML;
    }
}

let tracker;
document.addEventListener('DOMContentLoaded', () => {
    tracker = new Flip7Tracker();
});
