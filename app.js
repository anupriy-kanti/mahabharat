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
  },
];

/* Body as arrays of short paragraphs — each string renders as a <p> */
const VIEWER_LAYERS = [
  {
    id: 'L4',
    image: 'Gemini AI_Final author_v1.png',
    narrator: 'The Final Author',
    audience: 'The Final Audience (Us)',
    textName: 'Mahābhārat',
    context: 'The outermost compositional frame',
    body: [
      'The anonymous outermost voice opens the Epic with an invocation — establishing ritualistic prerequisites before any story is told.',
      'This voice refers to Sauti in the third person and addresses us directly. We, reading now, are the Final Audience of this outermost frame.',
    ],
    quote: null,
    quoteSource: null,
  },
  {
    id: 'L3',
    image: 'Gemini AI_Shaunak and Sauti_v1.png',
    narrator: 'Ugrashravās Sauti',
    audience: 'Shaunak & the Sages',
    textName: 'Mahābhārat',
    context: '12-year sacrifice · Naimishāranya Forest',
    body: [
      'At the forest of Naimishāranya, the wandering bard Sauti arrives while Shaunak and the sages are deep in a twelve-year sacrifice. The sages ask him to recite the story of the Kuru clan.',
      'Before beginning, Sauti notes something remarkable: the Epic has no single mandatory entry point. Each reader may enter from a different story within the story.',
    ],
    quote: '"Some read Bharata from the story of Manu, others from the story of Astika, still others from the story of Uparichara. Some brahmanas read the entire text."',
    quoteSource: 'Anukramanika Parv, p. 5 · Bibek Debroy trans.',
  },
  {
    id: 'L2',
    image: 'Gemini AI_Janmejay and Vaishampayan_v1.png',
    narrator: 'Rishi Vaishampāyan',
    audience: 'King Janamejay',
    textName: 'Bhārat',
    context: 'Sarpa Satra · the Snake Sacrifice',
    body: [
      'Within the account of Sauti, a second frame opens: Vaishampāyan — a direct disciple of Vyās — recited the full Bhārat to King Janamejay at the great Sarpa Satra, the snake sacrifice.',
      'Sauti was present at this recitation. He now transmits what he witnessed to Shaunak, folding the second frame inside the third.',
    ],
    quote: null,
    quoteSource: null,
  },
  {
    id: 'L1',
    image: 'Gemini AI_Dhritrashtr and Sanjay_v2.png',
    narrator: 'Sanjay',
    audience: 'King Dhritarāshtra',
    textName: 'Jaya',
    context: 'The war itself · divine vision granted',
    body: [
      'Within Vaishampāyan\'s narration, a third frame opens: Vyās originally composed "Jaya." During the war itself, Sanjay was granted divine vision by Vyās.',
      'Sanjay reported every event in real time to the blind king Dhritarāshtra. The Bhagavad Gita — the dialogue between Krishn and Arjun — sits within this innermost named frame.',
    ],
    quote: null,
    quoteSource: null,
  },
  {
    id: 'Core',
    image: 'Gemini AI_Arjun and Krishn_v2.png',
    narrator: null,
    audience: null,
    textName: null,
    context: 'Kurukshetra · The War of the Kuru Clan',
    body: [
      'Only now — after four layers of transmission have been established — does the actual narrative begin.',
      'Every word of the Kuru clan\'s war has been mediated through nested narrators across generations. The text is always aware of itself as a retelling.',
    ],
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

const FRAMEWORK_BODY = [
  "Each authorial voice we just met belongs to one of these four nested frames of transmission.",
  "This is the framework I developed to read the Critical Edition — to understand how any sentence in the Mahābhārat reaches us across time.",
  "The outermost frame (L4) contains all others. Each narrator recounts what a previous narrator said.",
  "The Core — the Kuru clan war — is the content all four layers exist to preserve and transmit across time.",
];

/* ============================================================
   SVG HELPERS
   ============================================================ */

function svgEl(tag, attrs) {
  const el = document.createElementNS('http://www.w3.org/2000/svg', tag);
  for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
  return el;
}

const VB_W = 800, VB_H = 600;
const PAD = 38, INSET = 30;

function layerRect(level) {
  const x = PAD + level * INSET;
  const y = PAD + level * INSET;
  return { x, y, w: VB_W - x * 2, h: VB_H - y * 2 };
}

/* ============================================================
   SVG DIAGRAM BUILDER — used for interactive + background instances
   ============================================================ */

let selectedLayer = null;

function buildLayersSVG(svgId, interactive) {
  const svg = document.getElementById(svgId);
  if (!svg) return;
  svg.setAttribute('viewBox', `0 0 ${VB_W} ${VB_H}`);
  svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');

  [...LAYERS].forEach(layer => {
    const gAttrs = {
      class: `layer-group layer-group--${layer.id}`,
      'data-layer': layer.id,
    };
    if (interactive) {
      gAttrs.tabindex = '0';
      gAttrs.role = 'button';
      gAttrs['aria-label'] = `${layer.id}: ${layer.narrator ? layer.narrator + ' to ' + layer.audience : 'The Core narrative'}`;
    }
    const g = svgEl('g', gAttrs);
    const r = layerRect(layer.level);

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
      const t = svgEl('text', {
        x: r.x + r.w / 2, y: r.y + r.h / 2,
        'text-anchor': 'middle', 'dominant-baseline': 'middle',
        fill: layer.textFill,
        'font-family': 'EB Garamond, Georgia, serif',
        'font-size': '15', 'font-style': 'italic',
      });
      t.textContent = layer.topLeft;
      g.appendChild(t);
    } else {
      const LP = 10;
      const TY_TOP = r.y + LP + 9;
      const TY_BOT = r.y + r.h - LP - 4;

      const tl = svgEl('text', { x: r.x + LP, y: TY_TOP, fill: layer.textFill, 'font-family': 'EB Garamond, Georgia, serif', 'font-size': '11', 'font-style': 'italic', 'dominant-baseline': 'hanging' });
      tl.textContent = layer.topLeft;
      g.appendChild(tl);

      const tr = svgEl('text', { x: r.x + r.w - LP, y: TY_TOP, fill: layer.textFill, 'font-family': 'EB Garamond, Georgia, serif', 'font-size': '11', 'font-style': 'italic', 'text-anchor': 'end', 'dominant-baseline': 'hanging' });
      tr.textContent = layer.topRight;
      g.appendChild(tr);

      const bl = svgEl('text', { x: r.x + LP, y: TY_BOT, fill: layer.textFill, 'font-family': 'Cinzel, Georgia, serif', 'font-size': '10', 'font-weight': '600', 'letter-spacing': '0.08em', 'dominant-baseline': 'auto' });
      bl.textContent = layer.bottomLeft;
      g.appendChild(bl);

      const br = svgEl('text', { x: r.x + r.w - LP, y: TY_BOT, fill: layer.textFill, 'font-family': 'EB Garamond, Georgia, serif', 'font-size': '10', 'font-style': 'italic', 'text-anchor': 'end', 'dominant-baseline': 'auto' });
      br.textContent = layer.bottomRight;
      g.appendChild(br);

      const mid = svgEl('text', { x: r.x + LP + 2, y: r.y + r.h / 2, fill: layer.textFill, 'font-family': 'Cinzel, Georgia, serif', 'font-size': '13', 'font-weight': '700', 'letter-spacing': '0.1em', 'dominant-baseline': 'middle', opacity: '0.6' });
      mid.textContent = layer.id;
      g.appendChild(mid);
    }

    svg.appendChild(g);

    if (interactive) {
      g.addEventListener('mouseenter', () => highlightLayer(layer.id));
      g.addEventListener('mouseleave', () => { if (selectedLayer !== layer.id) resetHighlight(); });
      g.addEventListener('click', () => {
        if (selectedLayer === layer.id) { selectedLayer = null; resetHighlight(); }
        else { selectedLayer = layer.id; highlightLayer(layer.id); }
      });
      g.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); g.click(); }
      });
    }
  });

  if (interactive) {
    document.addEventListener('click', e => {
      if (!e.target.closest('#layers-svg')) { selectedLayer = null; resetHighlight(); }
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') { selectedLayer = null; resetHighlight(); }
    });
  }
}

