function SearchFilter() {
  return (
    <div className='bg-white p-4 rounded-2xl shadow-md flex flex-col md:flex-row gap-4'>
      <input
        type='text'
        placeholder='Search Candidate'
        className='border p-3 rounded-lg flex-1'
      />

      <select className='border p-3 rounded-lg'>
        <option>All</option>
        <option>Recommended</option>
        <option>Average Match</option>
        <option>Rejected</option>
      </select>
    </div>
  )
}

export default SearchFilter