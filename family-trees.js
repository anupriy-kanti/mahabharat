// Family Trees Visualization - D3.js Implementation
class FamilyTreeVisualizer {
    constructor() {
        this.currentFamily = 'kuru';
        this.zoom = null;
        this.svg = null;
        this.width = 0;
        this.height = 600;
        this.showDetails = true;
        this.showRelationships = false;
        
        this.familyData = this.initializeFamilyData();
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupVisualization();
        this.renderFamilyTree(this.currentFamily);
        this.updateQuickFacts();
    }

    // Initialize comprehensive family data based on BORI Critical Edition
    initializeFamilyData() {
        return {
            kuru: {
                name: 'Kuru Dynasty',
                description: 'The main royal lineage of the Mahabharata',
                characters: [
                    {
                        id: 'shantanu',
                        name: 'Shantanu',
                        gender: 'male',
                        type: 'key',
                        generation: 1,
                        relationships: {
                            father: null,
                            mother: null,
                            spouse: ['Ganga', 'Satyavati'],
                            children: ['Bhishma', 'Chitrangada', 'Vichitravirya']
                        },
                        description: 'King of Hastinapura, father of Bhishma',
                        keyVerses: ['1.94.1', '1.95.1'],
                        themes: ['kingship', 'dharma', 'sacrifice']
                    },
                    {
                        id: 'bhishma',
                        name: 'Bhishma',
                        gender: 'male',
                        type: 'key',
                        generation: 2,
                        relationships: {
                            father: 'Shantanu',
                            mother: 'Ganga',
                            spouse: null,
                            children: null
                        },
                        description: 'The grand uncle, known for his vow of celibacy',
                        keyVerses: ['1.94.50', '6.114.1'],
                        themes: ['celibacy', 'loyalty', 'warfare']
                    },
                    {
                        id: 'pandu',
                        name: 'Pandu',
                        gender: 'male',
                        type: 'key',
                        generation: 3,
                        relationships: {
                            father: 'Vichitravirya',
                            mother: 'Ambalika',
                            spouse: ['Kunti', 'Madri'],
                            children: ['Yudhishthira', 'Bhima', 'Arjuna', 'Nakula', 'Sahadeva']
                        },
                        description: 'Father of the Pandavas, cursed to die if he engages in intercourse',
                        keyVerses: ['1.109.1', '1.110.1'],
                        themes: ['curse', 'fatherhood', 'dharma']
                    },
                    {
                        id: 'dhritarashtra',
                        name: 'Dhritarashtra',
                        gender: 'male',
                        type: 'key',
                        generation: 3,
                        relationships: {
                            father: 'Vichitravirya',
                            mother: 'Ambika',
                            spouse: ['Gandhari'],
                            children: ['Duryodhana', 'Dushasana', 'Duhshala']
                        },
                        description: 'Blind king, father of the Kauravas',
                        keyVerses: ['1.1.100', '2.1.1'],
                        themes: ['blindness', 'partiality', 'kingship']
                    },
                    {
                        id: 'yudhishthira',
                        name: 'Yudhishthira',
                        gender: 'male',
                        type: 'key',
                        generation: 4,
                        relationships: {
                            father: 'Pandu',
                            mother: 'Kunti',
                            spouse: ['Draupadi'],
                            children: ['Prativindhya']
                        },
                        description: 'Eldest Pandava, known for his righteousness',
                        keyVerses: ['1.1.1', '2.1.1'],
                        themes: ['dharma', 'righteousness', 'truth']
                    },
                    {
                        id: 'arjuna',
                        name: 'Arjuna',
                        gender: 'male',
                        type: 'key',
                        generation: 4,
                        relationships: {
                            father: 'Pandu',
                            mother: 'Kunti',
                            spouse: ['Draupadi', 'Subhadra'],
                            children: ['Abhimanyu', 'Iravan']
                        },
                        description: 'Third Pandava, greatest archer and hero of Bhagavad Gita',
                        keyVerses: ['6.23.1', '6.23.2'],
                        themes: ['archery', 'devotion', 'war']
                    },
                    {
                        id: 'duryodhana',
                        name: 'Duryodhana',
                        gender: 'male',
                        type: 'key',
                        generation: 4,
                        relationships: {
                            father: 'Dhritarashtra',
                            mother: 'Gandhari',
                            spouse: ['Bhanumati'],
                            children: ['Lakshmana']
                        },
                        description: 'Eldest Kaurava, main antagonist of the epic',
                        keyVerses: ['1.1.100', '2.1.1'],
                        themes: ['jealousy', 'hatred', 'war']
                    },
                    {
                        id: 'kunti',
                        name: 'Kunti',
                        gender: 'female',
                        type: 'key',
                        generation: 3,
                        relationships: {
                            father: 'Shurasena',
                            mother: null,
                            spouse: ['Pandu'],
                            children: ['Yudhishthira', 'Bhima', 'Arjuna', 'Karna']
                        },
                        description: 'Mother of the Pandavas, known for her devotion',
                        keyVerses: ['1.109.1', '1.110.1'],
                        themes: ['motherhood', 'devotion', 'sacrifice']
                    },
                    {
                        id: 'draupadi',
                        name: 'Draupadi',
                        gender: 'female',
                        type: 'key',
                        generation: 4,
                        relationships: {
                            father: 'Drupada',
                            mother: 'Prishthe',
                            spouse: ['Yudhishthira', 'Bhima', 'Arjuna', 'Nakula', 'Sahadeva'],
                            children: ['Prativindhya', 'Sutasoma', 'Srutakarma', 'Shatanika', 'Srutasena']
                        },
                        description: 'Common wife of the five Pandavas, known for her beauty and intelligence',
                        keyVerses: ['1.189.1', '2.1.1'],
                        themes: ['beauty', 'intelligence', 'fire']
                    }
                ]
            },
            yadava: {
                name: 'Yadava Dynasty',
                description: 'The lineage of Krishna and Balarama',
                characters: [
                    {
                        id: 'krishna',
                        name: 'Krishna',
                        gender: 'male',
                        type: 'divine',
                        generation: 1,
                        relationships: {
                            father: 'Vasudeva',
                            mother: 'Devaki',
                            spouse: ['Rukmini', 'Satyabhama', 'Jambavati'],
                            children: ['Pradyumna', 'Samba', 'Aniruddha']
                        },
                        description: 'Eighth avatar of Vishnu, charioteer of Arjuna',
                        keyVerses: ['6.23.1', '6.23.2'],
                        themes: ['divine', 'guidance', 'dharma']
                    },
                    {
                        id: 'balarama',
                        name: 'Balarama',
                        gender: 'male',
                        type: 'divine',
                        generation: 1,
                        relationships: {
                            father: 'Vasudeva',
                            mother: 'Rohini',
                            spouse: ['Revati'],
                            children: ['Nisatha', 'Ulmuka']
                        },
                        description: 'Elder brother of Krishna, incarnation of Shesha',
                        keyVerses: ['1.1.1', '6.23.1'],
                        themes: ['divine', 'brotherhood', 'strength']
                    },
                    {
                        id: 'vasudeva',
                        name: 'Vasudeva',
                        gender: 'male',
                        type: 'key',
                        generation: 0,
                        relationships: {
                            father: 'Shurasena',
                            mother: null,
                            spouse: ['Devaki', 'Rohini'],
                            children: ['Krishna', 'Balarama']
                        },
                        description: 'Father of Krishna and Balarama',
                        keyVerses: ['1.1.1', '6.23.1'],
                        themes: ['fatherhood', 'devotion', 'sacrifice']
                    }
                ]
            }
        };
    }

