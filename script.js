// Mahabharat Characters Data
const characters = [
    // Pandavas
    {
        name: "Yudhishthira",
        category: "pandavas",
        description: "The eldest Pandava, known for his righteousness and truthfulness. He was the king of Indraprastha and later Hastinapura.",
        details: ["Righteous", "Truthful", "King", "Dharmaraja"],
        icon: "fas fa-crown"
    },
    {
        name: "Bhima",
        category: "pandavas",
        description: "The second Pandava, known for his immense strength and appetite. He was a great warrior and wrestler.",
        details: ["Strongest", "Warrior", "Wrestler", "Vayu's son"],
        icon: "fas fa-fist-raised"
    },
    {
        name: "Arjuna",
        category: "pandavas",
        description: "The third Pandava, greatest archer of his time and close friend of Krishna. He was the hero of the Bhagavad Gita.",
        details: ["Greatest Archer", "Krishna's friend", "Gandiva bow", "Indra's son"],
        icon: "fas fa-bow-arrow"
    },
    {
        name: "Nakula",
        category: "pandavas",
        description: "The fourth Pandava, known for his beauty and expertise in swordsmanship and horse-keeping.",
        details: ["Most Handsome", "Swordsman", "Horse expert", "Ashwini Kumaras' son"],
        icon: "fas fa-horse"
    },
    {
        name: "Sahadeva",
        category: "pandavas",
        description: "The youngest Pandava, known for his wisdom, knowledge of astrology, and swordsmanship.",
        details: ["Wisest", "Astrologer", "Swordsman", "Ashwini Kumaras' son"],
        icon: "fas fa-star"
    },
    {
        name: "Draupadi",
        category: "women",
        description: "The common wife of all five Pandavas, known for her beauty, intelligence, and fiery nature.",
        details: ["Most Beautiful", "Fire-born", "Five husbands", "Panchali"],
        icon: "fas fa-fire"
    },
    {
        name: "Kunti",
        category: "women",
        description: "Mother of the Pandavas, known for her devotion and the boon that allowed her to have children from gods.",
        details: ["Pandavas' mother", "Devoted", "Pritha", "Surya's daughter"],
        icon: "fas fa-heart"
    },

    // Kauravas
    {
        name: "Duryodhana",
        category: "kauravas",
        description: "The eldest Kaurava and main antagonist, known for his jealousy and hatred towards the Pandavas.",
        details: ["Eldest Kaurava", "Jealous", "Gambler", "Duryodhana"],
        icon: "fas fa-skull"
    },
    {
        name: "Dushasana",
        category: "kauravas",
        description: "Second Kaurava, known for disrobing Draupadi in the court, which led to the great war.",
        details: ["Draupadi's humiliation", "Kaurava", "Duryodhana's brother", "Warrior"],
        icon: "fas fa-exclamation-triangle"
    },
    {
        name: "Shakuni",
        category: "kauravas",
        description: "Maternal uncle of the Kauravas, master of dice and the mastermind behind the Pandavas' exile.",
        details: ["Dice master", "Maternal uncle", "Manipulator", "Gandhara king"],
        icon: "fas fa-dice"
    },
    {
        name: "Duryodhana's 100 brothers",
        category: "kauravas",
        description: "The collective name for all 100 sons of Dhritarashtra, who fought against the Pandavas.",
        details: ["100 brothers", "Kauravas", "Warriors", "Dhritarashtra's sons"],
        icon: "fas fa-users"
    },

    // Gods and Deities
    {
        name: "Krishna",
        category: "gods",
        description: "The eighth avatar of Vishnu, charioteer of Arjuna, and the divine guide who delivered the Bhagavad Gita.",
        details: ["Vishnu's avatar", "Arjuna's charioteer", "Bhagavad Gita", "Yadavas' king"],
        icon: "fas fa-om"
    },
    {
        name: "Shiva",
        category: "gods",
        description: "The destroyer god, who blessed Arjuna with the Pashupatastra weapon and played a crucial role in the epic.",
        details: ["Destroyer", "Pashupatastra", "Arjuna's blessing", "Mahadeva"],
        icon: "fas fa-mountain"
    },
    {
        name: "Indra",
        category: "gods",
        description: "King of gods and father of Arjuna, who provided divine weapons and guidance to the Pandavas.",
        details: ["King of gods", "Arjuna's father", "Thunder god", "Weapon giver"],
        icon: "fas fa-bolt"
    },
    {
        name: "Yama",
        category: "gods",
        description: "God of death and father of Yudhishthira, who tested his righteousness throughout the epic.",
        details: ["Death god", "Yudhishthira's father", "Dharma", "Righteousness"],
        icon: "fas fa-skull-crossbones"
    },
    {
        name: "Vayu",
        category: "gods",
        description: "Wind god and father of Bhima, who blessed him with immense strength and power.",
        details: ["Wind god", "Bhima's father", "Strength giver", "Prana"],
        icon: "fas fa-wind"
    },
    {
        name: "Ashwini Kumaras",
        category: "gods",
        description: "Twin gods of medicine and healing, fathers of Nakula and Sahadeva, known for their medical expertise.",
        details: ["Twin gods", "Medicine", "Healing", "Nakula & Sahadeva's fathers"],
        icon: "fas fa-heartbeat"
    },

    // Sages and Rishis
    {
        name: "Vyasa",
        category: "sages",
        description: "The sage who composed the Mahabharata, grandfather of both Pandavas and Kauravas, and narrator of the epic.",
        details: ["Epic composer", "Grandfather", "Narrator", "Ved Vyasa"],
        icon: "fas fa-scroll"
    },
    {
        name: "Drona",
        category: "sages",
        description: "The royal guru who taught archery to both Pandavas and Kauravas, known for his partiality towards Arjuna.",
        details: ["Royal guru", "Archery teacher", "Partial to Arjuna", "Brahmin warrior"],
        icon: "fas fa-graduation-cap"
    },
    {
        name: "Kripacharya",
        category: "sages",
        description: "The royal priest and teacher, known for his wisdom and neutrality in the great war.",
        details: ["Royal priest", "Teacher", "Neutral", "Wise"],
        icon: "fas fa-book"
    },
    {
        name: "Parashurama",
        category: "sages",
        description: "The sixth avatar of Vishnu, who taught weapons to Bhishma, Drona, and Karna.",
        details: ["Vishnu's avatar", "Weapon teacher", "Axe wielder", "Immortal"],
        icon: "fas fa-axe"
    },
    {
        name: "Markandeya",
        category: "sages",
        description: "The immortal sage who witnessed the end of the world and provided guidance to the Pandavas.",
        details: ["Immortal", "World witness", "Guide", "Long-lived"],
        icon: "fas fa-infinity"
    },

    // Warriors
    {
        name: "Bhishma",
        category: "warriors",
        description: "The grand uncle of both Pandavas and Kauravas, known for his vow of celibacy and invincibility.",
        details: ["Grand uncle", "Celibate", "Invincible", "Ganga's son"],
        icon: "fas fa-shield-alt"
    },
    {
        name: "Karna",
        category: "warriors",
        description: "The eldest Pandava, raised as a charioteer's son, known for his generosity and friendship with Duryodhana.",
        details: ["Eldest Pandava", "Generous", "Duryodhana's friend", "Surya's son"],
        icon: "fas fa-sun"
    },
    {
        name: "Drona",
        category: "warriors",
        description: "The royal guru and commander of the Kaurava army, known for his military prowess and loyalty.",
        details: ["Army commander", "Guru", "Loyal", "Military strategist"],
        icon: "fas fa-chess"
    },
    {
        name: "Ashwatthama",
        category: "warriors",
        description: "Son of Drona, known for his use of the Narayanastra weapon and his role in the night attack.",
        details: ["Drona's son", "Narayanastra", "Night warrior", "Immortal"],
        icon: "fas fa-moon"
    },
    {
        name: "Abhimanyu",
        category: "warriors",
        description: "Son of Arjuna and Subhadra, known for his knowledge of the Chakravyuha formation and heroic death.",
        details: ["Arjuna's son", "Chakravyuha expert", "Heroic death", "Young warrior"],
        icon: "fas fa-star-of-life"
    },
    {
        name: "Ghatotkacha",
        category: "warriors",
        description: "Son of Bhima and Hidimbi, a powerful demon warrior who fought on the Pandava side.",
        details: ["Bhima's son", "Demon warrior", "Giant", "Rakshasa"],
        icon: "fas fa-dragon"
    },

    // Women
    {
        name: "Gandhari",
        category: "women",
        description: "Mother of the Kauravas, who blindfolded herself to share her husband's blindness and cursed Krishna.",
        details: ["Kauravas' mother", "Blindfolded", "Cursed Krishna", "Dhritarashtra's wife"],
        icon: "fas fa-blind"
    },
    {
        name: "Subhadra",
        category: "women",
        description: "Sister of Krishna and wife of Arjuna, mother of Abhimanyu, known for her beauty and devotion.",
        details: ["Krishna's sister", "Arjuna's wife", "Abhimanyu's mother", "Beautiful"],
        icon: "fas fa-gem"
    },
    {
        name: "Uttara",
        category: "women",
        description: "Daughter of King Virata and wife of Abhimanyu, who gave birth to Parikshit after the war.",
        details: ["Virata's daughter", "Abhimanyu's wife", "Parikshit's mother", "Princess"],
        icon: "fas fa-baby"
    },
    {
        name: "Hidimbi",
        category: "women",
        description: "A demoness who married Bhima and gave birth to Ghatotkacha, known for her love and sacrifice.",
        details: ["Demoness", "Bhima's wife", "Ghatotkacha's mother", "Sacrificial"],
        icon: "fas fa-heart"
    },
    {
        name: "Satyavati",
        category: "women",
        description: "Mother of Vyasa and grandmother of both Pandavas and Kauravas, known for her fishy smell and transformation.",
        details: ["Vyasa's mother", "Grandmother", "Fish smell", "Transformed"],
        icon: "fas fa-fish"
    },

    // Additional important characters
    {
        name: "Dhritarashtra",
        category: "warriors",
        description: "Blind king of Hastinapura and father of the Kauravas, known for his weakness and partiality.",
        details: ["Blind king", "Kauravas' father", "Weak", "Partial"],
        icon: "fas fa-eye-slash"
    },
    {
        name: "Vidura",
        category: "sages",
        description: "The wise minister and half-brother of Dhritarashtra, known for his wisdom and righteousness.",
        details: ["Wise minister", "Half-brother", "Righteous", "Advisor"],
        icon: "fas fa-lightbulb"
    },
    {
        name: "Sanjaya",
        category: "sages",
        description: "The charioteer and advisor of Dhritarashtra, who narrated the war events to the blind king.",
        details: ["Charioteer", "Narrator", "Advisor", "Divine vision"],
        icon: "fas fa-eye"
    },
    {
        name: "Shalya",
        category: "warriors",
        description: "King of Madra and maternal uncle of Nakula and Sahadeva, who was forced to fight for the Kauravas.",
        details: ["Madra king", "Maternal uncle", "Forced ally", "Nakula & Sahadeva's uncle"],
        icon: "fas fa-handcuffs"
    },
    {
        name: "Jayadratha",
        category: "warriors",
        description: "King of Sindhu and brother-in-law of Duryodhana, known for blocking the Pandavas from rescuing Abhimanyu.",
        details: ["Sindhu king", "Duryodhana's brother-in-law", "Abhimanyu's killer", "Blocked rescue"],
        icon: "fas fa-ban"
    }
];

