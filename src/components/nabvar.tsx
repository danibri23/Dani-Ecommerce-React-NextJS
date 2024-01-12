"use client"
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, ShoppingBagIcon, UserIcon, MagnifyingGlassIcon, GlobeAmericasIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Tienda', href: '#', current: true },
  { name: 'Galería', href: '#', current: false },
  { name: 'Ubicación', href: '#', current: false },
  { name: 'Cuenta', href: '#', current: false },
  { name: 'Busqueda', href: '#', current: false },

]


export default function NavBar() {
  return (
    <Disclosure as="nav" className="bg-black">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">

            <div className="relative flex items-center justify-center h-16 sm:justify-between">
              
                {/* Mobile menu button*/}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
                <a className='flex items-center' href="#">

                    <div className="flex flex-shrink-0 items-center">
                      <img
                          className="h-8 w-auto"
                          src='./static/images/daniStore.png'
                          alt="DaniStore"
                      />
                      </div>
                    <h1 className='text-white font-bold text-2xl max-sm:text-xl'>Dani<span className='text-white font-extrabold'>Store</span> </h1>
                </a>
              </div>
              

              <div className='flex justify-between sm:w-full items-center'>
              <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      <div className="group relative">
                        <a
                          href="#"
                          className="text-gray-300 rounded-md px-3 py-2 text-sm font-medium"
                        >
                          TIENDA
                        </a>
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></div>
                      </div>
                      <div className="group relative">
                        <a
                          href="#"
                          className="text-gray-300 rounded-md px-3 py-2 text-sm font-medium"
                        >
                          GALERÍA
                        </a>
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></div>
                      </div>
                    </div>
                </div>

                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 sm:gap-x-5">

                  {/* earth support */}
                  <div className="group relative" >
                    <a href="#"><p className='text-gray-300 text-sm font-medium rounded-md px-3 py-2 max-sm:hidden'>SOPORTE</p>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></div>
                    </a>
                  </div>

                  {/* earth button */}
                  <div className="group relative" >
                    <button
                      type="button"
                      className="relative rounded-full bg-black p-1 text-gray-400 hover:text-white focus:outline-none max-sm:hidden"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      <GlobeAmericasIcon className="h-6 w-6 bg-black" aria-hidden="true" />           
                    </button>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></div>

                  </div>
        
                  
                  {/* user button */}
                  <button
                    type="button"
                    className="relative rounded-full bg-black p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 max-sm:hidden"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <UserIcon className="h-6 w-6 bg-black" aria-hidden="true" />
                  </button>

                  {/* search button */}
                  <button
                    type="button"
                    className="relative rounded-full bg-black p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 max-sm:hidden"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <MagnifyingGlassIcon className="h-6 w-6 bg-black" aria-hidden="true" />
                  </button>


                  {/* cart button */}
                  <button
                    type="button"
                    className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <ShoppingBagIcon className="h-6 w-6 bg-black" aria-hidden="true" />
                  </button>
                </div>
               

              </div>

            </div>
            
          </div>
        

                    
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className='text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
