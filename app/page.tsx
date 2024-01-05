import { Metadata } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import DevDigestGraphic from '../public/dev-digest.png'

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
        <div className='bg-white p-4 border-2'>
          <p>Coming soon...</p>
        </div>
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
