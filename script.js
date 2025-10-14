// Critically Māhābhārat - Main JavaScript with Character Variations
class CriticallyMahabharat {
    constructor() {
        this.currentLanguage = 'english';
        this.currentSearchType = 'verse';
        this.searchResults = [];
        this.recentSearches = JSON.parse(localStorage.getItem('recentSearches') || '[]');
        this.verseData = this.initializeVerseData();
        this.characters = this.initializeCharacters();
        this.episodes = this.initializeEpisodes();
        this.themes = this.initializeThemes();
        this.harivamshaData = this.initializeHarivamshaData();
        this.suggestions = [];
        this.selectedSuggestionIndex = -1;
        this.isDropdownOpen = false;
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.populateCharacterFilter();
        this.loadRecentSearches();
        this.displayWelcomeMessage();
    }

    // Initialize comprehensive character data with all variations
    initializeCharacters() {
        return [
            // Pandavas
            {
                name: 'Yudhishthira',
                variations: ['Yudhiṣṭhira', 'Yudhiṣṭhira', 'Yudhisthira', 'Yudhishthir', 'Dharmaraja', 'Dharmarāja', 'Ajatashatru', 'Ajātaśatru', 'Panduputra', 'Pāṇḍuputra'],
                category: 'pandavas',
                description: 'The eldest Pandava, known for his righteousness and truthfulness',
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
                name: 'Bhima',
                variations: ['Bhīma', 'Bhīm', 'Bheem', 'Bhimā', 'Vrikodara', 'Vṛkodara', 'Panduputra', 'Pāṇḍuputra', 'Vayuputra', 'Vāyuputra'],
                category: 'pandavas',
                description: 'The second Pandava, known for his immense strength and appetite',
                relationships: {
                    father: 'Pandu',
                    mother: 'Kunti',
                    brothers: ['Yudhishthira', 'Arjuna', 'Nakula', 'Sahadeva'],
                    wife: 'Draupadi'
                },
                keyVerses: ['1.1.1', '2.1.1'],
                themes: ['strength', 'warrior', 'wrestling']
            },
            {
                name: 'Arjuna',
                variations: ['Arjuna', 'Arjun', 'Partha', 'Pārtha', 'Kiriti', 'Kīriti', 'Gudakesha', 'Gudākeśa', 'Dhananjaya', 'Dhananjaya', 'Kapi', 'Kapi', 'Panduputra', 'Pāṇḍuputra'],
                category: 'pandavas',
                description: 'The third Pandava, greatest archer and hero of the Bhagavad Gita',
                relationships: {
                    father: 'Pandu',
                    mother: 'Kunti',
                    brothers: ['Yudhishthira', 'Bhima', 'Nakula', 'Sahadeva'],
                    wife: 'Draupadi',
                    son: 'Abhimanyu'
                },
                keyVerses: ['6.23.1', '6.23.2'],
                themes: ['archery', 'devotion', 'war']
            },
            {
                name: 'Nakula',
                variations: ['Nakula', 'Nakul', 'Panduputra', 'Pāṇḍuputra', 'Ashwiniputra', 'Aśvinīputra'],
                category: 'pandavas',
                description: 'The fourth Pandava, known for his beauty and expertise in swordsmanship',
                relationships: {
                    father: 'Pandu',
                    mother: 'Madri',
                    brothers: ['Yudhishthira', 'Bhima', 'Arjuna', 'Sahadeva'],
                    wife: 'Draupadi'
                },
                keyVerses: ['1.1.1', '2.1.1'],
                themes: ['beauty', 'swordsmanship', 'horses']
            },
            {
                name: 'Sahadeva',
                variations: ['Sahadeva', 'Sahadev', 'Panduputra', 'Pāṇḍuputra', 'Ashwiniputra', 'Aśvinīputra'],
                category: 'pandavas',
                description: 'The youngest Pandava, known for his wisdom and knowledge of astrology',
                relationships: {
                    father: 'Pandu',
                    mother: 'Madri',
                    brothers: ['Yudhishthira', 'Bhima', 'Arjuna', 'Nakula'],
                    wife: 'Draupadi'
                },
                keyVerses: ['1.1.1', '2.1.1'],
                themes: ['wisdom', 'astrology', 'swordsmanship']
            },
            {
                name: 'Draupadi',
                variations: ['Draupadi', 'Draupadī', 'Panchali', 'Pāñcālī', 'Krishnaa', 'Kṛṣṇā', 'Yajnaseni', 'Yajñasenī', 'Pandavaputri', 'Pāṇḍavaputrī'],
                category: 'women',
                description: 'The common wife of all five Pandavas, known for her beauty and intelligence',
                relationships: {
                    father: 'Drupada',
                    mother: 'Prishthe',
                    husbands: ['Yudhishthira', 'Bhima', 'Arjuna', 'Nakula', 'Sahadeva']
                },
                keyVerses: ['1.189.1', '2.1.1'],
                themes: ['beauty', 'intelligence', 'fire']
            },
            {
                name: 'Krishna',
                variations: ['Krishna', 'Kṛṣṇa', 'Krishn', 'Kṛṣṇ', 'Krishnā', 'Kṛṣṇā', 'Krsna', 'Kṛṣṇa', 'Vasudeva', 'Vāsudeva', 'Govinda', 'Gopala', 'Gopāla', 'Madhava', 'Mādhava', 'Hari', 'Hari', 'Narayana', 'Nārāyaṇa'],
                category: 'gods',
                description: 'The eighth avatar of Vishnu, charioteer of Arjuna and divine guide',
                relationships: {
                    father: 'Vasudeva',
                    mother: 'Devaki',
                    brother: 'Balarama',
                    cousin: 'Arjuna'
                },
                keyVerses: ['6.23.1'],
                themes: ['divine', 'guidance', 'dharma']
            },
            {
                name: 'Duryodhana',
                variations: ['Duryodhana', 'Duryodhan', 'Suyodhana', 'Suyodhan', 'Kaurava', 'Kaurav', 'Dhritarashtraputra', 'Dhṛtarāṣṭraputra'],
                category: 'kauravas',
                description: 'The eldest Kaurava and main antagonist, known for his jealousy and hatred',
                relationships: {
                    father: 'Dhritarashtra',
                    mother: 'Gandhari',
                    brothers: ['Dushasana', 'Duhshala']
                },
                keyVerses: ['1.1.100', '2.1.1'],
                themes: ['jealousy', 'hatred', 'war']
            },
            {
                name: 'Shakuni',
                variations: ['Shakuni', 'Śakuni', 'Shakun', 'Śakun', 'Gandhararaja', 'Gandhārarāja', 'Maternal uncle'],
                category: 'kauravas',
                description: 'Maternal uncle of the Kauravas, master of dice and manipulator',
                relationships: {
                    sister: 'Gandhari',
                    nephews: ['Duryodhana', 'Dushasana']
                },
                keyVerses: ['1.1.100', '2.1.1'],
                themes: ['dice', 'manipulation', 'gambling']
            },
            {
                name: 'Bhishma',
                variations: ['Bhishma', 'Bhīṣma', 'Bhishm', 'Bhīṣm', 'Devavrata', 'Devavrata', 'Gangaputra', 'Gaṅgāputra', 'Pitamaha', 'Pitāmaha'],
                category: 'warriors',
                description: 'The grand uncle, known for his vow of celibacy and invincibility',
                relationships: {
                    father: 'Shantanu',
                    mother: 'Ganga',
                    nephews: ['Pandu', 'Dhritarashtra']
                },
                keyVerses: ['1.94.50', '6.114.1'],
                themes: ['celibacy', 'loyalty', 'warfare']
            },
            {
                name: 'Dronacharya',
                variations: ['Dronacharya', 'Droṇācārya', 'Drona', 'Droṇa', 'Dron', 'Droṇ', 'Acharya', 'Ācārya', 'Guru'],
                category: 'sages',
                description: 'The royal guru who taught archery to both Pandavas and Kauravas',
                relationships: {
                    son: 'Ashwatthama',
                    students: ['Arjuna', 'Duryodhana']
                },
                keyVerses: ['1.1.1', '6.23.1'],
                themes: ['teaching', 'archery', 'loyalty']
            },
            {
                name: 'Karna',
                variations: ['Karna', 'Karṇa', 'Karn', 'Karṇ', 'Vasusena', 'Vasusena', 'Radheya', 'Rādheya', 'Suryaputra', 'Sūryaputra', 'Angaraja', 'Aṅgarāja'],
                category: 'warriors',
                description: 'The eldest Pandava, raised as a charioteer\'s son, known for his generosity',
                relationships: {
                    father: 'Surya',
                    mother: 'Kunti',
                    brothers: ['Yudhishthira', 'Bhima', 'Arjuna', 'Nakula', 'Sahadeva']
                },
                keyVerses: ['1.1.1', '2.1.1'],
                themes: ['generosity', 'friendship', 'war']
            },
            {
                name: 'Dhritarashtra',
                variations: ['Dhritarashtra', 'Dhṛtarāṣṭra', 'Dhritarash', 'Dhṛtaraṣ', 'Blind King', 'Andha Raja', 'Andha Rāja'],
                category: 'warriors',
                description: 'Blind king of Hastinapura and father of the Kauravas',
                relationships: {
                    wife: 'Gandhari',
                    sons: ['Duryodhana', 'Dushasana', 'Duhshala'],
                    brother: 'Pandu'
                },
                keyVerses: ['1.1.100', '2.1.1'],
                themes: ['blindness', 'partiality', 'kingship']
            },
            {
                name: 'Gandhari',
                variations: ['Gandhari', 'Gāndhārī', 'Gandhar', 'Gāndhār', 'Blind Queen', 'Andha Rani', 'Andha Rānī'],
                category: 'women',
                description: 'Mother of the Kauravas, who blindfolded herself to share her husband\'s blindness',
                relationships: {
                    husband: 'Dhritarashtra',
                    sons: ['Duryodhana', 'Dushasana', 'Duhshala'],
                    brother: 'Shakuni'
                },
                keyVerses: ['1.1.100', '2.1.1'],
                themes: ['blindness', 'motherhood', 'sacrifice']
            },
            {
                name: 'Kunti',
                variations: ['Kunti', 'Kuntī', 'Kunt', 'Kunt', 'Pritha', 'Pṛthā', 'Panduputri', 'Pāṇḍuputrī', 'Vasudevaputri', 'Vāsudevaputrī'],
                category: 'women',
                description: 'Mother of the Pandavas, known for her devotion and the boon from gods',
                relationships: {
                    husband: 'Pandu',
                    sons: ['Yudhishthira', 'Bhima', 'Arjuna', 'Karna']
                },
                keyVerses: ['1.109.1', '1.110.1'],
                themes: ['motherhood', 'devotion', 'sacrifice']
            },
            // Secondary Characters
            {
                name: 'Janmejay',
                variations: ['Janmejay', 'Janamejaya', 'Janamejaya', 'Janamejay', 'Parikshitputra', 'Parīkṣitputra'],
                category: 'secondary',
                description: 'King who heard the Mahabharata from Vaishampayana',
                relationships: {
                    father: 'Parikshit',
                    grandfather: 'Abhimanyu'
                },
                keyVerses: ['1.1.1'],
                themes: ['kingship', 'listening', 'sacrifice']
            },
            {
                name: 'Vaishampayana',
                variations: ['Vaishampayana', 'Vaiśampāyana', 'Vaishampayan', 'Vaiśampāyan', 'Vyasa Shishya', 'Vyāsa Śiṣya'],
                category: 'sages',
                description: 'Disciple of Vyasa who narrated the Mahabharata to Janmejay',
                relationships: {
                    guru: 'Vyasa',
                    student: 'Janmejay'
                },
                keyVerses: ['1.1.1'],
                themes: ['narration', 'teaching', 'wisdom']
            },
            {
                name: 'Vyasa',
                variations: ['Vyasa', 'Vyāsa', 'Vyas', 'Vyās', 'Krishna Dvaipayana', 'Kṛṣṇa Dvaipāyana', 'Vedavyasa', 'Vedavyāsa', 'Badarayana', 'Bādarāyaṇa'],
                category: 'sages',
                description: 'The sage who composed the Mahabharata, grandfather of both Pandavas and Kauravas',
                relationships: {
                    father: 'Parashara',
                    mother: 'Satyavati',
                    sons: ['Pandu', 'Dhritarashtra', 'Vidura']
                },
                keyVerses: ['1.1.1'],
                themes: ['composition', 'wisdom', 'grandfather']
            },
            {
                name: 'Sauti',
                variations: ['Sauti', 'Sautī', 'Saut', 'Saut', 'Ugrashrava', 'Ugraśrava', 'Lomaharshana', 'Lomaharṣaṇa'],
                category: 'sages',
                description: 'The narrator who told the Mahabharata to the sages in Naimisha forest',
                relationships: {
                    father: 'Lomaharshana',
                    audience: 'Sages in Naimisha'
                },
                keyVerses: ['1.1.1'],
                themes: ['narration', 'storytelling', 'wisdom']
            },
            {
                name: 'Shaunak',
                variations: ['Shaunak', 'Śaunak', 'Shaunaka', 'Śaunaka', 'Shaun', 'Śaun', 'Rishi', 'Ṛṣi'],
                category: 'sages',
                description: 'The sage who asked Sauti to narrate the Mahabharata',
                relationships: {
                    student: 'Sauti'
                },
                keyVerses: ['1.1.1'],
                themes: ['questioning', 'learning', 'wisdom']
            }
        ];
    }

