document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.getElementById('gallery');
    
    // Массив с именами файлов фотографий
    const photoFilenames = [
        'MiG-23-preview.jpg',
        'MiG-23.jpg',
        'Su-25-preview.jpg',
        'Su-25.jpg',
        '279.jpg',
        'MiG-25PD.jpg',
        'MiG-25PD-full.jpg',
        'MiG-25PD-full-m.jpg',
        'T-4-preview.jpg',
        'T-4.jpg',
        'Su-33.jpg'
    ];
    
    // Функция для загрузки фотографий
    function loadPhotos() {
        gallery.innerHTML = '';
        
        const totalPhotos = photoFilenames.length;
        
        photoFilenames.forEach((filename, index) => {
            const imgContainer = document.createElement('div');
            imgContainer.className = 'photo-container';
            
            const img = document.createElement('img');
            img.src = `images/${filename}`;
            img.alt = `Фотография ${index + 1}`;
            
            // ПРОСТОЕ РЕШЕНИЕ: при клике открыть фото в новой вкладке
            img.onclick = function() {
                window.open(`images/${filename}`, '_blank');
            };
            
            // Добавляем курсор-указатель, чтобы было понятно, что можно нажать
            img.style.cursor = 'pointer';
            
            
            imgContainer.appendChild(img);
            gallery.appendChild(imgContainer);
        });
        
    }
    
    // Загрузка фотографий
    loadPhotos();
});