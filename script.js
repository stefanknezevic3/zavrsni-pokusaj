
class Gallery {
    constructor() {
        this.currentFilter = 'all';
        this.currentView = 'grid';
        this.currentImageIndex = 0;
        this.filteredImages = [...images];
        this.map = null;
        this.mapMarkers = [];
        this.isViewChanging = false;
        
        
        this.secretSequence = ['1', '2', '3', '4']; 
        this.clickedWords = [];
        this.easterEggFound = false;
        
        this.init();
    }

    init() {
        this.renderGallery();
        this.setupEventListeners();
        this.setupKeyboardNavigation();
        this.setupEasterEgg();
        this.showLoading(false);
        this.addDynamicStyles();
    }

    addDynamicStyles() {
        if (!document.querySelector('#dynamicStyles')) {
            const style = document.createElement('style');
            style.id = 'dynamicStyles';
            style.textContent = `
                @keyframes cardFadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes wordEffect {
                    0% {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                    100% {
                        opacity: 0;
                        transform: translateY(-30px) scale(0.8);
                    }
                }
                
                @keyframes feedbackPulse {
                    0% {
                        opacity: 0;
                        transform: translate(-50%, -50%) scale(0.8);
                    }
                    20% {
                        opacity: 1;
                        transform: translate(-50%, -50%) scale(1.1);
                    }
                    100% {
                        opacity: 0;
                        transform: translate(-50%, -50%) scale(1);
                    }
                }
                
                @keyframes successPulse {
                    0% {
                        opacity: 0;
                        transform: translate(-50%, -50%) scale(0.5);
                    }
                    20% {
                        opacity: 1;
                        transform: translate(-50%, -50%) scale(1.1);
                    }
                    80% {
                        opacity: 1;
                        transform: translate(-50%, -50%) scale(1);
                    }
                    100% {
                        opacity: 0;
                        transform: translate(-50%, -50%) scale(0.9);
                    }
                }
                
                @keyframes confettiFall {
                    to {
                        transform: translateY(100vh) rotate(720deg);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }

    setupEventListeners() {
        
        document.querySelectorAll('.filter-tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                this.setFilter(e.target.closest('.filter-tab').dataset.filter);
            });
        });

        
        document.querySelectorAll('.view-toggle').forEach(toggle => {
            toggle.addEventListener('click', (e) => {
                this.setView(e.target.closest('.view-toggle').dataset.view);
            });
        });

        
        document.getElementById('modalClose').addEventListener('click', () => {
            this.closeModal();
        });

        document.getElementById('modal').addEventListener('click', (e) => {
            if (e.target.classList.contains('modal__backdrop')) {
                this.closeModal();
            }
        });

        document.getElementById('prevPhoto').addEventListener('click', () => {
            this.navigatePhoto(-1);
        });

        document.getElementById('nextPhoto').addEventListener('click', () => {
            this.navigatePhoto(1);
        });

        
        window.addEventListener('resize', () => {
            if (this.map) {
                setTimeout(() => {
                    this.map.invalidateSize();
                }, 250);
            }
        });

        
        document.addEventListener('click', (e) => {
            if (e.target.id === 'originalImageBtn' || e.target.closest('#originalImageBtn')) {
                this.showOriginalImage();
            }
        });
    }

    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            const modal = document.getElementById('modal');
            if (modal.classList.contains('active')) {
                switch(e.key) {
                    case 'Escape':
                        this.closeModal();
                        break;
                    case 'ArrowLeft':
                        e.preventDefault();
                        this.navigatePhoto(-1);
                        break;
                    case 'ArrowRight':
                        e.preventDefault();
                        this.navigatePhoto(1);
                        break;
                }
            }
        });
    }

    setupEasterEgg() {
        
        document.querySelectorAll('.secret-word').forEach(word => {
            word.addEventListener('click', (e) => {
                if (this.easterEggFound) return;
                
                const wordNumber = e.target.dataset.word;
                this.handleSecretWordClick(wordNumber, e.target);
            });
        });
    }

    handleSecretWordClick(wordNumber, element) {
        
        this.clickedWords.push(wordNumber);
        
        
        element.classList.add('clicked');
        this.createWordClickEffect(element);
        
        
        if (this.clickedWords.length > 4) {
            this.clickedWords.shift();
        }

        
        if (this.clickedWords.length === 4) {
            if (JSON.stringify(this.clickedWords) === JSON.stringify(this.secretSequence)) {
                this.triggerEasterEgg();
            } else {
                
                this.resetEasterEgg();
            }
        }
    }

    createWordClickEffect(element) {
        const rect = element.getBoundingClientRect();
        const effect = document.createElement('div');
        effect.className = 'word-click-effect';
        effect.style.cssText = `
            position: fixed;
            left: ${rect.left + rect.width/2}px;
            top: ${rect.top}px;
            z-index: 9999;
            pointer-events: none;
            font-size: 0.8rem;
            color: var(--success);
            font-weight: 600;
            animation: wordEffect 1s ease-out forwards;
        `;
        effect.textContent = `${this.clickedWords.length}/4`;
        
        document.body.appendChild(effect);
        setTimeout(() => effect.remove(), 1000);
    }

    resetEasterEgg() {
        this.clickedWords = [];
        document.querySelectorAll('.secret-word.clicked').forEach(word => {
            word.classList.remove('clicked');
        });
        
        
        const feedback = document.createElement('div');
        feedback.className = 'easter-egg-feedback';
        feedback.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: var(--warning);
            color: white;
            padding: 12px 24px;
            border-radius: var(--radius);
            z-index: 9999;
            font-size: 0.9rem;
            font-weight: 500;
            animation: feedbackPulse 2s ease-out forwards;
        `;
        feedback.textContent = 'Krivi poredak! Probaj ponovo...';
        
        document.body.appendChild(feedback);
        setTimeout(() => feedback.remove(), 2000);
    }

    triggerEasterEgg() {
        this.easterEggFound = true;
        
        
        this.createConfettiExplosion();
        this.createSuccessFeedback();
        
        
        setTimeout(() => {
            this.showAuthorModal();
        }, 1500);
    }

    createConfettiExplosion() {
        const colors = ['#007AFF', '#30D158', '#FF9500', '#FF3B30', '#5856D6'];
        const emojis = ['🎉', '✨', '🎊', '⭐', '💫'];
        
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const isEmoji = Math.random() > 0.5;
                const confetti = document.createElement('div');
                
                if (isEmoji) {
                    confetti.textContent = emojis[Math.floor(Math.random() * emojis.length)];
                } else {
                    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                    confetti.style.width = '6px';
                    confetti.style.height = '6px';
                }
                
                confetti.style.cssText += `
                    position: fixed;
                    top: -20px;
                    left: ${Math.random() * 100}%;
                    font-size: ${Math.random() * 16 + 16}px;
                    z-index: 9999;
                    pointer-events: none;
                    animation: confettiFall ${Math.random() * 4 + 3}s linear forwards;
                `;
                
                document.body.appendChild(confetti);
                setTimeout(() => confetti.remove(), 8000);
            }, i * 50);
        }
    }

    createSuccessFeedback() {
        const feedback = document.createElement('div');
        feedback.className = 'success-feedback';
        feedback.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: var(--success);
            color: white;
            padding: 20px 32px;
            border-radius: var(--radius-xl);
            z-index: 9999;
            font-size: 1.1rem;
            font-weight: 600;
            text-align: center;
            animation: successPulse 1.5s ease-out forwards;
        `;
        feedback.innerHTML = `
            <div>🎉 Otkrio si autora!</div>
            <div style="font-size: 0.9rem; margin-top: 8px; opacity: 0.9;">Upoznaj fotografkinju...</div>
        `;
        
        document.body.appendChild(feedback);
        setTimeout(() => feedback.remove(), 1500);
    }

    showAuthorModal() {
        const modal = document.createElement('div');
        modal.className = 'author-modal';
        modal.innerHTML = `
            <div class="author-content">
                <button class="author-close" id="authorClose">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"/>
                        <line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                </button>
                
                <div class="author-header">
                <div class="author-avatar" style="background-image: url('slike/autor.jpeg'); background-size: cover; background-position: center;">
                </div>
                    <div class="author-badge">Otkrio si autora!</div>
                    <h2>Larisa Galac</h2>
                    <p class="author-tagline">Profesionalna fotografkinja iz Hrvatske</p>
                </div>
                
                <div class="author-info">
                    <p class="author-bio">
                        Studentica i fotografkinja koja svojim unikatnim pogledom na fotografiju prepričava svoju priču.
                    </p>
                    
                    <div class="author-details">
                        <div class="detail-row">
                            <span class="detail-icon">📍</span>
                            <span>Rodom iz Zadra, Hrvatska</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-icon">📷</span>
                            <span>Stručnjakinja u portretima i pejzažima</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-icon">🏆</span>
                            <span>6+ godina iskustva</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-icon">🎯</span>
                            <span>Cilj: Postati svjetski poznata</span>
                        </div>
                    </div>
                    
                    <div class="author-socials">
                        <a href="https://www.instagram.com/lgalac_/" class="social-btn">
                            <span>📷</span>
                            Instagram
                        </a>
                        <a href="https://larisagalac.com/" class="social-btn">
                            <span>🌐</span>
                            Web stranica
                        </a>
                        <a href="#" class="social-btn">
                            <span>📧</span>
                            Kontakt
                        </a>
                    </div>
                    
                    <div class="author-quote">
                        <blockquote>
                            "Every landscape tells a story. I just capture it through my lens."
                        </blockquote>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        document.body.style.overflow = 'hidden';
        
        
        const closeBtn = modal.querySelector('#authorClose');
        closeBtn.addEventListener('click', () => {
            this.closeAuthorModal(modal);
        });
        
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.closeAuthorModal(modal);
            }
        });
    }

    closeAuthorModal(modal) {
        console.log('Closing author modal and resetting easter egg...');
        
        
        this.easterEggFound = false;
        this.clickedWords = [];
        
        
        document.querySelectorAll('.secret-word.clicked').forEach(word => {
            word.classList.remove('clicked');
        });
        
        
        modal.remove();
        document.body.style.overflow = '';
        
        console.log('Author modal closed and easter egg reset successfully');
    }

    resetEasterEggState() {
        
        this.easterEggFound = false;
        this.clickedWords = [];
        
        
        document.querySelectorAll('.secret-word.clicked').forEach(word => {
            word.classList.remove('clicked');
        });
        
        console.log('Easter egg reset successfully');
    }

    setFilter(filter) {
        this.currentFilter = filter;
        
        
        document.querySelectorAll('.filter-tab').forEach(tab => {
            tab.classList.toggle('active', tab.dataset.filter === filter);
        });

        
        if (filter === 'all') {
            this.filteredImages = [...images];
        } else {
            this.filteredImages = images.filter(img => 
                img.category.toLowerCase() === filter
            );
        }

        
        this.renderCurrentView();
    }

    setView(view) {
        
        if (this.isViewChanging) return;
        this.isViewChanging = true;
        
        this.currentView = view;
        
        
        document.querySelectorAll('.view-toggle').forEach(toggle => {
            toggle.classList.toggle('active', toggle.dataset.view === view);
        });

        
        document.querySelector('.gallery-section').classList.add('hidden');
        document.querySelector('.list-section').classList.add('hidden');
        document.querySelector('#mapContainer').classList.add('hidden');

        
        setTimeout(() => {
            this.renderCurrentView();
            this.isViewChanging = false;
        }, 50);
    }

    renderCurrentView() {
        switch(this.currentView) {
            case 'grid':
                document.querySelector('.gallery-section').classList.remove('hidden');
                this.renderGallery();
                break;
            case 'list':
                document.querySelector('.list-section').classList.remove('hidden');
                this.renderListView();
                break;
            case 'map':
                document.querySelector('#mapContainer').classList.remove('hidden');
                this.renderMapView();
                break;
        }
    }

    renderGallery() {
        const gallery = document.getElementById('gallery');
        
       
        if (!this.filteredImages || this.filteredImages.length === 0) {
            this.filteredImages = [...images];
        }
        
        gallery.innerHTML = '';

        this.filteredImages.forEach((image, index) => {
            const card = this.createCard(image, index);
            gallery.appendChild(card);
        });

        
        this.animateCards();
    }

    createCard(image, index) {
        const card = document.createElement('div');
        card.className = 'card';
        card.style.setProperty('--delay', `${index * 0.1}s`);
        card.addEventListener('click', () => this.openModal(index));

        card.innerHTML = `
            <div class="card__image" style="background: ${image.gradient}">
                ${image.image 
                  ? `<img src="${image.image}" alt="${image.title}" class="card__img-el">`
                  : ''}
            </div>
            <div class="card__content">
                <h3 class="card__title">${image.title}</h3>
                <p class="card__description">${image.description}</p>
                <div class="card__meta">
                    <span class="card__category">${image.category}</span>
                    <span class="card__location">
                        📍 ${image.location}
                    </span>
                </div>
            </div>
        `;

        return card;
    }

    renderListView() {
        const listView = document.getElementById('listView');
        listView.innerHTML = '';

        this.filteredImages.forEach((image, index) => {
            const listItem = this.createListItem(image, index);
            listView.appendChild(listItem);
        });
    }

    createListItem(image, index) {
        const item = document.createElement('div');
        item.className = 'list-item';
        item.addEventListener('click', () => this.openModal(index));

        item.innerHTML = `
            <div class="list-item__image" style="background: ${image.gradient}">
                ${image.image
                  ? `<img src="${image.image}" alt="${image.title}" class="list__thumb-el">`
                  : `${image.emoji}`}
            </div>
            <div class="list-item__content">
                <h3 class="list-item__title">${image.title}</h3>
                <p class="list-item__description">${image.description}</p>
                <div class="list-item__meta">
                    <span>${image.category}</span>
                    <span>📍 ${image.location}</span>
                    <span>📅 ${image.date}</span>
                </div>
            </div>
        `;

        return item;
    }

    renderMapView() {
        const mapContainer = document.getElementById('mapContainer');
        
        if (!this.map) {
            
            setTimeout(() => {
                this.initializeMap();
                this.clearMapMarkers();
                this.addMapMarkers();
            }, 100);
        } else {
            this.clearMapMarkers();
            this.addMapMarkers();
            
            setTimeout(() => {
                this.map.invalidateSize();
            }, 200);
        }
    }

    initializeMap() {
        try {
            const mapElement = document.getElementById('map');
            if (!mapElement) {
                console.error('Map element not found');
                return;
            }

            this.map = L.map('map').setView([45.1, 15.2], 7);
            
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors'
            }).addTo(this.map);

            this.createCustomMarkerIcon();
        } catch (error) {
            console.error('Error initializing map:', error);
        }
    }

    createCustomMarkerIcon() {
        this.customIcon = L.divIcon({
            className: 'custom-marker',
            html: `<div style="
                width: 32px; 
                height: 32px; 
                background: var(--accent); 
                border: 3px solid white; 
                border-radius: 50%; 
                box-shadow: 0 2px 8px rgba(0,0,0,0.3);
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 16px;
                color: white;
            ">📷</div>`,
            iconSize: [32, 32],
            iconAnchor: [16, 32]
        });
    }

    clearMapMarkers() {
        this.mapMarkers.forEach(marker => {
            this.map.removeLayer(marker);
        });
        this.mapMarkers = [];
    }

    addMapMarkers() {
        
        const locationGroups = {};
        this.filteredImages.forEach((image, index) => {
            const key = `${image.coordinates.lat},${image.coordinates.lng}`;
            if (!locationGroups[key]) {
                locationGroups[key] = [];
            }
            locationGroups[key].push({...image, originalIndex: index});
        });

        
        Object.values(locationGroups).forEach(group => {
            const image = group[0];
            const marker = L.marker(
                [image.coordinates.lat, image.coordinates.lng], 
                {icon: this.customIcon}
            ).addTo(this.map);

            const popupContent = this.createMapPopup(group);
            marker.bindPopup(popupContent, {
                maxWidth: 300,
                className: 'custom-popup'
            });

            this.mapMarkers.push(marker);
        });
    }


