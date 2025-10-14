// Edition Comparison Tool - JavaScript Implementation
class EditionComparisonTool {
    constructor() {
        this.selectedEditions = [];
        this.verseData = this.initializeVerseData();
        this.editionInfo = this.initializeEditionInfo();
        this.searchMode = 'reference';
        this.keywordSuggestions = [];
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.updateSelectedEditions();
        this.updateComparisonStats();
    }

    // Initialize comprehensive verse data with multiple editions
    initializeVerseData() {
        return {
            '1.1.1': {
                bori: {
                    text: 'ॐ नमो नारायणाय नराय च पुरुषोत्तमाय च सरस्वत्यै च जय उच्यते।',
                    roman: 'Om namo nārāyaṇāya narāya ca puruṣottamāya ca sarasvatyai ca jaya ucyate.',
                    translation: 'Om! Having bowed down to Narayana and Nara, the most exalted male being, and also to the goddess Saraswati, must the word Jaya be uttered.',
                    variants: [],
                    notes: 'Standard invocation verse in BORI Critical Edition'
                },
                vulgate: {
                    text: 'ॐ नमो नारायणाय नराय च पुरुषोत्तमाय च सरस्वत्यै च जय उच्यते।',
                    roman: 'Om namo nārāyaṇāya narāya ca puruṣottamāya ca sarasvatyai ca jaya ucyate.',
                    translation: 'Om! Having bowed down to Narayana and Nara, the most exalted male being, and also to the goddess Saraswati, must the word Jaya be uttered.',
                    variants: [],
                    notes: 'Identical to BORI in this verse'
                },
                bengali: {
                    text: 'ॐ नमो नारायणाय नराय च पुरुषोत्तमाय च सरस्वत्यै च जय उच्यते।',
                    roman: 'Om namo nārāyaṇāya narāya ca puruṣottamāya ca sarasvatyai ca jaya ucyate.',
                    translation: 'Om! Having bowed down to Narayana and Nara, the most exalted male being, and also to the goddess Saraswati, must the word Jaya be uttered.',
                    variants: [],
                    notes: 'Consistent across all major recensions'
                },
                southern: {
                    text: 'ॐ नमो नारायणाय नराय च पुरुषोत्तमाय च सरस्वत्यै च जय उच्यते।',
                    roman: 'Om namo nārāyaṇāya narāya ca puruṣottamāya ca sarasvatyai ca jaya ucyate.',
                    translation: 'Om! Having bowed down to Narayana and Nara, the most exalted male being, and also to the goddess Saraswati, must the word Jaya be uttered.',
                    variants: [],
                    notes: 'No significant variants in Southern recension'
                },
                ganguli: {
                    text: 'Om! Having bowed down to Narayana and Nara, the most exalted male being, and also to the goddess Saraswati, must the word Jaya be uttered.',
                    translation: 'Om! Having bowed down to Narayana and Nara, the most exalted male being, and also to the goddess Saraswati, must the word Jaya be uttered.',
                    variants: [],
                    notes: 'Ganguli translation based on Vulgate edition'
                },
                'van-buitenen': {
                    text: 'Om! Having bowed down to Narayana and Nara, the most exalted male being, and also to the goddess Saraswati, must the word Jaya be uttered.',
                    translation: 'Om! Having bowed down to Narayana and Nara, the most exalted male being, and also to the goddess Saraswati, must the word Jaya be uttered.',
                    variants: [],
                    notes: 'Van Buitenen translation based on BORI Critical Edition'
                }
            },
            '6.23.1': {
                bori: {
                    text: 'अर्जुन उवाच। दृष्ट्वेमं स्वजनं कृष्ण युयुत्सुं समुपस्थितम्।',
                    roman: 'Arjuna uvāca। Dṛṣṭvemaṃ svajanaṃ kṛṣṇa yuyutsuṃ samupasthitam।',
                    translation: 'Arjuna said: O Krishna, I see assembled here in this field of Kurukshetra my own people, eager to fight.',
                    variants: [],
                    notes: 'BORI Critical Edition - Bhagavad Gita 2.1'
                },
                vulgate: {
                    text: 'अर्जुन उवाच। दृष्ट्वेमं स्वजनं कृष्ण युयुत्सुं समुपस्थितम्।',
                    roman: 'Arjuna uvāca। Dṛṣṭvemaṃ svajanaṃ kṛṣṇa yuyutsuṃ samupasthitam।',
                    translation: 'Arjuna said: O Krishna, I see assembled here in this field of Kurukshetra my own people, eager to fight.',
                    variants: [],
                    notes: 'Vulgate edition - identical to BORI'
                },
                bengali: {
                    text: 'अर्जुन उवाच। दृष्ट्वेमं स्वजनं कृष्ण युयुत्सुं समुपस्थितम्।',
                    roman: 'Arjuna uvāca। Dṛṣṭvemaṃ svajanaṃ kṛṣṇa yuyutsuṃ samupasthitam।',
                    translation: 'Arjuna said: O Krishna, I see assembled here in this field of Kurukshetra my own people, eager to fight.',
                    variants: [],
                    notes: 'Bengali recension - consistent with BORI'
                },
                southern: {
                    text: 'अर्जुन उवाच। दृष्ट्वेमं स्वजनं कृष्ण युयुत्सुं समुपस्थितम्।',
                    roman: 'Arjuna uvāca। Dṛṣṭvemaṃ svajanaṃ kṛṣṇa yuyutsuṃ samupasthitam।',
                    translation: 'Arjuna said: O Krishna, I see assembled here in this field of Kurukshetra my own people, eager to fight.',
                    variants: [],
                    notes: 'Southern recension - no variants'
                },
                ganguli: {
                    text: 'Arjuna said: O Krishna, I see assembled here in this field of Kurukshetra my own people, eager to fight.',
                    translation: 'Arjuna said: O Krishna, I see assembled here in this field of Kurukshetra my own people, eager to fight.',
                    variants: [],
                    notes: 'Ganguli translation - based on Vulgate'
                },
                'van-buitenen': {
                    text: 'Arjuna said: O Krishna, I see assembled here in this field of Kurukshetra my own people, eager to fight.',
                    translation: 'Arjuna said: O Krishna, I see assembled here in this field of Kurukshetra my own people, eager to fight.',
                    variants: [],
                    notes: 'Van Buitenen translation - based on BORI'
                }
            }
        };
    }

