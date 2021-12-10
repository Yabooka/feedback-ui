import FeedbackList from '@/components/FeedbackList'
import Header from '@/components/Header'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import FeedbackStats from '@/components/FeedbackStats'
import FeedbackForm from '@/components/FeedbackForm'
import AboutIconLink from '@/components/AboutIconLink'
import { FeedbackProvider } from '@/context/FeedbackContext'

export default function Home() {
  return (
    <FeedbackProvider>
      <div className=''>
        <PageSEO
          title={siteMetadata.title}
          description={siteMetadata.description}
        />
        <Header />
        <div className='max-w-3xl mx-auto'>
          <FeedbackForm />
          <FeedbackStats />
          <FeedbackList />
        </div>
        <AboutIconLink />
      </div>
    </FeedbackProvider>
  )
}
