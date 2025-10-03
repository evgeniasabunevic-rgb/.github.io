// Плавная прокрутка для навигационных ссылок
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Добавление класса для фиксированной навигации при скролле
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(44, 62, 80, 0.95)';
    } else {
        header.style.background = 'rgba(139, 95, 191, 0.95)';
    }
});

// Обработка формы обратной связи
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Здесь можно добавить отправку данных на сервер
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Простая валидация
    if (name && email && message) {
        alert('Сообщение отправлено! Спасибо за ваше обращение.');
        this.reset();
    } else {
        alert('Пожалуйста, заполните все поля формы.');
    }
});

