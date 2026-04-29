document.addEventListener('DOMContentLoaded', function() {
    const mapPoints = document.querySelectorAll('.map-point-overlay');
    const infoBox = document.getElementById('map-description');

    if (!infoBox) return; // Если блока нет — выходим

    // Добавляем свойство 'image' с путем к картинке для каждого космодрома
    const cosmodromeData = {
        'baikonur': {
            title: 'Байконур',
            desc: 'Первый и крупнейший в мире космодром. Расположен в Казахстане (арендуется Россией). Отсюда стартовал Гагарин и запускаются все пилотируемые миссии «Союз».',
            image: 'https://artemjew.ru/wp-content/uploads/2022/05/baikonur-22.jpg' // Путь к изображению
        },
        'plesetsk': {
            title: 'Плесецк',
            desc: 'Государственный испытательный космодром Министерства обороны РФ. Расположен в Архангельской области. Используется преимущественно для запусков военных спутников на полярные орбиты.',
            image: 'https://www.plesetzk.ru/img/ples.jpg' // Путь к изображению
        },
        'vostochny': {
            title: 'Восточный',
            desc: 'Новый российский космодром в Амурской области. Строительство началось в 2011 году. Призван снизить зависимость от Байконура и развивать Дальний Восток.',
            image: 'https://naked-science.ru/wp-content/uploads/2018/03/images_custom_2018_03_wx1080.jpg' // Путь к изображению
        }
    };

    mapPoints.forEach(point => {
        point.addEventListener('click', function() {
            const key = this.getAttribute('data-info');
            const data = cosmodromeData[key];

            if (data) {
                // Скрываем блок с анимацией
                infoBox.classList.add('hidden');
                
                setTimeout(() => {
                    // Формируем новый HTML, который включает и картинку, и текст
                    infoBox.innerHTML = `
                        <h3>${data.title}</h3>
                        <img src="${data.image}" alt="${data.title}" style="width: 100%; max-width: 400px; border-radius: 8px; margin-bottom: 15px;">
                        <p>${data.desc}</p>
                    `;
                    infoBox.classList.remove('hidden');
                }, 300); // Задержка совпадает с transition в CSS
            }
        });
    });
});