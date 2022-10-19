export default function Footer(params) {
  return (
    <div className='footer bg-[#101010] space-y-2 py-2 px-20'>
      <div className='flex justify-center space-x-3'>
        <p className='text-white font-semibold'>MovieApp @ 2022-2023</p>
        <div className='flex space-x-2'>
          <a className='text-[#919191]' href=''>Home</a> 
          <p className='text-[#919191]' href=''>-</p> 
          <a className='text-[#919191]' href=''>Browse Movie</a>
        </div>
      </div>
      <div className='flex justify-center space-x-3'>
        <p className='text-white'>Feel Free to Enjoy This Site</p>
      </div>
    </div>
  )
}