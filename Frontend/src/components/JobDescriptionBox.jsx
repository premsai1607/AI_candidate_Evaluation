function JobDescriptionBox() {
  return (
    <div className='bg-white p-6 rounded-2xl shadow-md'>
      <h2 className='text-xl font-semibold mb-4'>Job Description</h2>

      <textarea
        rows='6'
        placeholder='Enter job description here...'
        className='w-full border rounded-lg p-4'
      ></textarea>

      <button className='mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg'>
        Analyze Candidates
      </button>
    </div>
  )
}

export default JobDescriptionBox