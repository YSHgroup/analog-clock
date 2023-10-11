import {} from 'react'
import { CSSProperties } from 'styled-components'
interface ClockProps {
    style?: CSSProperties
}
export interface CLOCK_POINTER {
    ClockPointer: React.FC<ClockProps>
    transformHandler: number
}
