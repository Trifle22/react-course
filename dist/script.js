const employers = ['АртеМ', 'максим', 'Владимир', 'сергей', 'НикиТа', 'евГений', ' Дарья', ' ', 'виктория ', 'ЕкаТерина', '', ' Андрей ', 'КИРИЛЛ'];
const nameCourse = 'Базовый React';
let command = [];

employers.forEach(item => {
		if (item.length > 0 && item.trim() != '') {
		command.push(item);
	}
})

command = command.map(item => {
	item = item.toLowerCase().trim();
	item = item[0].toUpperCase() + item.slice(1);
	return item
})


const data = {
	cash: [3, 8, 3],
	react: ['JSX', 'components', 'props', 'state', 'hooks'],
	add: ['styled-components', 'firebase']
};

const calcCash = (data, own = 0) =>  {
	const everyCash = [...data.cash]
	let total = own;
	total = everyCash.reduce((acc, curr) => acc += curr)
	return total;
}

const lessons = calcCash(data);

const makeBusiness = (course = nameCourse, director = command[0], teacher = command[1], lesson = lessons, gang = command, {react, add} = data) => {
	const sumTech = [...react, ...add, 'и другие']
	console.log(
	`
	Стартует новый курс: "${course}". Владелец: ${director}, преподаватель: ${teacher}. Всего уроков: ${lesson}.
	Команда Академии: ${gang.join(',')}
	Первое что изучим будет ${react[0]}. Он очень похож на HTML!
	Технологии которые мы изучим: 
	${sumTech.join(' ')}`);

}

makeBusiness();
