/* ============================================================
   DATA
   ============================================================ */

const LAYERS = [
  {
    id: 'L4',
    level: 0,
    textName: 'Mahābhārat',
    narrator: 'The Final Author',
    audience: 'Us — the Final Audience',
    context: null,
    topLeft: '…The Final Author composed…',
    topRight: '…called Mahābhārat',
    bottomLeft: 'Narrative Level 4',
    bottomRight: '…referring to Sauti in the third person, addressing the Final Audience',
    description:
      'The anonymous outermost narrator — unnamed, editorial, timeless — addresses us directly. This voice refers to Sauti in the third person. It is the only voice we ever truly hear, as it is the one whose composition has reached us.',
    fill: '#2d4a2d',
    stroke: '#4a7a4a',
    textFill: '#9eca8a',
    introStep: 1,
  },
  {
    id: 'L3',
    level: 1,
    textName: 'Mahābhārat',
    narrator: 'Ugrashravās Sauti',
    audience: 'Shaunak & the Sages',
    context: '12-year sacrifice · Naimishāranya Forest',
    topLeft: '…Ugrashravā Sauti gave an account (of what)…',
    topRight: '…called Mahābhārat',
    bottomLeft: 'Narrative Level 3',
    bottomRight: '…narrating the history of Vaisampāyan & Janamejay to Shaunak',
    description:
      'Ugrashravās Sauti, the wandering bard, arrives at the forest of Naimishāranya where Shaunak and sages are performing a twelve-year sacrifice. Sauti recounts what he heard from Vaishampāyan at Janamejay\'s snake sacrifice.',
    fill: '#1e3d2e',
    stroke: '#3a6b4a',
    textFill: '#7ab88a',
    introStep: 2,
  },
  {
    id: 'L2',
    level: 2,
    textName: 'Bhārat',
    narrator: 'Rishi Vaishampāyan',
    audience: 'King Janamejay',
    context: 'Sarpa Satra · the Snake Sacrifice',
    topLeft: '…Rishi Vaishampāyan gave an account (of what)…',
    topRight: '…called Bhārat',
    bottomLeft: 'Narrative Level 2',
    bottomRight: '…containing the life of Vyāsa and Kuru clan narrated to Janamejay',
    description:
      'Rishi Vaishampāyan, a disciple of Vyās, recites the Bhārat to King Janamejay at the Sarpa Satra (snake sacrifice). This frame contains the complete history of the Kuru clan as sanctioned by Vyās himself.',
    fill: '#143325',
    stroke: '#2a5a3a',
    textFill: '#68a87a',
    introStep: 3,
  },
  {
    id: 'L1',
    level: 3,
    textName: 'Jaya',
    narrator: 'Rishi Vyās / Sanjay',
    audience: 'Dhritarāshtra',
    context: 'The war itself · Sanjay reports in real time',
    topLeft: '…Rishi Vyās composed…',
    topRight: '…called Jaya',
    bottomLeft: 'Narrative Level 1',
    bottomRight: '…presents the war narrative',
    description:
      'Rishi Vyās composed "Jaya" — the story of the Kuru Clan. During the war, Sanjay was granted divine vision and reported events in real time to the blind king Dhritarāshtra. The Bhagavad Gita is embedded within this layer.',
    fill: '#0d2a1e',
    stroke: '#1e4a30',
    textFill: '#58987a',
    introStep: 4,
  },
  {
    id: 'Core',
    level: 4,
    textName: null,
    narrator: null,
    audience: null,
    context: 'The Kurukshetra War',
    topLeft: '…the story of Kuru Clan',
    topRight: '',
    bottomLeft: '',
    bottomRight: '',
    description:
      'The actual narrative of the Kuru clan — Kurukshetra, the Pandavas and Kauravas, the Bhagavad Gita, the aftermath of war. All four framing layers exist to transmit this story across time.',
    fill: '#f5f0e8',
    stroke: '#c9a85c',
    textFill: '#2a1505',
    introStep: 5,
  },
];

