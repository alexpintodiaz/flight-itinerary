import { Footer } from './ui/footer'
import { Header } from './ui/header'

function App() {
  return (
    <div className='bg-zinc-900 h-screen text-white flex flex-col items-center justify-between'>
      <Header />
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
