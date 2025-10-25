import React, { useState } from 'react'
import Head from 'next/head'
import { CreditCard, Zap, CheckCircle, AlertCircle } from 'lucide-react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import { useCart } from '@/contexts/CartContext'

interface TopUpService {
  id: string
  name: string
  description: string
  icon: string
  minAmount: number
  maxAmount: number
  currency: string
  processingTime: string
}

const topUpServices: TopUpService[] = [
  {
    id: 'chatgpt-plus',
    name: 'ChatGPT Plus',
    description: 'Monthly subscription to ChatGPT Plus with GPT-4 access',
    icon: '🤖',
    minAmount: 20,
    maxAmount: 20,
    currency: 'USD',
    processingTime: 'Instant',
  },
  {
    id: 'openai-credits',
    name: 'OpenAI API Credits',
    description: 'Add credits to your OpenAI API account',
    icon: '🧠',
    minAmount: 5,
    maxAmount: 500,
    currency: 'USD',
    processingTime: '1-2 hours',
  },
  {
    id: 'midjourney',
    name: 'Midjourney Subscription',
    description: 'Monthly subscription to Midjourney AI art generation',
    icon: '🎨',
    minAmount: 10,
    maxAmount: 60,
    currency: 'USD',
    processingTime: 'Instant',
  },
  {
    id: 'notion-pro',
    name: 'Notion Pro',
    description: 'Upgrade to Notion Pro for advanced features',
    icon: '📝',
    minAmount: 8,
    maxAmount: 8,
    currency: 'USD',
    processingTime: 'Instant',
  },
  {
    id: 'figma-pro',
    name: 'Figma Professional',
    description: 'Professional plan for Figma design tool',
    icon: '🎨',
    minAmount: 12,
    maxAmount: 12,
    currency: 'USD',
    processingTime: 'Instant',
  },
  {
    id: 'github-pro',
    name: 'GitHub Pro',
    description: 'Professional GitHub account with advanced features',
    icon: '🐙',
    minAmount: 4,
    maxAmount: 4,
    currency: 'USD',
    processingTime: 'Instant',
  },
  {
    id: 'spotify-premium',
    name: 'Spotify Premium',
    description: 'Monthly subscription to Spotify Premium',
    icon: '🎵',
    minAmount: 10,
    maxAmount: 10,
    currency: 'USD',
    processingTime: 'Instant',
  },
  {
    id: 'netflix-premium',
    name: 'Netflix Premium',
    description: 'Monthly subscription to Netflix Premium',
    icon: '🎬',
    minAmount: 15,
    maxAmount: 15,
    currency: 'USD',
    processingTime: 'Instant',
  },
]

export default function TopUpPage() {
  const [selectedService, setSelectedService] = useState<TopUpService | null>(null)
  const [amount, setAmount] = useState('')
  const [accountInfo, setAccountInfo] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const { addItem } = useCart()

  const handleServiceSelect = (service: TopUpService) => {
    setSelectedService(service)
    setAmount(service.minAmount.toString())
    setAccountInfo('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedService) return

    setIsProcessing(true)

    // Simulate processing time
    setTimeout(() => {
      // Add to cart
      addItem({
        id: `topup-${selectedService.id}`,
        name: selectedService.name,
        price: parseFloat(amount),
        image: `https://picsum.photos/300/200?random=${selectedService.id}`,
        type: 'topup',
        service: selectedService.name,
        amount: parseFloat(amount),
      })

      setIsProcessing(false)
      setShowSuccess(true)
      
      // Reset form after success
      setTimeout(() => {
        setSelectedService(null)
        setAmount('')
        setAccountInfo('')
        setShowSuccess(false)
      }, 3000)
    }, 2000)
  }

  const isAmountValid = selectedService && 
    parseFloat(amount) >= selectedService.minAmount && 
    parseFloat(amount) <= selectedService.maxAmount

  return (
    <>
      <Head>
        <title>Direct Top-up - LinkOne</title>
        <meta name="description" content="Top up your favorite services instantly. ChatGPT Plus, OpenAI Credits, Midjourney, and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <NavBar />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Direct Top-up Services
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Top up your favorite services instantly. Select a service, enter your details, 
              and we'll handle the rest for you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Service Selection */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Select Service
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {topUpServices.map((service) => (
                  <div
                    key={service.id}
                    onClick={() => handleServiceSelect(service)}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                      selectedService?.id === service.id
                        ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                        : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-primary-300 dark:hover:border-primary-600'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="text-2xl">{service.icon}</div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                          {service.name}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                          {service.description}
                        </p>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500 dark:text-gray-400">
                            ${service.minAmount} - ${service.maxAmount}
                          </span>
                          <span className="text-gray-500 dark:text-gray-400">
                            {service.processingTime}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top-up Form */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sticky top-24">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Top-up Details
                </h2>

                {!selectedService ? (
                  <div className="text-center py-8">
                    <CreditCard className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500 dark:text-gray-400">
                      Select a service to continue
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Service Info */}
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-2xl">{selectedService.icon}</span>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">
                            {selectedService.name}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            {selectedService.processingTime} delivery
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Amount Input */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Amount ({selectedService.currency})
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                          $
                        </span>
                        <input
                          type="number"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          min={selectedService.minAmount}
                          max={selectedService.maxAmount}
                          step="0.01"
                          className="w-full pl-8 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder={`${selectedService.minAmount} - ${selectedService.maxAmount}`}
                        />
                      </div>
                      {amount && !isAmountValid && (
                        <p className="text-sm text-red-500 mt-1 flex items-center">
                          <AlertCircle size={16} className="mr-1" />
                          Amount must be between ${selectedService.minAmount} and ${selectedService.maxAmount}
                        </p>
                      )}
                    </div>

                    {/* Account Info */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Account Information
                      </label>
                      <input
                        type="text"
                        value={accountInfo}
                        onChange={(e) => setAccountInfo(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Email, username, or account ID"
                        required
                      />
                    </div>

                    {/* Total */}
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                      <div className="flex justify-between items-center text-lg font-semibold text-gray-900 dark:text-white">
                        <span>Total:</span>
                        <span>${amount || '0.00'}</span>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={!isAmountValid || !accountInfo || isProcessing}
                      className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      {isProcessing ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Processing...
                        </>
                      ) : (
                        <>
                          <Zap className="w-4 h-4 mr-2" />
                          Add to Cart
                        </>
                      )}
                    </button>
                  </form>
                )}

                {/* Success Message */}
                {showSuccess && (
                  <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <p className="text-green-700 dark:text-green-300 font-medium">
                        Added to cart successfully!
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}
