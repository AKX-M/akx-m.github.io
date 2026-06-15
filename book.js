document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('poems-container');
    
    // Массив с названиями .md файлов
    const poems = [
        { file: 'записка-1.md' },
        { file: 'небесные-машины.md' }
    ];
    
    // Функция загрузки .md файла
    async function loadMarkdownFile(filename) {
        try {
            const response = await fetch(filename);
            const text = await response.text();
            return text;
        } catch (error) {
            console.error('Ошибка загрузки файла:', filename, error);
            return 'Не удалось загрузить стихотворение';
        }
    }
    
    // Функция для отображения стихов
    async function displayPoems() {
        
        for (const poem of poems) {
            const content = await loadMarkdownFile(poem.file);
            
            const poemCard = document.createElement('div');
            poemCard.className = 'poem-card';
            
            poemCard.innerHTML = `
                <div class="poem-text">${content.replace(/\n/g, '<br>')}</div>
            `;
            
            container.appendChild(poemCard);
        }
    }
    
    // Показываем стихи
    displayPoems();
});