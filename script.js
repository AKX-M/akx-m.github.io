document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.getElementById('gallery');
    const loading = document.getElementById('loading');
    
    // Массив с именами файлов фотографий в папке images
    // Замените на реальные имена ваших файлов
    const photoFilenames = [
        'photo1.jpg',
        'photo2.jpg',
        'photo3.jpg',
        'photo4.jpg',
        'photo5.jpg',
        // Добавьте больше фотографий по необходимости
    ];
    
    // Функция для загрузки фотографий
    function loadPhotos() {
        loading.style.display = 'block';
        
        // Очищаем галерею перед загрузкой новых фото
        gallery.innerHTML = '';
        
        // Создаем элементы изображений
        photoFilenames.forEach(filename => {
            const imgContainer = document.createElement('div');
            imgContainer.className = 'photo-container';
            
            const img = document.createElement('img');
            img.src = `images/${filename}`;
            img.alt = 'Фотография из галереи';
            img.loading = 'lazy'; // Ленивая загрузка для оптимизации
            
            imgContainer.appendChild(img);
            gallery.appendChild(imgContainer);
        });
        
        loading.style.display = 'none';
    }
    
    // Инициализация загрузки фотографий
    loadPhotos();
    
    // Обработчик для бесконечной прокрутки (если нужно)
    window.addEventListener('scroll', function() {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
            // Здесь можно добавить логику подгрузки дополнительных фото
            // при достижении низа страницы
        }
    });
});
