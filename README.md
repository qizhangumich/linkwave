# LinkOne - Digital Cards & Top-up Services

A modern, responsive website for selling digital cards and top-up services built with Next.js, TypeScript, and TailwindCSS.

## Features

- 🎁 **Gift Cards** - Amazon, Apple, Google Play, Steam
- 🎮 **Game Cards** - PlayStation, Xbox, Nintendo, Steam
- 🌍 **eSIM Cards** - International data cards
- 💳 **Virtual Cards** - Other digital payment cards
- 🔄 **Direct Top-up** - ChatGPT Plus, OpenAI Credits, Midjourney, and more
- 🛒 **Shopping Cart** - Full cart functionality with quantity management
- 🌙 **Dark/Light Theme** - Toggle between themes
- 📱 **Responsive Design** - Works on all devices
- ⚡ **Instant Delivery** - Fast and secure digital delivery

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Icons**: Lucide React
- **State Management**: React Context API
- **Image Optimization**: Next.js Image component

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd linkone-digital-cards
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── components/          # Reusable React components
│   ├── CardItem.tsx    # Card display component
│   ├── NavBar.tsx      # Navigation bar
│   └── Footer.tsx      # Footer component
├── contexts/           # React Context providers
│   ├── ThemeContext.tsx    # Theme management
│   └── CartContext.tsx     # Shopping cart state
├── pages/              # Next.js pages
│   ├── index.tsx       # Homepage
│   ├── cards.tsx       # Cards store
│   ├── topup.tsx       # Direct top-up page
│   ├── cart.tsx        # Shopping cart
│   └── api/            # API routes
├── styles/             # Global styles
│   └── globals.css     # TailwindCSS imports
└── public/             # Static assets
```

## Pages

### Homepage (`/`)
- Hero section with call-to-action
- Category showcase
- Featured cards grid
- Why choose us section

### Cards Store (`/cards`)
- Browse all digital cards
- Filter by category
- Search functionality
- Sort options
- Grid/List view toggle

### Direct Top-up (`/topup`)
- Service selection
- Amount input with validation
- Account information form
- Add to cart functionality

### Shopping Cart (`/cart`)
- Review cart items
- Quantity management
- Order summary
- Checkout preparation

## Features in Detail

### Theme System
- Light and dark mode support
- Persistent theme preference
- Smooth transitions
- System preference detection

### Shopping Cart
- Add/remove items
- Quantity management
- Persistent storage
- Real-time total calculation

### Responsive Design
- Mobile-first approach
- Tablet and desktop optimized
- Touch-friendly interactions
- Accessible navigation

## Customization

### Adding New Card Categories
1. Update the `categories` array in `pages/cards.tsx`
2. Add new card data to the `allCards` array
3. Update the category filter logic

### Adding New Top-up Services
1. Add new service to the `topUpServices` array in `pages/topup.tsx`
2. Configure pricing, limits, and processing time
3. Add appropriate icon and description

### Styling
- Modify `tailwind.config.js` for theme customization
- Update `styles/globals.css` for global styles
- Use TailwindCSS classes for component styling

## API Integration

The project is ready for API integration:
- Payment processing (Stripe, PayPal, etc.)
- Inventory management
- Order processing
- User authentication
- Email notifications

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
1. Build the project: `npm run build`
2. Start production server: `npm start`
3. Deploy the `.next` folder

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, email support@linkone.com or create an issue in the repository.
