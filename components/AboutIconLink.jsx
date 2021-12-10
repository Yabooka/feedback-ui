import Link from 'next/link'
import { FaQuestion } from 'react-icons/fa'

function AboutIconLink() {
  return (
    <div className='fixed text-white cursor-pointer bottom-5 right-5 hover:text-[#9c2b4b] active:text-[#9c2b4b]'>
      <Link href='/about'>
        <FaQuestion size={30} />
      </Link>
    </div>
  )
}

export default AboutIconLink
