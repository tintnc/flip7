const APP_VERSION = 'v0.3.0';
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

// Flip 7 deck + scoring configuration (for advanced input mode)
const FLIP7_CARD_DEFINITIONS = {
    numberCards: [
        { id: 'num-0', label: '0', value: 0, count: 1 },
        { id: 'num-1', label: '1', value: 1, count: 1 },
        { id: 'num-2', label: '2', value: 2, count: 2 },
        { id: 'num-3', label: '3', value: 3, count: 3 },
        { id: 'num-4', label: '4', value: 4, count: 4 },
        { id: 'num-5', label: '5', value: 5, count: 5 },
        { id: 'num-6', label: '6', value: 6, count: 6 },
        { id: 'num-7', label: '7', value: 7, count: 7 },
        { id: 'num-8', label: '8', value: 8, count: 8 },
        { id: 'num-9', label: '9', value: 9, count: 9 },
        { id: 'num-10', label: '10', value: 10, count: 10 },
        { id: 'num-11', label: '11', value: 11, count: 11 },
        { id: 'num-12', label: '12', value: 12, count: 12 }
    ],
    actionCards: [
        { id: 'freeze', label: 'Freeze', count: 3 },
        { id: 'second-chance', label: 'Second Chance', count: 3 },
        { id: 'flip-three', label: 'Flip Three', count: 3 }
    ],
    modifierCards: [
        { id: 'x2', label: 'x2', count: 1 },
        { id: 'plus-2', label: '+2', value: 2, count: 1 },
        { id: 'plus-4', label: '+4', value: 4, count: 1 },
        { id: 'plus-6', label: '+6', value: 6, count: 1 },
        { id: 'plus-8', label: '+8', value: 8, count: 1 },
        { id: 'plus-10', label: '+10', value: 10, count: 1 }
    ]
};

function buildInitialDeckState() {
    const deck = {};
    FLIP7_CARD_DEFINITIONS.numberCards.forEach(card => {
        deck[card.id] = card.count;
    });
    FLIP7_CARD_DEFINITIONS.actionCards.forEach(card => {
        deck[card.id] = card.count;
    });
    FLIP7_CARD_DEFINITIONS.modifierCards.forEach(card => {
        deck[card.id] = card.count;
    });
    return deck;
}

function buildEmptyCardCounts() {
    const counts = {};
    FLIP7_CARD_DEFINITIONS.numberCards.forEach(card => {
        counts[card.id] = 0;
    });
    FLIP7_CARD_DEFINITIONS.actionCards.forEach(card => {
        counts[card.id] = 0;
    });
    FLIP7_CARD_DEFINITIONS.modifierCards.forEach(card => {
        counts[card.id] = 0;
    });
    return counts;
}

const OFFICIAL_RULES = [
    {
        title: 'Objective',
        paragraphs: [
            'Be the first player to accumulate 200 points by banking unique Number cards without busting.',
            'If you successfully Flip 7 unique Number cards in a single round, the round ends immediately for everyone and you gain a 15-point bonus.'
        ]
    },
    {
        title: 'Setup & Dealing',
        paragraphs: [
            'Have pen and paper handy (or use the QR-linked score tools) to track the dash to 200 points. Thoroughly shuffle the deck and choose a dealer for the round.'
        ],
        list: [
            'Dealer deals one face-up card to each player, pausing immediately if an Action card appears so it can resolve before dealing continues.',
            'Players may start the round with different numbers or types of cards depending on received Action cards.',
            'When the deck is exhausted, reshuffle the discards but leave any cards still in front of players exactly where they are.'
        ]
    },
    {
        title: 'Action Cards',
        paragraphs: [
            'Action cards can target any active player, including yourself; if you are the only active player, you must target yourself. Keep Action cards above your Number cards.',
            'Second Chance stays in front of a player until it cancels the next duplicate Number card they would bust on. Only one Second Chance may sit in front of a player at a time, and all copies are discarded at the end of the round (even if unused).'
        ]
    },
    {
        title: 'Modifier Cards',
        paragraphs: [
            'Modifiers are not Number cards and do not count toward flipping seven uniques. You cannot load additional cards onto a modifier.',
            'A +2 to +10 card simply adds that amount to the final tally of your Number cards.'
        ],
        list: [
            'Use the x2 card to double the sum of your Number cards before adding any other modifiers.',
            'You may end your turn with only modifier cards and still score their value unless a x2 is waiting on zero.'
        ]
    },
    {
        title: 'End of a Round',
        list: [
            'All players have either busted or chosen to stay (flip cards facedown to indicate you are inactive).',
            'A player flips seven unique Number cards, ending the round instantly.'
        ]
    },
    {
        title: 'Scoring Order',
        list: [
            'Add together the values of all Number cards you kept.',
            'Apply the x2 multiplier if present.',
            'Add any modifier bonuses (+2 to +10, etc.).',
            'Add the 15-point Flip 7 bonus if you achieved it this round.'
        ]
    },
    {
        title: 'Next Round & Victory',
        paragraphs: [
            'After scoring, move all cards from in front of players to a face-up discard pile, pass the remaining deck to the left, and the next player becomes the dealer.',
            'At the end of the round in which one or more players reach 200, the highest total wins the game.'
        ]
    }
];

