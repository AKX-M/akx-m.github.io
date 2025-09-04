document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.getElementById('gallery');
    const loading = document.getElementById('loading');
    
    // Массив с именами файлов фотографий
    const photoFilenames = [
        'Su33.png',
        'Spyral.png',
        'Spyral_s.png',
        'Su33_Mig31.png',
        'Su33_Mig31_1.png',
        'Su33_Mig31_2.png',
        'Mig23mld_Mig21smt.png'
        // Добавьте больше фотографий
    ];
    
    // Функция для загрузки фотографий
    function loadPhotos() {
        loading.style.display = 'block';
        gallery.innerHTML = '';
        
        let loadedCount = 0;
        const totalPhotos = photoFilenames.length;
        
        photoFilenames.forEach((filename, index) => {
            const imgContainer = document.createElement('div');
            imgContainer.className = 'photo-container';
            
            const img = document.createElement('img');
            img.src = `images/${filename}`;
            img.alt = `Фотография ${index + 1}`;
            img.loading = 'lazy';
            
            img.onload = function() {
                loadedCount++;
                if (loadedCount === totalPhotos) {
                    loading.style.display = 'none';
                }
            };
            
            imgContainer.appendChild(img);
            gallery.appendChild(imgContainer);
        });
        
        // На случай если какие-то фото не загрузятся
        setTimeout(() => {
            loading.style.display = 'none';
        }, 5000);
    }
    
    // Загрузка фотографий
    loadPhotos();
});
