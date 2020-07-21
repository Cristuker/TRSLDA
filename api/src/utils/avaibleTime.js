import { eachHourOfInterval, getHours } from 'date-fns';

const checkStartDateIsValid = (date) => {
	const hourToGetOrder = getHours(new Date(date));

	const hourWhitDate = eachHourOfInterval({
		start: new Date(2014, 9, 6, 8),
		end: new Date(2014, 9, 6, 18),
	});
	const justHours = hourWhitDate.map((date) => {
		return getHours(date);
	});

	const result = justHours.includes(hourToGetOrder);

	return result;
};

export { checkStartDateIsValid };