const STORY_STEPS = [
  {
    id: 'opening',
    activeLayer: null,
    title: 'The Epic Does Not Begin with the War',
    body: 'The Mahabharata is also a text about how stories are told. Before a single event of the Kuru war is described, the Epic spends considerable time establishing who is speaking, to whom, where, and why. It opens from the outside in — frame by frame.',
    quote: null,
    quoteSource: null,
  },
  {
    id: 'L4',
    activeLayer: 'L4',
    title: 'L4 · The Final Author Speaks First',
    body: 'The outermost voice — anonymous, editorial — opens with an invocation: ritualistic prerequisites for the recitation of the story about to be told. This author refers to Sauti in the third person. We are the final audience of this outermost frame.',
    quote: null,
    quoteSource: null,
  },
  {
    id: 'L3-arrive',
    activeLayer: 'L3',
    title: 'L3 · Sauti Arrives at Naimishāranya',
    body: 'Ugrashravās Sauti, the wandering bard and son of Lomaharshana, arrives at the forest of Naimishāranya. Shaunak and the assembled sages are in the middle of a twelve-year sacrifice. Shaunak asks Sauti what stories he knows.',
    quote: '"Tell us that ancient story that was told by the supreme sage Dvaipayan, that which was worshipped by the gods… We wish to hear that holy collection, that drives away fear of sin, just as it was recited at King Janamejaya\'s sacrifice by Vaishampayana."',
    quoteSource: 'Anukramanika Parv, pp. 3–5 · Bibek Debroy trans.',
  },
  {
    id: 'L3-entry',
    activeLayer: 'L3',
    title: 'L3 · Multiple Ways to Enter the Story',
    body: 'Before beginning, Sauti notes something remarkable: the Epic has no single mandatory starting point. This meta-narrative self-awareness is built into the text from the first pages.',
    quote: '"Some read Bharata from the story of Manu, others from the story of Astika, still others from the story of Uparichara. Some brahmanas read the entire text."',
    quoteSource: 'Anukramanika Parv, p. 5 · Bibek Debroy trans.',
  },
  {
    id: 'L2',
    activeLayer: 'L2',
    title: 'L2 · The Snake Sacrifice of Janamejay',
    body: 'Sauti begins recounting what he heard: Vaishampāyan recited the Epic to King Janamejay at the Sarpa Satra — the great snake sacrifice. Sauti was present. He now transmits this to Shaunak, establishing the second frame within the third.',
    quote: null,
    quoteSource: null,
  },
  {
    id: 'L1',
    activeLayer: 'L1',
    title: 'L1 · Vyās Composes; Sanjay Reports',
    body: 'Within Vaishampāyan\'s recitation, we learn how it all began: Vyās originally composed "Jaya." During the war itself, Sanjay — granted divine vision — reported events in real time to the blind king Dhritarāshtra. This innermost named frame is where the Bhagavad Gita sits.',
    quote: null,
    quoteSource: null,
  },
  {
    id: 'Core',
    activeLayer: 'Core',
    title: 'The Core · The Kuru Clan War Begins',
    body: 'Only now — after establishing four layers of transmission — does the actual narrative of the Kuru clan begin. Every word of the war has been mediated through these nested narrators. The text is always aware of itself as a retelling.',
    quote: '"What is here on law, on profit, on pleasure and salvation — that is found elsewhere. But what is not here is nowhere else."',
    quoteSource: 'Svargarohan Parv, p. 682 · Bibek Debroy trans.',
  },
];

const BOUNDARIES = [
  {
    id: 'B1',
    type: 'mhb',
    work: 'Mahabharata CE',
    parv: 'Anukramanika Parv',
    position: 'Beginning · Section 1',
    description: 'The outermost frame of the entire text is established. The Final Author speaks.',
  },
  {
    id: 'B2',
    type: 'mhb',
    work: 'Mahabharata CE',
    parv: 'Svargarohan Parv',
    position: 'Ending · Section 95',
    description: 'The Pandavas\' journey ends. Vyās\'s lament and the text\'s self-proclamation close the main work.',
  },
  {
    id: 'B3',
    type: 'hvm',
    work: 'Harivamsha CE',
    parv: 'Harivamsa Parv',
    position: 'Beginning · Section 1',
    description: 'Shaunak\'s dissatisfaction prompts Sauti to begin the appendix: the ancestry of Krishna.',
  },
  {
    id: 'B4',
    type: 'hvm',
    work: 'Harivamsha CE',
    parv: 'Bhavishya Parv',
    position: 'Ending · Section 3',
    description: 'The Final Author returns: "What else do you desire that I should speak about?" — the Epic ends with a question.',
  },
];

