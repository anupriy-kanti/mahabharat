// Mahabharat Scholar App - Main JavaScript
class MahabharatScholar {
    constructor() {
        this.currentLanguage = 'english';
        this.currentSearchType = 'verse';
        this.searchResults = [];
        this.recentSearches = JSON.parse(localStorage.getItem('recentSearches') || '[]');
        this.verseData = this.initializeVerseData();
        this.characters = this.initializeCharacters();
        this.episodes = this.initializeEpisodes();
        this.themes = this.initializeThemes();
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.populateCharacterFilter();
        this.loadRecentSearches();
        this.displayWelcomeMessage();
    }

    // Initialize comprehensive verse data (sample from BORI Critical Edition)
    initializeVerseData() {
        return [
            {
                id: '1.1.1',
                parva: 'adiparva',
                adhyaya: 1,
                verse: 1,
                english: "Om! Having bowed down to Narayana and Nara, the most exalted male being, and also to the goddess Saraswati, must the word Jaya be uttered.",
                hindi: "ॐ! नारायण और नर, सबसे उत्कृष्ट पुरुष, और देवी सरस्वती को नमन करके, जय शब्द का उच्चारण करना चाहिए।",
                sanskrit: "ॐ नमो नारायणाय नराय च पुरुषोत्तमाय च सरस्वत्यै च जय उच्यते।",
                roman: "Om namo nārāyaṇāya narāya ca puruṣottamāya ca sarasvatyai ca jaya ucyate.",
                characters: ['Narayana', 'Nara', 'Saraswati'],
                themes: ['invocation', 'divine', 'beginning'],
                episode: 'invocation',
                edition: 'bori',
                sources: [
                    { name: 'BORI Critical Edition', page: 1, line: 1 },
                    { name: 'Ganguli Translation', volume: 1, page: 1 }
                ]
            },
            {
                id: '1.1.2',
                parva: 'adiparva',
                adhyaya: 1,
                verse: 2,
                english: "In the forest of Naimisha, the great sage Sauti, well-versed in the Puranas, was sitting among the sages who had gathered for the twelve-year sacrifice.",
                hindi: "नैमिषारण्य में, महान ऋषि सौति, पुराणों में निपुण, बारह वर्ष के यज्ञ के लिए एकत्रित ऋषियों के बीच बैठे थे।",
                sanskrit: "नैमिषारण्ये महर्षिः सौतिः पुराणवित् स्थितः। ऋषिभिः सहितो राजन् द्वादशवर्षसत्रिभिः॥",
                roman: "Naimiṣāraṇye maharṣiḥ sautiḥ purāṇavit sthitaḥ। ṛṣibhiḥ sahito rājan dvādaśavarṣasatribhiḥ॥",
                characters: ['Sauti', 'Sages'],
                themes: ['forest', 'sacrifice', 'gathering'],
                episode: 'introduction',
                edition: 'bori',
                sources: [
                    { name: 'BORI Critical Edition', page: 1, line: 2 },
                    { name: 'Van Buitenen Translation', volume: 1, page: 1 }
                ]
            },
            {
                id: '2.1.1',
                parva: 'sabhaparva',
                adhyaya: 1,
                verse: 1,
                english: "After the Pandavas had lived in the forest for twelve years, they came to the court of King Virata in disguise.",
                hindi: "पांडवों के बारह वर्ष तक वन में रहने के बाद, वे छद्मवेश में राजा विराट के दरबार में आए।",
                sanskrit: "द्वादशवर्षाणि वने वसतां पाण्डवानां ततो विराटनगरे प्रविष्टानां।",
                roman: "Dvādaśavarṣāṇi vane vasatāṃ pāṇḍavānāṃ tato virāṭanagare praviṣṭānāṃ.",
                characters: ['Pandavas', 'Virata'],
                themes: ['exile', 'disguise', 'return'],
                episode: 'virata_parva',
                edition: 'bori',
                sources: [
                    { name: 'BORI Critical Edition', page: 45, line: 1 },
                    { name: 'Ganguli Translation', volume: 4, page: 1 }
                ]
            },
            {
                id: '6.23.1',
                parva: 'bheeshma',
                adhyaya: 23,
                verse: 1,
                english: "Arjuna said: O Krishna, I see assembled here in this field of Kurukshetra my own people, eager to fight.",
                hindi: "अर्जुन ने कहा: हे कृष्ण, मैं कुरुक्षेत्र के इस मैदान में यहाँ एकत्रित अपने ही लोगों को देखता हूँ, युद्ध के लिए उत्सुक।",
                sanskrit: "अर्जुन उवाच। दृष्ट्वेमं स्वजनं कृष्ण युयुत्सुं समुपस्थितम्।",
                roman: "Arjuna uvāca। Dṛṣṭvemaṃ svajanaṃ kṛṣṇa yuyutsuṃ samupasthitam।",
                characters: ['Arjuna', 'Krishna'],
                themes: ['war', 'dilemma', 'family'],
                episode: 'bhagavad_gita',
                edition: 'bori',
                sources: [
                    { name: 'BORI Critical Edition', page: 123, line: 1 },
                    { name: 'Ganguli Translation', volume: 6, page: 23 }
                ]
            },
            {
                id: '6.23.2',
                parva: 'bheeshma',
                adhyaya: 23,
                verse: 2,
                english: "My limbs fail and my mouth is parched, my body quivers and my hair stands on end.",
                hindi: "मेरे अंग कमजोर हो रहे हैं और मेरा मुँह सूख रहा है, मेरा शरीर काँप रहा है और मेरे बाल खड़े हो रहे हैं।",
                sanskrit: "सीदन्ति मम गात्राणि मुखं च परिशुष्यति। वेपथुश्च शरीरे मे रोमहर्षश्च जायते॥",
                roman: "Sīdanti mama gātrāṇi mukhaṃ ca pariśuṣyati। Vepathuśca śarīre me romaharṣaśca jāyate॥",
                characters: ['Arjuna'],
                themes: ['fear', 'anxiety', 'physical_reaction'],
                episode: 'bhagavad_gita',
                edition: 'bori',
                sources: [
                    { name: 'BORI Critical Edition', page: 123, line: 2 },
                    { name: 'Ganguli Translation', volume: 6, page: 23 }
                ]
            }
        ];
    }

