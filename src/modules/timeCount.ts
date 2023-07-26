import type Counter from "../interfaces/counter";
import { TimeConversion } from "./converter";

function TimeCounter (inputDate: Counter) {
  const currentTime = new Date().getTime()
  let remaining: string | undefined = undefined

  const sptDate = inputDate.date?.split('-')
  const sptTime = inputDate.time?.split(':')

  if (sptDate !== undefined && sptTime !== undefined ) {
    const newStamp = new Date(`${sptDate[1]} ${sptDate[2]} ${sptDate[0]} ${sptTime[0]}:${sptTime[1]}`)
    const diff = newStamp.getTime() - currentTime
    
    const timeConst = TimeConversion(diff).split(' : ')

    remaining = `${timeConst[0]}hr. ${timeConst[1]}min. ${timeConst[2]}sec.`

    const dateBase = new Date()
    const baseStamp = new Date(`${dateBase.getMonth() + 1} ${dateBase.getDate()} ${dateBase.getFullYear()}`)
    const duration = newStamp.getTime() - baseStamp.getTime()
    const baseDiff = currentTime - baseStamp.getTime()
    const percent = Math.floor((baseDiff / duration) * 100 * 100) / 100

    const returnValue = {
      remaining: remaining,
      diff: diff,
      percent: percent
    }
    
    return returnValue
  }
}

export default TimeCounter