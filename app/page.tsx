import { HeroSection } from '../components/HeroSection'
import { NewArrivals } from '../components/NewArrivals'

export default function Home() {
  return (
    <main>
      <div className='px-5 flex flex-col gap-10'>
        <HeroSection />

        <NewArrivals />
      </div>
    </main>
  )
}
