import Header from '@/components/Header'
import { PageSEO } from '@/components/SEO'
import Card from '@/components/shared/Card'
import Link from 'next/link'
import siteMetadata from '@/data/siteMetadata'
import { FaLongArrowAltLeft } from 'react-icons/fa'

function About() {
  return (
    <>
      <PageSEO
        title={siteMetadata.title}
        description={siteMetadata.description}
      />
      <Header />
      <div className='max-w-3xl mx-auto'>
        <Card>
          <h1 className='text-2xl font-bold mb-5'>About this project</h1>
          <p>This is a NextJS app to leave feedback for our services.</p>
          <p>
            <span className='font-bold'>Version:</span> 1.0.0
          </p>
          <Link href='/'>
            <a className='flex items-center hover:text-red-600 mt-3'>
              <FaLongArrowAltLeft className='mr-2' /> Back to home
            </a>
          </Link>
        </Card>
      </div>
    </>
  )
}

export default About
