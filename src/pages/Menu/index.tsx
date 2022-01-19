import Banner from '../../components/Banner/Banner'

export default function Menu({}) {
  const backgroundImage = '/menuBanner.png'
  return (
    <div className='flex flex-col h-[170vh]  '>
      <Banner background={backgroundImage}></Banner>
    </div>
  )
}
