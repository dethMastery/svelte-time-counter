export function dayConversion(day: number) {
	switch (day) {
		case 1:
			return 'Mon.';
		case 2:
			return 'Tue.';
		case 3:
			return 'Wed.';
		case 4:
			return 'Thu.';
		case 5:
			return 'Fri.';
		case 6:
			return 'Sat.';
		default:
			return 'Sun.';
	}
}

export function monthConversion(month: number) {
	switch (month) {
		case 1:
			return 'February';
		case 2:
			return 'March';
		case 3:
			return 'April';
		case 4:
			return 'May';
		case 5:
			return 'June';
		case 6:
			return 'July';
		case 7:
			return 'August';
		case 8:
			return 'September';
		case 9:
			return 'October';
		case 10:
			return 'November';
		case 11:
			return 'December';
		default:
			return 'January';
	}
}

export function TimeConversion(timeStamp: number) {
	const hour = Math.floor((timeStamp % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	let min = Math.floor((timeStamp % (1000 * 60 * 60)) / (1000 * 60)).toString();
	let sec = Math.floor((timeStamp % (1000 * 60)) / 1000).toString();

  min = (min.length < 2) ? `0${min}` : min
  sec = (sec.length < 2) ? `0${sec}` : sec

  const timeLine = `${hour} : ${min} : ${sec}`

  return timeLine
}

export function ClockTime (timeStamp: number) {
	let hour = ((Math.floor((timeStamp % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + 7) % 24).toString();
	let min = Math.floor((timeStamp % (1000 * 60 * 60)) / (1000 * 60)).toString();
	let sec = Math.floor((timeStamp % (1000 * 60)) / 1000).toString();

	hour = (hour.length < 2) ? `0${hour}` : hour
  min = (min.length < 2) ? `0${min}` : min
  sec = (sec.length < 2) ? `0${sec}` : sec

  const timeLine = `${hour} : ${min} : ${sec}`

  return timeLine
}