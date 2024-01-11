import { Metadata } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import DevDigestGraphic from '../public/dev-digest.png'
import ArticleBlockSmall from '@/common/components/Organisms/Navbar/Molecules/ArticleBlockSmall'

export const metadata: Metadata = {
  title: 'Dev Digest - Curated content for developers',
  description: 'Curated content for developers',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row justify-between p-4 container mx-auto bg-gray-100 max-[768px]:flex-col">
      <aside className='w-3/12 p-2 max-[768px]:w-full'>
        <div className='bg-white p-4 border-2 mb-3'>
          <h1 className='font-bold'>Dev Digest</h1>
          <p>Curated content for developers</p>
        </div>
        <div className='bg-white p-4 border-2'>
          <p>Coming soon...</p>
        </div>
      </aside>
      <div className='w-6/12 p-2 max-[768px]:w-full'>
        <Image src={DevDigestGraphic.src} height={720} width={1280} alt='Dev Digest' className='mb-3' />
        <ArticleBlockSmall article={{
          title: 'Host a NextJs App on Vercel under 10 minutes. 💻👨🏻‍💻👨🏻‍💻⚡️⏳',
          url: 'https://youtu.be/UsTk1hvqwGY',
          image: 'https://bun.sh/bun.png',
          date: '2021-10-01',
          description: 'Hosting an app is never this easier. Here is your how to guide to deploying a Next application using Vercel. ',
          tags: [{ value: 'Video', id: 'video' }, { value: 'Nextjs', id: 'nextjs' }, { value: 'Vercel', id: 'vercel' }, { value: 'Github', id: 'github' }]
        }} />
        <ArticleBlockSmall article={{
          title: 'Typescript Secrets 🤫 What are Generics in Typescript',
          url: 'https://www.youtube.com/shorts/Vo9tqvZGWCA',
          image: 'https://bun.sh/bun.png',
          date: '2021-10-01',
          description: 'Generics are a TypeScript feature that allows us to pass in various types of data and create reusable code to handle different inputs. They allow us to define placeholder types which are then replaced when the code is executed with the actual types passed in',
          tags: [{ value: 'Video', id: 'video' }, { value: 'Typescript', id: 'typescript' }, { value: 'Programming', id: 'programming' }, { value: 'Language', id: 'language' }]
        }} />
        <ArticleBlockSmall article={{
          title: 'Understand Bun',
          url: 'https://bun.sh/',
          image: 'https://bun.sh/bun.png',
          date: '2021-10-01',
          description: 'Bun is a new programming language that aims to be simple, fast, and easy to use.',
          tags: [{ value: 'Bun', id: 'bun' }, { value: 'Programming', id: 'programming' }, { value: 'Language', id: 'language' }]
        }} />
      </div>
      <aside className='w-3/12 p-2 max-[768px]:w-full'>
        <div className='bg-white p-4 border-2 mb-3'>
          <h1 className='font-bold'>#trending</h1>
          <a className='underline text-blue-700 list-item ml-4' target='_blank' href='https://bun.sh/'>Bun</a>
          <a className='underline text-blue-700 list-item ml-4' target='_blank' href='https://angular.dev/'>Angular v17</a>
          <a className='underline text-blue-700 list-item ml-4' target='_blank' href='https://nextjs.org/docs'>NextJs v14</a>
        </div>
        <div className='bg-white p-4 border-2'>
          <p>Coming soon...</p>
        </div>
      </aside>
    </main>
  )
}