    // Initialize character data
    initializeCharacters() {
        return [
            {
                name: 'Yudhishthira',
                aliases: ['Dharmaraja', 'Ajatashatru'],
                description: 'The eldest Pandava, known for his righteousness and truthfulness',
                category: 'pandavas',
                relationships: {
                    father: 'Pandu',
                    mother: 'Kunti',
                    brothers: ['Bhima', 'Arjuna', 'Nakula', 'Sahadeva'],
                    wife: 'Draupadi'
                },
                keyVerses: ['1.1.1', '2.1.1'],
                themes: ['dharma', 'righteousness', 'truth']
            },
            {
                name: 'Arjuna',
                aliases: ['Partha', 'Kiriti', 'Gudakesha'],
                description: 'The third Pandava, greatest archer and hero of the Bhagavad Gita',
                category: 'pandavas',
                relationships: {
                    father: 'Pandu',
                    mother: 'Kunti',
                    brothers: ['Yudhishthira', 'Bhima', 'Nakula', 'Sahadeva'],
                    wife: 'Draupadi',
                    son: 'Abhimanyu'
                },
                keyVerses: ['6.23.1', '6.23.2'],
                themes: ['war', 'dilemma', 'devotion']
            },
            {
                name: 'Krishna',
                aliases: ['Vasudeva', 'Govinda', 'Madhava'],
                description: 'The eighth avatar of Vishnu, charioteer of Arjuna and divine guide',
                category: 'gods',
                relationships: {
                    father: 'Vasudeva',
                    mother: 'Devaki',
                    brother: 'Balarama',
                    cousin: 'Arjuna'
                },
                keyVerses: ['6.23.1'],
                themes: ['divine', 'guidance', 'dharma']
            }
        ];
    }

