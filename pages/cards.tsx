import React, { useState, useMemo } from 'react'
import Head from 'next/head'
import { Search, Filter, Grid, List } from 'lucide-react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import CardItem, { CardData } from '@/components/CardItem'

// Dummy data for all cards
const allCards: CardData[] = [
  // Gift Cards
  {
    id: '1',
    name: 'Amazon Gift Card',
    description: 'Shop millions of items on Amazon with this digital gift card',
    price: 25,
    image: `https://picsum.photos/300/200?random=1`,
    category: 'Gift Cards',
    rating: 4.8,
    reviews: 1250,
  },
  {
    id: '2',
    name: 'Apple Gift Card',
    description: 'Buy apps, games, music, movies, and more from the App Store',
    price: 50,
    image: `https://picsum.photos/300/200?random=2`,
    category: 'Gift Cards',
    rating: 4.9,
    reviews: 980,
  },
  {
    id: '3',
    name: 'Google Play Gift Card',
    description: 'Get apps, games, books, and more from Google Play Store',
    price: 20,
    image: `https://picsum.photos/300/200?random=3`,
    category: 'Gift Cards',
    rating: 4.7,
    reviews: 1100,
  },
  {
    id: '4',
    name: 'Steam Gift Card',
    description: 'Add funds to your Steam wallet for games and software',
    price: 30,
    image: `https://picsum.photos/300/200?random=4`,
    category: 'Gift Cards',
    rating: 4.8,
    reviews: 2100,
  },
  // Game Cards
  {
    id: '5',
    name: 'PlayStation Store Card',
    description: 'Get the latest games, DLC, and more for your PlayStation',
    price: 50,
    image: `https://picsum.photos/300/200?random=5`,
    category: 'Game Cards',
    rating: 4.9,
    reviews: 890,
  },
  {
    id: '6',
    name: 'Xbox Gift Card',
    description: 'Buy games, movies, and more from Microsoft Store',
    price: 25,
    image: `https://picsum.photos/300/200?random=6`,
    category: 'Game Cards',
    rating: 4.6,
    reviews: 750,
  },
  {
    id: '7',
    name: 'Nintendo eShop Card',
    description: 'Purchase games and content for your Nintendo Switch',
    price: 35,
    image: `https://picsum.photos/300/200?random=7`,
    category: 'Game Cards',
    rating: 4.7,
    reviews: 650,
  },
  {
    id: '8',
    name: 'Steam Wallet Code',
    description: 'Add funds to your Steam wallet for games and software',
    price: 20,
    image: `https://picsum.photos/300/200?random=8`,
    category: 'Game Cards',
    rating: 4.7,
    reviews: 2100,
  },
  // eSIM Cards
  {
    id: '9',
    name: 'International eSIM',
    description: 'Stay connected worldwide with our global data eSIM',
    price: 15,
    image: `https://picsum.photos/300/200?random=9`,
    category: 'eSIM Cards',
    rating: 4.6,
    reviews: 450,
  },
  {
    id: '10',
    name: 'Europe eSIM',
    description: 'Perfect for traveling across European countries',
    price: 12,
    image: `https://picsum.photos/300/200?random=10`,
    category: 'eSIM Cards',
    rating: 4.5,
    reviews: 320,
  },
  {
    id: '11',
    name: 'Asia Pacific eSIM',
    description: 'Connect seamlessly across Asia Pacific region',
    price: 18,
    image: `https://picsum.photos/300/200?random=11`,
    category: 'eSIM Cards',
    rating: 4.4,
    reviews: 280,
  },
  // Virtual Cards
  {
    id: '12',
    name: 'Virtual Visa Card',
    description: 'Secure online payments with virtual Visa card',
    price: 10,
    image: `https://picsum.photos/300/200?random=12`,
    category: 'Virtual Cards',
    rating: 4.3,
    reviews: 190,
  },
  {
    id: '13',
    name: 'Virtual Mastercard',
    description: 'Global acceptance with virtual Mastercard',
    price: 10,
    image: `https://picsum.photos/300/200?random=13`,
    category: 'Virtual Cards',
    rating: 4.2,
    reviews: 165,
  },
]

const categories = ['All', 'Gift Cards', 'Game Cards', 'eSIM Cards', 'Virtual Cards']

export default function CardsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('name')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const filteredCards = useMemo(() => {
    let filtered = allCards

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(card => card.category === selectedCategory)
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(card =>
        card.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        card.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Sort cards
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price
        case 'price-high':
          return b.price - a.price
        case 'rating':
          return (b.rating || 0) - (a.rating || 0)
        case 'name':
        default:
          return a.name.localeCompare(b.name)
      }
    })

    return filtered
  }, [searchTerm, selectedCategory, sortBy])

  return (
    <>
      <Head>
        <title>Cards Store - LinkOne</title>
        <meta name="description" content="Browse our collection of digital gift cards, game cards, eSIM cards, and virtual cards." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <NavBar />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Digital Cards Store
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Browse our collection of digital cards and find the perfect one for your needs
            </p>
          </div>

          {/* Filters and Search */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search cards..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="lg:w-48">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <div className="lg:w-48">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="name">Sort by Name</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>

              {/* View Mode */}
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg ${
                    viewMode === 'grid'
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                  }`}
                >
                  <Grid size={20} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg ${
                    viewMode === 'list'
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                  }`}
                >
                  <List size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-600 dark:text-gray-300">
              Showing {filteredCards.length} of {allCards.length} cards
            </p>
          </div>

          {/* Cards Grid/List */}
          {filteredCards.length > 0 ? (
            <div className={`grid gap-6 ${
              viewMode === 'grid'
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                : 'grid-cols-1'
            }`}>
              {filteredCards.map((card) => (
                <CardItem key={card.id} card={card} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 dark:text-gray-500 mb-4">
                <Search size={48} className="mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                No cards found
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>

        <Footer />
      </div>
    </>
  )
}
