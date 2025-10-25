import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { ArrowRight, Gift, Gamepad2, Globe, CreditCard, Star, Shield, Zap } from 'lucide-react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import CardItem, { CardData } from '@/components/CardItem'

// Dummy data for featured cards
const featuredCards: CardData[] = [
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
    name: 'PlayStation Store Card',
    description: 'Get the latest games, DLC, and more for your PlayStation',
    price: 50,
    image: `https://picsum.photos/300/200?random=2`,
    category: 'Game Cards',
    rating: 4.9,
    reviews: 890,
  },
  {
    id: '3',
    name: 'Steam Wallet Code',
    description: 'Add funds to your Steam wallet for games and software',
    price: 20,
    image: `https://picsum.photos/300/200?random=3`,
    category: 'Game Cards',
    rating: 4.7,
    reviews: 2100,
  },
  {
    id: '4',
    name: 'International eSIM',
    description: 'Stay connected worldwide with our global data eSIM',
    price: 15,
    image: `https://picsum.photos/300/200?random=4`,
    category: 'eSIM Cards',
    rating: 4.6,
    reviews: 450,
  },
]

const categories = [
  {
    name: 'Gift Cards',
    icon: Gift,
    description: 'Amazon, Apple, Google Play, and more',
    href: '/cards?category=gift-cards',
    color: 'bg-blue-500',
  },
  {
    name: 'Game Cards',
    icon: Gamepad2,
    description: 'PlayStation, Xbox, Nintendo, Steam',
    href: '/cards?category=game-cards',
    color: 'bg-green-500',
  },
  {
    name: 'eSIM Cards',
    icon: Globe,
    description: 'International data cards',
    href: '/cards?category=esim-cards',
    color: 'bg-purple-500',
  },
  {
    name: 'Virtual Cards',
    icon: CreditCard,
    description: 'Other digital payment cards',
    href: '/cards?category=virtual-cards',
    color: 'bg-orange-500',
  },
]

const features = [
  {
    icon: Zap,
    title: 'Instant Delivery',
    description: 'Get your digital cards delivered instantly via email',
  },
  {
    icon: Shield,
    title: 'Secure & Safe',
    description: '100% secure transactions with encrypted payments',
  },
  {
    icon: Star,
    title: 'Best Prices',
    description: 'Competitive prices with regular discounts and offers',
  },
]

export default function HomePage() {
  return (
    <>
      <Head>
        <title>LinkOne - Digital Cards & Top-up Services</title>
        <meta name="description" content="Buy digital gift cards, game cards, eSIM cards, and top-up services instantly. Fast, secure, and reliable digital solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <NavBar />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Digital Cards & Top-up Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-primary-100 max-w-3xl mx-auto">
                Get instant access to gift cards, game credits, eSIM cards, and more. 
                Fast, secure, and reliable digital solutions for all your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/cards" className="btn-primary bg-white text-primary-600 hover:bg-gray-100 text-lg px-8 py-3">
                  Browse Cards
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link href="/topup" className="btn-secondary bg-primary-500 hover:bg-primary-400 text-white text-lg px-8 py-3">
                  Direct Top-up
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Shop by Category
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Choose from our wide range of digital cards and services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className="group bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`${category.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {category.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Cards Section */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Featured Cards
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Popular choices from our digital card collection
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredCards.map((card) => (
                <CardItem key={card.id} card={card} />
              ))}
            </div>

            <div className="text-center mt-8">
              <Link href="/cards" className="btn-primary text-lg px-8 py-3">
                View All Cards
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Why Choose LinkOne?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                We provide the best digital card and top-up services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="bg-primary-100 dark:bg-primary-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
