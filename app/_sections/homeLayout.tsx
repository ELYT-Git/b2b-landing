"use client"
import { ElytLogo, Navbar } from './navbar'
import { FirstHeader } from './header_first'
import { Stats } from './stats'
import { MemoryToken } from './memory_token'
import { Loyalty } from './loyalty'
import { ThingsWithElty } from './things_with_elyt'
import { Subscribe } from './subscribe'
import { Footer } from './footer'

export default function HomeLayout() {
  if (globalThis.window?.self !== globalThis.window?.top) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <div>
            <div className='w-[200px] mx-auto'>
                <ElytLogo />
            </div>
            <h1 className='text-3xl mt-[50px]'>This page cannot be iframed</h1>
        </div>
      </div>
    )
  }

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
