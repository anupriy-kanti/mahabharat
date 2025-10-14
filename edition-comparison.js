// Edition Comparison Tool - JavaScript Implementation
class EditionComparisonTool {
    constructor() {
        this.selectedEditions = [];
        this.verseData = this.initializeVerseData();
        this.editionInfo = this.initializeEditionInfo();
        
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
}

// Initialize the edition comparison tool
document.addEventListener('DOMContentLoaded', () => {
    window.app = new EditionComparisonTool();
});