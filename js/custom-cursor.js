// js/custom-cursor.js

(function() {
    'use strict';

    // Создаём элемент курсора, если его нет
    let cursor = document.querySelector('.custom-cursor');
    
    if (!cursor) {
        cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        document.body.appendChild(cursor);
    }

    // Проверяем, что курсор существует
    if (!cursor) return;

    // Скрываем стандартный курсор
    document.body.style.cursor = 'none';

    // Двигаем курсор за мышью
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        cursor.style.opacity = '1';
    });

    // Эффект при клике (уменьшение)
    document.addEventListener('mousedown', function() {
        cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
    });

    document.addEventListener('mouseup', function() {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    });

    // Скрываем курсор, когда мышь покидает окно
    document.addEventListener('mouseleave', function() {
        cursor.style.opacity = '0';
    });

    document.addEventListener('mouseenter', function() {
        cursor.style.opacity = '1';
    });

})();