    // Initialize edition information
    initializeEditionInfo() {
        return {
            bori: {
                name: 'BORI Critical Edition',
                fullName: 'Bhandarkar Oriental Research Institute Critical Edition',
                year: '1966-1972',
                language: 'Sanskrit',
                parvas: 19,
                description: 'The most authoritative scholarly edition, based on collation of multiple manuscripts',
                editor: 'V.S. Sukthankar et al.',
                status: 'primary'
            },
            vulgate: {
                name: 'Vulgate Edition',
                fullName: 'Traditional Vulgate Recension',
                year: '19th Century',
                language: 'Sanskrit',
                parvas: 18,
                description: 'Traditional recension widely used in North India, includes many interpolations',
                editor: 'Various',
                status: 'reference'
            },
            bengali: {
                name: 'Bengali Edition',
                fullName: 'Eastern Recension (Bengali)',
                year: '19th Century',
                language: 'Sanskrit',
                parvas: 18,
                description: 'Eastern recension with unique textual variants and regional characteristics',
                editor: 'Various',
                status: 'regional'
            },
            southern: {
                name: 'Southern Recension',
                fullName: 'Southern Indian Recension',
                year: '19th Century',
                language: 'Sanskrit',
                parvas: 18,
                description: 'Southern Indian textual tradition with distinct characteristics',
                editor: 'Various',
                status: 'regional'
            },
            ganguli: {
                name: 'Ganguli Translation',
                fullName: 'Kisari Mohan Ganguli English Translation',
                year: '1883-1896',
                language: 'English',
                parvas: 18,
                description: 'Comprehensive English translation based on Vulgate edition',
                editor: 'Kisari Mohan Ganguli',
                status: 'translation'
            },
            'van-buitenen': {
                name: 'Van Buitenen Translation',
                fullName: 'J.A.B. van Buitenen English Translation',
                year: '1973-1978',
                language: 'English',
                parvas: 5,
                description: 'Scholarly English translation based on BORI Critical Edition (incomplete)',
                editor: 'J.A.B. van Buitenen',
                status: 'translation'
            }
        };
    }