    // Initialize episode data
    initializeEpisodes() {
        return [
            {
                name: 'Invocation',
                description: 'The opening verses that invoke divine blessings',
                parva: 'adiparva',
                keyVerses: ['1.1.1', '1.1.2'],
                themes: ['divine', 'beginning', 'invocation']
            },
            {
                name: 'Bhagavad Gita',
                description: 'The divine discourse between Krishna and Arjuna on the battlefield',
                parva: 'bheeshma',
                keyVerses: ['6.23.1', '6.23.2'],
                themes: ['dharma', 'duty', 'philosophy', 'war']
            },
            {
                name: 'Virata Parva',
                description: 'The year of living in disguise at King Virata\'s court',
                parva: 'virataparva',
                keyVerses: ['2.1.1'],
                themes: ['exile', 'disguise', 'return']
            }
        ];
    }

    // Initialize theme data
    initializeThemes() {
        return [
            {
                name: 'Dharma',
                description: 'Righteousness, duty, and moral law',
                keyVerses: ['1.1.1', '6.23.1'],
                characters: ['Yudhishthira', 'Krishna'],
                episodes: ['Bhagavad Gita']
            },
            {
                name: 'War',
                description: 'The great war of Kurukshetra',
                keyVerses: ['6.23.1', '6.23.2'],
                characters: ['Arjuna', 'Krishna'],
                episodes: ['Bhagavad Gita']
            },
            {
                name: 'Exile',
                description: 'The thirteen years of exile in the forest',
                keyVerses: ['2.1.1'],
                characters: ['Pandavas'],
                episodes: ['Virata Parva']
            }
        ];
    }

    // Setup event listeners
    setupEventListeners() {
        // Search functionality
        document.getElementById('searchInput').addEventListener('input', (e) => this.handleSearch(e));
        document.getElementById('clearSearch').addEventListener('click', () => this.clearSearch());
        
        // Search type selection
        document.querySelectorAll('input[name="searchType"]').forEach(radio => {
            radio.addEventListener('change', (e) => this.handleSearchTypeChange(e));
        });
        
        // Advanced search
        document.getElementById('advancedSearchToggle').addEventListener('click', () => this.toggleAdvancedSearch());
        document.getElementById('applyFilters').addEventListener('click', () => this.applyFilters());
        document.getElementById('clearFilters').addEventListener('click', () => this.clearFilters());
        
        // Language toggle
        document.getElementById('languageToggle').addEventListener('click', () => this.toggleLanguage());
        
        // Help modal
        document.getElementById('helpBtn').addEventListener('click', () => this.showHelp());
        document.getElementById('closeHelpModal').addEventListener('click', () => this.hideHelp());
        
        // Modal close
        document.getElementById('closeModal').addEventListener('click', () => this.hideVerseModal());
        
        // View toggle
        document.querySelectorAll('.view-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.toggleView(e.target.dataset.view));
        });
        
        // Sort functionality
        document.getElementById('sortBy').addEventListener('change', (e) => this.sortResults(e.target.value));
        