createMapPopup(imageGroup) {
    if (imageGroup.length === 1) {
        const image = imageGroup[0];
        return `
            <div class="popup-content">
                <div class="popup-image" style="background: ${image.gradient}">
                    ${image.emoji || '📷'}
                </div>
                <h4>${image.title}</h4>
                <p>${image.description}</p>
                <button onclick="gallery.openModal(${image.originalIndex})" class="btn btn--primary">
                    Pogledaj fotografiju
                </button>
            </div>
        `;
    } else {
        return `
            <div class="popup-content">
                <h4>${imageGroup[0].location}</h4>
                <p>${imageGroup.length} fotografija na ovoj lokaciji</p>
                <div class="popup-grid">
                    ${imageGroup.slice(0, 4).map(img => `
                        <div class="popup-thumb" 
                             style="background: ${img.gradient}"
                             onclick="gallery.openModal(${img.originalIndex})">
                            ${img.emoji || '📷'}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
}

    animateCards() {
        const cards = document.querySelectorAll('.card');
        cards.forEach((card, index) => {
            card.style.animation = `cardFadeIn 0.6s ease forwards`;
            card.style.animationDelay = `${index * 0.1}s`;
            card.style.opacity = '0';
        });
    }

    openModal(index) {
        this.currentImageIndex = index;
        const image = this.filteredImages[index];
        const modal = document.getElementById('modal');

        
        document.getElementById('modalTitle').textContent = image.title;
        document.getElementById('modalCategory').textContent = image.category;
        document.getElementById('modalDescription').textContent = image.description;

        const modalImage = document.getElementById('modalImage');

        
        modalImage.style.background = image.gradient;
        modalImage.innerHTML = image.image ? `
            <img src="${image.image}" alt="${image.title}" class="modal__img-el">
            <button class="gumb-izvorna-slika" id="originalImageBtn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M3 3v18h18"/>
                    <path d="m19 9-5 5-4-4-3 3"/>
                </svg>
                Prikaži bez okvira
            </button>
        ` : '';

        
        const detailsContainer = document.getElementById('modalDetails');
        detailsContainer.innerHTML = Object.entries(image.details)
            .map(([key, value]) => `
                <div class="detail-item">
                    <span class="detail-label">${key}:</span>
                    <span class="detail-value">${value}</span>
                </div>
            `).join('');

       
        document.getElementById('modalLocation').innerHTML = `
            📍 <strong>Location:</strong> ${image.location}<br>
            🌐 <strong>Coordinates:</strong> ${image.coordinates.lat.toFixed(4)}, ${image.coordinates.lng.toFixed(4)}
        `;

        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';

        
        this.updateModalNavigation();
    }

    closeModal() {
        const modal = document.getElementById('modal');
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    navigatePhoto(direction) {
        const newIndex = this.currentImageIndex + direction;
        
        if (newIndex >= 0 && newIndex < this.filteredImages.length) {
            this.openModal(newIndex);
        }
    }

    updateModalNavigation() {
        const prevBtn = document.getElementById('prevPhoto');
        const nextBtn = document.getElementById('nextPhoto');
        
        prevBtn.disabled = this.currentImageIndex === 0;
        nextBtn.disabled = this.currentImageIndex === this.filteredImages.length - 1;
        
        prevBtn.style.opacity = prevBtn.disabled ? '0.5' : '1';
        nextBtn.style.opacity = nextBtn.disabled ? '0.5' : '1';
    }

    showLoading(show) {
        const loading = document.getElementById('loading');
        loading.classList.toggle('active', show);
    }

    
    showOriginalImage() {
        const image = this.filteredImages[this.currentImageIndex];
        if (!image.image) return;
        
        
        const modal = document.getElementById('modal');
        modal.classList.add('hidden-by-overlay');
        
        const overlay = document.createElement('div');
        overlay.className = 'izvorna-slika-overlay';
        overlay.innerHTML = `
            <div class="izvorna-slika-container">
                <button class="zatvori-izvornu" onclick="this.closest('.izvorna-slika-overlay').remove(); document.getElementById('modal').classList.remove('hidden-by-overlay');">×</button>
                <img src="${image.image}" alt="${image.title}">
            </div>
        `;
        
        
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.remove();
                modal.classList.remove('hidden-by-overlay');
            }
        });
        
        document.body.appendChild(overlay);
    }
}


let gallery;
document.addEventListener('DOMContentLoaded', () => {
    gallery = new Gallery();
});


window.gallery = gallery;