    setupEventListeners() {
        // Edition selection
        document.querySelectorAll('.edition-card').forEach(card => {
            card.addEventListener('click', (e) => this.toggleEditionSelection(e.currentTarget.dataset.edition));
        });

        // Comparison controls
        document.getElementById('addEdition').addEventListener('click', () => this.showEditionSelector());
        document.getElementById('compareEditions').addEventListener('click', () => this.showComparisonInterface());
        document.getElementById('loadVerse').addEventListener('click', () => this.loadVerseComparison());
        document.getElementById('verseReference').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.loadVerseComparison();
        });
        
        // Search mode tabs
        document.querySelectorAll('.search-tab').forEach(tab => {
            tab.addEventListener('click', (e) => this.switchSearchMode(e.target.dataset.mode));
        });
        
        // Keyword search
        document.getElementById('searchKeywords').addEventListener('click', () => this.searchByKeywords());
        document.getElementById('verseKeywords').addEventListener('input', (e) => this.handleKeywordInput(e));
        document.getElementById('verseKeywords').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.searchByKeywords();
        });
    }

    toggleEditionSelection(edition) {
        const card = document.querySelector(`[data-edition="${edition}"]`);
        
        if (this.selectedEditions.includes(edition)) {
            this.selectedEditions = this.selectedEditions.filter(e => e !== edition);
            card.classList.remove('selected');
        } else {
            this.selectedEditions.push(edition);
            card.classList.add('selected');
        }
        
        this.updateSelectedEditions();
        this.updateComparisonStats();
        
        if (this.selectedEditions.length >= 2) {
            this.showComparisonInterface();
        }
    }

    showEditionSelector() {
        // Scroll to edition selector
        document.querySelector('.edition-selector').scrollIntoView({ behavior: 'smooth' });
    }

    showComparisonInterface() {
        if (this.selectedEditions.length >= 2) {
            document.getElementById('comparisonInterface').style.display = 'block';
            document.getElementById('comparisonInterface').scrollIntoView({ behavior: 'smooth' });
        } else {
            alert('Please select at least 2 editions to compare');
        }
    }

    loadVerseComparison() {
        const verseRef = document.getElementById('verseReference').value.trim();
        if (!verseRef) {
            alert('Please enter a verse reference');
            return;
        }

        if (!this.verseData[verseRef]) {
            alert('Verse not found in database. Available verses: ' + Object.keys(this.verseData).join(', '));
            return;
        }

        this.displayVerseComparison(verseRef);
    }

    displayVerseComparison(verseRef) {
        const resultsContainer = document.getElementById('comparisonResults');
        const verseData = this.verseData[verseRef];
        
        let html = `<h3>Comparison for Verse ${verseRef}</h3>`;
        
        this.selectedEditions.forEach(edition => {
            if (verseData[edition]) {
                const editionInfo = this.editionInfo[edition];
                const verse = verseData[edition];
                
                html += `
                    <div class="edition-comparison">
                        <div class="edition-comparison-header">
                            <div class="edition-name">${editionInfo.name}</div>
                            <div class="edition-meta-info">
                                <span>${editionInfo.year}</span>
                                <span>${editionInfo.language}</span>
                                <span>${editionInfo.status}</span>
                            </div>
                        </div>
                        <div class="verse-content-comparison">
                            ${verse.text ? `
                                <div class="verse-text-comparison sanskrit-text">${verse.text}</div>
                                <div class="verse-translation-comparison roman-text">${verse.roman}</div>
                            ` : ''}
                            <div class="verse-translation-comparison">${verse.translation}</div>
                        </div>
                        <div class="variant-notes">
                            <h4>Scholarly Notes</h4>
                            <p>${verse.notes}</p>
                            ${verse.variants && verse.variants.length > 0 ? `
                                <ul class="variant-list">
                                    ${verse.variants.map(variant => `<li>${variant}</li>`).join('')}
                                </ul>
                            ` : ''}
                        </div>
                    </div>
                `;
            }
        });
        
        resultsContainer.innerHTML = html;
    }

    updateSelectedEditions() {
        const container = document.getElementById('selectedEditions');
        
        if (this.selectedEditions.length === 0) {
            container.innerHTML = '<p class="no-selection">No editions selected</p>';
        } else {
            container.innerHTML = this.selectedEditions.map(edition => {
                const info = this.editionInfo[edition];
                return `
                    <div class="selected-edition-item">
                        <span class="selected-edition-name">${info.name}</span>
                        <button class="remove-edition" onclick="app.removeEdition('${edition}')">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                `;
            }).join('');
        }
    }

    removeEdition(edition) {
        this.selectedEditions = this.selectedEditions.filter(e => e !== edition);
        document.querySelector(`[data-edition="${edition}"]`).classList.remove('selected');
        this.updateSelectedEditions();
        this.updateComparisonStats();
    }

    updateComparisonStats() {
        document.getElementById('selectedCount').textContent = this.selectedEditions.length;
        
        // Calculate variant count (simplified)
        const variantCount = this.selectedEditions.length > 1 ? 
            this.selectedEditions.length * 2 : 0;
        document.getElementById('variantCount').textContent = variantCount;
        
        // Calculate agreement level
        const agreementLevel = this.selectedEditions.length >= 2 ? 
            'High' : '-';
        document.getElementById('agreementLevel').textContent = agreementLevel;
    }

    // Switch search mode
    switchSearchMode(mode) {
        this.searchMode = mode;
        
        // Update tab appearance
        document.querySelectorAll('.search-tab').forEach(tab => {
            tab.classList.toggle('active', tab.dataset.mode === mode);
        });
        
        // Show/hide appropriate input
        document.getElementById('referenceMode').style.display = mode === 'reference' ? 'flex' : 'none';
        document.getElementById('keywordMode').style.display = mode === 'keyword' ? 'flex' : 'none';
        
        // Clear suggestions
        this.hideKeywordSuggestions();
    }

    // Handle keyword input
    handleKeywordInput(e) {
        const query = e.target.value.toLowerCase();
        if (query.length >= 2) {
            this.showKeywordSuggestions(query);
        } else {
            this.hideKeywordSuggestions();
        }
    }

    // Show keyword suggestions
    showKeywordSuggestions(query) {
        this.keywordSuggestions = this.generateKeywordSuggestions(query);
        this.renderKeywordSuggestions();
    }

    // Generate keyword suggestions
    generateKeywordSuggestions(query) {
        const suggestions = [];
        
        // Search through all verses for matching keywords
        Object.keys(this.verseData).forEach(verseId => {
            const verse = this.verseData[verseId];
            
            // Check English translation
            if (verse.english.toLowerCase().includes(query)) {
                suggestions.push({
                    verseId: verseId,
                    title: `Verse ${verseId}`,
                    subtitle: verse.english.substring(0, 80) + '...',
                    matchType: 'English',
                    parva: this.getParvaName(verse.parva)
                });
            }
            
            // Check Sanskrit roman
            if (verse.roman && verse.roman.toLowerCase().includes(query)) {
                suggestions.push({
                    verseId: verseId,
                    title: `Verse ${verseId}`,
                    subtitle: verse.roman.substring(0, 80) + '...',
                    matchType: 'Sanskrit',
                    parva: this.getParvaName(verse.parva)
                });
            }
            
            // Check Hindi
            if (verse.hindi && verse.hindi.includes(query)) {
                suggestions.push({
                    verseId: verseId,
                    title: `Verse ${verseId}`,
                    subtitle: verse.hindi.substring(0, 80) + '...',
                    matchType: 'Hindi',
                    parva: this.getParvaName(verse.parva)
                });
            }
            
            // Check characters
            if (verse.characters.some(char => char.toLowerCase().includes(query))) {
                suggestions.push({
                    verseId: verseId,
                    title: `Verse ${verseId}`,
                    subtitle: `Characters: ${verse.characters.join(', ')}`,
                    matchType: 'Character',
                    parva: this.getParvaName(verse.parva)
                });
            }
        });
        
        // Remove duplicates and limit results
        const uniqueSuggestions = suggestions.filter((suggestion, index, self) => 
            index === self.findIndex(s => s.verseId === suggestion.verseId)
        );
        
        return uniqueSuggestions.slice(0, 8);
    }

    // Render keyword suggestions
    renderKeywordSuggestions() {
        const container = document.getElementById('keywordSuggestions');
        
        if (this.keywordSuggestions.length === 0) {
            container.style.display = 'none';
            return;
        }
        
        container.innerHTML = this.keywordSuggestions.map(suggestion => `
            <div class="keyword-suggestion-item" onclick="app.selectKeywordSuggestion('${suggestion.verseId}')">
                <div class="keyword-suggestion-title">${suggestion.title}</div>
                <div class="keyword-suggestion-subtitle">${suggestion.subtitle}</div>
                <div class="keyword-suggestion-subtitle">${suggestion.matchType} • ${suggestion.parva}</div>
            </div>
        `).join('');
        
        container.style.display = 'block';
    }

    // Hide keyword suggestions
    hideKeywordSuggestions() {
        document.getElementById('keywordSuggestions').style.display = 'none';
    }

    // Select keyword suggestion
    selectKeywordSuggestion(verseId) {
        document.getElementById('verseKeywords').value = verseId;
        this.hideKeywordSuggestions();
        this.loadVerseComparison(verseId);
    }

    // Search by keywords
    searchByKeywords() {
        const query = document.getElementById('verseKeywords').value.trim();
        if (!query) {
            alert('Please enter keywords to search');
            return;
        }
        
        // If it's a verse reference, load directly
        if (this.verseData[query]) {
            this.loadVerseComparison(query);
            return;
        }
        
        // Otherwise search for matching verses
        const matchingVerses = this.generateKeywordSuggestions(query.toLowerCase());
        if (matchingVerses.length === 0) {
            alert('No verses found matching your keywords');
            return;
        }
        
        if (matchingVerses.length === 1) {
            this.loadVerseComparison(matchingVerses[0].verseId);
        } else {
            // Show multiple results
            this.showMultipleVerseResults(matchingVerses);
        }
    }

    // Show multiple verse results
    showMultipleVerseResults(verses) {
        const container = document.getElementById('comparisonResults');
        container.innerHTML = `
            <h3>Multiple verses found for your keywords:</h3>
            <div class="verse-selection-list">
                ${verses.map(verse => `
                    <div class="verse-selection-item" onclick="app.loadVerseComparison('${verse.verseId}')">
                        <div class="verse-selection-title">${verse.title}</div>
                        <div class="verse-selection-subtitle">${verse.subtitle}</div>
                        <div class="verse-selection-meta">${verse.matchType} • ${verse.parva}</div>
                    </div>
                `).join('')}
            </div>
        `;
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
            'svargarohana': 'Svargarohana Parva',
            'harivamsha': 'Harivamsha'
        };
        return parvaNames[parva] || parva;
    }
}

// Initialize the edition comparison tool
document.addEventListener('DOMContentLoaded', () => {
    window.app = new EditionComparisonTool();
});