// DOM elements
const searchInput = document.getElementById('searchInput');
const clearBtn = document.getElementById('clearSearch');
const filterBtns = document.querySelectorAll('.filter-btn');
const charactersGrid = document.getElementById('charactersGrid');
const noResults = document.getElementById('noResults');
const totalCharacters = document.getElementById('totalCharacters');
const visibleCharacters = document.getElementById('visibleCharacters');

// State
let currentFilter = 'all';
let currentSearch = '';

// Initialize the app
function init() {
    displayCharacters();
    updateStats();
    setupEventListeners();
}

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', handleSearch);
    clearBtn.addEventListener('click', clearSearch);
    
    // Filter functionality
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => handleFilter(btn.dataset.category));
    });
}

// Handle search input
function handleSearch(e) {
    currentSearch = e.target.value.toLowerCase();
    clearBtn.style.display = currentSearch ? 'block' : 'none';
    displayCharacters();
    updateStats();
}

// Clear search
function clearSearch() {
    searchInput.value = '';
    currentSearch = '';
    clearBtn.style.display = 'none';
    displayCharacters();
    updateStats();
}

// Handle filter selection
function handleFilter(category) {
    currentFilter = category;
    
    // Update active filter button
    filterBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        }
    });
    
    displayCharacters();
    updateStats();
}