/* ============================================================
   SVG HELPERS
   ============================================================ */

function svgEl(tag, attrs) {
  const el = document.createElementNS('http://www.w3.org/2000/svg', tag);
  for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
  return el;
}

function svgText(content, attrs) {
  const el = svgEl('text', attrs);
  el.textContent = content;
  return el;
}

/* Compute layer rects for a given SVG viewBox size */
const VB_W = 800, VB_H = 600;
const PAD = 38, INSET = 30;

function layerRect(level) {
  const x = PAD + level * INSET;
  const y = PAD + level * INSET;
  return { x, y, w: VB_W - x * 2, h: VB_H - y * 2 };
}

/* ============================================================
   MAIN DIAGRAM
   ============================================================ */

let selectedLayer = null;

function renderMainDiagram() {
  const svg = document.getElementById('layers-svg');
  svg.setAttribute('viewBox', `0 0 ${VB_W} ${VB_H}`);
  svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');

  // Render from outermost to innermost
  [...LAYERS].forEach(layer => {
    const r = layerRect(layer.level);
    const g = svgEl('g', {
      class: `layer-group layer-group--${layer.id}`,
      'data-layer': layer.id,
      tabindex: '0',
      role: 'button',
      'aria-label': `${layer.id}: ${layer.narrator ? layer.narrator + ' to ' + layer.audience : 'The Core narrative'}`,
    });

    // Background rect
    const rect = svgEl('rect', {
      class: 'layer-rect',
      x: r.x, y: r.y, width: r.w, height: r.h,
      fill: layer.fill,
      stroke: layer.stroke,
      'stroke-width': '1.5',
      rx: '5',
    });
    g.appendChild(rect);

    if (layer.id === 'Core') {
      // Core: centered text only
      const cx = r.x + r.w / 2;
      const cy = r.y + r.h / 2;
      const t = svgText(layer.topLeft, {
        x: cx, y: cy,
        'text-anchor': 'middle',
        'dominant-baseline': 'middle',
        fill: layer.textFill,
        'font-family': 'EB Garamond, Georgia, serif',
        'font-size': '15',
        'font-style': 'italic',
      });
      g.appendChild(t);
    } else {
      const LABEL_PAD = 10;
      const TEXT_Y_TOP = r.y + LABEL_PAD + 9;
      const TEXT_Y_BOT = r.y + r.h - LABEL_PAD - 4;

      // Top-left: narrator label
      const tl = svgEl('text', {
        x: r.x + LABEL_PAD,
        y: TEXT_Y_TOP,
        fill: layer.textFill,
        'font-family': 'EB Garamond, Georgia, serif',
        'font-size': '11',
        'font-style': 'italic',
        'dominant-baseline': 'hanging',
      });
      tl.textContent = layer.topLeft;
      g.appendChild(tl);

      // Top-right: text name
      const tr = svgEl('text', {
        x: r.x + r.w - LABEL_PAD,
        y: TEXT_Y_TOP,
        fill: layer.textFill,
        'font-family': 'EB Garamond, Georgia, serif',
        'font-size': '11',
        'font-style': 'italic',
        'text-anchor': 'end',
        'dominant-baseline': 'hanging',
      });
      tr.textContent = layer.topRight;
      g.appendChild(tr);

      // Bottom-left: level label
      const bl = svgEl('text', {
        x: r.x + LABEL_PAD,
        y: TEXT_Y_BOT,
        fill: layer.textFill,
        'font-family': 'Cinzel, Georgia, serif',
        'font-size': '10',
        'font-weight': '600',
        'letter-spacing': '0.08em',
        'dominant-baseline': 'auto',
      });
      bl.textContent = layer.bottomLeft;
      g.appendChild(bl);

      // Bottom-right: description phrase
      const br = svgEl('text', {
        x: r.x + r.w - LABEL_PAD,
        y: TEXT_Y_BOT,
        fill: layer.textFill,
        'font-family': 'EB Garamond, Georgia, serif',
        'font-size': '10',
        'font-style': 'italic',
        'text-anchor': 'end',
        'dominant-baseline': 'auto',
      });
      br.textContent = layer.bottomRight;
      g.appendChild(br);

      // Layer ID badge — large, semi-transparent, left-center
      const mid = svgEl('text', {
        x: r.x + LABEL_PAD + 2,
        y: r.y + r.h / 2,
        fill: layer.textFill,
        'font-family': 'Cinzel, Georgia, serif',
        'font-size': '13',
        'font-weight': '700',
        'letter-spacing': '0.1em',
        'dominant-baseline': 'middle',
        opacity: '0.6',
      });
      mid.textContent = layer.id;
      g.appendChild(mid);
    }

    svg.appendChild(g);

    // Interactions
    g.addEventListener('mouseenter', () => highlightLayer(layer.id));
    g.addEventListener('mouseleave', () => {
      if (selectedLayer !== layer.id) resetHighlight();
    });
    g.addEventListener('click', () => {
      if (selectedLayer === layer.id) {
        selectedLayer = null;
        resetHighlight();
      } else {
        selectedLayer = layer.id;
        highlightLayer(layer.id);
      }
    });
    g.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        g.click();
      }
    });
  });

  // Click outside SVG to deselect
  document.addEventListener('click', e => {
    if (!e.target.closest('#layers-svg')) {
      selectedLayer = null;
      resetHighlight();
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      selectedLayer = null;
      resetHighlight();
    }
  });
}