class Flip7Tracker {
    constructor() {
        this.currentTheme = this.loadTheme();
        this.currentLang = this.loadLanguage();
        const saved = this.loadGameState();
        this.players = saved?.players || [];
        this.currentRound = saved?.currentRound || 1;
        this.roundHistory = saved?.roundHistory || [];
        this.gameWinner = saved?.gameWinner || null;
        this.scoringMode = saved?.scoringMode || 'simple';
        this.scoreRules = Array.isArray(saved?.scoreRules) && saved.scoreRules.length ? saved.scoreRules : [...DEFAULT_RULES];
        // Deck state (for advanced mode card/probability tracking)
        this.deckState = saved?.deckState || buildInitialDeckState();
        this.deckSummaryVisible = saved?.deckSummaryVisible !== undefined ? saved.deckSummaryVisible : false;
        this.playerExpandedStates = saved?.playerExpandedStates || {};
        // Initialize expanded states: first player expanded, others collapsed
        this.players.forEach((player, index) => {
            if (this.playerExpandedStates[player.id] === undefined) {
                this.playerExpandedStates[player.id] = index === 0;
            }
        });
        this.roundDraft = {};
        this.draggingPlayerId = null;
        this.handleRowDragStart = this.handleRowDragStart.bind(this);
        this.handleRowDragOver = this.handleRowDragOver.bind(this);
        this.handleRowDrop = this.handleRowDrop.bind(this);
        this.handleRowDragEnd = this.handleRowDragEnd.bind(this);
        this.pendingPreview = null;
        this.editingRoundIndex = null;
        this.fireworkTimer = null;
        this.init();
    }

