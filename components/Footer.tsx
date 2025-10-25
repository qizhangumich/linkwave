import React from 'react'
import Link from 'next/link'
import { CreditCard, Shield, Headphones, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-primary-400 mb-4">LinkOne</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Your trusted destination for digital cards and top-up services. 
              Fast, secure, and reliable digital solutions for all your needs.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center text-sm text-gray-300">
                <Shield className="w-4 h-4 mr-2" />
                Secure Payments
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <CreditCard className="w-4 h-4 mr-2" />
                Instant Delivery
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/cards" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Cards Store
                </Link>
              </li>
              <li>
                <Link href="/topup" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Direct Top-up
                </Link>
              </li>
              <li>
                <Link href="/cart" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">
                  Shopping Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-300">
                <Headphones className="w-4 h-4 mr-2" />
                24/7 Support
              </li>
              <li className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-2" />
                support@linkone.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 LinkOne. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
