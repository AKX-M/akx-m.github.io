document.addEventListener('DOMContentLoaded', function() {
    const bookElement = document.getElementById('book');
    const prevBtn = document.getElementById('prevPage');
    const nextBtn = document.getElementById('nextPage');
    const pageNumberSpan = document.getElementById('pageNumber');
    
    // Все стихи
    const poems = [
        {
            title: "Ночной полёт",
            date: "Январь 2026",
            text: "За окном темнота,\nТолько звёзды горят.\nСамолёт в облаках,\nА в душе — тишина.\n\nВремя медленно льётся,\nСловно мёд с ложки.\nМежду небом и мной\nТолько сны да дороги.",
            svgFile: "подпись.svg"
        },
        {
            title: "Весеннее",
            date: "Февраль 2026",
            text: "Капель стучит по крыше,\nСосульки тают вниз.\nИ мир становится выше,\nСвершая свой круиз.\n\nПроснулись почки на ветках,\nРучей бежит, звенит.\nВ своих весенних таблетках\nДуша моя болит.",
            svgFile: "подпись.svg"
        },
        {
            title: "Осенний вальс",
            date: "Март 2026",
            text: "Листья жёлтые кружатся,\nТихо падают в траву.\nЯ не буду огорчаться,\nВсё как есть я приму.\n\nВетер гонит облака,\nДождь стучит по крыше.\nГде-то жизнь моя легка,\nГде-то стала тише.",
            svgFile: "подпись.svg"
        },
        {
            title: "Утренний свет",
            date: "Апрель 2026",
            text: "Солнце встаёт за горой,\nНовый день наступает.\nЯ останусь собой,\nПусть никто не узнает.\n\nТишина за окном,\nПтицы песню запели.\nИ в сердце моём\nНадежды созрели.",
            svgFile: null
        }
    ];
    
    let currentPage = 0;
    const poemsPerPage = 2; // 2 стиха на разворот
    const totalPages = Math.ceil(poems.length / poemsPerPage);
    
    // Функция создания страницы со стихом
    function createPoemPage(poem, isLeft = true) {
        const pageDiv = document.createElement('div');
        pageDiv.className = isLeft ? 'book-page-left' : 'book-page-right';
        
        if (!poem) {
            // Пустая страница
            pageDiv.innerHTML = `
                <div class="full-page-poem" style="text-align: center; color: #b0a088;">
                    <p>Пустая страница<br>...</p>
                </div>
                <div class="page-number-mark">${isLeft ? '—' : '—'}</div>
            `;
            return pageDiv;
        }
        
        const svgHtml = poem.svgFile ? `<div class="poem-svg"><img src="${poem.svgFile}" alt="подпись"></div>` : '';
        
        pageDiv.innerHTML = `
            <h2 class="poem-title">${poem.title}</h2>
            <div class="poem-date">${poem.date}</div>
            <div class="poem-text">${poem.text}</div>
            ${svgHtml}
            <div class="page-number-mark">${isLeft ? '✦' : '✦'}</div>
        `;
        
        return pageDiv;
    }
    
    // Функция отображения текущего разворота
    function displaySpread() {
        bookElement.innerHTML = '';
        
        const spread = document.createElement('div');
        spread.className = 'book-spread';
        
        const leftPoemIndex = currentPage * poemsPerPage;
        const rightPoemIndex = leftPoemIndex + 1;
        
        const leftPoem = poems[leftPoemIndex];
        const rightPoem = poems[rightPoemIndex];
        
        spread.appendChild(createPoemPage(leftPoem, true));
        spread.appendChild(createPoemPage(rightPoem, false));
        
        bookElement.appendChild(spread);
        
        // Обновляем номер страницы
        pageNumberSpan.textContent = `Страница ${currentPage + 1} из ${totalPages}`;
        
        // Управление кнопками
        prevBtn.disabled = currentPage === 0;
        nextBtn.disabled = currentPage === totalPages - 1;
        
        prevBtn.style.opacity = currentPage === 0 ? '0.5' : '1';
        nextBtn.style.opacity = currentPage === totalPages - 1 ? '0.5' : '1';
    }
    
    // Листаем назад
    function prevPage() {
        if (currentPage > 0) {
            currentPage--;
            displaySpread();
        }
    }
    
    // Листаем вперёд
    function nextPage() {
        if (currentPage < totalPages - 1) {
            currentPage++;
            displaySpread();
        }
    }
    
    // Назначаем обработчики
    prevBtn.addEventListener('click', prevPage);
    nextBtn.addEventListener('click', nextPage);
    
    // Показываем первую страницу
    displaySpread();
});