// Filter and search characters
function getFilteredCharacters() {
    return characters.filter(character => {
        const matchesFilter = currentFilter === 'all' || character.category === currentFilter;
        const matchesSearch = currentSearch === '' || 
            character.name.toLowerCase().includes(currentSearch) ||
            character.description.toLowerCase().includes(currentSearch) ||
            character.details.some(detail => detail.toLowerCase().includes(currentSearch));
        
        return matchesFilter && matchesSearch;
    });
}

// Display characters
function displayCharacters() {
    const filteredCharacters = getFilteredCharacters();
    
    if (filteredCharacters.length === 0) {
        charactersGrid.style.display = 'none';
        noResults.style.display = 'block';
    } else {
        charactersGrid.style.display = 'grid';
        noResults.style.display = 'none';
        
        charactersGrid.innerHTML = filteredCharacters.map(character => createCharacterCard(character)).join('');
    }
}

// Create character card HTML
function createCharacterCard(character) {
    return `
        <div class="character-card">
            <h3 class="character-name">
                <i class="${character.icon}"></i>
                ${character.name}
            </h3>
            <span class="character-category">${character.category}</span>
            <p class="character-description">${character.description}</p>
            <div class="character-details">
                ${character.details.map(detail => `<span class="character-detail">${detail}</span>`).join('')}
            </div>
        </div>
    `;
}

// Update statistics
function updateStats() {
    const filteredCharacters = getFilteredCharacters();
    totalCharacters.textContent = characters.length;
    visibleCharacters.textContent = filteredCharacters.length;
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);