    setupEventListeners() {
        // Family selection
        document.querySelectorAll('.family-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.selectFamily(e.target.dataset.family));
        });

        // Zoom controls
        document.getElementById('zoomIn').addEventListener('click', () => this.zoomIn());
        document.getElementById('zoomOut').addEventListener('click', () => this.zoomOut());
        document.getElementById('resetZoom').addEventListener('click', () => this.resetZoom());

        // View options
        document.getElementById('showDetails').addEventListener('change', (e) => {
            this.showDetails = e.target.checked;
            this.updateVisualization();
        });

        document.getElementById('showRelationships').addEventListener('change', (e) => {
            this.showRelationships = e.target.checked;
            this.updateVisualization();
        });

        // Close details
        document.getElementById('closeDetails').addEventListener('click', () => {
            this.hideCharacterDetails();
        });
    }

    setupVisualization() {
        const container = document.getElementById('treeVisualization');
        this.width = container.offsetWidth;
        
        this.svg = d3.select(container)
            .append('svg')
            .attr('width', this.width)
            .attr('height', this.height);

        this.zoom = d3.zoom()
            .scaleExtent([0.1, 3])
            .on('zoom', (event) => {
                this.svg.select('g').attr('transform', event.transform);
            });

        this.svg.call(this.zoom);

        // Add main group for zooming
        this.svg.append('g').attr('class', 'main-group');
    }

    selectFamily(family) {
        this.currentFamily = family;
        
        // Update active button
        document.querySelectorAll('.family-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-family="${family}"]`).classList.add('active');
        
        this.renderFamilyTree(family);
        this.updateQuickFacts();
    }

    renderFamilyTree(family) {
        const data = this.familyData[family];
        if (!data) return;

        // Clear previous content
        this.svg.select('.main-group').selectAll('*').remove();

        // Create tree layout
        const tree = d3.tree()
            .size([this.width - 40, this.height - 40])
            .separation((a, b) => (a.parent === b.parent ? 1 : 2) / a.depth);

        // Convert data to hierarchy
        const root = this.createHierarchy(data.characters);
        const treeData = tree(root);

        // Create links
        const links = this.svg.select('.main-group')
            .append('g')
            .attr('class', 'links')
            .selectAll('path')
            .data(treeData.links())
            .enter()
            .append('path')
            .attr('class', 'link')
            .attr('d', d3.linkVertical()
                .x(d => d.x + 20)
                .y(d => d.y + 20)
            );

        // Create nodes
        const nodes = this.svg.select('.main-group')
            .append('g')
            .attr('class', 'nodes')
            .selectAll('g')
            .data(treeData.descendants())
            .enter()
            .append('g')
            .attr('class', 'node')
            .attr('transform', d => `translate(${d.x + 20},${d.y + 20})`)
            .on('click', (event, d) => this.showCharacterDetails(d.data));

        // Add circles
        nodes.append('circle')
            .attr('r', d => this.getNodeRadius(d.data))
            .attr('class', d => `${d.data.gender} ${d.data.type}`);

        // Add text
        nodes.append('text')
            .attr('dy', '0.35em')
            .attr('x', d => d.children ? -15 : 15)
            .style('text-anchor', d => d.children ? 'end' : 'start')
            .text(d => d.data.name);

        // Add details if enabled
        if (this.showDetails) {
            nodes.append('text')
                .attr('dy', '1.5em')
                .attr('x', d => d.children ? -15 : 15)
                .style('text-anchor', d => d.children ? 'end' : 'start')
                .style('font-size', '10px')
                .style('fill', '#666')
                .text(d => d.data.description ? d.data.description.substring(0, 30) + '...' : '');
        }
    }

    createHierarchy(characters) {
        // Create a map for quick lookup
        const charMap = new Map();
        characters.forEach(char => {
            charMap.set(char.id, { ...char, children: [] });
        });

        // Build hierarchy
        const root = charMap.get('shantanu') || charMap.get('krishna') || characters[0];
        const processed = new Set();

        const buildHierarchy = (char) => {
            if (processed.has(char.id)) return char;
            processed.add(char.id);

            if (char.relationships && char.relationships.children) {
                char.children = char.relationships.children
                    .map(childId => charMap.get(childId))
                    .filter(child => child)
                    .map(child => buildHierarchy(child));
            }

            return char;
        };

        return buildHierarchy(root);
    }

    getNodeRadius(character) {
        let radius = 15;
        if (character.type === 'divine') radius = 20;
        if (character.type === 'key') radius = 18;
        return radius;
    }

    showCharacterDetails(character) {
        const detailsPanel = document.getElementById('characterDetails');
        const characterName = document.getElementById('characterName');
        const detailsContent = document.getElementById('detailsContent');

        characterName.textContent = character.name;
        detailsContent.innerHTML = this.createCharacterDetailsHTML(character);
        detailsPanel.style.display = 'block';
    }

    createCharacterDetailsHTML(character) {
        return `
            <div class="detail-section">
                <h4>Basic Information</h4>
                <p><strong>Name:</strong> ${character.name}</p>
                <p><strong>Gender:</strong> ${character.gender}</p>
                <p><strong>Type:</strong> ${character.type}</p>
                <p><strong>Generation:</strong> ${character.generation}</p>
            </div>
            
            <div class="detail-section">
                <h4>Description</h4>
                <p>${character.description}</p>
            </div>
            
            <div class="detail-section">
                <h4>Relationships</h4>
                ${character.relationships ? `
                    ${character.relationships.father ? `<p><strong>Father:</strong> ${character.relationships.father}</p>` : ''}
                    ${character.relationships.mother ? `<p><strong>Mother:</strong> ${character.relationships.mother}</p>` : ''}
                    ${character.relationships.spouse ? `<p><strong>Spouse(s):</strong> ${Array.isArray(character.relationships.spouse) ? character.relationships.spouse.join(', ') : character.relationships.spouse}</p>` : ''}
                    ${character.relationships.children ? `<p><strong>Children:</strong> ${Array.isArray(character.relationships.children) ? character.relationships.children.join(', ') : character.relationships.children}</p>` : ''}
                ` : '<p>No relationship data available</p>'}
            </div>
            
            <div class="detail-section">
                <h4>Key Verses</h4>
                <ul>
                    ${character.keyVerses ? character.keyVerses.map(verse => `<li>${verse}</li>`).join('') : '<li>No key verses available</li>'}
                </ul>
            </div>
            
            <div class="detail-section">
                <h4>Themes</h4>
                <ul>
                    ${character.themes ? character.themes.map(theme => `<li>${theme}</li>`).join('') : '<li>No themes available</li>'}
                </ul>
            </div>
        `;
    }

    hideCharacterDetails() {
        document.getElementById('characterDetails').style.display = 'none';
    }

    updateVisualization() {
        this.renderFamilyTree(this.currentFamily);
    }

    zoomIn() {
        this.svg.transition().call(this.zoom.scaleBy, 1.5);
    }

    zoomOut() {
        this.svg.transition().call(this.zoom.scaleBy, 1 / 1.5);
    }

    resetZoom() {
        this.svg.transition().call(this.zoom.transform, d3.zoomIdentity);
    }

    updateQuickFacts() {
        const data = this.familyData[this.currentFamily];
        if (!data) return;

        const characters = data.characters;
        const generations = Math.max(...characters.map(c => c.generation));
        const relationships = characters.reduce((acc, char) => {
            if (char.relationships) {
                const rels = Object.values(char.relationships).filter(rel => rel && rel.length > 0);
                return acc + rels.length;
            }
            return acc;
        }, 0);

        document.getElementById('totalCharacters').textContent = characters.length;
        document.getElementById('generations').textContent = generations;
        document.getElementById('relationships').textContent = relationships;
    }
}

// Initialize the family tree visualizer
document.addEventListener('DOMContentLoaded', () => {
    new FamilyTreeVisualizer();
});