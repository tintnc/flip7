# 🎴 Flip 7 Score Tracker

A lightweight, static web application for tracking scores in the Flip 7 board game. Built with vanilla HTML, CSS, and JavaScript—no build process or server required!

## ✨ Features

- **🎮 Round-Based Scoring**: Track points per round with automatic total calculation
- **🏆 Win Detection**: First player to reach 200 points wins (not highest score)
- **📊 Top Rankings**: View Top 1, 2, 3 rankings after each round based on cumulative scores
- **🌐 Multilingual Support**: Full support for English (EN) and Vietnamese (VI) with easy language switching
- **💾 Persistent Storage**: Game state automatically saved to browser localStorage
- **📱 Responsive Design**: Works seamlessly on desktop and mobile devices
- **🎨 Modern UI**: Beautiful gradient design with progress bars and visual feedback
- **⚡ Zero Dependencies**: Pure HTML, CSS, and JavaScript—works offline

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
2. **Enter Round Scores**: For each round, enter the points each player earned
3. **Submit Round**: Click "Submit Round Scores" to record the round and advance to the next round
4. **View Progress**: The score board shows each player's total points and progress toward 200
5. **Check History**: Review the round history table to see all previous rounds

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

