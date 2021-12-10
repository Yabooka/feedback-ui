import { useState, useContext, useEffect } from 'react'
import RatingSelect from './RatingSelect'
import Button from './shared/Button'
import Card from './shared/Card'
import FeedbackContext from '@/context/FeedbackContext'

function FeedbackForm() {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext)

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    }
  }, [feedbackEdit])

  const handleTextChange = (e) => {
    if (text === '') {
      setBtnDisabled(true)
      setMessage(null)
    } else if (text !== '' && text.trim().length <= 10) {
      setBtnDisabled(true)
      setMessage('Message must be at least 10 characters long.')
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }

    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      }
    }

    if (feedbackEdit.edit === true) {
      updateFeedback(feedbackEdit.item.id, newFeedback)
    } else {
      addFeedback(newFeedback)
    }

    setText('')
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2 className='text-2xl text-center'>
          Kako bi ste ocenili nase usluge?
        </h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className='flex flex-row border border-[#ccc] px-3 py-2 rounded-[8px]'>
          <input
            className='flex-grow border-none text-base focus:outline-none'
            onChange={handleTextChange}
            value={text}
            type='text'
            placeholder='Napisite komentar'
          />
          <Button type='submit' isDisabled={btnDisabled}>
            Posalji
          </Button>
        </div>

        {message && (
          <div className='pt-[10px] text-purple text-center'>{message}</div>
        )}
      </form>
    </Card>
  )
}

export default FeedbackForm
