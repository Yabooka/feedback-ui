import PropTypes from 'prop-types'
import { FaTimes, FaEdit } from 'react-icons/fa'
import { useContext } from 'react'
import Card from '@/components/shared/Card'
import FeedbackContext from '@/context/FeedbackContext'

function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext)

  return (
    <Card>
      <div className='bg-[#ff6a95] text-white w-[50px] h-[50px] p-[10px] text-center rounded-full text-lg border border-[#eee] transition duration-300 ease-in-out absolute top-[-10px] left-[-10px]'>
        {item.rating}
      </div>
      <button
        onClick={() => deleteFeedback(item.id)}
        className='absolute top-3 right-3 cursor-pointer bg-none border-none'
      >
        <FaTimes color='purple' />
      </button>
      <button
        onClick={() => editFeedback(item)}
        className='absolute top-3 right-10 cursor-pointer bg-none border-none'
      >
        <FaEdit color='purple' />
      </button>
      <div className=''>{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem
