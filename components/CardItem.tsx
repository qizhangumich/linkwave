import React from 'react'
import Image from 'next/image'
import { ShoppingCart, Star } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'

export interface CardData {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  rating?: number
  reviews?: number
}

interface CardItemProps {
  card: CardData
  onAddToCart?: () => void
}

export default function CardItem({ card, onAddToCart }: CardItemProps) {
  const { addItem } = useCart()

  const handleAddToCart = () => {
    addItem({
      id: card.id,
      name: card.name,
      price: card.price,
      image: card.image,
      type: 'card',
    })
    onAddToCart?.()
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden card-hover">
      <div className="relative h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
        <Image
          src={`https://picsum.photos/300/200?random=${card.id}`}
          alt={card.name}
          fill
          className="object-cover"
          unoptimized
        />
        <div className="absolute top-2 right-2">
          <span className="bg-primary-600 text-white text-xs px-2 py-1 rounded-full">
            {card.category}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {card.name}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
          {card.description}
        </p>

        {card.rating && (
          <div className="flex items-center mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={`${
                    i < Math.floor(card.rating!)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
              {card.rating} ({card.reviews} reviews)
            </span>
          </div>
        )}

        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
            ${card.price}
          </div>
          
          <button
            onClick={handleAddToCart}
            className="btn-primary flex items-center space-x-2"
          >
            <ShoppingCart size={16} />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  )
}
