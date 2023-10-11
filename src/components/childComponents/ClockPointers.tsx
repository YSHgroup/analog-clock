import {} from 'react'
import { CLOCK_POINTER } from '../../types'
const ClockPointers: React.FC<CLOCK_POINTER> = ({ ClockPointer, transformHandler }) => {
  return (
    <ClockPointer
      style={{
        transform: `rotateZ(${transformHandler}deg)`,
      }}
    />
  )
}

export default ClockPointers
