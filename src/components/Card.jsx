export default function Card(props) {
  return (
    <div className='card w-[20%] bg-transparent rounded-lg shadow-md mx-5'>
      <a href='#'>
        <img className='border-8 border-white rounded-lg w-16 md:w-32 lg:w-56' src={`https://image.tmdb.org/t/p/original${props.poster}`} alt='' />
      </a>
      <div className='p-3'>
        <a href='#'>
          <h5 className='mb-2 text-xl font-bold tracking-tight text-white'>{props.title}</h5>
        </a>
        <p className='mb-3 font-semibold text-[#919191]'>{props.year}</p>
      </div>
    </div>
  )
}