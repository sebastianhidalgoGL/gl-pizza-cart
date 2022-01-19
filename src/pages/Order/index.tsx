import Banner from '../../components/Banner/Banner'

export default function Order({}) {
  const backgroundImage = '/orderBanner.png'
  return (
    <div className='flex flex-col h-[170vh]  '>
      <Banner background={backgroundImage}></Banner>
    </div>
  )
}