function renderMainDiagram() {
  buildLayersSVG('layers-svg', false);
}

function renderBgDiagram() {
  buildLayersSVG('bg-svg', false);
}

/* ============================================================
   BACKGROUND DIAGRAM DIMMING
   ============================================================ */

function initBgDimming() {
  const bg = document.getElementById('bg-diagram');
  if (!bg) return;

  // Dim when section headers scroll into view
  const headers = document.querySelectorAll('.section__header');
  const heroEl = document.getElementById('hero');

  const dimObserver = new IntersectionObserver(entries => {
    const anyHeader = [...document.querySelectorAll('.section__header')].some(
      h => h.getBoundingClientRect().top < window.innerHeight * 0.7 &&
           h.getBoundingClientRect().bottom > window.innerHeight * 0.1
    );
    bg.classList.toggle('is-dimmed', anyHeader);
  }, { threshold: [0, 0.25, 0.5, 0.75, 1] });

  headers.forEach(h => dimObserver.observe(h));

  // Brighten when hero is visible
  if (heroEl) {
    const heroObserver = new IntersectionObserver(entries => {
      entries.forEach(e => bg.classList.toggle('is-hero', e.isIntersecting));
    }, { threshold: 0.1 });
    heroObserver.observe(heroEl);
  }
}

/* ============================================================
   NESTED IMAGE VIEWER
   ============================================================ */

