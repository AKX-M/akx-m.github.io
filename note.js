document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('notes-container');
    
    // Массив с названиями .md файлов
    const notes = [
        { file: 'запись-1.md' },
        { file: 'запись-2.md' },
        { file: 'запись-3.md' }
    ];
    
    // Функция загрузки .md файла
    async function loadMarkdownFile(filename) {
        try {
            const response = await fetch(filename);
            const text = await response.text();
            return text;
        } catch (error) {
            console.error('Ошибка загрузки файла:', filename, error);
            return 'Не удалось загрузить';
        }
    }
    
    // Функция для отображения стихов
    async function displaynotes() {
        for (const note of notes) {
            const content = await loadMarkdownFile(note.file);
            
            // Парсим Markdown в HTML
            const parsedContent = marked.parse(content);
            
            const noteCard = document.createElement('div');
            noteCard.className = 'note-card';
            
            // Вставляем спарсенный HTML
            noteCard.innerHTML = `
                <div class="note-text">${parsedContent}</div>
            `;
            
            container.appendChild(noteCard);
        }
        
        // После отображения всех стихов, рендерим формулы MathJax
        if (window.MathJax && MathJax.typesetPromise) {
            try {
                await MathJax.typesetPromise();
            } catch (err) {
                console.log('MathJax error:', err);
            }
        }
    }
    
    // Показываем стихи
    displaynotes();
});