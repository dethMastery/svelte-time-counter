import { ClockTime, dayConversion, monthConversion } from "./converter"

function Time() {
  const current = new Date(new Date().getTime())

  const currentDate = `${dayConversion(current.getDay())} ${current.getDate()} ${monthConversion(current.getMonth())} ${current.getFullYear()}`
  const final = {
    date: currentDate,
    time: ClockTime(current.getTime()),
    timeStamp: (current.getTime())
  }

	return final
}

export default Time