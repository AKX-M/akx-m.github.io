// js/parallax.js

(function() {
    'use strict';

    let isMobile = false;
    let currentX = 0;
    let currentY = 0;

    // Проверяем, есть ли гироскоп
    if (window.DeviceOrientationEvent) {
        // Для iOS 13+ нужно запрашивать разрешение
        if (typeof DeviceOrientationEvent.requestPermission === 'function') {
            DeviceOrientationEvent.requestPermission()
                .then(response => {
                    if (response === 'granted') {
                        isMobile = true;
                        window.addEventListener('deviceorientation', handleOrientation);
                    }
                })
                .catch(console.error);
        } else {
            // Для Android и старых iOS
            isMobile = true;
            window.addEventListener('deviceorientation', handleOrientation);
        }
    }

    function handleOrientation(event) {
        // beta: наклон вперёд/назад (-180..180)
        // gamma: наклон влево/вправо (-90..90)
        const beta = event.beta || 0;    // -180 до 180
        const gamma = event.gamma || 0;  // -90 до 90

        // Нормализуем значения для плавного движения
        const shiftX = gamma / 45;    // -2..2 при наклоне до 90°
        const shiftY = beta / 45;     // -2..2 при наклоне до 90°

        applyParallax(shiftX, shiftY);
    }

    function applyParallax(x, y) {
        // Ограничиваем значения
        const clampedX = Math.max(-2, Math.min(2, x));
        const clampedY = Math.max(-2, Math.min(2, y));

        // Параллакс для фона
        document.body.style.setProperty('--bg-x', `${clampedX * 15}px`);
        document.body.style.setProperty('--bg-y', `${clampedY * 15}px`);

        // Движение слоёв
        document.querySelector('.layer-back').style.transform = 
            `translate(${clampedX * 25}px, ${clampedY * 25}px)`;
        
        document.querySelector('.layer-middle').style.transform = 
            `translate(${clampedX * 8}px, ${clampedY * 8}px)`;
    }

    document.addEventListener('mousemove', function(e) {
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;
        
        // Параллакс для фона
        document.body.style.setProperty('--bg-x', `${x * 15}px`);
        document.body.style.setProperty('--bg-y', `${y * 15}px`);
        
        document.querySelector('.layer-back').style.transform = `translate(${x * 25}px, ${y * 25}px)`;
        document.querySelector('.layer-middle').style.transform = `translate(${x * 0}px, ${y * 0}px)`;
    });

})();