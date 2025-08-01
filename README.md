# Design Principles Cards

A beautiful, interactive card deck application for evaluating design solutions against proven design principles. Perfect for designers, developers, and product teams who want to ensure their work meets high-quality design standards.

## Features

- **64 Design Principle Cards** across 8 categories:
  - **Functional** - Does it solve the core problem?
  - **Clear** - Is the purpose and hierarchy obvious?
  - **Precise** - Does it respond exactly to user input?
  - **Efficient** - Can users complete tasks with minimal effort?
  - **Elegance** - Does it feel refined and sophisticated?
  - **Anticipation** - Does it predict what users need next?
  - **Delight** - Does it bring unexpected joy to users?
  - **Flow** - Does it create a smooth, uninterrupted experience?

- **Random Card Drawing** - Get a random card to evaluate your design
- **Interactive Cards** - Click to reveal answers with smooth animations
- **Beautiful UI** - Modern, responsive design with gradient backgrounds
- **Category Color Coding** - Each category has its own distinct color
- **Mobile Responsive** - Works perfectly on all device sizes

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone or download this repository
2. Navigate to the project directory:
   ```bash
   cd principles-cards
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000`

### Building for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## How to Use

1. **Start the Application** - Click "Draw a Card" to begin
2. **Read the Question** - Each card presents a design principle question
3. **Evaluate Your Design** - Consider how your current design solution measures up
4. **Reveal the Answer** - Click "Show Answer" to see detailed guidance
5. **Draw Another Card** - Click "Draw Another Card" to get a new perspective

## Customization

### Adding New Cards

To add new cards, edit the `src/data/cards.ts` file. Each card follows this structure:

```typescript
{
  id: 'category-number',
  category: 'CategoryName',
  question: 'Your question here?',
  answer: 'Your detailed answer and guidance here.'
}
```

### Modifying Categories

To change categories or add new ones:

1. Update the `Category` type in `src/types.ts`
2. Add new cards in `src/data/cards.ts`
3. Update the color mapping in `src/components/CardComponent.tsx`

### Styling

The application uses CSS modules and custom properties. Main styles are in:
- `src/App.css` - Main application layout and styling
- `src/components/CardComponent.css` - Individual card styling
- `src/index.css` - Global styles and reset

## Technology Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **CSS3** - Modern styling with animations and gradients

## Project Structure

```
principles-cards/
├── src/
│   ├── components/
│   │   ├── CardComponent.tsx
│   │   └── CardComponent.css
│   ├── data/
│   │   └── cards.ts
│   ├── types.ts
│   ├── App.tsx
│   ├── App.css
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Contributing

Feel free to contribute by:
- Adding new design principle cards
- Improving the UI/UX
- Adding new features
- Fixing bugs

## License

This project is open source and available under the MIT License.

## Acknowledgments

This application is inspired by design thinking methodologies and aims to help teams create better user experiences through systematic evaluation of design principles. 