import { Footer } from './layout/footer'
import { Header } from './layout/header'
import { FlightSearch } from './features/flight-search/flight-search'

function App() {
  return (
    <div className=' h-screen  flex flex-col items-center justify-between'>
      <Header />
      <FlightSearch />
      <div className='bg-gray-500 p-4 w-2/5'>
        <h1 className='text-3xl font-bold text-center block my-2'>
          FLIGHT ITINERARY
        </h1>
      </div>
      <Footer />
    </div>
  )
}

export default App
