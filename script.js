document.addEventListener('DOMContentLoaded', () => {
  fetch('config.json')
    .then(response => response.json())
    .then(config => {
      // Профиль
      document.querySelector('.profile-pic').src = config.profile.profilePic;
      document.querySelector('.name').textContent = config.profile.name;
      document.querySelector('.username').textContent = config.profile.username;
      document.querySelector('.description').textContent = config.profile.description || '';

      // Ссылки
      const linksContainer = document.querySelector('.links');
      config.links.forEach(link => {
        const linkItem = document.createElement('a');
        linkItem.href = link.url;
        linkItem.className = 'link-item';
        linkItem.innerHTML = `
          <span class="link-icon"><i class="${link.icon}"></i></span>
          <span class="link-text">${link.text}</span>
          <span class="link-more">→</span>
        `;
        linksContainer.appendChild(linkItem);
      });

      // Фоновые изображения - ОБНОВЛЕННАЯ ЧАСТЬ
      const backgroundStrip = document.querySelector('.background-strip');
      
      // Очищаем контейнер (на всякий случай)
      backgroundStrip.innerHTML = '';
      
      // Создаем два контейнера для бесконечной анимации
      for (let i = 0; i < 2; i++) {
        const stripContainer = document.createElement('div');
        stripContainer.className = 'strip-container';
        
        // Создаем изображения с обертками
        config.backgroundImages.forEach(img => {
          // Создаем обертку для изображения
          const itemWrapper = document.createElement('div');
          itemWrapper.className = 'strip-item';
          
          // Создаем само изображение
          const imgElement = document.createElement('img');
          imgElement.src = img;
          imgElement.alt = '';
          imgElement.loading = 'lazy'; // Для производительности
          
          // Вкладываем изображение в обертку
          itemWrapper.appendChild(imgElement);
          
          // Добавляем обертку в контейнер
          stripContainer.appendChild(itemWrapper);
        });
        
        // Добавляем контейнер в background-strip
        backgroundStrip.appendChild(stripContainer);
      }
    })
    .catch(error => {
      console.error('Ошибка загрузки конфигурации:', error);
      document.querySelector('.name').textContent = 'Ошибка загрузки';
      document.querySelector('.username').textContent = 'Проверьте config.json';
    });

  // Модал для QR кода
  const qrCode = document.querySelector('.qr-code');
  const modal = document.getElementById('qrModal');
  const closeBtn = document.querySelector('.close');

  // Проверяем существование элементов перед добавлением обработчиков
  if (qrCode && modal && closeBtn) {
    qrCode.addEventListener('click', () => {
      modal.style.display = 'flex';
    });

    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  }
});