    init() {
        this.applyTheme();
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
        const themeToggle = document.getElementById('themeToggleBtn');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }
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
            if (event.target.classList.contains('bubble-remove-btn') || event.target.closest('.bubble-remove-btn')) {
                const btn = event.target.closest('.bubble-remove-btn');
                const cardId = btn.dataset.cardId;
                this.handleRemoveCard(playerId, cardId);
                return;
            }
            if (event.target.classList.contains('card-btn') || event.target.closest('.card-btn')) {
                const btn = event.target.closest('.card-btn');
                const cardId = btn.dataset.cardId;
                this.handleCardClick(playerId, cardId);
                return;
            }
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
        document.addEventListener('click', (event) => {
            if (event.target.id === 'toggleDeckSummary' || event.target.closest('#toggleDeckSummary')) {
                this.toggleDeckSummary();
            }
            if (event.target.classList.contains('expand-toggle-btn') || event.target.closest('.expand-toggle-btn')) {
                const btn = event.target.closest('.expand-toggle-btn');
                const playerId = btn.dataset.playerId;
                this.togglePlayerExpanded(playerId);
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
                frozen: false,
                cardCounts: buildEmptyCardCounts()
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
                frozen: false,
                cardCounts: buildEmptyCardCounts()
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
        const newPlayerId = Date.now().toString();
        this.players.push({ id: newPlayerId, name, totalPoints: 0 });
        // Initialize expanded state for new player (collapsed if not first player)
        this.playerExpandedStates[newPlayerId] = this.players.length === 1;
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
        // Reset deck state when restarting the game
        this.deckState = buildInitialDeckState();
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
            if (document.getElementById('deckSummary')) {
                document.getElementById('deckSummary').innerHTML = '';
            }
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
                : `cards-${player.id}`;
            const inputArea = this.scoringMode === 'simple'
                ? `<input type="number" class="simple-score" id="${inputId}" min="0" step="1" placeholder="0" inputmode="numeric" pattern="[0-9]*" value="${entry.frozen && entry.score !== null ? entry.score : (entry.pendingScore ?? '')}" ${entry.frozen ? 'disabled' : ''}>`
                : this.renderAdvancedCardControls(player.id, entry, inputId);

            const previewButton = '';

            const confirmButton = entry.frozen
                ? `<button class="btn btn-light btn-small unfreeze-btn" data-player-id="${player.id}">${this.t('unfreeze')}</button>`
                : `<button class="btn btn-primary btn-small confirm-btn" data-player-id="${player.id}" ${this.scoringMode === 'advanced' && entry.pendingScore === null ? 'disabled' : ''}>${this.t('confirmButton')}</button>`;

            const modeClass = this.scoringMode === 'simple' ? 'score-input-row-simple' : 'score-input-row-advanced';
            const isExpanded = this.scoringMode === 'advanced' 
                ? (this.playerExpandedStates[player.id] === true) 
                : true;
            const expandToggle = this.scoringMode === 'advanced'
                ? `<button class="expand-toggle-btn" data-player-id="${player.id}" aria-label="${isExpanded ? 'Collapse' : 'Expand'}" title="${isExpanded ? 'Collapse' : 'Expand'}">
                    <span class="expand-icon">${isExpanded ? '▼' : '▶'}</span>
                   </button>`
                : '';
            return `
                <div class="score-input-row ${modeClass} ${this.scoringMode === 'advanced' && !isExpanded ? 'collapsed' : ''}" data-player-id="${player.id}">
                    <div class="row-header">
                        <span class="drag-handle" role="button" aria-label="${this.t('dragHandleLabel')}" title="${this.t('dragHandleLabel')}">⋮⋮</span>
                        <label for="${inputId}">${this.escapeHtml(player.name)}${labelIcon}</label>
                        ${expandToggle}
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
        this.renderDeckSummary();
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
            const inputValue = input?.value?.trim() ?? '';
            // If input is empty, default to 0 (matching placeholder)
            const value = inputValue === '' ? 0 : parseFloat(inputValue);
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
        if (this.scoringMode === 'advanced') {
            entry.pendingScore = null;
            entry.formula = '';
            entry.cardCounts = buildEmptyCardCounts();
        }
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
        // Update deck based on all cards used this round (advanced mode)
        this.updateDeckAfterRound();
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
        if (this.fireworkTimer) {
            return;
        }
        // Spawn multiple fireworks initially for immediate effect
        for (let i = 0; i < 3; i += 1) {
            setTimeout(() => {
                this.spawnFirework(container);
            }, i * 200);
        }
        // Continue spawning fireworks continuously
        this.fireworkTimer = setInterval(() => {
            this.spawnFirework(container);
        }, 500);
    }

    spawnFirework(container) {
        const firework = document.createElement('div');
        firework.className = 'firework';
        // Spawn fireworks across the entire screen for better coverage
        firework.style.left = `${5 + Math.random() * 90}%`;
        firework.style.top = `${10 + Math.random() * 80}%`;

        const particleCount = 12;
        for (let i = 0; i < particleCount; i += 1) {
            const particle = document.createElement('span');
            const angle = (Math.PI * 2 * i) / particleCount;
            const distance = 90 + Math.random() * 70;
            particle.style.setProperty('--tx', `${Math.cos(angle) * distance}px`);
            particle.style.setProperty('--ty', `${Math.sin(angle) * distance}px`);
            particle.style.backgroundColor = CONFETTI_COLOURS[i % CONFETTI_COLOURS.length];
            particle.style.animationDelay = `${Math.random() * 0.3}s`;
            firework.appendChild(particle);
        }

        container.appendChild(firework);
        setTimeout(() => {
            if (firework.parentNode) {
                firework.remove();
            }
        }, 2000);
    }

    stopConfetti() {
        const container = document.getElementById('confettiContainer');
        if (this.fireworkTimer) {
            clearInterval(this.fireworkTimer);
            this.fireworkTimer = null;
        }
        if (container) {
            container.classList.add('hidden');
            container.innerHTML = '';
        }
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
        this.renderOfficialRules();
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

    renderOfficialRules() {
        const container = document.getElementById('officialRules');
        if (!container) return;
        container.innerHTML = OFFICIAL_RULES.map(section => {
            const paragraphs = (section.paragraphs || [])
                .map(text => `<p>${text}</p>`)
                .join('');
            const list = section.list
                ? `<ul>${section.list.map(item => `<li>${item}</li>`).join('')}</ul>`
                : '';
            return `<section><h4>${section.title}</h4>${paragraphs}${list}</section>`;
        }).join('');
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
        winnerText.innerHTML = `<strong>${this.escapeHtml(playerName)}</strong> ${this.t('winsWith')} ${totalPoints} ${this.t('points')}`;
        banner.classList.remove('hidden');
    }

    closeWinnerBanner() {
        document.getElementById('winnerBanner').classList.add('hidden');
        this.stopConfetti();
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
            scoreRules: this.scoreRules,
            deckState: this.deckState,
            deckSummaryVisible: this.deckSummaryVisible,
            playerExpandedStates: this.playerExpandedStates
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

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.applyTheme();
        this.saveTheme();
    }

    applyTheme() {
        const root = document.documentElement;
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        const theme = this.currentTheme || (prefersDark ? 'dark' : 'light');
        root.setAttribute('data-theme', theme);
    }

    saveTheme() {
        try {
            localStorage.setItem('flip7Theme', this.currentTheme);
        } catch (_err) {
            // ignore storage errors
        }
    }

    loadTheme() {
        try {
            return localStorage.getItem('flip7Theme') || null;
        } catch (_err) {
            return null;
        }
    }

    escapeHtml(value) {
        const div = document.createElement('div');
        div.textContent = value;
        return div.innerHTML;
    }
}

// Advanced mode helpers: card rendering, scoring, deck + probability tracking
Flip7Tracker.prototype.renderAdvancedCardControls = function renderAdvancedCardControls(playerId, entry, inputId) {
    const cardCounts = entry.cardCounts || buildEmptyCardCounts();
    const isExpanded = this.playerExpandedStates[playerId] === true;
    
    const numberButtons = FLIP7_CARD_DEFINITIONS.numberCards.map(card => {
        const count = cardCounts[card.id] || 0;
        const selectedClass = count > 0 ? ' card-btn-selected' : '';
        return `
            <button 
                type="button" 
                class="card-btn${selectedClass}" 
                data-player-id="${playerId}" 
                data-card-id="${card.id}"
                id="${inputId}-${card.id}"
            >
                <span class="card-label">${card.label}</span>
                <span class="card-count">x${count}</span>
            </button>
        `;
    }).join('');

    const modifierButtons = FLIP7_CARD_DEFINITIONS.modifierCards.map(card => {
        const count = cardCounts[card.id] || 0;
        const selectedClass = count > 0 ? ' card-btn-selected' : '';
        return `
            <button 
                type="button" 
                class="card-btn card-btn-modifier${selectedClass}" 
                data-player-id="${playerId}" 
                data-card-id="${card.id}"
            >
                <span class="card-label">${card.label}</span>
                <span class="card-count">x${count}</span>
            </button>
        `;
    }).join('');

    const actionButtons = FLIP7_CARD_DEFINITIONS.actionCards.map(card => {
        const count = cardCounts[card.id] || 0;
        const selectedClass = count > 0 ? ' card-btn-selected' : '';
        return `
            <button 
                type="button" 
                class="card-btn card-btn-action${selectedClass}" 
                data-player-id="${playerId}" 
                data-card-id="${card.id}"
            >
                <span class="card-label">${card.label}</span>
                <span class="card-count">x${count}</span>
            </button>
        `;
    }).join('');

    const selectedCardsBubbles = this.renderSelectedCardsBubbles(playerId, cardCounts);
    const formulaLine = entry.formula
        ? `<div class="advanced-formula">${entry.formula}</div>`
        : '';

    return `
        <div class="advanced-input" id="${inputId}">
            <div class="card-selection-container ${isExpanded ? 'expanded' : 'collapsed'}">
                <div class="card-group">
                    <div class="card-group-title">0 – 12</div>
                    <div class="card-grid">
                        ${numberButtons}
                    </div>
                </div>
                <div class="card-group">
                    <div class="card-group-title">x2 &amp; +</div>
                    <div class="card-grid">
                        ${modifierButtons}
                    </div>
                </div>
                <div class="card-group">
                    <div class="card-group-title">Actions</div>
                    <div class="card-grid card-grid-actions">
                        ${actionButtons}
                    </div>
                </div>
            </div>
            ${selectedCardsBubbles}
            ${formulaLine}
        </div>
    `;
};

Flip7Tracker.prototype.handleCardClick = function handleCardClick(playerId, cardId) {
    const entry = this.ensureDraftEntry(playerId);
    if (!entry.cardCounts) {
        entry.cardCounts = buildEmptyCardCounts();
    }
    const counts = entry.cardCounts;
    counts[cardId] = (counts[cardId] || 0) + 1;

    // Auto-expand if collapsed
    if (this.playerExpandedStates[playerId] === false) {
        this.playerExpandedStates[playerId] = true;
    }

    const result = this.calculateCardScoreFromCounts(counts);
    entry.pendingScore = result.total;
    entry.formula = result.formula;
    entry.expression = '';
    entry.score = null;
    entry.frozen = false;

    this.renderRoundInputs();
    this.updateSubmitState();
};

Flip7Tracker.prototype.handleRemoveCard = function handleRemoveCard(playerId, cardId) {
    const entry = this.ensureDraftEntry(playerId);
    if (!entry.cardCounts) {
        entry.cardCounts = buildEmptyCardCounts();
    }
    const counts = entry.cardCounts;
    if (counts[cardId] && counts[cardId] > 0) {
        counts[cardId] = counts[cardId] - 1;
    }

    const result = this.calculateCardScoreFromCounts(counts);
    entry.pendingScore = result.total;
    entry.formula = result.formula;
    entry.expression = '';
    entry.score = null;
    entry.frozen = false;

    this.renderRoundInputs();
    this.updateSubmitState();
};

Flip7Tracker.prototype.renderSelectedCardsBubbles = function renderSelectedCardsBubbles(playerId, cardCounts) {
    const selectedCards = [];
    
    // Collect all selected cards with their counts
    FLIP7_CARD_DEFINITIONS.numberCards.forEach(card => {
        const count = cardCounts[card.id] || 0;
        if (count > 0) {
            selectedCards.push({ ...card, count, type: 'number' });
        }
    });
    
    FLIP7_CARD_DEFINITIONS.modifierCards.forEach(card => {
        const count = cardCounts[card.id] || 0;
        if (count > 0) {
            selectedCards.push({ ...card, count, type: 'modifier' });
        }
    });
    
    FLIP7_CARD_DEFINITIONS.actionCards.forEach(card => {
        const count = cardCounts[card.id] || 0;
        if (count > 0) {
            selectedCards.push({ ...card, count, type: 'action' });
        }
    });

    if (selectedCards.length === 0) {
        return '';
    }

    const bubbles = selectedCards.map(card => {
        return `
            <div class="selected-card-bubble" data-player-id="${playerId}" data-card-id="${card.id}">
                <span class="bubble-label">${this.escapeHtml(card.label)}</span>
                <span class="bubble-count">x${card.count}</span>
                <button class="bubble-remove-btn" data-player-id="${playerId}" data-card-id="${card.id}" aria-label="Remove ${this.escapeHtml(card.label)}">×</button>
            </div>
        `;
    }).join('');

    return `
        <div class="selected-cards-container">
            <div class="selected-cards-bubbles">
                ${bubbles}
            </div>
        </div>
    `;
};

Flip7Tracker.prototype.calculateCardScoreFromCounts = function calculateCardScoreFromCounts(cardCounts) {
    const numberValues = [];
    let hasDuplicate = false;

    FLIP7_CARD_DEFINITIONS.numberCards.forEach(card => {
        const count = cardCounts[card.id] || 0;
        if (count > 1) {
            hasDuplicate = true;
        }
        for (let i = 0; i < count; i += 1) {
            numberValues.push(card.value);
        }
    });

    if (hasDuplicate && numberValues.length > 0) {
        return {
            total: 0,
            formula: 'Duplicate number cards → 0 points'
        };
    }

    const baseSum = numberValues.reduce((acc, v) => acc + v, 0);
    let total = baseSum;
    const parts = [];

    if (numberValues.length) {
        parts.push(numberValues.join(' + '));
    }

    // x2 multiplier (only one exists in the deck, but support >1 clicks gracefully)
    const x2Count = cardCounts['x2'] || 0;
    if (x2Count > 0 && baseSum > 0) {
        total *= 2;
        if (parts.length) {
            parts[0] = `(${parts[0]}) ×2`;
        } else {
            parts.push('0 ×2');
        }
    }

    // Modifier bonuses (+2, +4, +6, +8, +10)
    const modifierLabels = [];
    FLIP7_CARD_DEFINITIONS.modifierCards.forEach(card => {
        if (card.id === 'x2') return;
        const count = cardCounts[card.id] || 0;
        if (count > 0) {
            const bonus = (card.value || 0) * count;
            total += bonus;
            for (let i = 0; i < count; i += 1) {
                modifierLabels.push(card.label);
            }
        }
    });
    if (modifierLabels.length) {
        parts.push(modifierLabels.join(' + '));
    }

    // Flip 7 bonus: exactly 7 unique number cards (no duplicates already ensured)
    let flip7Bonus = 0;
    if (numberValues.length === 7) {
        flip7Bonus = 15;
        parts.push('+15 Flip 7');
        total += 15;
    }

    const formula = parts.length ? `${parts.join(' + ')} = ${total}` : `${total}`;

    return {
        total,
        formula,
        baseSum,
        hasDuplicate,
        flip7Bonus
    };
};

Flip7Tracker.prototype.getCardsUsedThisRound = function getCardsUsedThisRound() {
    const used = {};
    Object.values(this.roundDraft || {}).forEach(entry => {
        if (!entry || !entry.cardCounts) return;
        Object.entries(entry.cardCounts).forEach(([cardId, count]) => {
            if (!count) return;
            used[cardId] = (used[cardId] || 0) + count;
        });
    });
    return used;
};

Flip7Tracker.prototype.updateDeckAfterRound = function updateDeckAfterRound() {
    const used = this.getCardsUsedThisRound();
    Object.entries(used).forEach(([cardId, count]) => {
        const current = this.deckState[cardId] || 0;
        this.deckState[cardId] = Math.max(0, current - count);
    });
    const totalLeft = Object.values(this.deckState).reduce((acc, v) => acc + v, 0);
    if (totalLeft <= 0) {
        this.deckState = buildInitialDeckState();
    }
};

Flip7Tracker.prototype.getProvisionalDeck = function getProvisionalDeck() {
    const provisional = { ...this.deckState };
    const used = this.getCardsUsedThisRound();
    Object.entries(used).forEach(([cardId, count]) => {
        provisional[cardId] = Math.max(0, (provisional[cardId] || 0) - count);
    });
    return provisional;
};

Flip7Tracker.prototype.toggleDeckSummary = function toggleDeckSummary() {
    this.deckSummaryVisible = !this.deckSummaryVisible;
    this.renderDeckSummary();
    this.saveGameState();
};

Flip7Tracker.prototype.togglePlayerExpanded = function togglePlayerExpanded(playerId) {
    this.playerExpandedStates[playerId] = !(this.playerExpandedStates[playerId] !== false);
    this.renderRoundInputs();
    this.saveGameState();
};

Flip7Tracker.prototype.renderDeckSummary = function renderDeckSummary() {
    const container = document.getElementById('deckSummary');
    if (!container) return;
    if (this.scoringMode !== 'advanced') {
        container.innerHTML = '';
        container.classList.add('hidden');
        return;
    }

    const deck = this.getProvisionalDeck();
    const total = Object.values(deck).reduce((acc, v) => acc + v, 0);
    
    const toggleIcon = this.deckSummaryVisible ? '▼' : '▶';
    const toggleText = this.deckSummaryVisible ? 'Hide' : 'Show';
    
    if (total === 0) {
        container.innerHTML = `
            <div class="deck-summary-toggle">
                <button id="toggleDeckSummary" class="btn btn-light btn-small">
                    <span class="toggle-icon">${toggleIcon}</span> ${toggleText} Deck &amp; Probabilities
                </button>
            </div>
            ${this.deckSummaryVisible ? '<div class="deck-empty">Deck empty – will reset on next round.</div>' : ''}
        `;
        container.classList.toggle('hidden', !this.deckSummaryVisible);
        return;
    }

    const rows = [];
    FLIP7_CARD_DEFINITIONS.numberCards.forEach(card => {
        const remaining = deck[card.id] || 0;
        if (remaining <= 0) return;
        const probability = ((remaining / total) * 100).toFixed(1);
        rows.push(`
            <tr>
                <td>${card.label}</td>
                <td>${remaining}</td>
                <td>${probability}%</td>
            </tr>
        `);
    });
    FLIP7_CARD_DEFINITIONS.modifierCards.forEach(card => {
        const remaining = deck[card.id] || 0;
        if (remaining <= 0) return;
        const probability = ((remaining / total) * 100).toFixed(1);
        rows.push(`
            <tr>
                <td>${card.label}</td>
                <td>${remaining}</td>
                <td>${probability}%</td>
            </tr>
        `);
    });
    FLIP7_CARD_DEFINITIONS.actionCards.forEach(card => {
        const remaining = deck[card.id] || 0;
        if (remaining <= 0) return;
        const probability = ((remaining / total) * 100).toFixed(1);
        rows.push(`
            <tr>
                <td>${card.label}</td>
                <td>${remaining}</td>
                <td>${probability}%</td>
            </tr>
        `);
    });

    container.innerHTML = `
        <div class="deck-summary-toggle">
            <button id="toggleDeckSummary" class="btn btn-light btn-small">
                <span class="toggle-icon">${toggleIcon}</span> ${toggleText} Deck &amp; Probabilities
            </button>
        </div>
        ${this.deckSummaryVisible ? `
            <div class="deck-summary-inner">
                <div class="deck-summary-header">
                    <span>Deck &amp; probabilities</span>
                    <span class="deck-total">Total: ${total} cards</span>
                </div>
                <table class="deck-table">
                    <thead>
                        <tr>
                            <th>Card</th>
                            <th>Remaining</th>
                            <th>Chance</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${rows.join('')}
                    </tbody>
                </table>
            </div>
        ` : ''}
    `;
    container.classList.remove('hidden');
};

let tracker;
document.addEventListener('DOMContentLoaded', () => {
    tracker = new Flip7Tracker();
});
