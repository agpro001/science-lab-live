import type { Chapter } from "./types";

export const biologyChapters: Chapter[] = [
  {
    number: 5,
    slug: "life-processes",
    title: "Life Processes",
    subject: "biology",
    tagline: "Compute cardiac output, breathing volume and transpiration.",
    intro:
      "Nutrition, respiration, transport and excretion are all rate processes — and rates can be calculated. The live module runs the real physiological formulas for heart output, pulmonary ventilation and glomerular filtration.",
    moduleKey: "life-processes-lab",
    moduleTitle: "Physiology Rate Calculator",
    moduleBlurb:
      "Set heart rate and stroke volume to get cardiac output; set tidal volume and breathing rate to get pulmonary ventilation; adjust filtration and reabsorption to get urine output — every value from the real formula, with an animated pathway.",
    videoId: "5YOf-Rm4B7I",
    videoTitle: "Life Processes — full chapter revision",
    videoDescription:
      "Nutrition in plants and animals, human digestive system, respiration, transportation in humans and plants, and excretion including the nephron.",
    notesFileId: "1ltzql_hez0sPmNkcgly-uPIQwUt0cgsK",
    notesTitle: "Rapid Revision — Life Processes",
    formulas: [
      { name: "Photosynthesis", expr: "6CO₂ + 12H₂O →(light, chlorophyll) C₆H₁₂O₆ + 6O₂ + 6H₂O", meaning: "Autotrophic nutrition converts light energy into chemical energy." },
      { name: "Aerobic respiration", expr: "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + 38 ATP", meaning: "Complete oxidation in the mitochondria." },
      { name: "Anaerobic (yeast)", expr: "Glucose → 2 Ethanol + 2CO₂ + 2 ATP", meaning: "Fermentation; occurs without oxygen." },
      { name: "Anaerobic (muscle)", expr: "Glucose → 2 Lactic acid + 2 ATP", meaning: "Causes cramps during vigorous exercise." },
      { name: "Cardiac output", expr: "CO = Heart rate × Stroke volume", meaning: "Typically 72 × 70 mL ≈ 5 L/min." },
      { name: "Pulmonary ventilation", expr: "PV = Tidal volume × Breathing rate", meaning: "About 500 mL × 15 = 7.5 L/min at rest." },
    ],
    theory: [
      {
        id: "nutrition",
        title: "Nutrition",
        simple:
          "Autotrophs make their own food by photosynthesis; heterotrophs take it in. Human digestion runs mouth → oesophagus → stomach → small intestine → large intestine.",
        deeper:
          "Saliva has salivary amylase (starch → maltose). The stomach secretes HCl, pepsin and mucus. The small intestine receives bile (emulsifies fat), pancreatic juice (trypsin, lipase, amylase) and intestinal juice; villi absorb the products.",
        keywords: ["amylase", "pepsin", "bile", "villi", "peristalsis"],
        misconception: "Bile contains no enzymes — it only emulsifies fats and makes the medium alkaline.",
      },
      {
        id: "respiration",
        title: "Respiration",
        simple:
          "Glucose is broken down to release energy as ATP. With oxygen it goes fully to CO₂ and water; without oxygen it stops at lactic acid (muscle) or ethanol (yeast).",
        deeper:
          "Glycolysis happens in the cytoplasm; aerobic steps happen in the mitochondria. Alveoli give a huge surface area (about 80 m²) for gas exchange. Fish extract dissolved oxygen through gills and breathe faster because water has less oxygen than air.",
        keywords: ["ATP", "alveoli", "glycolysis", "mitochondria", "diaphragm"],
      },
      {
        id: "transport",
        title: "Transportation",
        simple:
          "The human heart has four chambers and pumps blood twice through it in one cycle — double circulation. Xylem carries water upward; phloem translocates food in both directions.",
        deeper:
          "Arteries carry blood away from the heart with thick elastic walls; veins carry it back and have valves. Transpiration pull moves water up the xylem; translocation in phloem uses energy from ATP.",
        keywords: ["double circulation", "xylem", "phloem", "transpiration pull", "lymph"],
        misconception: "The pulmonary artery carries deoxygenated blood, and the pulmonary vein carries oxygenated blood.",
      },
      {
        id: "excretion",
        title: "Excretion",
        simple:
          "Kidneys filter blood in nephrons: filtration in the glomerulus, selective reabsorption in the tubule, and the rest leaves as urine.",
        deeper:
          "About 180 L is filtered daily but only 1–2 L leaves as urine — the rest of the water, glucose, amino acids and salts are reabsorbed. Plants excrete through stomata, by storing waste in vacuoles/leaves and by shedding leaves and bark.",
        keywords: ["nephron", "glomerulus", "Bowman's capsule", "dialysis"],
      },
    ],
    activities: [
      {
        id: "starch-test",
        title: "Testing a leaf for starch (photosynthesis needs light)",
        aim: "To show that light is essential for photosynthesis.",
        materials: ["Destarched potted plant", "Black paper strip", "Alcohol", "Water bath", "Iodine solution"],
        procedure: [
          "Destarch a potted plant by keeping it in the dark for 48 hours.",
          "Cover part of a leaf with black paper and expose the plant to sunlight for 6 hours.",
          "Boil the leaf in water, then in alcohol using a water bath to remove chlorophyll, and test with iodine.",
        ],
        observation: "The exposed part turns blue-black; the covered part stays brown/yellow.",
        explanation: "Starch is formed only where light reached the chlorophyll, and iodine turns blue-black with starch.",
        conclusion: "Light is essential for photosynthesis.",
        precautions: ["Never heat alcohol directly — always use a water bath.", "Destarch the plant properly before starting."],
        viva: [
          { q: "Why boil the leaf in alcohol?", a: "To dissolve out chlorophyll so the iodine colour is clearly visible." },
          { q: "Why destarch first?", a: "To make sure any starch found afterwards was made during the experiment." },
        ],
      },
    ],
    numericals: [
      {
        id: "cardiac-output",
        question: "A person has a heart rate of 72 beats/min and a stroke volume of 70 mL. Find the cardiac output in L/min.",
        given: ["HR = 72 beats/min", "SV = 70 mL/beat"],
        formula: "Cardiac output = Heart rate × Stroke volume",
        substitution: "CO = 72 × 70 mL/min",
        steps: ["CO = 5040 mL/min", "Convert: 5040 / 1000 = 5.04 L/min"],
        answer: "≈ 5.04 L/min",
        unitCheck: "beats/min × mL/beat = mL/min ✓",
        concept: "Cardiac output is the volume of blood pumped by each ventricle per minute.",
      },
      {
        id: "ventilation",
        question: "If tidal volume is 500 mL and breathing rate is 15 per minute, find the pulmonary ventilation.",
        given: ["TV = 500 mL", "BR = 15 /min"],
        formula: "PV = TV × BR",
        substitution: "PV = 500 × 15",
        steps: ["PV = 7500 mL/min", "= 7.5 L/min"],
        answer: "7.5 L/min",
        unitCheck: "mL × min⁻¹ = mL/min ✓",
        concept: "Total air moved in and out of the lungs each minute.",
      },
    ],
    diagrams: [
      {
        id: "nephron",
        title: "Structure of a nephron",
        width: 420,
        height: 300,
        shapes: [
          { k: "circle", cx: 120, cy: 80, r: 30, c: "#ff9ecb", fill: "rgba(255,158,203,0.16)" },
          { k: "path", d: "M104 62 c14 -10 30 4 22 16 c-8 12 -26 6 -22 -6", c: "#ff6b9d", w: 2 },
          { k: "path", d: "M150 88 C200 90 210 130 176 150 C140 172 150 210 186 224 C230 240 260 210 268 170", c: "#7ee0ff", w: 3 },
          { k: "path", d: "M176 150 C168 190 176 216 186 224", c: "#7ee0ff", w: 3 },
          { k: "path", d: "M268 170 C282 130 300 120 330 122", c: "#9bf7c0", w: 3 },
          { k: "line", x1: 60, y1: 80, x2: 92, y2: 80, c: "#ff6b6b", w: 3 },
          { k: "line", x1: 148, y1: 68, x2: 190, y2: 56, c: "#6b9dff", w: 3 },
          { k: "path", d: "M330 122 C350 150 350 220 330 268", c: "#c9b5ff", w: 4 },
        ],
        parts: [
          { id: "glomerulus", label: "Glomerulus", x: 118, y: 76, lx: 100, ly: 26, hint: "Ball of capillaries where filtration occurs." },
          { id: "bowman", label: "Bowman's capsule", x: 146, y: 96, lx: 214, ly: 30, hint: "Cup-shaped structure collecting the filtrate." },
          { id: "tubule", label: "Tubular part", x: 180, y: 170, lx: 84, ly: 190, hint: "Selective reabsorption of glucose, salts and water." },
          { id: "collecting", label: "Collecting duct", x: 336, y: 200, lx: 372, ly: 250, hint: "Carries urine to the ureter." },
          { id: "artery", label: "Renal artery branch", x: 70, y: 80, lx: 34, ly: 56, hint: "Brings blood with wastes under high pressure." },
        ],
      },
    ],
    commonErrors: [
      { wrong: "Saying bile digests fat.", right: "Bile only emulsifies fat; lipase digests it." },
      { wrong: "Writing 'blood is purified in the heart'.", right: "Blood is purified in the kidneys and oxygenated in the lungs." },
      { wrong: "Confusing xylem and phloem directions.", right: "Xylem: water upward only. Phloem: food in both directions." },
      { wrong: "Writing 6H₂O on the reactant side of photosynthesis.", right: "The standard NCERT equation uses 12H₂O and releases 6H₂O." },
    ],
    board: [
      {
        q: "Why is the small intestine long and highly folded with villi?",
        marks: 3,
        answer: [
          "Complete digestion of carbohydrates, proteins and fats takes time, so a long tube is needed.",
          "Villi increase the surface area enormously for absorption.",
          "Villi are richly supplied with blood vessels that carry absorbed food to every cell.",
        ],
      },
      {
        q: "Describe double circulation in humans and state why it is necessary.",
        marks: 3,
        answer: [
          "Blood passes through the heart twice in one complete cycle: pulmonary circulation (heart → lungs → heart) and systemic circulation (heart → body → heart).",
          "It keeps oxygenated and deoxygenated blood completely separate.",
          "This is necessary for warm-blooded animals with a high energy requirement.",
        ],
      },
      {
        q: "How is urine formed in a nephron?",
        marks: 3,
        answer: [
          "Blood is filtered under pressure in the glomerulus into Bowman's capsule.",
          "In the tubule, glucose, amino acids, salts and most water are selectively reabsorbed.",
          "The remaining fluid — urea, excess salts and water — is urine, which passes to the collecting duct and ureter.",
        ],
      },
    ],
    quiz: [
      {
        id: "b5q1",
        type: "mcq",
        q: "The enzyme present in saliva is:",
        options: ["Pepsin", "Trypsin", "Salivary amylase", "Lipase"],
        answer: "Salivary amylase",
        explain: "It converts starch into maltose in the mouth.",
        concept: "Digestion",
      },
      {
        id: "b5q2",
        type: "mcq",
        q: "Anaerobic respiration in human muscles produces:",
        options: ["Ethanol and CO₂", "Lactic acid", "CO₂ and water", "Pyruvate only"],
        answer: "Lactic acid",
        explain: "Accumulation of lactic acid causes muscle cramps.",
        concept: "Respiration",
      },
      {
        id: "b5q3",
        type: "fill",
        q: "The functional unit of the kidney is the ______.",
        answer: "nephron",
        explain: "Each kidney has about a million nephrons.",
        concept: "Excretion",
      },
      {
        id: "b5q4",
        type: "short",
        q: "Why do the walls of the left ventricle appear thicker than the right?",
        answer: "It pumps blood to the whole body at high pressure",
        explain: "The right ventricle only pumps to the nearby lungs, so it needs less force.",
        concept: "Transportation",
      },
    ],
    summary: [
      "Autotrophic nutrition = photosynthesis; heterotrophic = holozoic, saprophytic, parasitic.",
      "Aerobic respiration gives 38 ATP; anaerobic gives 2 ATP.",
      "Four-chambered heart → double circulation.",
      "Xylem transports water; phloem translocates food.",
      "Nephron: filtration → selective reabsorption → urine.",
    ],
  },
  {
    number: 6,
    slug: "control-and-coordination",
    title: "Control and Coordination",
    subject: "biology",
    tagline: "Time a reflex arc from real conduction speeds.",
    intro:
      "A reflex is fast because it skips the brain. The module here computes the actual response time from nerve length, conduction velocity and synaptic delay — so 'faster than thinking' becomes a number.",
    moduleKey: "reflex-lab",
    moduleTitle: "Reflex Arc Timing & Nervous Pathway Lab",
    moduleBlurb:
      "Set the nerve path length, conduction velocity and number of synapses. The engine computes the reflex time in milliseconds, compares it with a voluntary response through the brain, and animates the impulse along the arc.",
    videoId: "jz4fzgC20Gg",
    videoTitle: "Control and Coordination — full chapter revision",
    videoDescription:
      "Nervous system, neuron structure, reflex action and reflex arc, human brain, coordination in plants (tropisms and plant hormones), and endocrine glands with their hormones.",
    notesFileId: "18oU7ayICaM-SxSgylNUZUqMOw4KNCf2v",
    notesTitle: "Rapid Revision — Control and Coordination",
    formulas: [
      { name: "Conduction time", expr: "t = distance / conduction velocity", meaning: "Nerve impulses travel at roughly 1–120 m/s depending on the fibre." },
      { name: "Reflex time", expr: "t_total = t_conduction + (number of synapses × synaptic delay)", meaning: "Each synapse adds roughly 0.5–1 ms." },
      { name: "Reflex arc", expr: "Receptor → Sensory neuron → Spinal cord → Motor neuron → Effector", meaning: "The brain is only informed afterwards." },
    ],
    theory: [
      {
        id: "neuron",
        title: "The neuron and the nerve impulse",
        simple:
          "Dendrites pick up the stimulus, the cell body processes it, the axon carries the electrical impulse, and at the synapse chemicals carry the signal to the next cell.",
        deeper:
          "The gap between two neurons is the synapse; between a neuron and a muscle it is the neuromuscular junction. Transmission across a synapse is chemical and one-way.",
        keywords: ["dendrite", "axon", "synapse", "neurotransmitter"],
      },
      {
        id: "reflex",
        title: "Reflex action and reflex arc",
        simple:
          "A reflex is a sudden, automatic response to a stimulus. The signal goes receptor → sensory neuron → spinal cord → motor neuron → muscle, without waiting for the brain.",
        deeper:
          "Reflex arcs evolved because thinking takes longer than the danger allows. The brain does receive the information, but only after the action has already happened.",
        keywords: ["reflex arc", "spinal cord", "effector", "stimulus"],
        misconception: "The brain is not bypassed permanently — it is informed, just not consulted first.",
      },
      {
        id: "brain",
        title: "The human brain",
        simple:
          "Cerebrum: thinking, memory, voluntary action. Cerebellum: posture and balance. Medulla: involuntary actions like heartbeat, breathing, vomiting. Hypothalamus and pons control hunger, sleep and thirst.",
        deeper:
          "The brain is protected by the cranium and by cerebrospinal fluid inside three membranes (meninges); the spinal cord is protected by the vertebral column.",
        keywords: ["cerebrum", "cerebellum", "medulla", "meninges"],
      },
      {
        id: "hormones",
        title: "Coordination in plants and by hormones",
        simple:
          "Plants respond by tropisms — phototropism, geotropism, hydrotropism, chemotropism and thigmotropism — using hormones like auxin, gibberellin, cytokinin, abscisic acid and ethylene.",
        deeper:
          "In humans, hormones from endocrine glands travel in blood: thyroxine (thyroid, needs iodine), insulin (pancreas), adrenaline (adrenal, fight-or-flight), growth hormone (pituitary), testosterone and oestrogen.",
        keywords: ["auxin", "tropism", "thyroxine", "insulin", "adrenaline", "feedback"],
      },
    ],
    activities: [
      {
        id: "phototropism",
        title: "Demonstrating phototropism",
        aim: "To show that a shoot bends towards a unidirectional source of light.",
        materials: ["Potted seedling", "Cardboard box with a hole on one side", "Water"],
        procedure: [
          "Place a healthy potted seedling inside a cardboard box with a single hole on one side.",
          "Keep the box near a window so light enters only through the hole.",
          "Observe daily for 3–4 days, watering the plant normally.",
        ],
        observation: "The shoot bends and grows towards the hole where light enters.",
        explanation:
          "Auxin accumulates on the shaded side, causing cells there to elongate more, so the shoot curves towards the light — positive phototropism.",
        conclusion: "Shoots show positive phototropism controlled by the hormone auxin.",
        precautions: ["Keep the box closed except for the hole.", "Do not move or rotate the pot during the experiment."],
        viva: [
          { q: "Which hormone is responsible?", a: "Auxin, which migrates to the shaded side." },
          { q: "What about the root?", a: "The root shows negative phototropism and positive geotropism." },
        ],
      },
    ],
    numericals: [
      {
        id: "reflex-time",
        question:
          "A reflex pathway is 1.2 m long, the impulse travels at 60 m/s and there are 2 synapses with 1 ms delay each. Find the reflex time.",
        given: ["d = 1.2 m", "v = 60 m/s", "2 synapses × 1 ms"],
        formula: "t = d/v + (n × synaptic delay)",
        substitution: "t = 1.2/60 + (2 × 0.001)",
        steps: ["Conduction time = 0.02 s = 20 ms", "Synaptic delay = 2 ms", "Total = 22 ms"],
        answer: "≈ 22 milliseconds",
        unitCheck: "m ÷ (m/s) = s ✓",
        concept: "Reflexes are fast because the pathway is short and few synapses are involved.",
      },
    ],
    diagrams: [
      {
        id: "reflex-arc",
        title: "Reflex arc",
        width: 440,
        height: 260,
        shapes: [
          { k: "ellipse", cx: 330, cy: 130, rx: 46, ry: 76, c: "#c9b5ff", fill: "rgba(201,181,255,0.12)" },
          { k: "path", d: "M312 90 c22 8 22 72 0 80", c: "#c9b5ff", w: 2 },
          { k: "path", d: "M70 76 C160 60 250 74 296 106", c: "#7ee0ff", w: 3 },
          { k: "path", d: "M296 158 C250 190 160 200 70 186", c: "#9bf7c0", w: 3 },
          { k: "circle", cx: 60, cy: 76, r: 12, c: "#ffcf6b", fill: "rgba(255,207,107,0.25)" },
          { k: "rect", x: 34, y: 172, w: 46, h: 28, r: 6, c: "#ff9ecb", fill: "rgba(255,158,203,0.2)" },
          { k: "circle", cx: 300, cy: 118, r: 7, c: "#7ee0ff", fill: "rgba(126,224,255,0.6)" },
        ],
        parts: [
          { id: "receptor", label: "Receptor (skin)", x: 60, y: 76, lx: 34, ly: 42, hint: "Detects the stimulus, e.g. heat or a pin prick." },
          { id: "sensory", label: "Sensory neuron", x: 180, y: 66, lx: 176, ly: 28, hint: "Carries the impulse to the spinal cord." },
          { id: "spinal", label: "Spinal cord", x: 330, y: 130, lx: 388, ly: 100, hint: "Relay centre where the decision is made." },
          { id: "motor", label: "Motor neuron", x: 180, y: 192, lx: 190, ly: 232, hint: "Carries the command to the muscle." },
          { id: "effector", label: "Effector (muscle)", x: 56, y: 186, lx: 40, ly: 226, hint: "Contracts to move the body part away." },
        ],
      },
    ],
    commonErrors: [
      { wrong: "Saying reflexes are controlled by the brain.", right: "They are controlled by the spinal cord; the brain is only informed." },
      { wrong: "Calling auxin a growth inhibitor.", right: "Auxin promotes cell elongation; abscisic acid is the inhibitor." },
      { wrong: "Mixing up the cerebellum and medulla.", right: "Cerebellum = balance/posture; medulla = heartbeat, breathing, vomiting." },
      { wrong: "Saying hormones act through nerves.", right: "Hormones travel in the bloodstream to their target organs." },
    ],
    board: [
      {
        q: "What is a reflex arc? Draw the pathway and state its significance.",
        marks: 3,
        answer: [
          "The pathway taken by a nerve impulse in a reflex action: receptor → sensory neuron → spinal cord → motor neuron → effector.",
          "It allows an immediate protective response without waiting for the brain.",
          "This prevents damage in dangerous situations such as touching a hot object.",
        ],
      },
      {
        q: "Name the hormone secreted by the thyroid gland and state the disease caused by its deficiency.",
        marks: 2,
        answer: [
          "Thyroxine, which regulates carbohydrate, protein and fat metabolism.",
          "Its deficiency (due to lack of iodine) causes goitre.",
        ],
      },
      {
        q: "How does chemical coordination take place in plants? Name any two plant hormones and their functions.",
        marks: 3,
        answer: [
          "Plants have no nervous system; they use chemical messengers (plant hormones) that diffuse to the area of action.",
          "Auxin promotes cell elongation and causes phototropic bending.",
          "Abscisic acid inhibits growth and causes wilting/closing of stomata.",
        ],
      },
    ],
    quiz: [
      {
        id: "b6q1",
        type: "mcq",
        q: "Which part of the brain maintains posture and balance?",
        options: ["Cerebrum", "Cerebellum", "Medulla", "Pons"],
        answer: "Cerebellum",
        explain: "It coordinates precision of voluntary actions and balance.",
        concept: "Human brain",
      },
      {
        id: "b6q2",
        type: "mcq",
        q: "The hormone that prepares the body for 'fight or flight' is:",
        options: ["Insulin", "Thyroxine", "Adrenaline", "Testosterone"],
        answer: "Adrenaline",
        explain: "Secreted by the adrenal glands; increases heart rate and breathing.",
        concept: "Endocrine system",
      },
      {
        id: "b6q3",
        type: "fill",
        q: "The gap between two adjacent neurons is called a ______.",
        answer: "synapse",
        explain: "Transmission across it is chemical and one-way.",
        concept: "Neuron",
      },
      {
        id: "b6q4",
        type: "short",
        q: "Why is the movement of a sunflower towards the sun called a tropic movement?",
        answer: "Because the direction of growth is determined by the direction of the stimulus",
        explain: "Directional, growth-dependent responses are tropisms; here it is phototropism.",
        concept: "Plant movement",
      },
    ],
    summary: [
      "Neuron: dendrite → cell body → axon → synapse.",
      "Reflex arc bypasses the brain for speed.",
      "Cerebrum thinks, cerebellum balances, medulla runs involuntary actions.",
      "Plant tropisms are controlled by auxin and other hormones.",
      "Endocrine glands use blood-borne hormones with feedback control.",
    ],
  },
  {
    number: 7,
    slug: "how-do-organisms-reproduce",
    title: "How do Organisms Reproduce?",
    subject: "biology",
    tagline: "Explore the flower and every mode of reproduction.",
    intro:
      "Reproduction ranges from a single Amoeba splitting in two to double fertilisation in a flower. The module lets you step through each mode and label the real structures on code-drawn diagrams.",
    moduleKey: "reproduction-lab",
    moduleTitle: "Reproduction Mode Explorer",
    moduleBlurb:
      "Choose an organism or mode — fission, budding, fragmentation, regeneration, spore formation, vegetative propagation or sexual reproduction — and step through the stages with the exact structures involved and a comparison table.",
    videoId: "n4LLUcXOYgc",
    videoTitle: "How do Organisms Reproduce — full chapter revision",
    videoDescription:
      "Asexual modes of reproduction, sexual reproduction in flowering plants, human reproductive systems, reproductive health and contraception.",
    notesFileId: "1Awz-WF-ahIUSJSx_pzlOcasbWR5I9rYE",
    notesTitle: "Rapid Revision — How do Organisms Reproduce",
    formulas: [
      { name: "Binary fission", expr: "1 parent → 2 identical daughters", meaning: "Amoeba, Leishmania (longitudinal), Plasmodium (multiple fission)." },
      { name: "Population doubling", expr: "N = N₀ × 2ⁿ", meaning: "n = number of fission cycles; shows how fast asexual reproduction multiplies numbers." },
      { name: "Fertilisation", expr: "Male gamete (n) + Female gamete (n) → Zygote (2n)", meaning: "Restores the diploid chromosome number." },
      { name: "Menstrual cycle", expr: "≈ 28 days; ovulation around day 14", meaning: "Uterine lining is shed if fertilisation does not occur." },
    ],
    theory: [
      {
        id: "asexual",
        title: "Asexual reproduction",
        simple:
          "One parent, no gametes, offspring are genetically identical clones. Modes: fission, budding (Hydra, yeast), fragmentation (Spirogyra), regeneration (Planaria), spore formation (Rhizopus), vegetative propagation.",
        deeper:
          "Vegetative propagation (by roots, stems, leaves, layering, grafting or tissue culture) lets growers reproduce plants that do not make viable seeds, such as banana, sugarcane, rose and jasmine, and gives flowering earlier.",
        keywords: ["fission", "budding", "regeneration", "vegetative propagation", "tissue culture"],
        misconception: "Regeneration is not the same as reproduction — a cut Planaria regenerates, but a cut finger does not make a new human.",
      },
      {
        id: "flower",
        title: "Sexual reproduction in flowering plants",
        simple:
          "Stamen (anther + filament) is male; carpel/pistil (stigma, style, ovary) is female. Pollination transfers pollen to the stigma, then a pollen tube grows down to the ovule and fertilisation occurs.",
        deeper:
          "After fertilisation the ovule becomes the seed, the ovary becomes the fruit, and the petals, sepals, stamens and style usually fall off. Self-pollination happens in the same flower; cross-pollination between two flowers, aided by wind, water or insects.",
        keywords: ["stamen", "pistil", "pollination", "pollen tube", "zygote"],
      },
      {
        id: "human",
        title: "Human reproductive system",
        simple:
          "Male: testes (make sperm and testosterone), vas deferens, seminal vesicle, prostate, urethra. Female: ovaries (make eggs and oestrogen), fallopian tube (site of fertilisation), uterus, vagina.",
        deeper:
          "Testes lie in the scrotum because sperm formation needs a temperature lower than body temperature. The fertilised egg implants in the uterine lining and the placenta provides nutrition and removes waste. Gestation is about 9 months.",
        keywords: ["testes", "ovary", "fallopian tube", "placenta", "puberty"],
      },
      {
        id: "health",
        title: "Reproductive health",
        simple:
          "Contraception methods: barrier (condom), hormonal (oral pills), IUCD (copper-T), and surgical (vasectomy/tubectomy).",
        deeper:
          "STDs include gonorrhoea, syphilis (bacterial) and HIV-AIDS, warts (viral); barrier methods also protect against them. Prenatal sex determination is illegal in India because it causes a declining sex ratio.",
        keywords: ["contraception", "STD", "copper-T", "sex ratio"],
      },
    ],
    activities: [
      {
        id: "yeast-budding",
        title: "Observing budding in yeast",
        aim: "To observe asexual reproduction by budding in yeast.",
        materials: ["Dry yeast", "Sugar solution", "Slide and coverslip", "Microscope"],
        procedure: [
          "Dissolve a pinch of yeast in warm sugar solution and keep for 1–2 hours.",
          "Place a drop on a slide, cover with a coverslip.",
          "Observe under the low and then high power of a microscope.",
        ],
        observation: "Small bulb-like projections (buds) are seen on the parent yeast cells, sometimes forming chains.",
        explanation: "In budding, a new individual develops from a small outgrowth of the parent and later detaches.",
        conclusion: "Yeast reproduces asexually by budding.",
        precautions: ["Use lukewarm, not hot, water — high temperature kills yeast.", "Avoid air bubbles under the coverslip."],
        viva: [
          { q: "Name another organism that reproduces by budding.", a: "Hydra." },
          { q: "Are the offspring identical?", a: "Yes — asexual reproduction produces genetically identical clones." },
        ],
      },
    ],
    numericals: [
      {
        id: "fission",
        question: "One Amoeba divides by binary fission every 30 minutes. How many will there be after 3 hours?",
        given: ["N₀ = 1", "Division every 30 min", "t = 3 h = 180 min"],
        formula: "N = N₀ × 2ⁿ, n = t / division time",
        substitution: "n = 180/30 = 6 → N = 1 × 2⁶",
        steps: ["Number of divisions n = 6", "N = 2⁶ = 64"],
        answer: "64 Amoebae",
        unitCheck: "Dimensionless count ✓",
        concept: "Asexual reproduction gives exponential growth of identical individuals.",
      },
    ],
    diagrams: [
      {
        id: "flower",
        title: "Longitudinal section of a flower",
        width: 420,
        height: 300,
        shapes: [
          { k: "path", d: "M210 250 L210 130", c: "#9bf7c0", w: 4 },
          { k: "path", d: "M210 130 C186 130 176 112 178 96 C180 78 200 70 210 82 C220 70 240 78 242 96 C244 112 234 130 210 130", c: "#ff9ecb", fill: "rgba(255,158,203,0.14)" },
          { k: "ellipse", cx: 210, cy: 210, rx: 30, ry: 26, c: "#ffcf6b", fill: "rgba(255,207,107,0.2)" },
          { k: "circle", cx: 200, cy: 210, r: 6, c: "#ffe066", fill: "rgba(255,224,102,0.7)" },
          { k: "circle", cx: 220, cy: 214, r: 6, c: "#ffe066", fill: "rgba(255,224,102,0.7)" },
          { k: "line", x1: 210, y1: 184, x2: 210, y2: 120, c: "#9bf7c0", w: 3 },
          { k: "ellipse", cx: 210, cy: 112, rx: 14, ry: 8, c: "#9bf7c0", fill: "rgba(155,247,192,0.3)" },
          { k: "line", x1: 152, y1: 220, x2: 152, y2: 140, c: "#c9b5ff", w: 3 },
          { k: "ellipse", cx: 152, cy: 132, rx: 12, ry: 16, c: "#c9b5ff", fill: "rgba(201,181,255,0.3)" },
          { k: "line", x1: 268, y1: 220, x2: 268, y2: 140, c: "#c9b5ff", w: 3 },
          { k: "ellipse", cx: 268, cy: 132, rx: 12, ry: 16, c: "#c9b5ff", fill: "rgba(201,181,255,0.3)" },
          { k: "path", d: "M180 250 C150 244 140 226 148 218", c: "#7ee0ff", w: 3 },
          { k: "path", d: "M240 250 C270 244 280 226 272 218", c: "#7ee0ff", w: 3 },
        ],
        parts: [
          { id: "stigma", label: "Stigma", x: 210, y: 112, lx: 210, ly: 74, hint: "Sticky top of the carpel that receives pollen." },
          { id: "style", label: "Style", x: 210, y: 152, lx: 300, ly: 150, hint: "Tube through which the pollen tube grows." },
          { id: "ovary", label: "Ovary", x: 210, y: 210, lx: 300, ly: 216, hint: "Contains ovules; becomes the fruit." },
          { id: "ovule", label: "Ovule", x: 200, y: 210, lx: 108, ly: 250, hint: "Becomes the seed after fertilisation." },
          { id: "anther", label: "Anther", x: 152, y: 132, lx: 66, ly: 118, hint: "Produces pollen grains." },
          { id: "filament", label: "Filament", x: 268, y: 180, lx: 350, ly: 186, hint: "Stalk supporting the anther." },
          { id: "sepal", label: "Sepal", x: 160, y: 244, lx: 92, ly: 284, hint: "Green protective outer whorl." },
        ],
      },
    ],
    commonErrors: [
      { wrong: "Calling regeneration a normal mode of reproduction.", right: "It is a special ability of simple organisms, not the routine mode for most animals." },
      { wrong: "Saying fertilisation happens in the uterus.", right: "Fertilisation occurs in the fallopian tube (oviduct)." },
      { wrong: "Writing that the ovary becomes the seed.", right: "The ovule becomes the seed; the ovary becomes the fruit." },
      { wrong: "Saying variation is high in asexual reproduction.", right: "Asexual offspring are clones; sexual reproduction creates variation." },
    ],
    board: [
      {
        q: "Why is variation beneficial to a species but not necessarily to the individual?",
        marks: 3,
        answer: [
          "Variations give a population a range of characteristics.",
          "If the environment changes drastically, individuals with suitable variations survive and the species continues.",
          "For a single individual, a particular variation may be useless or even harmful in the current environment.",
        ],
      },
      {
        q: "Describe the process of fertilisation in a flower.",
        marks: 3,
        answer: [
          "Pollen lands on the stigma and germinates, forming a pollen tube that grows down the style.",
          "The tube carries the male gamete to the ovule inside the ovary.",
          "The male gamete fuses with the egg to form the zygote; the ovule becomes the seed and the ovary the fruit.",
        ],
      },
      {
        q: "List two methods of contraception and state how each works.",
        marks: 2,
        answer: [
          "Barrier method (condom): physically prevents sperm from reaching the egg and also protects against STDs.",
          "Oral contraceptive pills: change the hormone balance so that eggs are not released.",
        ],
      },
    ],
    quiz: [
      {
        id: "b7q1",
        type: "mcq",
        q: "Which organism reproduces by multiple fission?",
        options: ["Amoeba", "Plasmodium", "Hydra", "Planaria"],
        answer: "Plasmodium",
        explain: "The malarial parasite divides into many daughter cells at once.",
        concept: "Asexual reproduction",
      },
      {
        id: "b7q2",
        type: "mcq",
        q: "Fertilisation in humans takes place in the:",
        options: ["Uterus", "Ovary", "Fallopian tube", "Vagina"],
        answer: "Fallopian tube",
        explain: "The sperm meets the egg in the oviduct; the zygote then implants in the uterus.",
        concept: "Human reproduction",
      },
      {
        id: "b7q3",
        type: "fill",
        q: "The male reproductive part of a flower is the ______.",
        answer: "stamen",
        explain: "It consists of the anther and the filament.",
        concept: "Flower structure",
      },
      {
        id: "b7q4",
        type: "short",
        q: "Why are testes located outside the abdominal cavity?",
        answer: "Sperm formation needs a temperature lower than body temperature",
        explain: "The scrotum keeps the testes about 2–3 °C cooler.",
        concept: "Male reproductive system",
      },
    ],
    summary: [
      "Asexual: one parent, clones — fission, budding, fragmentation, regeneration, spores, vegetative propagation.",
      "Sexual: two gametes fuse, producing variation.",
      "Flower: stamen (male), carpel (female); ovule → seed, ovary → fruit.",
      "Human fertilisation occurs in the fallopian tube; placenta nourishes the embryo.",
      "Contraception: barrier, hormonal, IUCD and surgical.",
    ],
  },
  {
    number: 8,
    slug: "heredity",
    title: "Heredity",
    subject: "biology",
    tagline: "A real Punnett square engine, not a picture of one.",
    intro:
      "Mendel's ratios are probability, and probability can be computed. The module generates the full Punnett square for any parent genotypes and reports exact genotypic and phenotypic ratios.",
    moduleKey: "punnett-lab",
    moduleTitle: "Punnett Square & Inheritance Engine",
    moduleBlurb:
      "Enter any monohybrid or dihybrid parent genotypes. The engine forms all gametes, builds the complete Punnett grid, and reports genotypic and phenotypic ratios with percentages — including sex determination.",
    videoId: "m1vfHJaaf4E",
    videoTitle: "Heredity — full chapter revision",
    videoDescription:
      "Mendel's experiments, monohybrid and dihybrid crosses, laws of inheritance, how traits are expressed, and sex determination in humans.",
    notesFileId: "1qQYHAKkkZjXxTO_iaeMBpuWBKXvlNwyF",
    notesTitle: "Rapid Revision — Heredity",
    formulas: [
      { name: "Monohybrid F₂ phenotypic ratio", expr: "3 : 1", meaning: "Tt × Tt gives 3 tall : 1 dwarf." },
      { name: "Monohybrid F₂ genotypic ratio", expr: "1 : 2 : 1", meaning: "TT : Tt : tt." },
      { name: "Dihybrid F₂ ratio", expr: "9 : 3 : 3 : 1", meaning: "RrYy × RrYy — proves independent assortment." },
      { name: "Test cross", expr: "Unknown × homozygous recessive", meaning: "All dominant offspring → homozygous parent; 1:1 → heterozygous." },
      { name: "Sex determination", expr: "XX = female, XY = male", meaning: "The father's sperm decides the sex of the child; 50 % chance each." },
      { name: "Number of gamete types", expr: "2ⁿ, n = number of heterozygous gene pairs", meaning: "RrYy gives 2² = 4 gamete types." },
    ],
    theory: [
      {
        id: "mendel",
        title: "Mendel's experiments",
        simple:
          "Mendel crossed pure-breeding pea plants. In F₁ only the dominant trait appeared; in F₂ the recessive trait reappeared in a 3 : 1 ratio.",
        deeper:
          "Pea plants were ideal: short life cycle, easily distinguishable contrasting characters, and both self- and cross-pollination possible.",
        keywords: ["dominant", "recessive", "F₁", "F₂", "pure-breeding"],
      },
      {
        id: "laws",
        title: "Laws of inheritance",
        simple:
          "Law of dominance: only the dominant allele shows in a heterozygote. Law of segregation: the two alleles separate during gamete formation. Law of independent assortment: different traits are inherited independently.",
        deeper:
          "Independent assortment holds for genes on different chromosomes — this is exactly what the 9:3:3:1 dihybrid ratio demonstrates.",
        keywords: ["allele", "genotype", "phenotype", "homozygous", "heterozygous"],
        misconception: "A recessive trait is not 'weaker' — it just needs both alleles to be recessive to appear.",
      },
      {
        id: "sex",
        title: "Sex determination in humans",
        simple:
          "Human females are XX and males are XY. The mother always gives an X; the father gives either X or Y, so the father determines the sex of the child.",
        deeper:
          "Half the sperms carry X and half carry Y, so mathematically the chance of a boy or a girl is 50 : 50 for each pregnancy — each pregnancy is independent.",
        keywords: ["autosome", "sex chromosome", "XX", "XY"],
      },
      {
        id: "traits",
        title: "Acquired vs inherited traits",
        simple:
          "Inherited traits come from genes in the germ cells and pass to the next generation. Acquired traits affect only body cells and are not inherited.",
        deeper:
          "Cutting the tails of mice for generations does not produce tailless mice, because the change never reaches the DNA of the germ cells.",
        keywords: ["germ cell", "somatic cell", "gene", "DNA"],
      },
    ],
    activities: [
      {
        id: "monohybrid",
        title: "Modelling a monohybrid cross",
        aim: "To determine the F₂ ratio of a monohybrid cross using a Punnett square.",
        materials: ["Two sets of coloured beads/coins labelled T and t", "Two bags", "Record sheet"],
        procedure: [
          "Put one T and one t bead in each of the two bags — each bag represents a heterozygous (Tt) parent.",
          "Draw one bead from each bag without looking, record the pair, and return the beads.",
          "Repeat at least 100 times and tabulate the genotypes obtained.",
        ],
        observation: "Roughly 25 % TT, 50 % Tt and 25 % tt are obtained; 75 % of the plants show the tall phenotype.",
        explanation: "Alleles segregate randomly into gametes and combine randomly at fertilisation, giving 1 : 2 : 1 genotypes and 3 : 1 phenotypes.",
        conclusion: "The monohybrid F₂ phenotypic ratio is 3 : 1 and the genotypic ratio is 1 : 2 : 1.",
        precautions: ["Always replace the bead after each draw.", "Take a large number of trials so probability averages out."],
        viva: [
          { q: "Why replace the bead?", a: "To keep the probability of each allele constant at ½ every time." },
          { q: "What does a large sample give?", a: "Results closer to the theoretical ratio." },
        ],
      },
    ],
    numericals: [
      {
        id: "monohybrid-count",
        question: "In a cross Tt × Tt, out of 800 F₂ plants, how many are expected to be dwarf and how many pure tall?",
        given: ["Cross: Tt × Tt", "Total = 800"],
        formula: "Genotypic ratio 1 TT : 2 Tt : 1 tt (each ¼, ½, ¼)",
        substitution: "Dwarf (tt) = ¼ × 800 ; Pure tall (TT) = ¼ × 800",
        steps: ["Dwarf = 200", "Pure tall (TT) = 200", "Heterozygous tall (Tt) = ½ × 800 = 400"],
        answer: "200 dwarf, 200 pure tall (and 400 hybrid tall)",
        unitCheck: "Counts ✓",
        concept: "Monohybrid genotypic ratio 1 : 2 : 1.",
      },
      {
        id: "dihybrid",
        question: "In a dihybrid cross RrYy × RrYy giving 1600 offspring, how many show both recessive traits?",
        given: ["Dihybrid F₂ ratio 9 : 3 : 3 : 1", "Total = 1600"],
        formula: "Fraction with both recessive = 1/16",
        substitution: "N = 1600 × 1/16",
        steps: ["Total parts = 16", "Both recessive share = 1 part", "N = 1600/16 = 100"],
        answer: "100 offspring",
        unitCheck: "Counts ✓",
        concept: "Independent assortment gives 9:3:3:1.",
      },
    ],
    diagrams: [
      {
        id: "sex-determination",
        title: "Sex determination in humans",
        width: 420,
        height: 280,
        shapes: [
          { k: "circle", cx: 110, cy: 50, r: 26, c: "#ff9ecb", fill: "rgba(255,158,203,0.16)" },
          { k: "text", x: 96, y: 56, t: "XX", size: 14, c: "#ff9ecb" },
          { k: "circle", cx: 310, cy: 50, r: 26, c: "#7ee0ff", fill: "rgba(126,224,255,0.16)" },
          { k: "text", x: 296, y: 56, t: "XY", size: 14, c: "#7ee0ff" },
          { k: "line", x1: 110, y1: 76, x2: 110, y2: 124, c: "#ff9ecb", w: 2 },
          { k: "line", x1: 310, y1: 76, x2: 268, y2: 124, c: "#7ee0ff", w: 2 },
          { k: "line", x1: 310, y1: 76, x2: 352, y2: 124, c: "#7ee0ff", w: 2 },
          { k: "text", x: 100, y: 142, t: "X", size: 14, c: "#ff9ecb" },
          { k: "text", x: 260, y: 142, t: "X", size: 14, c: "#7ee0ff" },
          { k: "text", x: 346, y: 142, t: "Y", size: 14, c: "#7ee0ff" },
          { k: "rect", x: 90, y: 180, w: 110, h: 56, r: 8, c: "#ff9ecb", fill: "rgba(255,158,203,0.1)" },
          { k: "text", x: 108, y: 214, t: "XX girl", size: 14, c: "#ffd6e8" },
          { k: "rect", x: 230, y: 180, w: 110, h: 56, r: 8, c: "#7ee0ff", fill: "rgba(126,224,255,0.1)" },
          { k: "text", x: 250, y: 214, t: "XY boy", size: 14, c: "#d6f2ff" },
        ],
        parts: [
          { id: "mother", label: "Mother (XX)", x: 110, y: 50, lx: 40, ly: 24, hint: "Always contributes an X chromosome." },
          { id: "father", label: "Father (XY)", x: 310, y: 50, lx: 372, ly: 24, hint: "Contributes either X or Y — decides the sex." },
          { id: "girl", label: "Daughter (XX) 50 %", x: 145, y: 208, lx: 68, ly: 262, hint: "X from mother + X from father." },
          { id: "boy", label: "Son (XY) 50 %", x: 285, y: 208, lx: 320, ly: 262, hint: "X from mother + Y from father." },
        ],
      },
    ],
    commonErrors: [
      { wrong: "Saying the mother determines the sex of the child.", right: "The father does — he contributes either X or Y." },
      { wrong: "Writing the F₂ genotypic ratio as 3:1.", right: "3:1 is phenotypic; genotypic is 1:2:1." },
      { wrong: "Believing acquired traits are inherited.", right: "Only changes in germ-cell DNA are passed on." },
      { wrong: "Assuming a family with three girls must next have a boy.", right: "Each pregnancy is independent — always 50 : 50." },
    ],
    board: [
      {
        q: "A pea plant with round green seeds (RRyy) is crossed with one having wrinkled yellow seeds (rrYY). Write the F₁ phenotype and the F₂ ratio.",
        marks: 3,
        answer: [
          "F₁ genotype is RrYy — all plants are round and yellow (both dominant).",
          "Selfing F₁ gives four phenotypes in F₂.",
          "F₂ ratio: 9 round yellow : 3 round green : 3 wrinkled yellow : 1 wrinkled green.",
        ],
      },
      {
        q: "How is the sex of a child determined in human beings? Explain with a cross.",
        marks: 3,
        answer: [
          "Mother is XX and produces only X-bearing eggs; father is XY and produces X- and Y-bearing sperms in equal numbers.",
          "X sperm + X egg = XX girl; Y sperm + X egg = XY boy.",
          "So the father determines the sex and the probability is 50 % for each.",
        ],
      },
      {
        q: "Why did Mendel choose the garden pea for his experiments? Give two reasons.",
        marks: 2,
        answer: [
          "It has clearly contrasting characters such as tall/dwarf and round/wrinkled seeds.",
          "It has a short life cycle and can be both self- and cross-pollinated easily.",
        ],
      },
    ],
    quiz: [
      {
        id: "b8q1",
        type: "mcq",
        q: "The F₂ phenotypic ratio in a monohybrid cross is:",
        options: ["1 : 2 : 1", "3 : 1", "9 : 3 : 3 : 1", "1 : 1"],
        answer: "3 : 1",
        explain: "Three dominant to one recessive; 1:2:1 is the genotypic ratio.",
        concept: "Monohybrid cross",
      },
      {
        id: "b8q2",
        type: "mcq",
        q: "A human male produces sperms of type:",
        options: ["Only X", "Only Y", "Both X and Y", "Neither"],
        answer: "Both X and Y",
        explain: "Half of the sperms carry X and half carry Y.",
        concept: "Sex determination",
      },
      {
        id: "b8q3",
        type: "fill",
        q: "An organism with two identical alleles for a trait is said to be ______.",
        answer: "homozygous",
        explain: "TT or tt; Tt is heterozygous.",
        concept: "Genetic terms",
      },
      {
        id: "b8q4",
        type: "assertion",
        q: "Assertion: Cutting the tails of mice for many generations does not produce tailless mice. Reason: Acquired characters do not change the DNA of germ cells.",
        options: ["Both true, reason explains assertion", "Both true, reason does not explain", "Assertion true, reason false", "Both false"],
        answer: "Both true, reason explains assertion",
        explain: "Only germ-cell DNA changes are inherited.",
        concept: "Acquired vs inherited traits",
      },
    ],
    summary: [
      "Monohybrid F₂: 3 : 1 phenotypic, 1 : 2 : 1 genotypic.",
      "Dihybrid F₂: 9 : 3 : 3 : 1 → independent assortment.",
      "Test cross identifies an unknown dominant genotype.",
      "XX = girl, XY = boy; the father determines the sex.",
      "Acquired traits are not inherited.",
    ],
  },
  {
    number: 13,
    slug: "our-environment",
    title: "Our Environment",
    subject: "biology",
    tagline: "Build a food chain and watch the 10 % law bite.",
    intro:
      "Only about a tenth of the energy at one trophic level reaches the next. The module builds any food chain you like and computes the actual energy left at every level from the ten percent law.",
    moduleKey: "ecology-lab",
    moduleTitle: "Food Chain Builder & Energy Flow",
    moduleBlurb:
      "Build a chain from producers upward, set the energy trapped by producers, and the engine applies the ten percent law level by level, shows the energy pyramid and simulates what happens when an organism is removed.",
    videoId: "WGdQZoMYSjk",
    videoTitle: "Our Environment — full chapter revision",
    videoDescription:
      "Ecosystem components, food chains and webs, the ten percent law, biological magnification, ozone depletion and waste management.",
    notesFileId: "1Fv0jsFTwjcjbkoEv81jq0UD9TWnOES6x",
    notesTitle: "Rapid Revision — Our Environment",
    formulas: [
      { name: "Ten percent law", expr: "Energy at next level = 10 % of the previous level", meaning: "Lindeman's law; 90 % is lost as heat and in life processes." },
      { name: "Energy after n levels", expr: "Eₙ = E₀ × (0.1)ⁿ", meaning: "Explains why food chains rarely exceed 4–5 levels." },
      { name: "Ozone formation", expr: "O₂ →(UV) O + O ; O + O₂ → O₃", meaning: "Ozone in the stratosphere absorbs harmful UV." },
      { name: "Trophic levels", expr: "Producer → Herbivore → Carnivore → Top carnivore", meaning: "Each step is one trophic level." },
    ],
    theory: [
      {
        id: "ecosystem",
        title: "Ecosystem components",
        simple:
          "Biotic components are producers, consumers and decomposers; abiotic components are air, water, soil, temperature and light.",
        deeper:
          "Decomposers such as bacteria and fungi break down dead matter and return nutrients to the soil, completing the cycle. Without them nutrients would stay locked in dead bodies.",
        keywords: ["biotic", "abiotic", "producer", "decomposer"],
      },
      {
        id: "chains",
        title: "Food chains, webs and energy flow",
        simple:
          "A food chain is a series of organisms feeding one on another. Energy flow is unidirectional, and only 10 % passes to the next level.",
        deeper:
          "In reality organisms eat many kinds of food, so chains interlink into a food web. Because so much energy is lost, chains are limited to 3–4 steps and the number/biomass usually decreases upward — the energy pyramid is always upright.",
        keywords: ["trophic level", "food web", "ten percent law", "energy pyramid"],
        misconception: "Energy flow is one-way; only nutrients are cycled.",
      },
      {
        id: "magnification",
        title: "Biological magnification",
        simple:
          "Pesticides that are not biodegradable enter the food chain and become more concentrated at each higher level.",
        deeper:
          "Humans are often at the top of the chain, so we accumulate the highest concentration of harmful chemicals such as DDT.",
        keywords: ["biomagnification", "DDT", "non-biodegradable"],
      },
      {
        id: "waste",
        title: "Ozone layer and waste management",
        simple:
          "Ozone (O₃) in the stratosphere absorbs harmful UV rays. CFCs deplete it, so their use has been controlled since 1987 under the Montreal Protocol.",
        deeper:
          "Waste is biodegradable (broken down by microbes — vegetable peels, paper) or non-biodegradable (plastics, metals, glass). Management methods: reduce, reuse, recycle, composting, sewage treatment and sanitary landfills.",
        keywords: ["CFC", "UV", "biodegradable", "recycling"],
      },
    ],
    activities: [
      {
        id: "biodegradable",
        title: "Comparing biodegradable and non-biodegradable waste",
        aim: "To find out which substances decompose in soil and which do not.",
        materials: ["Two pits or pots of soil", "Vegetable peels, paper", "Plastic bag, aluminium foil, glass piece", "Water"],
        procedure: [
          "Bury vegetable peels and paper in one pit and plastic, foil and glass in the other.",
          "Water both pits regularly and cover them.",
          "Dig out and inspect after 2–3 weeks.",
        ],
        observation: "The vegetable peels and paper have largely decomposed; plastic, foil and glass are unchanged.",
        explanation: "Micro-organisms have enzymes that can break down natural organic matter, but not synthetic polymers, metals or glass.",
        conclusion: "Substances that microbes can break down are biodegradable; the rest are non-biodegradable and persist in the environment.",
        precautions: ["Keep both pits equally moist.", "Handle glass carefully and label both pits."],
        viva: [
          { q: "Why is plastic harmful?", a: "It is non-biodegradable, chokes drains and animals, and persists for centuries." },
          { q: "Name a way to manage biodegradable waste.", a: "Composting or vermicomposting." },
        ],
      },
    ],
    numericals: [
      {
        id: "ten-percent",
        question:
          "If producers in a food chain trap 20,000 J of solar energy, how much energy is available to a third-order (top) carnivore?",
        given: ["E₀ = 20,000 J at producers", "Ten percent law", "Top carnivore is the 4th trophic level → n = 3 transfers"],
        formula: "Eₙ = E₀ × (0.1)ⁿ",
        substitution: "E₃ = 20000 × (0.1)³",
        steps: ["Herbivore: 2000 J", "Small carnivore: 200 J", "Top carnivore: 20 J"],
        answer: "20 J",
        unitCheck: "J ✓",
        concept: "Only 10 % of energy transfers to the next trophic level; the rest is lost as heat.",
      },
    ],
    diagrams: [
      {
        id: "energy-pyramid",
        title: "Energy pyramid in a grassland food chain",
        width: 420,
        height: 280,
        shapes: [
          { k: "path", d: "M40 240 L380 240 L340 190 L80 190 Z", c: "#9bf7c0", fill: "rgba(155,247,192,0.16)" },
          { k: "path", d: "M80 188 L340 188 L300 138 L120 138 Z", c: "#ffe066", fill: "rgba(255,224,102,0.16)" },
          { k: "path", d: "M120 136 L300 136 L262 86 L158 86 Z", c: "#ffa36b", fill: "rgba(255,163,107,0.16)" },
          { k: "path", d: "M158 84 L262 84 L228 40 L192 40 Z", c: "#ff7b9c", fill: "rgba(255,123,156,0.16)" },
        ],
        parts: [
          { id: "producer", label: "Producers (100 %)", x: 210, y: 216, lx: 210, ly: 268, hint: "Green plants trap solar energy." },
          { id: "herbivore", label: "Herbivores (10 %)", x: 210, y: 164, lx: 372, ly: 176, hint: "Primary consumers." },
          { id: "carnivore", label: "Carnivores (1 %)", x: 210, y: 112, lx: 350, ly: 116, hint: "Secondary consumers." },
          { id: "top", label: "Top carnivores (0.1 %)", x: 210, y: 62, lx: 316, ly: 40, hint: "Tertiary consumers — very few can be supported." },
        ],
      },
    ],
    commonErrors: [
      { wrong: "Saying energy is cycled in an ecosystem.", right: "Energy flow is unidirectional; only nutrients cycle." },
      { wrong: "Calling ozone a pollutant everywhere.", right: "Ozone at ground level is a pollutant, but in the stratosphere it is essential protection." },
      { wrong: "Writing that food chains can be very long.", right: "The 10 % law limits chains to 3–4 (rarely 5) trophic levels." },
      { wrong: "Treating all plastics as recyclable.", right: "Many are not, and burning them releases toxic gases." },
    ],
    board: [
      {
        q: "What is the ten percent law? Explain with an example.",
        marks: 3,
        answer: [
          "Only about 10 % of the energy of one trophic level is transferred to the next; the rest is lost as heat and used in life processes.",
          "If plants trap 10,000 J, herbivores get about 1000 J and carnivores about 100 J.",
          "This is why food chains have only three or four steps.",
        ],
      },
      {
        q: "Why are some substances biodegradable and some not? Give two examples of each.",
        marks: 3,
        answer: [
          "Micro-organisms have enzymes that can break down only certain natural substances.",
          "Biodegradable: vegetable peels, paper, cotton cloth.",
          "Non-biodegradable: plastic, aluminium foil, glass, DDT.",
        ],
      },
      {
        q: "How is ozone formed in the upper atmosphere and why is its depletion a matter of concern?",
        marks: 3,
        answer: [
          "UV rays split O₂ into free oxygen atoms, which combine with O₂ to form O₃.",
          "Ozone shields the earth from harmful ultraviolet radiation.",
          "Its depletion by CFCs increases skin cancer, cataract and damage to crops, so CFC use was restricted by the Montreal Protocol (1987).",
        ],
      },
    ],
    quiz: [
      {
        id: "b13q1",
        type: "mcq",
        q: "In a food chain, the maximum energy is available at the level of:",
        options: ["Producers", "Herbivores", "Carnivores", "Decomposers"],
        answer: "Producers",
        explain: "Energy decreases at each higher trophic level by the ten percent law.",
        concept: "Energy flow",
      },
      {
        id: "b13q2",
        type: "mcq",
        q: "Which of these is a non-biodegradable waste?",
        options: ["Vegetable peels", "Paper", "Plastic", "Cow dung"],
        answer: "Plastic",
        explain: "Micro-organisms cannot break down synthetic polymers.",
        concept: "Waste management",
      },
      {
        id: "b13q3",
        type: "fill",
        q: "The increase in concentration of harmful chemicals at successive trophic levels is called ______.",
        answer: "biological magnification",
        explain: "Also called biomagnification; DDT is the classic example.",
        concept: "Biomagnification",
      },
      {
        id: "b13q4",
        type: "short",
        q: "What would happen if all decomposers were removed from an ecosystem?",
        answer: "Nutrients would stay locked in dead matter and the cycle would stop",
        explain: "Dead bodies would pile up and soil fertility would collapse.",
        concept: "Ecosystem components",
      },
    ],
    summary: [
      "Ecosystem = biotic (producers, consumers, decomposers) + abiotic components.",
      "Energy flow is unidirectional and follows the ten percent law.",
      "Food webs are more realistic than single chains.",
      "Biomagnification concentrates pesticides at higher trophic levels.",
      "Ozone protects us from UV; CFCs deplete it. Manage waste by reduce, reuse, recycle.",
    ],
  },
];