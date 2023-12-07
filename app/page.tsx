import Image from 'next/image'
import { FirstHeader } from './_sections/header_first'
import { Stats } from './_sections/stats'
import { MemoryToken } from './_sections/memory_token'
import { Loyalty } from './_sections/loyalty'
import { ThingsWithElty } from './_sections/things_with_elyt'
import { Subscribe } from './_sections/subscribe'
import { ContactUs } from './_sections/contact_us'
import { Navbar } from './_sections/navbar'
import { Footer } from './_sections/footer'

export default function Home() {
  return (
    <div className='overflow-hidden'>
      <Navbar />
      <FirstHeader />
      <Stats />
      <MemoryToken />
      <Loyalty />
      <ThingsWithElty />
      <Subscribe />
      <Footer />
    </div>
  )
}