        // Navigation links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => this.handleNavigation(e));
        });
    }

    // Handle search input
    handleSearch(e) {
        const query = e.target.value.toLowerCase();
        const clearBtn = document.getElementById('clearSearch');
        
        clearBtn.style.display = query ? 'block' : 'none';
        
        if (query.length >= 2) {
            this.performSearch(query);
        } else {
            this.clearResults();
        }
    }

    // Perform search based on current search type
    performSearch(query) {
        let results = [];
        
        switch (this.currentSearchType) {
            case 'verse':
                results = this.searchVerses(query);
                break;
            case 'character':
                results = this.searchCharacters(query);
                break;
            case 'episode':
                results = this.searchEpisodes(query);
                break;
            case 'theme':
                results = this.searchThemes(query);
                break;
        }
        
        this.searchResults = results;
        this.displayResults();
        this.addToRecentSearches(query);
    }

    // Search verses
    searchVerses(query) {
        return this.verseData.filter(verse => 
            verse.english.toLowerCase().includes(query) ||
            verse.hindi.includes(query) ||
            verse.sanskrit.includes(query) ||
            verse.roman.toLowerCase().includes(query) ||
            verse.characters.some(char => char.toLowerCase().includes(query)) ||
            verse.themes.some(theme => theme.toLowerCase().includes(query))
        );
    }

    // Search characters
    searchCharacters(query) {
        return this.characters.filter(char => 
            char.name.toLowerCase().includes(query) ||
            char.aliases.some(alias => alias.toLowerCase().includes(query)) ||
            char.description.toLowerCase().includes(query)
        );
    }

    // Search episodes
    searchEpisodes(query) {
        return this.episodes.filter(episode => 
            episode.name.toLowerCase().includes(query) ||
            episode.description.toLowerCase().includes(query) ||
            episode.themes.some(theme => theme.toLowerCase().includes(query))
        );
    }

    // Search themes
    searchThemes(query) {
        return this.themes.filter(theme => 
            theme.name.toLowerCase().includes(query) ||
            theme.description.toLowerCase().includes(query)
        );
    }

    // Display search results
    displayResults() {
        const container = document.getElementById('resultsContainer');
        const noResults = document.getElementById('noResults');
        const resultsCount = document.getElementById('resultsCount');
        
        if (this.searchResults.length === 0) {
            container.style.display = 'none';
            noResults.style.display = 'block';
            resultsCount.textContent = '0 results';
        } else {
            container.style.display = 'flex';
            noResults.style.display = 'none';
            resultsCount.textContent = `${this.searchResults.length} results`;
            
            container.innerHTML = this.searchResults.map(result => this.createResultCard(result)).join('');
        }
    }

    // Create result card based on search type
    createResultCard(result) {
        switch (this.currentSearchType) {
            case 'verse':
                return this.createVerseCard(result);
            case 'character':
                return this.createCharacterCard(result);
            case 'episode':
                return this.createEpisodeCard(result);
            case 'theme':
                return this.createThemeCard(result);
            default:
                return '';
        }
    }

    // Create verse card
    createVerseCard(verse) {
        const languageClass = this.currentLanguage === 'sanskrit' ? 'sanskrit-text' : 
                            this.currentLanguage === 'hindi' ? 'hindi-text' : '';
        
        return `
            <div class="verse-card" onclick="app.showVerseModal('${verse.id}')">
                <div class="verse-header">
                    <span class="verse-reference">${verse.id}</span>
                    <div class="verse-actions">
                        <button class="verse-action-btn" onclick="event.stopPropagation(); app.bookmarkVerse('${verse.id}')">
                            <i class="fas fa-bookmark"></i>
                        </button>
                        <button class="verse-action-btn" onclick="event.stopPropagation(); app.shareVerse('${verse.id}')">
                            <i class="fas fa-share"></i>
                        </button>
                    </div>
                </div>
                <div class="verse-content">
                    <div class="verse-text ${languageClass}">
                        ${this.getVerseText(verse)}
                    </div>
                    <div class="verse-translation">
                        ${verse.english}
                    </div>
                </div>
                <div class="verse-metadata">
                    <span class="metadata-tag">${this.getParvaName(verse.parva)}</span>
                    <span class="metadata-tag">Adhyaya ${verse.adhyaya}</span>
                    <span class="metadata-tag">Verse ${verse.verse}</span>
                </div>
                <div class="verse-characters">
                    ${verse.characters.map(char => `<span class="character-tag">${char}</span>`).join('')}
                </div>
            </div>
        `;
    }

    // Create character card
    createCharacterCard(character) {
        return `
            <div class="verse-card">
                <div class="verse-header">
                    <span class="verse-reference">${character.name}</span>
                </div>
                <div class="verse-content">
                    <div class="verse-text">
                        <strong>Aliases:</strong> ${character.aliases.join(', ')}
                    </div>
                    <div class="verse-translation">
                        ${character.description}
                    </div>
                </div>
                <div class="verse-metadata">
                    <span class="metadata-tag">${character.category}</span>
                </div>
                <div class="verse-characters">
                    ${character.themes.map(theme => `<span class="character-tag">${theme}</span>`).join('')}
                </div>
            </div>
        `;
    }

    // Create episode card
    createEpisodeCard(episode) {
        return `
            <div class="verse-card">
                <div class="verse-header">
                    <span class="verse-reference">${episode.name}</span>
                </div>
                <div class="verse-content">
                    <div class="verse-text">
                        ${episode.description}
                    </div>
                </div>
                <div class="verse-metadata">
                    <span class="metadata-tag">${this.getParvaName(episode.parva)}</span>
                </div>
                <div class="verse-characters">
                    ${episode.themes.map(theme => `<span class="character-tag">${theme}</span>`).join('')}
                </div>
            </div>
        `;
    }

    // Create theme card
    createThemeCard(theme) {
        return `
            <div class="verse-card">
                <div class="verse-header">
                    <span class="verse-reference">${theme.name}</span>
                </div>
                <div class="verse-content">
                    <div class="verse-text">
                        ${theme.description}
                    </div>
                </div>
                <div class="verse-characters">
                    ${theme.characters.map(char => `<span class="character-tag">${char}</span>`).join('')}
                </div>
            </div>
        `;
    }

    // Get verse text based on current language
    getVerseText(verse) {
        switch (this.currentLanguage) {
            case 'sanskrit':
                return verse.sanskrit;
            case 'hindi':
                return verse.hindi;
            default:
                return verse.english;
        }
    }

    // Get parva name
    getParvaName(parva) {
        const parvaNames = {
            'adiparva': 'Adi Parva',
            'sabhaparva': 'Sabha Parva',
            'vanaparva': 'Vana Parva',
            'virataparva': 'Virata Parva',
            'udyogaparva': 'Udyoga Parva',
            'bheeshma': 'Bheeshma Parva',
            'drona': 'Drona Parva',
            'karna': 'Karna Parva',
            'shalya': 'Shalya Parva',
            'sauptika': 'Sauptika Parva',
            'stri': 'Stri Parva',
            'shanti': 'Shanti Parva',
            'anushasana': 'Anushasana Parva',
            'ashvamedhika': 'Ashvamedhika Parva',
            'ashramavasika': 'Ashramavasika Parva',
            'mausala': 'Mausala Parva',
            'mahaprasthanika': 'Mahaprasthanika Parva',
            'svargarohana': 'Svargarohana Parva'
        };
        return parvaNames[parva] || parva;
    }

    // Show verse modal
    showVerseModal(verseId) {
        const verse = this.verseData.find(v => v.id === verseId);
        if (!verse) return;

        const modal = document.getElementById('verseModal');
        const modalTitle = document.getElementById('modalTitle');
        const modalBody = document.getElementById('modalBody');

        modalTitle.textContent = `Verse ${verse.id}`;
        modalBody.innerHTML = this.createVerseModalContent(verse);
        modal.style.display = 'flex';
    }

    // Create verse modal content
    createVerseModalContent(verse) {
        return `
            <div class="verse-detail">
                <div class="verse-languages">
                    <div class="language-section">
                        <h4>English Translation</h4>
                        <p class="verse-text">${verse.english}</p>
                    </div>
                    <div class="language-section">
                        <h4>Hindi Translation</h4>
                        <p class="verse-text hindi-text">${verse.hindi}</p>
                    </div>
                    <div class="language-section">
                        <h4>Sanskrit Original</h4>
                        <p class="verse-text sanskrit-text">${verse.sanskrit}</p>
                        <p class="roman-text">${verse.roman}</p>
                    </div>
                </div>
                <div class="verse-metadata-detail">
                    <h4>Metadata</h4>
                    <div class="metadata-grid">
                        <div class="metadata-item">
                            <strong>Parva:</strong> ${this.getParvaName(verse.parva)}
                        </div>
                        <div class="metadata-item">
                            <strong>Adhyaya:</strong> ${verse.adhyaya}
                        </div>
                        <div class="metadata-item">
                            <strong>Verse:</strong> ${verse.verse}
                        </div>
                        <div class="metadata-item">
                            <strong>Characters:</strong> ${verse.characters.join(', ')}
                        </div>
                        <div class="metadata-item">
                            <strong>Themes:</strong> ${verse.themes.join(', ')}
                        </div>
                    </div>
                </div>
                <div class="verse-sources">
                    <h4>Scholarly Sources</h4>
                    <ul>
                        ${verse.sources.map(source => `
                            <li><strong>${source.name}</strong> - ${source.page ? `Page ${source.page}` : ''}${source.line ? `, Line ${source.line}` : ''}</li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        `;
    }

    // Hide verse modal
    hideVerseModal() {
        document.getElementById('verseModal').style.display = 'none';
    }

    // Toggle language
    toggleLanguage() {
        const languages = ['english', 'hindi', 'sanskrit'];
        const currentIndex = languages.indexOf(this.currentLanguage);
        this.currentLanguage = languages[(currentIndex + 1) % languages.length];
        
        const toggleBtn = document.getElementById('languageToggle');
        const languageNames = { english: 'English', hindi: 'हिंदी', sanskrit: 'संस्कृत' };
        toggleBtn.querySelector('span').textContent = languageNames[this.currentLanguage];
        
        // Refresh current results
        if (this.searchResults.length > 0) {
            this.displayResults();
        }
    }

    // Handle search type change
    handleSearchTypeChange(e) {
        this.currentSearchType = e.target.value;
        const query = document.getElementById('searchInput').value;
        if (query.length >= 2) {
            this.performSearch(query);
        }
    }

    // Toggle advanced search
    toggleAdvancedSearch() {
        const panel = document.getElementById('advancedSearchPanel');
        panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
    }

    // Apply filters
    applyFilters() {
        // Implementation for advanced filtering
        console.log('Applying filters...');
    }

    // Clear filters
    clearFilters() {
        document.getElementById('parvaFilter').value = '';
        document.getElementById('characterFilter').value = '';
        document.getElementById('editionFilter').value = 'bori';
        document.getElementById('startVerse').value = '';
        document.getElementById('endVerse').value = '';
    }

    // Toggle view
    toggleView(view) {
        document.querySelectorAll('.view-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelector(`[data-view="${view}"]`).classList.add('active');
        
        const container = document.getElementById('resultsContainer');
        container.className = `results-container ${view}-view`;
    }

    // Sort results
    sortResults(sortBy) {
        // Implementation for sorting
        console.log('Sorting by:', sortBy);
    }

    // Handle navigation
    handleNavigation(e) {
        e.preventDefault();
        const section = e.target.dataset.section;
        console.log('Navigating to:', section);
    }

    // Show help
    showHelp() {
        document.getElementById('helpModal').style.display = 'flex';
    }

    // Hide help
    hideHelp() {
        document.getElementById('helpModal').style.display = 'none';
    }

    // Clear search
    clearSearch() {
        document.getElementById('searchInput').value = '';
        document.getElementById('clearSearch').style.display = 'none';
        this.clearResults();
    }

    // Clear results
    clearResults() {
        this.searchResults = [];
        this.displayResults();
    }

    // Add to recent searches
    addToRecentSearches(query) {
        if (!this.recentSearches.includes(query)) {
            this.recentSearches.unshift(query);
            this.recentSearches = this.recentSearches.slice(0, 10);
            localStorage.setItem('recentSearches', JSON.stringify(this.recentSearches));
            this.loadRecentSearches();
        }
    }

    // Load recent searches
    loadRecentSearches() {
        const container = document.getElementById('recentSearches');
        container.innerHTML = this.recentSearches.map(search => 
            `<div class="recent-search-item" onclick="app.performSearch('${search}')">${search}</div>`
        ).join('');
    }

    // Populate character filter
    populateCharacterFilter() {
        const select = document.getElementById('characterFilter');
        select.innerHTML = '<option value="">All Characters</option>' +
            this.characters.map(char => `<option value="${char.name}">${char.name}</option>`).join('');
    }

    // Display welcome message
    displayWelcomeMessage() {
        const container = document.getElementById('resultsContainer');
        container.innerHTML = `
            <div class="welcome-message">
                <h3>Welcome to Mahabharat Scholar</h3>
                <p>Search for verses, characters, episodes, or themes from the great Indian epic.</p>
                <p>This app is based on the BORI Critical Edition and includes authentic translations in English, Hindi, and Sanskrit.</p>
            </div>
        `;
    }

    // Bookmark verse
    bookmarkVerse(verseId) {
        console.log('Bookmarking verse:', verseId);
    }

    // Share verse
    shareVerse(verseId) {
        console.log('Sharing verse:', verseId);
    }
}

// Initialize the app
const app = new MahabharatScholar();