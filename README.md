# 🎴 Flip 7 Score Tracker

A lightweight, static web application for tracking scores in the Flip 7 board game. Built with vanilla HTML, CSS, and JavaScript—no build process or server required!

## ✨ Features

- **🎮 Dual Scoring Modes**: Simple numeric entry or advanced expression parser (`5 10 +2 x2`) with preview modal
- **🧊 Freeze Workflow**: Per-player confirm/unfreeze controls ensure each turn is locked before submitting
- **📊 Ranked History**: Round table shows Top 1/2/3 per round, supports in-place editing with auto-recalculation
- **↕️ Drag Reorder**: Rearrange players directly in the scoring panel via drag handles
- **🌐 Multilingual UI**: Toggle English ↔ Vietnamese instantly; all copy translated
- **🧩 Rule Mapping**: Configure custom score → icon rules (defaults: `36🍀`, `18✌️`) directly in the UI
- **🏆 Celebration Layer**: First player to hit 200 points triggers a banner + confetti animation
- **💾 Persistent Storage**: Player order, rules, rounds, and scoring mode stored in browser localStorage
- **📱 Responsive + Offline**: Pure HTML/CSS/JS, no build step, mobile-friendly layout

## Setup

### Local Development

1. Clone or download this repository
2. Open `index.html` in a web browser
3. No build process or server required—works as a static site

### Static Hosting

This application can be hosted on any static hosting service:

- **GitHub Pages**: Push to a repository and enable GitHub Pages
- **Netlify**: Drag and drop the folder or connect a Git repository
- **Vercel**: Deploy as a static site
- **Any web server**: Upload files to your web hosting service

## Usage

### Starting a Game

1. **Add Players**: Enter player names and click "Add Player"
2. **Pick a Scoring Mode**:
   - **Simple**: Type the final score directly
   - **Advanced**: Enter cards/bonuses (`5 10 +2 x2`), preview, then confirm
3. **Freeze Scores**: Use the **Confirm** button beside each player to lock their turn (unfreeze if needed)
4. **Submit Round**: Once everyone is frozen, click "Submit Round Scores" to advance
5. **Check History**: Review the round history table, including live Top 1/2/3 standings

### Game Rules

- Players compete to be the **first** to reach **200 points**
- Points accumulate across multiple rounds (cumulative totals)
- Each round, players earn points based on their performance
- **Winner**: The first player to reach 200 points wins
- If multiple players reach 200+ in the same round, the one with the highest round score wins
- Each round displays Top 1, 2, 3 rankings based on cumulative totals (not round scores)

### Key Features Explained

- **Progress Bars**: Visual progress indicators showing percentage toward 200 points
- **Top Rankings**: After each round, see who's in Top 1, 2, 3 based on total cumulative scores
- **Win Notification**: Automatic banner when the first player reaches 200 points
- **Round History**: Complete history table showing scores per round and top rankings
- **Language Switching**: Toggle between English and Vietnamese with one click
- **Data Persistence**: Game state automatically saves to browser localStorage

### Scoring Modes

| Mode     | How it works | Example Input | Extras |
|----------|--------------|---------------|--------|
| Simple   | Enter the final numeric score and press **Confirm** to freeze the turn | `42` | Special icons appear automatically (🍀 for 36, ✌️ for 18 by default) |
| Advanced | Enter cards and modifiers separated by spaces, click **Preview Score**, review the formula, then **Confirm** | `5 10 +2 x2` → `(5 + 10 + 2) x2 = 34` | Supports `+N` bonuses and a single multiplier `xN` applied last |

### Editing & Rules

- **Edit a Round**: Click any row in the history table → confirm → adjust scores in the modal → save to auto-recalculate totals and winner
- **Rule Mapping**: Open **Rules & Settings** to customise score → icon mappings (e.g., `36 → 🍀`). Changes persist per browser.
- **Version Tag**: Footer displays the current build version (manual bump per release).

## Official Rule Summary

Sourced from the Flip 7 rulebook (`25_FLIP_7_TB_RULES_C_Rev_9_2_25_ND.pdf`). [[source](https://cdn.shopify.com/s/files/1/0611/3958/3198/files/25_FLIP_7_TB_RULES_C_Rev_9_2_25_ND.pdf?v=1756935535)]

- **Objective**: Race to 200 points; flipping seven unique Number cards ends the round immediately and awards +15 points.
- **Setup**: Thoroughly shuffle the deck, deal one face-up card per player, and resolve Action cards (like Second Chance) as soon as they appear.
- **Action Cards**: May target any active player (even yourself). Second Chance cancels the next duplicate you would draw but only one may sit in front of a player and all copies discard at round end.
- **Modifiers**: `+2` to `+10` add straight bonuses; `x2` doubles the sum of Number cards before other modifiers apply.
- **Round End**: Either everyone has stayed/busted or someone flips seven unique numbers.
- **Scoring Order**: Sum Number cards → apply `x2` → add modifiers/bonuses → apply the Flip 7 bonus if earned.
- **Next Dealer**: Discard all used cards, pass the deck to the left, and reshuffle only when the deck is exhausted.
- **Victory**: After the round in which a player crosses 200 points, the highest total wins.

## File Structure

```
flip7/
├── index.html      # Main HTML structure
├── styles.css      # Styling and layout
├── app.js          # Game logic and state management
└── README.md       # This file
```

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Requires JavaScript enabled
- Uses localStorage for data persistence

## Technical Details

### Data Storage

Game state is stored in browser `localStorage` with the key `flip7GameState`. Data includes:
- Player list with total points
- Current round number
- Complete round history with top 3 rankings per round
- Game winner (first player to reach 200 points)
- Language preference

### State Management

The application uses a class-based architecture (`Flip7Tracker`) that handles:
- Player management
- Round scoring
- Win detection
- Data persistence
- UI rendering

## Troubleshooting

### Data Not Persisting

- Ensure cookies/localStorage are enabled in your browser
- Check browser console for errors
- Try clearing localStorage and starting fresh

### Scores Not Updating

- Ensure all players have valid scores entered (non-negative numbers)
- Check that the "Submit Round Scores" button is enabled
- Verify no JavaScript errors in browser console

## Security Notes

- No external dependencies or API calls
- All data stored locally in browser
- No authentication or user accounts required
- Safe to use offline after initial load

## 🌐 Multilingual Support

The application supports two languages:
- **English (EN)**: Default language
- **Vietnamese (VI)**: Full translation available

Click the language button in the top-right corner to switch languages. Your preference is saved automatically.

## 📝 Example Game Flow

1. **Round 1**: Player A = 50, Player B = 45 → Totals: A=50, B=45 (Top 1: A, Top 2: B)
2. **Round 2**: Player A = 60, Player B = 55 → Totals: A=110, B=100 (Top 1: A, Top 2: B)
3. **Round 3**: Player A = 50, Player B = 100 → Totals: A=160, B=200 → **Player B wins!** (First to reach 200)
4. **Round 4**: (If game continues) Player A = 50, Player B = 10 → Totals: A=210, B=210 (Top 1: Tie)

## 🚀 Deployment

### GitHub Pages

1. Push code to GitHub repository
2. Go to Settings → Pages
3. Select branch and folder (usually `main` and `/root`)
4. Your app will be live at `https://username.github.io/repository-name`

### Netlify

1. Drag and drop the folder to [Netlify Drop](https://app.netlify.com/drop)
2. Or connect your GitHub repository for automatic deployments

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts

## 📄 License

Free to use and modify for personal or commercial purposes.