function initNestedViewer() {
  const viewer = document.getElementById('nested-viewer');
  const framesContainer = document.getElementById('viewer-frames');
  if (!viewer || !framesContainer) return;

  // Build frames
  VIEWER_LAYERS.forEach(layer => {
    const frame = document.createElement('div');
    frame.className = `nested-frame nested-frame--${layer.id}`;
    frame.dataset.layer = layer.id;

    const img = document.createElement('img');
    img.src = encodeURI(layer.image);
    img.alt = layer.id + (layer.narrator ? ' — ' + layer.narrator + ' to ' + layer.audience : ' — Core narrative');
    img.loading = 'lazy';
    frame.appendChild(img);

    const label = document.createElement('span');
    label.className = 'nested-frame__label';
    label.textContent = layer.id;
    frame.appendChild(label);

    framesContainer.appendChild(frame);
  });

  // Flatten all body content into sub-steps
  const subSteps = [];
  VIEWER_LAYERS.forEach((layer, layerIdx) => {
    const sentences = Array.isArray(layer.body) ? layer.body : [layer.body];
    sentences.forEach(s => {
      subSteps.push({ layerIdx, content: s, type: 'body' });
    });
    if (layer.quote) {
      subSteps.push({ layerIdx, content: layer.quote, cite: layer.quoteSource, type: 'quote' });
    }
  });
  // subSteps.length should be 12

  let currentSubStep = -2;
  let currentLayerIdx = -1;

  function updateFrames(layerIdx) {
    framesContainer.querySelectorAll('.nested-frame').forEach((frame, i) => {
      frame.classList.toggle('is-visible', i <= layerIdx);
      frame.classList.toggle('is-tinted', i < layerIdx);
      frame.classList.toggle('is-active', i === layerIdx);
    });
  }

  function updateViewerMeta(layerIdx) {
    const metaEl = document.getElementById('viewer-meta');
    if (!metaEl) return;
    const layer = VIEWER_LAYERS[layerIdx];
    const narratorLine = layer.narrator
      ? `<span class="viewer-info__narrator">${layer.narrator}</span>
         <span class="viewer-info__arrow">→</span>
         <span class="viewer-info__audience">${layer.audience}</span>`
      : `<span class="viewer-info__narrator">The Core Story</span>`;
    metaEl.innerHTML = `
      <div class="viewer-info__badge">${layer.id}${layer.textName ? ' · ' + layer.textName : ''} <span class="viewer-info__count">${layerIdx + 1} / ${VIEWER_LAYERS.length}</span></div>
      <div class="viewer-info__narrator-row">${narratorLine}</div>
      <div class="viewer-info__context">${layer.context}</div>
    `;
    metaEl.style.animation = 'none';
    metaEl.offsetHeight; // reflow
    metaEl.style.animation = '';
  }

  function updateSentence(subStep) {
    const el = document.getElementById('viewer-sentence');
    if (!el) return;
    el.classList.add('is-fading');
    setTimeout(() => {
      if (subStep.type === 'quote') {
        el.innerHTML = `<span class="viewer-quote-block">${subStep.content}<cite>${subStep.cite}</cite></span>`;
      } else {
        el.textContent = subStep.content;
      }
      el.classList.remove('is-fading');
    }, 200);
  }

  function updateViewer() {
    const rect = viewer.getBoundingClientRect();
    if (rect.top > window.innerHeight + 200) return;

    const scrolled = Math.max(0, -rect.top);
    const total = viewer.offsetHeight - window.innerHeight;
    if (total <= 0) return;

    const progress = Math.min(1, scrolled / total);

    const bar = document.getElementById('viewer-progress');
    if (bar) bar.style.width = (progress * 100) + '%';

    const targetSubStep = Math.min(
      subSteps.length - 1,
      Math.floor(progress * subSteps.length)
    );

    if (targetSubStep !== currentSubStep) {
      currentSubStep = targetSubStep;
      const step = subSteps[targetSubStep];

      // Update sentence every time
      updateSentence(step);

      // Update frames + meta only when layer changes
      if (step.layerIdx !== currentLayerIdx) {
        currentLayerIdx = step.layerIdx;
        updateFrames(step.layerIdx);
        updateViewerMeta(step.layerIdx);
      }
    }
  }

  window.addEventListener('scroll', updateViewer, { passive: true });
  updateViewer();
}

