function ScoreBadge({ score }) {
  return (
    <div className='bg-green-100 text-green-700 px-3 py-1 rounded-full w-fit'>
      {score}%
    </div>
  )
}

export default ScoreBadge