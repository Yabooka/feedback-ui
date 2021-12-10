import siteMetadata from '@/data/siteMetadata'
import Link from 'next/link'

function Header() {
  return (
    <header className='w-full h-[70px] flex items-center justify-between mb-7 text-[#ff6a95] bg-black opacity-40'>
      <div className='max-w-3xl mx-auto px-5'>
        <h2 className='text-2xl'>
          <Link href='/'>{siteMetadata.title}</Link>
        </h2>
      </div>
    </header>
  )
}

export default Header
