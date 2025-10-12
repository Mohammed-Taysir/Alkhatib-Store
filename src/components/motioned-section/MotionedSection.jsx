import React from 'react'
import { motion } from 'framer-motion'
import { Box } from '@mui/material'

function MotionedSection({children}) {
const BoxMotion = motion(Box);
  return (
    <BoxMotion initial = {{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0, transition: {duration: 2}}}>
        {children}
    </BoxMotion>
  )
}

export default MotionedSection