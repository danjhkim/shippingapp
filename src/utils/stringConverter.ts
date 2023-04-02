export function formatDate(dateString: string): string {
	const dateObj = new Date(dateString);
	const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	const months = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	];

	const dayOfWeek = days[dateObj.getUTCDay()];
	const month = months[dateObj.getUTCMonth()];
	const dayOfMonth = dateObj.getUTCDate();

	return `${dayOfWeek}, ${month} ${dayOfMonth}`;
}

export function formatTime(timeString: string): string {
	const timeObj = new Date(`2000-01-01T${timeString}Z`);
	let hour = timeObj.getUTCHours();
	const minute = timeObj.getUTCMinutes();
	const meridiem = hour >= 12 ? 'PM' : 'AM';

	// Convert to 12-hour format
	if (hour > 12) {
		hour -= 12;
	} else if (hour === 0) {
		hour = 12;
	}

	return `${hour}:${minute.toString().padStart(2, '0')}${meridiem}`;
}

export function sinceDataFormatter(dateString: string): string {
	const date = new Date(dateString);
	const month = date
		.toLocaleString('default', { month: 'short' })
		.toUpperCase();
	const day = date.getDate();
	const year = date.getFullYear();

	return `SINCE ${month} ${day}, ${year}`;
}
