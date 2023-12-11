import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <>
      <header className="text-gray-600 body-font bg-gray-300 ">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center border-b-2 border-gray-500 border-opacity-10">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-2xl font-bold">
              <Link
                href="/"
                className="italic bg-white w-1/12 p-1 px-4 rounded-full border-2 border-black"
              >
                PSJ&apos;s Website
              </Link>
            </span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 font-semibold hover:text-gray-900">
              <Link href="/">Home</Link>
            </a>
            <a className="mr-5 font-black hover:text-gray-900">
              <Link href="/contact">Contact</Link>
            </a>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
