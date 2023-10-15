import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <>
      <header className="text-gray-600 body-font bg-gray-300 ">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center border-b-2 border-gray-500 border-opacity-10">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-2xl font-bold">PSJ&apos;s Website</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 font-semibold hover:text-gray-900">
              <Link href="/">홈</Link>
            </a>
            <a className="mr-5 font-black hover:text-gray-900">
              <Link href="/contact">연락하기</Link>
            </a>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
