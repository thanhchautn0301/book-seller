import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='min-h-[100vh] flex flex-col w-full'> 
      <header className='header bg-orange-400 px-36 min-h-[72px] max-h-[100px] flex items-center'>
        <Image src='/logo.png' width={150} height={100} />
      </header>
      <div className='content bg-slate-50 flex-1 px-36 py-4'>
        <div className='book-list'>
          <div>
            <Image width={200} height={200} src='/books/book1.jpg'/>
            <div>$: 10000</div>
          </div>
        </div>
      </div>
      <footer className='footer bg-gray-200 px-36 min-h-[72px] max-h-[100px] flex items-center'>
        Phone number: <a className='block text-blue-500' href='tel:+841234567'>&nbsp;+841999999</a>
      </footer>
    </div>
  )
}
