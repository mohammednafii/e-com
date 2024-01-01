import Navbar from '@/app/components/Navbar'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Hero from './components/Hero'
import { ArrowUpNarrowWide } from 'lucide-react'
import Newest from './components/Newest'
export default function Home() {
  return (
    <div className="bg-white pd-6 md:p-8 lg:p-12">

     <Hero></Hero>
     <Newest></Newest>

    </div>
  )
}
