document.querySelector('button').onclick = getInputValue;

function getInputValue() {
    let regular = /-/g;
    let resultValue = document.querySelector('input').value.replace(regular, ",");
    document.querySelector('output').innerHTML = getDataInfo(new Date([resultValue]));
}

function getDataInfo(date) {
    let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    let months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

    function weekNumber(date) {
        const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
        return Math.ceil((date.getDate() + (firstDay - 1)) / 7);
    }

    return (`${days[date.getDay()]},${weekNumber(date)} неделя ${months[date.getMonth()]} ${date.getFullYear()} года`);
}