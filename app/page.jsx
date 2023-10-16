import Image from 'next/image'
import Link from 'next/link'
import Content from '@/components/Content.jsx'

export default function Home() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 mx-auto">
          <Content />
        </div>
      </section>
    </>
  )
}