function highlightLayer(id) {
  const layer = LAYERS.find(l => l.id === id);
  if (!layer) return;

  document.querySelectorAll('#layers-svg .layer-group').forEach(g => {
    g.classList.toggle('layer-group--dimmed', g.dataset.layer !== id);
    g.classList.toggle('layer-group--active', g.dataset.layer === id);
  });

  const detail = document.getElementById('layer-detail');
  const placeholder = detail.querySelector('.layer-detail__placeholder');
  const content = detail.querySelector('.layer-detail__content');

  document.getElementById('detail-badge').textContent = layer.id + (layer.textName ? ' · ' + layer.textName : '');
  document.getElementById('detail-narrator').textContent =
    layer.narrator ? `${layer.narrator} → ${layer.audience}` : 'The Core Narrative';
  document.getElementById('detail-context').textContent = layer.context || '';
  document.getElementById('detail-description').textContent = layer.description;
  document.getElementById('detail-textname').textContent = layer.textName || '—';

  placeholder.hidden = true;
  content.hidden = false;
  detail.classList.add('is-visible');
}

function resetHighlight() {
  document.querySelectorAll('#layers-svg .layer-group').forEach(g => {
    g.classList.remove('layer-group--dimmed', 'layer-group--active');
  });
  const detail = document.getElementById('layer-detail');
  const placeholder = detail.querySelector('.layer-detail__placeholder');
  const content = detail.querySelector('.layer-detail__content');
  placeholder.hidden = false;
  content.hidden = true;
  detail.classList.remove('is-visible');
}

/* ============================================================
   SCROLLYTELLING
   ============================================================ */

function renderScrollySVG() {
  const svg = document.getElementById('scrolly-svg');
  svg.setAttribute('viewBox', `0 0 ${VB_W} ${VB_H}`);
  svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');

  LAYERS.forEach(layer => {
    const r = layerRect(layer.level);
    const g = svgEl('g', {
      class: `layer-group scrolly-layer--ghost`,
      'data-layer': layer.id,
    });

    const rect = svgEl('rect', {
      class: 'layer-rect',
      x: r.x, y: r.y, width: r.w, height: r.h,
      fill: layer.fill,
      stroke: layer.stroke,
      'stroke-width': '1.5',
      rx: '5',
    });
    g.appendChild(rect);

    // Simple label inside
    if (layer.id !== 'Core') {
      const label = svgEl('text', {
        x: r.x + 12,
        y: r.y + 14,
        fill: layer.textFill,
        'font-family': 'Cinzel, Georgia, serif',
        'font-size': '11',
        'font-weight': '600',
        'letter-spacing': '0.1em',
        'dominant-baseline': 'hanging',
        opacity: '0.5',
      });
      label.textContent = layer.id;
      g.appendChild(label);
    } else {
      const label = svgEl('text', {
        x: r.x + r.w / 2,
        y: r.y + r.h / 2,
        fill: layer.textFill,
        'font-family': 'EB Garamond, Georgia, serif',
        'font-size': '13',
        'font-style': 'italic',
        'text-anchor': 'middle',
        'dominant-baseline': 'middle',
      });
      label.textContent = 'Kuru Clan';
      g.appendChild(label);
    }

    svg.appendChild(g);
  });
}

