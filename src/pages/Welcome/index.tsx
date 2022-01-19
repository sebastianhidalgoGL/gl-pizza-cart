import Banner from '../../components/Banner/Banner'

export default function Welcome({}) {
  const backgroundImage = '/welcomeBanner.png'
  return (
    <div className='flex flex-col h-[170vh]  '>
      <Banner background={backgroundImage} size={Banner.size.HALF}></Banner>
    </div>
  )
}
