import React from 'react'

const ok = () => {
  return (
    <div class="min-h-screen bg-gray-100">
    <header class="bg-white shadow sticky top-0 z-10">
      <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 class="text-xl font-bold text-gray-900">Free Hosting Service</h1>
        <nav class="space-x-4">
          <a href="#" class="text-gray-700 hover:text-gray-900">Dashboard</a>
          <a href="#" class="text-gray-700 hover:text-gray-900">Domains</a>
          <a href="#" class="text-gray-700 hover:text-gray-900">File Manager</a>
          <a href="#" class="text-gray-700 hover:text-gray-900">Support</a>
        </nav>
      </div>
    </header>
  
    <div class="flex">
      <aside class="w-64 bg-white shadow">
        <nav class="p-4 space-y-4">
          <a href="#" class="block text-gray-700 hover:bg-gray-200 p-2 rounded">Overview</a>
          <a href="#" class="block text-gray-700 hover:bg-gray-200 p-2 rounded">Files</a>
          <a href="#" class="block text-gray-700 hover:bg-gray-200 p-2 rounded">Databases</a>
          <a href="#" class="block text-gray-700 hover:bg-gray-200 p-2 rounded">Domains</a>
          <a href="#" class="block text-gray-700 hover:bg-gray-200 p-2 rounded">SSL/TLS</a>
        </nav>
      </aside>
  
      <main class="flex-1 p-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="bg-white p-4 rounded shadow">
            <h2 class="text-lg font-semibold">Resource Usage</h2>
            <p class="text-sm text-gray-600">Storage: 3GB/5GB</p>
            <div class="h-2 bg-gray-200 rounded-full mt-2">
              <div class="w-3/5 bg-blue-500 h-2 rounded-full"></div>
            </div>
          </div>
  
          <div class="bg-white p-4 rounded shadow">
            <h2 class="text-lg font-semibold">Active Websites</h2>
            <ul class="text-gray-700 mt-2">
              <li>example.com - <span class="text-green-500">Active</span></li>
              <li>myblog.net - <span class="text-yellow-500">Pending</span></li>
            </ul>
          </div>
  
          <div class="bg-white p-4 rounded shadow">
            <h2 class="text-lg font-semibold">Quick Actions</h2>
            <div class="mt-2 space-y-2">
              <button class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                Create New Website
              </button>
              <button class="w-full bg-gray-200 text-gray-800 py-2 rounded hover:bg-gray-300">
                Upload Files
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
  
  )
}

export default ok