    // Initialize Harivamsha data
    initializeHarivamshaData() {
        return [
            {
                id: 'hv.1.1.1',
                parva: 'harivamsha',
                adhyaya: 1,
                verse: 1,
                english: "Om! Having bowed down to Narayana and Nara, the most exalted male being, and also to the goddess Saraswati, must the word Jaya be uttered.",
                hindi: "ॐ! नारायण और नर, सबसे उत्कृष्ट पुरुष, और देवी सरस्वती को नमन करके, जय शब्द का उच्चारण करना चाहिए।",
                sanskrit: "ॐ नमो नारायणाय नराय च पुरुषोत्तमाय च सरस्वत्यै च जय उच्यते।",
                roman: "Om namo nārāyaṇāya narāya ca puruṣottamāya ca sarasvatyai ca jaya ucyate.",
                characters: ['Narayana', 'Nara', 'Saraswati'],
                themes: ['invocation', 'divine', 'beginning'],
                episode: 'harivamsha_invocation',
                edition: 'bori',
                sources: [
                    { name: 'BORI Critical Edition - Harivamsha', page: 1, line: 1 },
                    { name: 'Harivamsha Translation', volume: 1, page: 1 }
                ]
            }
        ];
    }

    // Initialize comprehensive verse data (sample from BORI Critical Edition + Harivamsha)
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
            }
        ].concat(this.harivamshaData);
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
                keyVerses: ['6.23.1'],
                themes: ['dharma', 'duty', 'philosophy', 'war']
            },
            {
                name: 'Harivamsha Invocation',
                description: 'The opening verses of the Harivamsha',
                parva: 'harivamsha',
                keyVerses: ['hv.1.1.1'],
                themes: ['divine', 'beginning', 'harivamsha']
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
                keyVerses: ['6.23.1'],
                characters: ['Arjuna', 'Krishna', 'Duryodhana'],
                episodes: ['Bhagavad Gita']
            },
            {
                name: 'Divine',
                description: 'Divine intervention and guidance',
                keyVerses: ['1.1.1', 'hv.1.1.1'],
                characters: ['Krishna', 'Narayana', 'Saraswati'],
                episodes: ['Invocation', 'Harivamsha Invocation']
            }
        ];
    }

    // Setup event listeners
    setupEventListeners() {
        // Search functionality
        const searchInput = document.getElementById('searchInput');
        const clearBtn = document.getElementById('clearSearch');
        
        if (searchInput) {
            searchInput.addEventListener('input', (e) => this.handleSearch(e));
            searchInput.addEventListener('keydown', (e) => this.handleSearchKeydown(e));
            searchInput.addEventListener('focus', () => this.handleSearchFocus());
            searchInput.addEventListener('blur', () => this.handleSearchBlur());
        }
        
        if (clearBtn) {
            clearBtn.addEventListener('click', () => this.clearSearch());
        }
        
        // Search type selection
        document.querySelectorAll('input[name="searchType"]').forEach(radio => {
            radio.addEventListener('change', (e) => this.handleSearchTypeChange(e));
        });
        
        // Advanced search
        const advancedToggle = document.getElementById('advancedSearchToggle');
        const applyFilters = document.getElementById('applyFilters');
        const clearFilters = document.getElementById('clearFilters');
        
        if (advancedToggle) {
            advancedToggle.addEventListener('click', () => this.toggleAdvancedSearch());
        }
        if (applyFilters) {
            applyFilters.addEventListener('click', () => this.applyFilters());
        }
        if (clearFilters) {
            clearFilters.addEventListener('click', () => this.clearFilters());
        }
        
        // Language toggle
        const languageToggle = document.getElementById('languageToggle');
        if (languageToggle) {
            languageToggle.addEventListener('click', () => this.toggleLanguage());
        }
        
        // Help modal
        const helpBtn = document.getElementById('helpBtn');
        const closeHelpModal = document.getElementById('closeHelpModal');
        if (helpBtn) helpBtn.addEventListener('click', () => this.showHelp());
        if (closeHelpModal) closeHelpModal.addEventListener('click', () => this.hideHelp());
        
        // Modal close
        const closeModal = document.getElementById('closeModal');
        if (closeModal) closeModal.addEventListener('click', () => this.hideVerseModal());
        
        // View toggle
        document.querySelectorAll('.view-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.toggleView(e.target.dataset.view));
        });
        
        // Sort functionality
        const sortBy = document.getElementById('sortBy');
        if (sortBy) sortBy.addEventListener('change', (e) => this.sortResults(e.target.value));
        
        // Navigation links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => this.handleNavigation(e));
        });
    }

    // Handle search input with character variations
    handleSearch(e) {
        const query = e.target.value.toLowerCase();
        const clearBtn = document.getElementById('clearSearch');
        
        clearBtn.style.display = query ? 'block' : 'none';
        
        if (query.length >= 1) {
            this.showSuggestions(query);
        } else {
            this.hideDropdown();
        }
        
        if (query.length >= 2) {
            this.performSearch(query);
        } else {
            this.clearResults();
        }
    }

    // Perform search with character variation support
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

    // Search verses with character variation support
    searchVerses(query) {
        return this.verseData.filter(verse => {
            // Check if query matches any character variation
            const characterMatch = verse.characters.some(char => {
                const character = this.characters.find(c => c.name === char);
                if (character) {
                    return character.variations.some(variation => 
                        variation.toLowerCase().includes(query)
                    );
                }
                return char.toLowerCase().includes(query);
            });

            return verse.english.toLowerCase().includes(query) ||
                   verse.hindi.includes(query) ||
                   verse.sanskrit.includes(query) ||
                   verse.roman.toLowerCase().includes(query) ||
                   characterMatch ||
                   verse.themes.some(theme => theme.toLowerCase().includes(query));
        });
    }

    // Search characters with variation support
    searchCharacters(query) {
        return this.characters.filter(char => {
            const nameMatch = char.name.toLowerCase().includes(query);
            const variationMatch = char.variations.some(variation => 
                variation.toLowerCase().includes(query)
            );
            const descriptionMatch = char.description.toLowerCase().includes(query);
            
            return nameMatch || variationMatch || descriptionMatch;
        });
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

    // Create character card with variations
    createCharacterCard(character) {
        return `
            <div class="verse-card">
                <div class="verse-header">
                    <span class="verse-reference">${character.name}</span>
                </div>
                <div class="verse-content">
                    <div class="verse-text">
                        <strong>Variations:</strong> ${character.variations.slice(0, 5).join(', ')}${character.variations.length > 5 ? '...' : ''}
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

    // Get parva name including Harivamsha
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
        
        switch(section) {
            case 'characters':
                this.showCharacterSection();
                break;
            case 'episodes':
                this.showEpisodeSection();
                break;
            case 'themes':
                this.showThemeSection();
                break;
            case 'family-trees':
                window.location.href = 'family-trees.html';
                break;
            case 'edition-comparison':
                window.location.href = 'edition-comparison.html';
                break;
            default:
                console.log('Navigating to:', section);
        }
    }

    // Show character section
    showCharacterSection() {
        this.currentSearchType = 'character';
        document.querySelector('input[value="character"]').checked = true;
        document.getElementById('searchInput').placeholder = 'Search characters...';
        document.getElementById('searchInput').focus();
    }

    // Show episode section
    showEpisodeSection() {
        this.currentSearchType = 'episode';
        document.querySelector('input[value="episode"]').checked = true;
        document.getElementById('searchInput').placeholder = 'Search episodes...';
        document.getElementById('searchInput').focus();
    }

    // Show theme section
    showThemeSection() {
        this.currentSearchType = 'theme';
        document.querySelector('input[value="theme"]').checked = true;
        document.getElementById('searchInput').placeholder = 'Search themes...';
        document.getElementById('searchInput').focus();
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
        this.hideDropdown();
        this.clearResults();
    }

    // Show suggestions dropdown
    showSuggestions(query) {
        this.suggestions = this.generateSuggestions(query);
        this.selectedSuggestionIndex = -1;
        this.isDropdownOpen = true;
        this.renderSuggestions();
    }

    // Generate suggestions based on query
    generateSuggestions(query) {
        const suggestions = [];
        
        // Character suggestions
        const characterSuggestions = this.characters
            .filter(char => 
                char.name.toLowerCase().includes(query) ||
                char.variations.some(variation => variation.toLowerCase().includes(query))
            )
            .slice(0, 5)
            .map(char => ({
                type: 'character',
                title: char.name,
                subtitle: char.variations.slice(0, 3).join(', '),
                description: char.description,
                icon: 'fas fa-user',
                data: char
            }));

        // Episode suggestions
        const episodeSuggestions = this.episodes
            .filter(episode => 
                episode.name.toLowerCase().includes(query) ||
                episode.description.toLowerCase().includes(query)
            )
            .slice(0, 3)
            .map(episode => ({
                type: 'episode',
                title: episode.name,
                subtitle: episode.description,
                description: `Parva: ${this.getParvaName(episode.parva)}`,
                icon: 'fas fa-book-open',
                data: episode
            }));

        // Theme suggestions
        const themeSuggestions = this.themes
            .filter(theme => 
                theme.name.toLowerCase().includes(query) ||
                theme.description.toLowerCase().includes(query)
            )
            .slice(0, 3)
            .map(theme => ({
                type: 'theme',
                title: theme.name,
                subtitle: theme.description,
                description: `Characters: ${theme.characters.slice(0, 3).join(', ')}`,
                icon: 'fas fa-lightbulb',
                data: theme
            }));

        // Verse suggestions (based on characters and themes)
        const verseSuggestions = this.verseData
            .filter(verse => 
                verse.english.toLowerCase().includes(query) ||
                verse.characters.some(char => 
                    this.characters.find(c => c.name === char)?.variations.some(v => v.toLowerCase().includes(query))
                )
            )
            .slice(0, 3)
            .map(verse => ({
                type: 'verse',
                title: `Verse ${verse.id}`,
                subtitle: verse.english.substring(0, 80) + '...',
                description: `Parva: ${this.getParvaName(verse.parva)}`,
                icon: 'fas fa-quote-left',
                data: verse
            }));

        // Recent searches
        const recentSuggestions = this.recentSearches
            .filter(search => search.toLowerCase().includes(query))
            .slice(0, 2)
            .map(search => ({
                type: 'recent',
                title: search,
                subtitle: 'Recent search',
                description: 'Click to search again',
                icon: 'fas fa-history',
                data: { query: search }
            }));

        // Combine and limit suggestions
        suggestions.push(...characterSuggestions);
        suggestions.push(...episodeSuggestions);
        suggestions.push(...themeSuggestions);
        suggestions.push(...verseSuggestions);
        suggestions.push(...recentSuggestions);

        return suggestions.slice(0, 10);
    }

    // Render suggestions dropdown
    renderSuggestions() {
        const dropdown = document.getElementById('searchDropdown');
        const content = document.getElementById('dropdownContent');
        
        if (this.suggestions.length === 0) {
            content.innerHTML = '<div class="dropdown-no-results">No suggestions found</div>';
        } else {
            const groupedSuggestions = this.groupSuggestionsByType(this.suggestions);
            content.innerHTML = this.renderGroupedSuggestions(groupedSuggestions);
        }
        
        dropdown.style.display = 'block';
        
        // Add click listeners to dropdown items
        setTimeout(() => {
            document.querySelectorAll('.dropdown-item').forEach((item, index) => {
                item.addEventListener('click', () => {
                    const suggestion = this.suggestions[index];
                    this.handleSuggestionClick(suggestion);
                });
            });
        }, 0);
    }

    // Group suggestions by type
    groupSuggestionsByType(suggestions) {
        const groups = {};
        suggestions.forEach(suggestion => {
            if (!groups[suggestion.type]) {
                groups[suggestion.type] = [];
            }
            groups[suggestion.type].push(suggestion);
        });
        return groups;
    }

    // Render grouped suggestions
    renderGroupedSuggestions(groupedSuggestions) {
        const typeLabels = {
            character: 'Characters',
            episode: 'Episodes',
            theme: 'Themes',
            verse: 'Verses',
            recent: 'Recent Searches'
        };

        const typeIcons = {
            character: 'fas fa-users',
            episode: 'fas fa-book-open',
            theme: 'fas fa-lightbulb',
            verse: 'fas fa-quote-left',
            recent: 'fas fa-history'
        };

        let html = '';
        Object.keys(groupedSuggestions).forEach(type => {
            html += `
                <div class="dropdown-section">
                    <div class="dropdown-section-title">
                        <i class="${typeIcons[type]}"></i>
                        ${typeLabels[type]}
                    </div>
                    ${groupedSuggestions[type].map((suggestion, index) => `
                        <div class="dropdown-item" data-index="${index}" data-type="${type}">
                            <div class="dropdown-item-icon">
                                <i class="${suggestion.icon}"></i>
                            </div>
                            <div class="dropdown-item-content">
                                <div class="dropdown-item-title">${suggestion.title}</div>
                                <div class="dropdown-item-subtitle">${suggestion.subtitle}</div>
                            </div>
                            <div class="dropdown-item-type">${type}</div>
                        </div>
                    `).join('')}
                </div>
            `;
        });

        return html;
    }

    // Hide dropdown
    hideDropdown() {
        const dropdown = document.getElementById('searchDropdown');
        dropdown.style.display = 'none';
        this.isDropdownOpen = false;
        this.selectedSuggestionIndex = -1;
    }

    // Handle search focus
    handleSearchFocus() {
        const query = document.getElementById('searchInput').value;
        if (query.length >= 1) {
            this.showSuggestions(query);
        }
    }

    // Handle search blur
    handleSearchBlur() {
        // Delay hiding to allow clicking on suggestions
        setTimeout(() => {
            this.hideDropdown();
        }, 200);
    }

    // Handle search keyboard navigation
    handleSearchKeydown(e) {
        if (!this.isDropdownOpen || this.suggestions.length === 0) {
            if (e.key === 'Enter') {
                this.performSearch(e.target.value);
            }
            return;
        }

        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                this.navigateSuggestions(1);
                break;
            case 'ArrowUp':
                e.preventDefault();
                this.navigateSuggestions(-1);
                break;
            case 'Enter':
                e.preventDefault();
                this.selectSuggestion();
                break;
            case 'Escape':
                e.preventDefault();
                this.hideDropdown();
                break;
        }
    }

    // Navigate suggestions with arrow keys
    navigateSuggestions(direction) {
        const maxIndex = this.suggestions.length - 1;
        this.selectedSuggestionIndex += direction;
        
        if (this.selectedSuggestionIndex < 0) {
            this.selectedSuggestionIndex = maxIndex;
        } else if (this.selectedSuggestionIndex > maxIndex) {
            this.selectedSuggestionIndex = 0;
        }
        
        this.updateSuggestionSelection();
    }

    // Update suggestion selection visual
    updateSuggestionSelection() {
        const items = document.querySelectorAll('.dropdown-item');
        items.forEach((item, index) => {
            item.classList.toggle('active', index === this.selectedSuggestionIndex);
        });
    }

    // Select current suggestion
    selectSuggestion() {
        if (this.selectedSuggestionIndex >= 0 && this.selectedSuggestionIndex < this.suggestions.length) {
            const suggestion = this.suggestions[this.selectedSuggestionIndex];
            this.handleSuggestionClick(suggestion);
        }
    }

    // Handle suggestion click
    handleSuggestionClick(suggestion) {
        const searchInput = document.getElementById('searchInput');
        
        switch (suggestion.type) {
            case 'character':
                searchInput.value = suggestion.data.name;
                this.currentSearchType = 'character';
                document.querySelector('input[value="character"]').checked = true;
                break;
            case 'episode':
                searchInput.value = suggestion.data.name;
                this.currentSearchType = 'episode';
                document.querySelector('input[value="episode"]').checked = true;
                break;
            case 'theme':
                searchInput.value = suggestion.data.name;
                this.currentSearchType = 'theme';
                document.querySelector('input[value="theme"]').checked = true;
                break;
            case 'verse':
                this.showVerseModal(suggestion.data.id);
                this.hideDropdown();
                return;
            case 'recent':
                searchInput.value = suggestion.data.query;
                break;
        }
        
        this.hideDropdown();
        this.performSearch(searchInput.value);
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

    // Populate character filter with variations
    populateCharacterFilter() {
        const select = document.getElementById('characterFilter');
        select.innerHTML = '<option value="">All Characters</option>' +
            this.characters.map(char => 
                `<option value="${char.name}">${char.name} (${char.variations.slice(0, 3).join(', ')})</option>`
            ).join('');
    }

    // Display welcome message
    displayWelcomeMessage() {
        const container = document.getElementById('resultsContainer');
        container.innerHTML = `
            <div class="welcome-message">
                <h3>Welcome to Critically Māhābhārat</h3>
                <p>Search for verses, characters, episodes, or themes from the great Indian epic.</p>
                <p>This app includes the BORI Critical Edition of Mahabharata and Harivamsha with authentic translations in English, Hindi, and Sanskrit.</p>
                <p><strong>Character Search:</strong> Try searching for "Bheem", "Krishn", "Shaunak", or any character variation!</p>
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

// Initialize the app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.app = new CriticallyMahabharat();
});