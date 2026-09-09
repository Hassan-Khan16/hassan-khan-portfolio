import { Outlet } from 'react-router-dom'
import { motion, useScroll, useSpring } from 'motion/react'
import { Footer } from './Footer'
import { Header } from './Header'

export function Layout() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 110, damping: 30, restDelta: 0.001 })

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX }} />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
