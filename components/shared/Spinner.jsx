import Image from 'next/image'

function Spinner() {
  return (
    <div className='text-center'>
      <Image src='/spinner.gif' width={100} height={100} alt='Loading...' />
    </div>
  )
}

export default Spinner