function updateScrollyDiagram(activeLayerId) {
  const activeIndex = activeLayerId
    ? LAYERS.findIndex(l => l.id === activeLayerId)
    : -1;

  document.querySelectorAll('#scrolly-svg .layer-group').forEach((g, i) => {
    const introduced = i <= activeIndex;
    const isActive = g.dataset.layer === activeLayerId;

    g.classList.toggle('scrolly-layer--ghost', !introduced);
    g.classList.toggle('scrolly-layer--introduced', introduced);
    g.classList.toggle('scrolly-layer--active', isActive);
  });

  const caption = document.getElementById('scrolly-caption');
  if (activeLayerId) {
    const layer = LAYERS.find(l => l.id === activeLayerId);
    caption.textContent = layer
      ? (layer.narrator ? `${layer.id} · ${layer.narrator}` : 'The Core Narrative')
      : 'Scroll to begin';
    caption.classList.add('has-layer');
  } else {
    caption.textContent = 'Scroll to begin';
    caption.classList.remove('has-layer');
  }
}

function initScrollytelling() {
  renderScrollySVG();

  const container = document.getElementById('scrolly-steps');

  STORY_STEPS.forEach((step, i) => {
    const el = document.createElement('div');
    el.className = 'scrolly-step';
    el.dataset.stepId = step.id;
    el.dataset.activeLayer = step.activeLayer || '';

    const layerBadge = step.activeLayer
      ? `<span class="scrolly-step__layer-badge">${step.activeLayer}</span>`
      : '';

    const quoteHTML = step.quote
      ? `<blockquote class="scrolly-step__quote">${step.quote}<cite>${step.quoteSource}</cite></blockquote>`
      : '';

    el.innerHTML = `
      <span class="scrolly-step__number">${i + 1} / ${STORY_STEPS.length}</span>
      ${layerBadge}
      <h3 class="scrolly-step__title">${step.title}</h3>
      <p class="scrolly-step__body">${step.body}</p>
      ${quoteHTML}
    `;
    container.appendChild(el);
  });

  // First step active by default
  const firstStep = container.querySelector('.scrolly-step');
  if (firstStep) firstStep.classList.add('is-active');

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.querySelectorAll('.scrolly-step').forEach(s =>
            s.classList.remove('is-active')
          );
          entry.target.classList.add('is-active');
          const activeLayer = entry.target.dataset.activeLayer || null;
          updateScrollyDiagram(activeLayer);
        }
      });
    },
    {
      threshold: 0.4,
      rootMargin: '-5% 0px -45% 0px',
    }
  );

  document.querySelectorAll('.scrolly-step').forEach(step => observer.observe(step));
}

/* ============================================================
   BOUNDARIES
   ============================================================ */

function renderBoundaries() {
  const container = document.getElementById('boundaries-timeline');

  BOUNDARIES.forEach(b => {
    const card = document.createElement('div');
    card.className = `boundary-card boundary-card--${b.type}`;
    card.innerHTML = `
      <div class="boundary-card__marker">${b.id}</div>
      <div class="boundary-card__badge">${b.work}</div>
      <div class="boundary-card__parv">${b.parv}</div>
      <div class="boundary-card__desc">${b.position}</div>
      <div class="boundary-card__desc" style="margin-top:0.5rem; font-style:italic; font-size:0.8rem;">${b.description}</div>
    `;
    container.appendChild(card);
  });
}

/* ============================================================
   NAV DOTS — active state on scroll
   ============================================================ */

function initNavDots() {
  const sections = ['diagram', 'story-begins', 'boundaries'].map(id =>
    document.getElementById(id)
  );
  const dots = document.querySelectorAll('.nav-dot');

  const obs = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          dots.forEach(d => d.classList.remove('is-active'));
          const href = '#' + entry.target.id;
          const dot = document.querySelector(`.nav-dot[href="${href}"]`);
          if (dot) dot.classList.add('is-active');
        }
      });
    },
    { threshold: 0.4 }
  );

  sections.forEach(s => s && obs.observe(s));
}

/* ============================================================
   INIT
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  renderMainDiagram();
  initScrollytelling();
  renderBoundaries();
  initNavDots();
});
