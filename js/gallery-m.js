document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.getElementById('gallery');
    
    // Массив с именами файлов фотографий
    const photoFilenames = [
        'Апакидзе-0.svg',
        'Апакидзе-1.svg',
        'Апакидзе-2.svg',
        'Апакидзе-3.svg',
        'Апакидзе-4.svg'
    ];
    
    // Функция для загрузки фотографий
    function loadPhotos() {
        gallery.innerHTML = '';
        
        photoFilenames.forEach((filename, index) => {
            // СОЗДАЁМ ТОЛЬКО КАРТИНКУ, БЕЗ ОБЁРТКИ
            const img = document.createElement('img');
            img.src = `../images/${filename}`;
            img.alt = `Фотография ${index + 1}`;
            img.style.cursor = 'pointer';
            
            // При клике открыть фото в новой вкладке
            //img.onclick = function() {
            //    window.open(`../images/${filename}`, '_blank');
            //};
            
            // Добавляем картинку ПРЯМО в gallery
            gallery.appendChild(img);
        });
    }
    
    // Загрузка фотографий
    loadPhotos();
});