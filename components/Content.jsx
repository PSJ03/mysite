'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Animation from '@/components/Animation.jsx'

export default function Content() {
  return (
    <>
      <div className="flex flex-col text-center w-full h-full items-center">
        <Animation />
      </div>
      <div className="flex flex-wrap">
        <div className="xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-slate-400 border-opacity-30">
          <Image
            src="/images/Github_Logo.png"
            alt="Github_Logo.png"
            width={30}
            height={30}
          />
          <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
            My Github
          </h2>
          <p className="leading-relaxed text-base mb-4">
            저의 github 페이지로 갈 수 있습니다.
          </p>
          <a className="text-gray-500 font-medium hover:text-gray-800  inline-flex items-center">
            <Link href="https://github.com/PSJ03/" target="_blank">
              보러가기
            </Link>
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
        <div className="xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-slate-400 border-opacity-30">
          <Image
            src="/images/About_me.png"
            alt="About_me.png"
            width={30}
            height={30}
          />
          <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
            About
          </h2>
          <p className="leading-relaxed text-base mb-4">
            저에 대해 간략하게 알 수 있습니다.
          </p>
          <a className="text-gray-500 font-medium hover:text-gray-800 inline-flex items-center">
            <Link href="/about">보러가기</Link>
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
        <div className="xl:w-1/3 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-r-2 border-slate-400 border-opacity-30">
          <Image
            src="/images/Project.png"
            alt="Project.png"
            width={30}
            height={30}
          />
          <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
            Projects
          </h2>
          <p className="leading-relaxed text-base mb-4">
            제 Github에 있는 프로젝트들을 볼 수 있습니다.
          </p>
          <div className="flex justify-between ">
            <a className="text-gray-500 font-medium hover:text-gray-800 inline-flex items-center">
              <Link href="/repos">보러가기</Link>
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
            <a className="text-gray-500 font-medium hover:text-gray-800 inline-flex items-center ml-2 ">
              <Image
                src="/images/git_repository.png"
                alt="git_repository.png"
                width={26}
                height={26}
                className="bg-trasparent rounded-full p-1 border-2 border-black mr-1"
              />
              <Link
                href="https://github.com/PSJ03?tab=repositories"
                target="_blank"
              >
                깃허브
              </Link>
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
