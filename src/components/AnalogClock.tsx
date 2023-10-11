import { useInterval } from 'usehooks-ts'
import { Tooltip, Whisper } from 'rsuite'
import clsx from 'clsx'
import ClockPointers from './childComponents/ClockPointers'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { setTime } from '../slices/clockSlice'
import { CLOCK_POINTER } from '../types'

import Style from './styles/analogClock'
import times from './style.module.css'
import 'rsuite/dist/rsuite.min.css'

const AnalogClock: React.FC = () => {
  const dispatch = useAppDispatch()
  const timeStamp = useAppSelector(({clock}) => clock.value)
  const date = new Date(timeStamp)
  const getHour = date.getHours()
  const getMinute = date.getMinutes()
  const getSecond = date.getSeconds()
  const pointers: CLOCK_POINTER[] = [
    {
      ClockPointer: Style.HourHand,
      transformHandler:
        (getHour * 3600 + getMinute * 60 + getSecond) * (360 / 3600 / 12),
    },
    {
      ClockPointer: Style.MinHand,
      transformHandler: (getMinute * 60 + getSecond * 0.5) * (360 / 3600),
    },
    { ClockPointer: Style.SecondHand, transformHandler: getSecond * 6 },
  ]
  const timeNumbers: string[] = [
    times.twelve,
    times.one,
    times.two,
    times.three,
    times.four,
    times.five,
    times.six,
    times.seven,
    times.eight,
    times.nine,
    times.ten,
    times.eleven,
  ]

  useInterval(
    () => {
      const time = new Date()
      dispatch(setTime(time.getTime()))
    },
    1000
  )
  return (
    <Whisper
      followCursor
      placement='bottom'
      speaker={
        <Tooltip>
          {getHour % 12}:{getMinute}:{getSecond} {getHour < 12 ? 'AM' : 'PM'}
        </Tooltip>
      }
    >
      <Style.Clock>
        {pointers.map((pointer, i) => (
          <ClockPointers
            ClockPointer={pointer.ClockPointer}
            transformHandler={pointer.transformHandler}
            key={i * (i + 123)}
          />
        ))}
        {timeNumbers.map((value: string, i: number) => (
          <Style.TimeNumber className={clsx(value)} key={value}>
            {i === 0 ? '12' : i}
          </Style.TimeNumber>
        ))}
      </Style.Clock>
    </Whisper>
  )
}

export default AnalogClock
