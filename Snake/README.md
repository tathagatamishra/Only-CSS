# Snake Game

This is a simple Snake game implemented using React. The player controls a snake on a game board and can move it in four directions: up, right, down, and left. The game can be played using keyboard arrow keys or by clicking on the control buttons displayed on the screen.

![Snake Game Screenshot](./screenshot.png)

## Technologies Used

- React
- CSS

## Installation

1. Clone the repository:

```bash
git clone https://github.com/tathagatamishra/snake-game.git
```

2. Navigate to the project directory:

```bash
cd I-M-A-SNAKE
```

3. Install the dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

## How to Play

- Use the arrow keys on your keyboard to move the snake in the corresponding directions.
- Alternatively, you can use the control buttons displayed on the screen: ▲ for up, ► for right, ▼ for down, and ◄ for left.
- The goal of the game is to navigate the snake to eat the food that appears on the board and grow in length.
- Be careful not to collide with the walls or the snake's own body, as it will result in game over.
- The game will keep track of your score, which increases as the snake eats food.

## Customization

- The initial position of the snake on the game board can be adjusted by modifying the `x` and `y` values in the `useState` hook of the `App` component.

```jsx
const [snake, setSnake] = useState({
  x: 2200, // Adjust the x-coordinate as desired
  y: 1000, // Adjust the y-coordinate as desired
});
```

- You can customize the appearance of the game board and the snake by modifying the CSS styles defined in the `App.css` file.

## Acknowledgments

This Snake game is a basic implementation and serves as a starting point for building more advanced features. Feel free to enhance and expand upon it to create your own unique Snake game!

---