/* ============================================================
   FRAMEWORK SCROLL
   ============================================================ */

function initFrameworkScroll() {
  const container = document.getElementById('framework-scroll');
  const bodyEl = document.getElementById('framework-body');
  if (!container || !bodyEl) return;

  let currentIdx = -2;

  function update() {
    const rect = container.getBoundingClientRect();
    if (rect.top > window.innerHeight + 100) return;

    const scrolled = Math.max(0, -rect.top);
    const total = container.offsetHeight - window.innerHeight;
    if (total <= 0) return;

    const progress = Math.min(1, scrolled / total);
    const targetIdx = Math.min(FRAMEWORK_BODY.length - 1, Math.floor(progress * FRAMEWORK_BODY.length));

    if (targetIdx !== currentIdx) {
      currentIdx = targetIdx;
      bodyEl.classList.add('is-fading');
      setTimeout(() => {
        bodyEl.innerHTML = `<p>${FRAMEWORK_BODY[targetIdx]}</p>`;
        bodyEl.classList.remove('is-fading');
      }, 175);
    }
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
}

/* ============================================================
   BOUNDARIES (used on boundaries.html)
   ============================================================ */

function renderBoundaries() {
  const container = document.getElementById('boundaries-timeline');
  if (!container) return;

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
   NAV DOTS
   ============================================================ */

function initNavDots() {
  const sectionIds = ['story-begins', 'framework'];
  const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);
  const dots = document.querySelectorAll('.nav-dot');
  if (!sections.length || !dots.length) return;

  const obs = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          dots.forEach(d => d.classList.remove('is-active'));
          const dot = document.querySelector(`.nav-dot[href="#${entry.target.id}"]`);
          if (dot) dot.classList.add('is-active');
        }
      });
    },
    { threshold: 0.3 }
  );

  sections.forEach(s => obs.observe(s));
}

/* ============================================================
   INIT
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('bg-svg'))               renderBgDiagram();
  if (document.getElementById('layers-svg'))           renderMainDiagram();
  if (document.getElementById('nested-viewer'))        initNestedViewer();
  if (document.getElementById('bg-diagram'))           initBgDimming();
  if (document.getElementById('framework-scroll'))     initFrameworkScroll();
  if (document.getElementById('boundaries-timeline')) renderBoundaries();
  initNavDots();
});
