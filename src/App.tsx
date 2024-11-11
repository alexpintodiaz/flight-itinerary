import { Footer } from './layout/footer'
import { Header } from './layout/header'
import { FlightSearch } from './features/flight-search/flight-search'

function App() {
  return (
    <div className=' min-h-dvh  flex flex-col items-center justify-between'>
      <Header />
      <FlightSearch />
      <Footer />
    </div>
  )
}

export default App
