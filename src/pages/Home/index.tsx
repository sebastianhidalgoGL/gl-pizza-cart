import Banner from '../../components/Banner/Banner'

export default function Home({}) {
  const backgroundImage = '/homeBanner.png'
  return (
    <div className='flex flex-col h-[170vh]  '>
      <Banner background={backgroundImage}></Banner>
    </div>
  )
}
