import type { Chapter } from "./types";

export const chemistryChapters: Chapter[] = [
  {
    number: 1,
    slug: "chemical-reactions-and-equations",
    title: "Chemical Reactions and Equations",
    subject: "chemistry",
    tagline: "Balance it, classify it, prove mass is conserved.",
    intro:
      "A chemical reaction rearranges atoms — it never creates or destroys them. This chapter turns every skeletal equation into a balanced, classified, mass-checked statement of what actually happened in the beaker.",
    moduleKey: "equation-balancer",
    moduleTitle: "Live Equation Balancer & Reaction Classifier",
    moduleBlurb:
      "Type any skeletal equation. The engine solves the atom-conservation matrix, shows each balancing step, classifies the reaction type and highlights oxidation and reduction.",
    videoId: "TfXOwxXprtE",
    videoTitle: "Chemical Reactions and Equations — full chapter revision",
    videoDescription:
      "One-shot revision covering writing and balancing equations, the five reaction types, oxidation–reduction, and corrosion & rancidity, with board-focused examples.",
    notesFileId: "1pxScX5QZLUvUcBbahEhOPk-KiZY3O5PA",
    notesTitle: "Rapid Revision — Chemical Reactions and Equations",
    formulas: [
      {
        name: "Law of conservation of mass",
        expr: "Σ mass(reactants) = Σ mass(products)",
        meaning: "Total mass before a reaction equals total mass after it. This is why equations must be balanced.",
      },
      {
        name: "Combination",
        expr: "A + B → AB",
        meaning: "Two or more substances combine into a single product.",
        note: "CaO + H₂O → Ca(OH)₂ (exothermic)",
      },
      {
        name: "Decomposition",
        expr: "AB → A + B",
        meaning: "One compound splits into two or more products using heat, light or electricity.",
        note: "2FeSO₄ →(Δ) Fe₂O₃ + SO₂ + SO₃",
      },
      {
        name: "Displacement",
        expr: "A + BC → AC + B",
        meaning: "A more reactive element pushes out a less reactive one.",
        note: "Fe + CuSO₄ → FeSO₄ + Cu",
      },
      {
        name: "Double displacement",
        expr: "AB + CD → AD + CB",
        meaning: "Ions are exchanged between two compounds; often a precipitate forms.",
        note: "Na₂SO₄ + BaCl₂ → BaSO₄↓ + 2NaCl",
      },
      {
        name: "Redox",
        expr: "Oxidation = gain of O / loss of H or e⁻",
        meaning: "Reduction is the opposite. Both always happen together in the same reaction.",
      },
    ],
    theory: [
      {
        id: "signs",
        title: "Signs that a chemical change happened",
        simple:
          "Change in state, change in colour, evolution of a gas, change in temperature, or formation of a precipitate — any one of these means a new substance has formed.",
        deeper:
          "A physical change is reversible and forms no new substance (ice → water). A chemical change makes new substances with new properties, and is usually hard to reverse.",
        keywords: ["precipitate", "effervescence", "exothermic", "endothermic"],
        misconception:
          "Dissolving sugar in water is NOT a chemical change — no new substance forms, and you can get the sugar back by evaporation.",
      },
      {
        id: "balancing",
        title: "Writing and balancing an equation",
        simple:
          "Write reactants on the left, products on the right, arrow in between. Then adjust coefficients (never subscripts) until each element has equal atoms on both sides.",
        deeper:
          "The hit-and-trial method starts with the compound having the maximum number of atoms. Balance metals first, then non-metals, then hydrogen, then oxygen. Finally add state symbols (s), (l), (g), (aq) and conditions over the arrow.",
        keywords: ["skeletal equation", "coefficient", "state symbol"],
        misconception:
          "You may never change H₂O into H₂O₂ to balance oxygen. Changing a subscript changes the substance itself.",
      },
      {
        id: "redox",
        title: "Oxidation, reduction and redox",
        simple:
          "Oxidation is gain of oxygen or loss of hydrogen; reduction is loss of oxygen or gain of hydrogen. If one substance is oxidised, another must be reduced.",
        deeper:
          "In CuO + H₂ → Cu + H₂O, CuO loses oxygen (reduced) and H₂ gains oxygen (oxidised). The substance that oxidises another is the oxidising agent, and it is itself reduced.",
        keywords: ["oxidising agent", "reducing agent", "redox"],
      },
      {
        id: "corrosion",
        title: "Corrosion and rancidity",
        simple:
          "Corrosion is the slow eating away of a metal by air and moisture — iron rusts (brown), copper turns green, silver turns black.",
        deeper:
          "Rancidity is oxidation of fats and oils in food, giving bad smell and taste. It is prevented by antioxidants, air-tight packaging, refrigeration and flushing packets with nitrogen.",
        keywords: ["rusting", "galvanisation", "antioxidant", "nitrogen flushing"],
      },
    ],
    activities: [
      {
        id: "mg-ribbon",
        title: "Burning of magnesium ribbon",
        aim: "To burn a magnesium ribbon in air and study the product formed.",
        materials: ["Magnesium ribbon", "Sandpaper", "Tongs", "Burner", "Watch glass"],
        procedure: [
          "Clean a 3–4 cm magnesium ribbon with sandpaper to remove the oxide layer.",
          "Hold it with tongs and burn it at the flame.",
          "Collect the product in a watch glass.",
        ],
        observation:
          "The ribbon burns with a dazzling white flame and a white powdery ash of magnesium oxide is collected.",
        explanation: "2Mg(s) + O₂(g) →(burn) 2MgO(s). It is a combination reaction and also an oxidation of magnesium.",
        conclusion: "Magnesium combines with atmospheric oxygen to form magnesium oxide, a basic oxide.",
        precautions: [
          "Never look directly at the dazzling flame — it can damage the eyes.",
          "Always hold the ribbon with tongs, never with bare fingers.",
          "Clean the ribbon first, otherwise the MgO layer prevents burning.",
        ],
        viva: [
          { q: "Why is the ribbon cleaned before burning?", a: "To remove the protective layer of magnesium oxide formed by air." },
          { q: "Nature of the product?", a: "MgO is basic — its solution turns red litmus blue." },
        ],
      },
      {
        id: "fe-cuso4",
        title: "Iron nail in copper sulphate solution",
        aim: "To study a displacement reaction between iron and copper sulphate.",
        materials: ["Clean iron nails", "Copper sulphate solution", "Two test tubes", "Sandpaper"],
        procedure: [
          "Take 10 mL of blue copper sulphate solution in two test tubes.",
          "Drop a cleaned iron nail in one; keep the other as control.",
          "Observe after 20 minutes.",
        ],
        observation: "The blue colour fades to pale green and a reddish-brown deposit appears on the nail.",
        explanation: "Fe(s) + CuSO₄(aq) → FeSO₄(aq) + Cu(s). Iron is more reactive, so it displaces copper.",
        conclusion: "A more reactive metal displaces a less reactive metal from its salt solution.",
        precautions: ["Clean the nails with sandpaper.", "Do not disturb the tubes while reacting."],
        viva: [
          { q: "Why does the solution turn green?", a: "Ferrous sulphate solution formed is pale green." },
          { q: "Type of reaction?", a: "Displacement — and also a redox reaction." },
        ],
      },
    ],
    numericals: [
      {
        id: "mass-cons",
        question:
          "5.6 g of iron reacts completely with 3.2 g of sulphur to form iron sulphide. What mass of iron sulphide is formed?",
        given: ["mass of Fe = 5.6 g", "mass of S = 3.2 g"],
        formula: "Σ mass(reactants) = Σ mass(products)",
        substitution: "m(FeS) = 5.6 g + 3.2 g",
        steps: ["Fe + S → FeS (already balanced)", "Total reactant mass = 5.6 + 3.2 = 8.8 g", "No gas escapes, so all mass stays in the product."],
        answer: "8.8 g of iron sulphide",
        unitCheck: "g + g = g ✓",
        concept: "Law of conservation of mass in a combination reaction.",
      },
      {
        id: "moles-mg",
        question: "How many grams of MgO are formed when 4.8 g of Mg burns completely in oxygen? (Mg = 24, O = 16)",
        given: ["mass Mg = 4.8 g", "M(Mg) = 24 g/mol", "M(MgO) = 40 g/mol"],
        formula: "n = m / M ; from 2Mg + O₂ → 2MgO, n(MgO) = n(Mg)",
        substitution: "n(Mg) = 4.8 / 24 = 0.2 mol → n(MgO) = 0.2 mol → m = 0.2 × 40",
        steps: ["Moles of Mg = 4.8/24 = 0.2 mol", "Mole ratio Mg : MgO = 2 : 2 = 1 : 1", "Moles of MgO = 0.2 mol", "Mass = 0.2 × 40 = 8 g"],
        answer: "8 g of magnesium oxide",
        unitCheck: "mol × g/mol = g ✓",
        concept: "Stoichiometry from a balanced equation.",
        alternative: "By conservation of mass: 4.8 g Mg + 3.2 g O₂ = 8 g MgO.",
      },
    ],
    diagrams: [
      {
        id: "electrolysis-water",
        title: "Electrolysis of water (decomposition reaction)",
        width: 420,
        height: 280,
        shapes: [
          { k: "rect", x: 90, y: 90, w: 240, h: 140, r: 10, c: "#8fb2ff", fill: "rgba(120,160,255,0.16)" },
          { k: "rect", x: 96, y: 130, w: 228, h: 96, r: 6, c: "transparent", fill: "rgba(90,180,255,0.28)" },
          { k: "rect", x: 140, y: 40, w: 34, h: 110, r: 6, c: "#cbd5ff", fill: "rgba(255,255,255,0.1)" },
          { k: "rect", x: 246, y: 40, w: 34, h: 110, r: 6, c: "#cbd5ff", fill: "rgba(255,255,255,0.1)" },
          { k: "line", x1: 157, y1: 150, x2: 157, y2: 214, c: "#f5f5f5", w: 3 },
          { k: "line", x1: 263, y1: 150, x2: 263, y2: 214, c: "#f5f5f5", w: 3 },
          { k: "circle", cx: 157, cy: 70, r: 6, c: "transparent", fill: "rgba(255,255,255,0.55)" },
          { k: "circle", cx: 157, cy: 92, r: 5, c: "transparent", fill: "rgba(255,255,255,0.45)" },
          { k: "circle", cx: 263, cy: 78, r: 5, c: "transparent", fill: "rgba(255,255,255,0.45)" },
          { k: "line", x1: 157, y1: 214, x2: 90, y2: 250, c: "#ffcf6b", w: 2 },
          { k: "line", x1: 263, y1: 214, x2: 330, y2: 250, c: "#ffcf6b", w: 2 },
          { k: "rect", x: 186, y: 240, w: 48, h: 24, r: 4, c: "#ffcf6b", fill: "rgba(255,207,107,0.15)" },
          { k: "line", x1: 90, y1: 250, x2: 186, y2: 252, c: "#ffcf6b", w: 2 },
          { k: "line", x1: 234, y1: 252, x2: 330, y2: 250, c: "#ffcf6b", w: 2 },
        ],
        parts: [
          { id: "h2", label: "Hydrogen (double volume)", x: 157, y: 62, lx: 20, ly: 40, hint: "Collected at the cathode, twice the volume." },
          { id: "o2", label: "Oxygen", x: 263, y: 62, lx: 320, ly: 40, hint: "Collected at the anode." },
          { id: "cathode", label: "Cathode (−)", x: 157, y: 200, lx: 24, ly: 200, hint: "Negative electrode, connected to battery negative." },
          { id: "anode", label: "Anode (+)", x: 263, y: 200, lx: 336, ly: 200, hint: "Positive electrode." },
          { id: "water", label: "Acidified water", x: 210, y: 200, lx: 200, ly: 120, hint: "A few drops of acid make water conducting." },
          { id: "battery", label: "Battery", x: 210, y: 252, lx: 210, ly: 274, hint: "Supplies the electrical energy for decomposition." },
        ],
      },
    ],
    commonErrors: [
      { wrong: "Balancing by changing subscripts (H₂O → H₂O₂).", right: "Only coefficients may change; subscripts define the substance." },
      { wrong: "Forgetting state symbols in board answers.", right: "Write (s), (l), (g), (aq) — marks are allotted for them." },
      { wrong: "Calling respiration a physical change.", right: "Respiration is an exothermic chemical change: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy." },
      { wrong: "Saying only oxidation occurred.", right: "Oxidation and reduction always occur together — it is a redox reaction." },
    ],
    board: [
      {
        q: "Why is the amount of gas collected in one test tube during electrolysis of water double that in the other? Name this gas.",
        marks: 3,
        answer: [
          "Water contains hydrogen and oxygen in a 2 : 1 ratio by volume.",
          "2H₂O →(electricity) 2H₂ + O₂, so hydrogen is produced in double the volume.",
          "The gas collected in double amount is hydrogen, at the cathode.",
        ],
      },
      {
        q: "What is a redox reaction? Identify the substance oxidised and reduced in: CuO + H₂ → Cu + H₂O.",
        marks: 3,
        answer: [
          "A reaction in which oxidation and reduction occur simultaneously is a redox reaction.",
          "H₂ gains oxygen → oxidised (reducing agent).",
          "CuO loses oxygen → reduced (oxidising agent).",
        ],
      },
      {
        q: "What is rancidity? State two methods to prevent it.",
        marks: 2,
        answer: [
          "Oxidation of fats and oils in food giving an unpleasant smell and taste is called rancidity.",
          "Prevented by adding antioxidants and by packaging in nitrogen gas / refrigeration.",
        ],
      },
    ],
    quiz: [
      {
        id: "c1q1",
        type: "mcq",
        q: "Which of the following is a decomposition reaction?",
        options: ["CaO + H₂O → Ca(OH)₂", "2FeSO₄ → Fe₂O₃ + SO₂ + SO₃", "Fe + CuSO₄ → FeSO₄ + Cu", "NaOH + HCl → NaCl + H₂O"],
        answer: "2FeSO₄ → Fe₂O₃ + SO₂ + SO₃",
        explain: "One reactant breaks into three products on heating — that is decomposition.",
        concept: "Types of reactions",
      },
      {
        id: "c1q2",
        type: "mcq",
        q: "Which gas is produced when zinc reacts with dilute sulphuric acid?",
        options: ["Oxygen", "Hydrogen", "Carbon dioxide", "Sulphur dioxide"],
        answer: "Hydrogen",
        explain: "Zn + H₂SO₄ → ZnSO₄ + H₂↑. The gas burns with a pop sound.",
        concept: "Displacement reaction",
      },
      {
        id: "c1q3",
        type: "fill",
        q: "The white powder formed on burning magnesium ribbon is ______.",
        answer: "magnesium oxide",
        explain: "2Mg + O₂ → 2MgO, a basic white ash.",
        concept: "Combination reaction",
      },
      {
        id: "c1q4",
        type: "assertion",
        q: "Assertion: A balanced equation obeys the law of conservation of mass. Reason: Atoms are neither created nor destroyed in a chemical reaction.",
        options: ["Both true, reason explains assertion", "Both true, reason does not explain", "Assertion true, reason false", "Both false"],
        answer: "Both true, reason explains assertion",
        explain: "Balancing exists precisely because atom count must stay constant.",
        concept: "Conservation of mass",
      },
    ],
    summary: [
      "Chemical change makes new substances; look for gas, colour, temperature or precipitate change.",
      "Balance by coefficients only, then add state symbols.",
      "Five types: combination, decomposition, displacement, double displacement, redox.",
      "Oxidation and reduction always occur together.",
      "Corrosion attacks metals; rancidity attacks fats and oils.",
    ],
  },
  {
    number: 2,
    slug: "acids-bases-and-salts",
    title: "Acids, Bases and Salts",
    subject: "chemistry",
    tagline: "Mix, titrate and read the pH — live.",
    intro:
      "Acids give H⁺(aq), bases give OH⁻(aq), and salts are what remains when they neutralise each other. This chapter is built around a working pH engine that computes real hydrogen-ion concentrations.",
    moduleKey: "ph-lab",
    moduleTitle: "Live pH & Neutralisation Lab",
    moduleBlurb:
      "Choose an acid and a base, set concentrations and volumes, and the engine computes [H⁺] from real dissociation maths, gives the pH, drives the indicator colours and shows the titration curve.",
    videoId: "7k2rs5yGOFM",
    videoTitle: "Acids, Bases and Salts — full chapter revision",
    videoDescription:
      "Covers indicators, acid/base reactions, pH scale and its importance, and the family of salts including bleaching powder, baking soda, washing soda and plaster of Paris.",
    notesFileId: "1265RNEx-LXS8JSv-vP7crsnnCfBwYWtj",
    notesTitle: "Rapid Revision — Acids, Bases and Salts",
    formulas: [
      { name: "pH definition", expr: "pH = −log₁₀[H⁺]", meaning: "The lower the pH, the higher the hydrogen ion concentration." },
      { name: "pOH & relation", expr: "pOH = −log₁₀[OH⁻] ; pH + pOH = 14", meaning: "At 25 °C the two always add to 14." },
      { name: "Ionic product of water", expr: "[H⁺][OH⁻] = 10⁻¹⁴ mol²/L²", meaning: "Neutral water has [H⁺] = 10⁻⁷, so pH = 7." },
      { name: "Neutralisation", expr: "Acid + Base → Salt + Water", meaning: "HCl + NaOH → NaCl + H₂O." },
      { name: "Acid + metal", expr: "Acid + Metal → Salt + H₂↑", meaning: "Zn + 2HCl → ZnCl₂ + H₂." },
      { name: "Acid + carbonate", expr: "Acid + Carbonate → Salt + CO₂ + H₂O", meaning: "CO₂ turns lime water milky." },
    ],
    theory: [
      {
        id: "indicators",
        title: "Indicators",
        simple:
          "Litmus: red in acid, blue in base. Methyl orange: red in acid, yellow in base. Phenolphthalein: colourless in acid, pink in base.",
        deeper:
          "Olfactory indicators such as onion and vanilla lose or keep their smell depending on the medium. Turmeric turns red in base.",
        keywords: ["litmus", "phenolphthalein", "methyl orange", "olfactory indicator"],
        misconception: "Phenolphthalein is colourless in acid — not red. Only methyl orange is red in acid.",
      },
      {
        id: "strength",
        title: "Strong vs weak, concentrated vs dilute",
        simple:
          "Strength is about how much the acid ionises; concentration is about how much acid is dissolved in water.",
        deeper:
          "HCl, H₂SO₄, HNO₃ are strong (fully ionised). CH₃COOH and H₂CO₃ are weak (partly ionised). So a dilute strong acid can have a lower pH than a concentrated weak acid.",
        keywords: ["ionisation", "dissociation", "concentration"],
        misconception: "Concentrated ≠ strong. A concentrated acetic acid solution is still a weak acid.",
      },
      {
        id: "ph-life",
        title: "pH in everyday life",
        simple:
          "Our body works near pH 7.4. Tooth decay starts below pH 5.5. Plants need soil near neutral. Stomach acid is around pH 1.2–3.",
        deeper:
          "Acid rain (pH < 5.6) lowers river pH and harms aquatic life. Bee sting is acidic (treated with baking soda); nettle sting is treated with dock leaf.",
        keywords: ["tooth decay", "acid rain", "antacid"],
      },
      {
        id: "salts",
        title: "The family of salts",
        simple:
          "Bleaching powder Ca(OCl)Cl, baking soda NaHCO₃, washing soda Na₂CO₃·10H₂O, plaster of Paris CaSO₄·½H₂O.",
        deeper:
          "Salt of strong acid + strong base is neutral (NaCl). Strong acid + weak base is acidic (NH₄Cl). Weak acid + strong base is basic (Na₂CO₃).",
        keywords: ["water of crystallisation", "chlor-alkali", "hydrated salt"],
      },
    ],
    activities: [
      {
        id: "acid-carbonate",
        title: "Reaction of acid with sodium carbonate",
        aim: "To show that acids react with carbonates to release carbon dioxide.",
        materials: ["Sodium carbonate", "Dilute HCl", "Test tube with delivery tube", "Lime water"],
        procedure: [
          "Take about 0.5 g Na₂CO₃ in a test tube.",
          "Add dilute HCl and quickly fit the delivery tube.",
          "Pass the gas through freshly prepared lime water.",
        ],
        observation: "Brisk effervescence occurs and the lime water turns milky; on passing excess gas the milkiness disappears.",
        explanation:
          "Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂. CO₂ + Ca(OH)₂ → CaCO₃↓ + H₂O, and excess CO₂ forms soluble Ca(HCO₃)₂.",
        conclusion: "Acids liberate CO₂ from carbonates and bicarbonates — a confirmatory test for carbonate.",
        precautions: ["Use dilute acid only.", "Do not let lime water suck back into the hot tube."],
        viva: [
          { q: "Why does milkiness disappear later?", a: "Excess CO₂ converts insoluble CaCO₃ into soluble calcium bicarbonate." },
        ],
      },
    ],
    numericals: [
      {
        id: "ph-calc",
        question: "Calculate the pH of a 0.001 M HCl solution.",
        given: ["c = 0.001 M", "HCl is a strong acid → fully ionised"],
        formula: "pH = −log₁₀[H⁺]",
        substitution: "[H⁺] = 1 × 10⁻³ M → pH = −log(10⁻³)",
        steps: ["HCl → H⁺ + Cl⁻, so [H⁺] = 10⁻³ M", "pH = −log(10⁻³) = 3"],
        answer: "pH = 3 (acidic)",
        unitCheck: "pH is a pure number (log of mol/L ratio) ✓",
        concept: "Strong acids ionise completely, so [H⁺] equals the molarity.",
      },
      {
        id: "poh",
        question: "A solution has [OH⁻] = 10⁻⁵ M. Find its pH and state whether it is acidic or basic.",
        given: ["[OH⁻] = 10⁻⁵ M"],
        formula: "pOH = −log[OH⁻] ; pH = 14 − pOH",
        substitution: "pOH = 5 → pH = 14 − 5",
        steps: ["pOH = −log(10⁻⁵) = 5", "pH = 14 − 5 = 9", "pH > 7 → basic"],
        answer: "pH = 9, basic solution",
        unitCheck: "Dimensionless ✓",
        concept: "pH + pOH = 14 at 25 °C.",
      },
    ],
    diagrams: [
      {
        id: "chlor-alkali",
        title: "Chlor-alkali process (electrolysis of brine)",
        width: 420,
        height: 260,
        shapes: [
          { k: "rect", x: 80, y: 90, w: 260, h: 120, r: 12, c: "#8fb2ff", fill: "rgba(120,160,255,0.14)" },
          { k: "rect", x: 86, y: 130, w: 248, h: 76, r: 6, c: "transparent", fill: "rgba(80,200,220,0.22)" },
          { k: "line", x1: 140, y1: 100, x2: 140, y2: 196, c: "#f2f2f2", w: 4 },
          { k: "line", x1: 280, y1: 100, x2: 280, y2: 196, c: "#f2f2f2", w: 4 },
          { k: "path", d: "M140 96 C140 70 132 56 132 40", c: "#9be79b", w: 2 },
          { k: "path", d: "M280 96 C280 70 288 56 288 40", c: "#ffe066", w: 2 },
          { k: "text", x: 196, y: 232, t: "NaOH (aq) drawn off", size: 11, c: "#cbd5ff" },
        ],
        parts: [
          { id: "brine", label: "Brine (NaCl solution)", x: 210, y: 170, lx: 210, ly: 118, hint: "Concentrated sodium chloride solution." },
          { id: "h2", label: "H₂ at cathode", x: 132, y: 44, lx: 40, ly: 34, hint: "Hydrogen is released at the negative electrode." },
          { id: "cl2", label: "Cl₂ at anode", x: 288, y: 44, lx: 344, ly: 34, hint: "Chlorine is released at the positive electrode." },
          { id: "naoh", label: "NaOH near cathode", x: 160, y: 196, lx: 60, ly: 226, hint: "Sodium hydroxide forms in solution." },
        ],
      },
    ],
    commonErrors: [
      { wrong: "Writing pH 7 for every salt solution.", right: "Only salts of strong acid + strong base are neutral." },
      { wrong: "Adding water to concentrated acid.", right: "Always add acid to water slowly with stirring — the reverse can splash and burn." },
      { wrong: "Confusing washing soda with baking soda.", right: "Baking soda = NaHCO₃; washing soda = Na₂CO₃·10H₂O." },
      { wrong: "Saying dry HCl gas turns litmus red.", right: "Acids show acidic behaviour only in aqueous solution where H⁺(aq) exists." },
    ],
    board: [
      {
        q: "Why does dry HCl gas not change the colour of dry litmus paper?",
        marks: 2,
        answer: [
          "Acidic character is due to H⁺(aq) ions.",
          "Dry HCl gas does not ionise in the absence of water, so no H⁺ ions are produced and the litmus stays unchanged.",
        ],
      },
      {
        q: "What happens when plaster of Paris is mixed with water? Write the equation and one use.",
        marks: 3,
        answer: [
          "It sets into a hard solid mass of gypsum.",
          "CaSO₄·½H₂O + 1½H₂O → CaSO₄·2H₂O",
          "Used for plastering fractured bones and for making models.",
        ],
      },
      {
        q: "A milkman adds a little baking soda to fresh milk. Give reason and effect on setting curd.",
        marks: 3,
        answer: [
          "Baking soda makes the milk slightly alkaline, so it does not turn sour quickly.",
          "Curd formation is delayed because the lactic acid produced is first neutralised.",
          "The resulting curd is also slightly alkaline in taste.",
        ],
      },
    ],
    quiz: [
      {
        id: "c2q1",
        type: "mcq",
        q: "A solution turns red litmus blue. Its pH is likely to be:",
        options: ["1", "4", "5", "10"],
        answer: "10",
        explain: "Red litmus turning blue means the solution is basic, so pH > 7.",
        concept: "pH scale",
      },
      {
        id: "c2q2",
        type: "mcq",
        q: "Tooth decay begins when the pH of the mouth falls below:",
        options: ["7.0", "6.5", "5.5", "4.0"],
        answer: "5.5",
        explain: "Below pH 5.5, tooth enamel (calcium phosphate) starts to corrode.",
        concept: "pH in everyday life",
      },
      {
        id: "c2q3",
        type: "fill",
        q: "The chemical formula of washing soda is ______.",
        answer: "Na2CO3.10H2O",
        explain: "Sodium carbonate decahydrate — 10 water molecules of crystallisation.",
        concept: "Salts",
      },
      {
        id: "c2q4",
        type: "short",
        q: "Why is an antacid taken for acidity?",
        answer: "It is a mild base that neutralises excess stomach acid",
        explain: "Milk of magnesia, Mg(OH)₂, neutralises excess HCl and raises the stomach pH.",
        concept: "Neutralisation",
      },
    ],
    summary: [
      "Acids give H⁺(aq); bases give OH⁻(aq); pH = −log[H⁺].",
      "Strong ≠ concentrated.",
      "Acid + base → salt + water; acid + metal → salt + H₂; acid + carbonate → salt + CO₂ + water.",
      "Chlor-alkali process gives NaOH, Cl₂ and H₂ from brine.",
      "Know formulas and uses of bleaching powder, baking soda, washing soda and POP.",
    ],
  },
  {
    number: 3,
    slug: "metals-and-non-metals",
    title: "Metals and Non-metals",
    subject: "chemistry",
    tagline: "Predict every reaction from the reactivity series.",
    intro:
      "Whether a reaction happens at all is decided by one ordered list. This chapter's live module encodes the real reactivity series and predicts products for any metal + medium pair.",
    moduleKey: "reactivity-lab",
    moduleTitle: "Reactivity Series Reaction Predictor",
    moduleBlurb:
      "Pick a metal and a medium (cold water, steam, dilute acid, oxygen, or a salt solution). The engine compares reactivity positions and returns whether the reaction occurs, the balanced equation and the reason.",
    videoId: "NsbZY_b0D8k",
    videoTitle: "Metals and Non-metals — full chapter revision",
    videoDescription:
      "Physical and chemical properties, reactivity series, ionic bonding, extraction of metals from ores, and corrosion with prevention methods.",
    notesFileId: "1TmtUpJ54phq3ot51-58XGjzdHmUG3RQe",
    notesTitle: "Rapid Revision — Metals and Non-metals",
    formulas: [
      { name: "Metal + oxygen", expr: "2M + O₂ → 2MO (basic oxide)", meaning: "Al₂O₃ and ZnO are amphoteric — they react with both acids and bases." },
      { name: "Metal + water", expr: "M + H₂O → MO/M(OH)ₙ + H₂", meaning: "K, Na react with cold water; Mg with hot water; Al, Zn, Fe only with steam." },
      { name: "Metal + dilute acid", expr: "M + 2HCl → MCl₂ + H₂↑", meaning: "Only metals above hydrogen in the series react." },
      { name: "Displacement", expr: "More reactive M + salt of less reactive → new salt + metal", meaning: "Basis of the reactivity series experiment." },
      { name: "Roasting / Calcination", expr: "2ZnS + 3O₂ → 2ZnO + 2SO₂ ; ZnCO₃ → ZnO + CO₂", meaning: "Sulphide ores are roasted; carbonate ores are calcined." },
      { name: "Thermite reaction", expr: "Fe₂O₃ + 2Al → 2Fe(l) + Al₂O₃ + heat", meaning: "Highly exothermic; used to weld railway tracks." },
    ],
    theory: [
      {
        id: "properties",
        title: "Physical properties",
        simple:
          "Metals are lustrous, malleable, ductile, sonorous and good conductors. Non-metals are generally brittle, dull and poor conductors.",
        deeper:
          "Exceptions matter for boards: mercury is a liquid metal, sodium and potassium can be cut with a knife, graphite (non-metal) conducts electricity, iodine (non-metal) is lustrous, and diamond is the hardest natural substance.",
        keywords: ["malleable", "ductile", "sonorous", "amphoteric"],
      },
      {
        id: "ionic",
        title: "Ionic bonding",
        simple:
          "A metal loses electrons to become a cation; a non-metal gains them to become an anion. Opposite charges attract, forming an ionic bond.",
        deeper:
          "Ionic compounds have high melting points, are usually soluble in water, and conduct electricity in molten or aqueous state because ions become free to move.",
        keywords: ["cation", "anion", "electrostatic force"],
        misconception: "Solid NaCl does not conduct electricity — ions are locked in the lattice.",
      },
      {
        id: "extraction",
        title: "Extraction of metals",
        simple:
          "Low-reactivity metals occur free; medium ones are obtained by roasting/calcination then reduction with carbon; highly reactive ones need electrolysis.",
        deeper:
          "Refining is done by electrolytic refining: impure metal as anode, pure metal as cathode, salt solution of the metal as electrolyte.",
        keywords: ["ore", "gangue", "roasting", "calcination", "electrolytic refining"],
      },
      {
        id: "corrosion",
        title: "Corrosion and its prevention",
        simple:
          "Iron rusts in the presence of both air and moisture. Prevention: painting, oiling, greasing, galvanisation, anodising and alloying.",
        deeper:
          "Galvanised iron stays protected even if the zinc layer is scratched, because zinc is more reactive and corrodes first (sacrificial protection). Stainless steel = iron + chromium + nickel.",
        keywords: ["galvanisation", "alloy", "amalgam"],
      },
    ],
    activities: [
      {
        id: "displacement",
        title: "Displacement reactions of metals",
        aim: "To arrange Zn, Fe, Cu and Al in order of decreasing reactivity using salt solutions.",
        materials: ["Strips of Zn, Fe, Cu, Al", "FeSO₄, CuSO₄, ZnSO₄, Al₂(SO₄)₃ solutions", "Test tubes", "Sandpaper"],
        procedure: [
          "Clean each metal strip with sandpaper.",
          "Place each metal in each of the four salt solutions.",
          "Leave undisturbed for 20 minutes and record where a deposit or colour change occurs.",
        ],
        observation:
          "Al, Zn and Fe all displace copper from CuSO₄; copper displaces none of them. Aluminium displaces zinc and iron.",
        explanation: "A metal displaces only those metals that lie below it in the reactivity series.",
        conclusion: "Order of decreasing reactivity: Al > Zn > Fe > Cu.",
        precautions: ["Clean strips well.", "Use freshly prepared solutions of the same concentration."],
        viva: [
          { q: "Why can copper not displace zinc?", a: "Copper lies below zinc in the reactivity series." },
          { q: "Why sandpaper the strips?", a: "To remove the oxide layer so the metal surface is exposed." },
        ],
      },
    ],
    numericals: [
      {
        id: "thermite",
        question:
          "In the thermite reaction Fe₂O₃ + 2Al → 2Fe + Al₂O₃, how much iron is produced from 160 g of Fe₂O₃? (Fe = 56, O = 16)",
        given: ["m(Fe₂O₃) = 160 g", "M(Fe₂O₃) = 160 g/mol", "M(Fe) = 56 g/mol"],
        formula: "n = m/M ; n(Fe) = 2 × n(Fe₂O₃)",
        substitution: "n(Fe₂O₃) = 160/160 = 1 mol → n(Fe) = 2 mol → m = 2 × 56",
        steps: ["Moles of Fe₂O₃ = 1 mol", "Each mole gives 2 mol Fe", "Mass of Fe = 2 × 56 = 112 g"],
        answer: "112 g of iron",
        unitCheck: "mol × g/mol = g ✓",
        concept: "Stoichiometry of a displacement (thermite) reaction.",
      },
    ],
    diagrams: [
      {
        id: "electrolytic-refining",
        title: "Electrolytic refining of copper",
        width: 420,
        height: 250,
        shapes: [
          { k: "rect", x: 80, y: 80, w: 260, h: 130, r: 10, c: "#8fb2ff", fill: "rgba(120,160,255,0.14)" },
          { k: "rect", x: 86, y: 116, w: 248, h: 88, r: 6, c: "transparent", fill: "rgba(90,190,255,0.2)" },
          { k: "rect", x: 132, y: 60, w: 16, h: 130, r: 3, c: "#ff9f6b", fill: "rgba(255,159,107,0.4)" },
          { k: "rect", x: 272, y: 60, w: 16, h: 130, r: 3, c: "#ffcf6b", fill: "rgba(255,207,107,0.4)" },
          { k: "line", x1: 140, y1: 60, x2: 140, y2: 30, c: "#ffcf6b", w: 2 },
          { k: "line", x1: 280, y1: 60, x2: 280, y2: 30, c: "#ffcf6b", w: 2 },
          { k: "line", x1: 140, y1: 30, x2: 280, y2: 30, c: "#ffcf6b", w: 2 },
          { k: "rect", x: 194, y: 18, w: 34, h: 24, r: 4, c: "#ffcf6b", fill: "rgba(20,20,50,0.9)" },
          { k: "path", d: "M150 196 C180 210 220 210 264 198", c: "#ff9f6b", w: 2, dash: "4 4" },
        ],
        parts: [
          { id: "anode", label: "Impure copper (anode, +)", x: 140, y: 100, lx: 40, ly: 70, hint: "Dissolves into the electrolyte." },
          { id: "cathode", label: "Pure copper (cathode, −)", x: 280, y: 100, lx: 350, ly: 70, hint: "Pure copper deposits here." },
          { id: "electrolyte", label: "Acidified CuSO₄ solution", x: 210, y: 160, lx: 210, ly: 232, hint: "Carries Cu²⁺ ions across." },
          { id: "mud", label: "Anode mud", x: 210, y: 200, lx: 60, ly: 214, hint: "Insoluble impurities settle below the anode." },
          { id: "battery", label: "Battery", x: 211, y: 30, lx: 211, ly: 8, hint: "Drives the electrolysis." },
        ],
      },
    ],
    commonErrors: [
      { wrong: "Saying all metals react with dilute acid.", right: "Only metals above hydrogen react; Cu, Ag, Au do not." },
      { wrong: "Using dilute HNO₃ to show H₂ evolution.", right: "Nitric acid is an oxidising agent and gives NO/N₂O instead of H₂ (except Mg and Mn with very dilute HNO₃)." },
      { wrong: "Calling Al₂O₃ basic.", right: "Al₂O₃ and ZnO are amphoteric." },
      { wrong: "Writing rust as Fe₂O₃.", right: "Rust is hydrated iron(III) oxide, Fe₂O₃·xH₂O." },
    ],
    board: [
      {
        q: "Why is sodium kept immersed in kerosene oil?",
        marks: 2,
        answer: [
          "Sodium is so reactive that it catches fire on contact with air/moisture.",
          "Kerosene keeps it away from oxygen and water, preventing accidental fire.",
        ],
      },
      {
        q: "Explain electrolytic refining of copper with the role of each electrode.",
        marks: 3,
        answer: [
          "Anode: impure copper; cathode: strip of pure copper; electrolyte: acidified copper sulphate.",
          "On passing current, copper from the anode dissolves as Cu²⁺ and deposits as pure copper on the cathode.",
          "Soluble impurities go into solution and insoluble ones settle as anode mud.",
        ],
      },
      {
        q: "Why do ionic compounds conduct electricity in molten state but not in solid state?",
        marks: 2,
        answer: [
          "Conduction needs free-moving charged particles.",
          "In the solid, ions are held rigidly in the lattice; on melting the ions become mobile and carry current.",
        ],
      },
    ],
    quiz: [
      {
        id: "c3q1",
        type: "mcq",
        q: "Which metal reacts with cold water vigorously?",
        options: ["Iron", "Sodium", "Copper", "Zinc"],
        answer: "Sodium",
        explain: "2Na + 2H₂O → 2NaOH + H₂ + heat; the reaction is so exothermic that hydrogen catches fire.",
        concept: "Reactivity series",
      },
      {
        id: "c3q2",
        type: "mcq",
        q: "The ore of zinc, zinc blende (ZnS), is converted to its oxide by:",
        options: ["Calcination", "Roasting", "Reduction", "Electrolysis"],
        answer: "Roasting",
        explain: "Sulphide ores are heated strongly in excess air — roasting. Carbonates are calcined.",
        concept: "Extraction of metals",
      },
      {
        id: "c3q3",
        type: "fill",
        q: "An alloy of mercury with another metal is called an ______.",
        answer: "amalgam",
        explain: "For example, dental amalgam contains mercury with silver and tin.",
        concept: "Alloys",
      },
      {
        id: "c3q4",
        type: "assertion",
        q: "Assertion: Galvanised iron does not rust even if the zinc coating is scratched. Reason: Zinc is more reactive than iron and corrodes preferentially.",
        options: ["Both true, reason explains assertion", "Both true, reason does not explain", "Assertion true, reason false", "Both false"],
        answer: "Both true, reason explains assertion",
        explain: "This is sacrificial protection — zinc oxidises first and protects the iron.",
        concept: "Corrosion prevention",
      },
    ],
    summary: [
      "Metals lose electrons; non-metals gain them, giving ionic compounds.",
      "Reactivity series decides every displacement, water and acid reaction.",
      "Roast sulphides, calcine carbonates, then reduce or electrolyse.",
      "Al₂O₃ and ZnO are amphoteric.",
      "Corrosion is prevented by barrier coating, galvanisation and alloying.",
    ],
  },
  {
    number: 4,
    slug: "carbon-and-its-compounds",
    title: "Carbon and its Compounds",
    subject: "chemistry",
    tagline: "Build the chain, read the formula, name the compound.",
    intro:
      "Catenation and tetravalency let carbon form millions of compounds. The live module builds any straight-chain compound from real valency rules and derives its molecular formula and IUPAC name.",
    moduleKey: "carbon-builder",
    moduleTitle: "Homologous Series & Structure Builder",
    moduleBlurb:
      "Choose a chain length, bond type and functional group. The engine computes the molecular formula from valency, draws the structural formula, gives the IUPAC name and the next member of the series.",
    videoId: "Ff0t3zTzgR8",
    videoTitle: "Carbon and its Compounds — full chapter revision",
    videoDescription:
      "Covalent bonding, allotropes, versatile nature of carbon, homologous series, IUPAC nomenclature, chemical properties of ethanol and ethanoic acid, and soaps and detergents.",
    notesFileId: "1gfH8GUZxlT6uTH16aNm6QN4ZYyhMm7WA",
    notesTitle: "Rapid Revision — Carbon and its Compounds",
    formulas: [
      { name: "Alkane", expr: "CₙH₂ₙ₊₂", meaning: "Saturated; only single bonds. Methane CH₄, ethane C₂H₆." },
      { name: "Alkene", expr: "CₙH₂ₙ", meaning: "One C=C double bond. Ethene C₂H₄." },
      { name: "Alkyne", expr: "CₙH₂ₙ₋₂", meaning: "One C≡C triple bond. Ethyne C₂H₂." },
      { name: "Homologous difference", expr: "−CH₂− (14 u)", meaning: "Successive members differ by one CH₂ unit and 14 u of mass." },
      { name: "Esterification", expr: "CH₃COOH + C₂H₅OH ⇌(conc. H₂SO₄) CH₃COOC₂H₅ + H₂O", meaning: "Acid + alcohol gives a sweet-smelling ester." },
      { name: "Saponification", expr: "Ester + NaOH → Sodium salt of acid + Alcohol", meaning: "The reaction used to make soap." },
    ],
    theory: [
      {
        id: "versatile",
        title: "Why carbon is versatile",
        simple:
          "Carbon is tetravalent (four bonds) and shows catenation (it bonds to itself in long chains, branches and rings), so a huge number of compounds are possible.",
        deeper:
          "Carbon–carbon bonds are very strong because of carbon's small size, so long chains stay stable. Carbon shares electrons rather than losing or gaining four — that would need too much energy.",
        keywords: ["tetravalency", "catenation", "covalent bond"],
      },
      {
        id: "functional",
        title: "Functional groups",
        simple:
          "A functional group decides the chemical properties: −OH alcohol, −CHO aldehyde, >C=O ketone, −COOH carboxylic acid, −X halo.",
        deeper:
          "In IUPAC names, the suffix changes: ol, al, one, oic acid. If the suffix begins with a vowel, drop the final 'e' of the parent alkane (propane + ol → propanol).",
        keywords: ["functional group", "IUPAC", "suffix", "prefix"],
      },
      {
        id: "ethanol-acid",
        title: "Ethanol and ethanoic acid",
        simple:
          "Ethanol (C₂H₅OH) reacts with sodium to give hydrogen, and dehydrates with hot conc. H₂SO₄ to ethene. Ethanoic acid (CH₃COOH) is vinegar; glacial acetic acid freezes at 290 K.",
        deeper:
          "Ethanoic acid turns blue litmus red, reacts with carbonates giving CO₂, and with alcohol gives esters. Ethanol does not react with carbonates — that is the test that distinguishes them.",
        keywords: ["denatured alcohol", "glacial acetic acid", "ester"],
        misconception: "Ethanol is not acidic enough to release CO₂ from Na₂CO₃; only carboxylic acids do that.",
      },
      {
        id: "soap",
        title: "Soaps, detergents and micelles",
        simple:
          "A soap molecule has a long hydrophobic hydrocarbon tail and a hydrophilic ionic head. In water many molecules form a micelle that traps oil inside.",
        deeper:
          "Soaps form scum with hard water (Ca²⁺/Mg²⁺ salts); detergents are ammonium/sulphonate salts that work even in hard water because their calcium and magnesium salts are soluble.",
        keywords: ["micelle", "hydrophobic", "hard water", "scum"],
      },
    ],
    activities: [
      {
        id: "ester-test",
        title: "Preparation of an ester (esterification)",
        aim: "To prepare ethyl ethanoate and observe its characteristic smell.",
        materials: ["Ethanol", "Glacial acetic acid", "Conc. H₂SO₄", "Test tube", "Water bath"],
        procedure: [
          "Take 1 mL ethanol and 1 mL glacial acetic acid in a test tube.",
          "Add a few drops of conc. H₂SO₄ carefully.",
          "Warm in a water bath for about five minutes and pour into water in a beaker.",
        ],
        observation: "A sweet, fruity smelling liquid — ethyl ethanoate — is obtained.",
        explanation: "CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O, with conc. H₂SO₄ acting as dehydrating agent and catalyst.",
        conclusion: "Carboxylic acids react with alcohols in the presence of an acid catalyst to form esters.",
        precautions: ["Use a water bath, never a direct flame — the vapours are inflammable.", "Add conc. H₂SO₄ drop by drop."],
        viva: [
          { q: "Role of conc. H₂SO₄?", a: "It is a dehydrating agent that removes water and shifts the equilibrium forward." },
          { q: "Use of esters?", a: "In perfumes and as flavouring agents." },
        ],
      },
    ],
    numericals: [
      {
        id: "homolog",
        question: "The molecular mass of an alkane is 44 u. Identify it and write the next higher homologue. (C = 12, H = 1)",
        given: ["Alkane, CₙH₂ₙ₊₂", "M = 44 u"],
        formula: "M = 12n + (2n + 2) = 14n + 2",
        substitution: "14n + 2 = 44",
        steps: ["14n = 42", "n = 3 → C₃H₈ = propane", "Next homologue adds CH₂ → C₄H₁₀ = butane (58 u)"],
        answer: "Propane (C₃H₈); next member butane (C₄H₁₀)",
        unitCheck: "u ✓",
        concept: "Homologous series differ by CH₂ = 14 u.",
      },
    ],
    diagrams: [
      {
        id: "micelle",
        title: "Structure of a soap micelle",
        width: 400,
        height: 300,
        shapes: [
          { k: "circle", cx: 200, cy: 150, r: 52, c: "rgba(255,180,90,0.7)", fill: "rgba(255,180,90,0.22)" },
          { k: "circle", cx: 200, cy: 150, r: 96, c: "rgba(140,190,255,0.35)", fill: "transparent", },
          { k: "path", d: "M200 98 L200 54", c: "#8fd0ff", w: 2 },
          { k: "circle", cx: 200, cy: 48, r: 8, c: "#8fd0ff", fill: "rgba(143,208,255,0.5)" },
          { k: "path", d: "M245 122 L282 96", c: "#8fd0ff", w: 2 },
          { k: "circle", cx: 288, cy: 92, r: 8, c: "#8fd0ff", fill: "rgba(143,208,255,0.5)" },
          { k: "path", d: "M252 174 L292 196", c: "#8fd0ff", w: 2 },
          { k: "circle", cx: 298, cy: 200, r: 8, c: "#8fd0ff", fill: "rgba(143,208,255,0.5)" },
          { k: "path", d: "M200 202 L200 246", c: "#8fd0ff", w: 2 },
          { k: "circle", cx: 200, cy: 252, r: 8, c: "#8fd0ff", fill: "rgba(143,208,255,0.5)" },
          { k: "path", d: "M148 174 L108 196", c: "#8fd0ff", w: 2 },
          { k: "circle", cx: 102, cy: 200, r: 8, c: "#8fd0ff", fill: "rgba(143,208,255,0.5)" },
          { k: "path", d: "M155 122 L118 96", c: "#8fd0ff", w: 2 },
          { k: "circle", cx: 112, cy: 92, r: 8, c: "#8fd0ff", fill: "rgba(143,208,255,0.5)" },
        ],
        parts: [
          { id: "oil", label: "Oil / dirt droplet", x: 200, y: 150, lx: 200, ly: 150, hint: "Trapped at the centre of the micelle." },
          { id: "tail", label: "Hydrophobic tail", x: 200, y: 76, lx: 300, ly: 40, hint: "Hydrocarbon end that dissolves in oil." },
          { id: "head", label: "Hydrophilic ionic head", x: 200, y: 252, lx: 200, ly: 288, hint: "−COO⁻Na⁺ end that faces water." },
          { id: "water", label: "Water", x: 60, y: 60, lx: 40, ly: 40, hint: "Surrounding medium; heads point into it." },
        ],
      },
    ],
    commonErrors: [
      { wrong: "Writing propanol as propaneol.", right: "Drop the final 'e' before a vowel suffix: propane + ol → propanol." },
      { wrong: "Saying ethanol turns blue litmus red.", right: "Ethanol is neutral; only ethanoic acid turns blue litmus red." },
      { wrong: "Calling detergents biodegradable.", right: "Many detergents have branched chains and are non-biodegradable, causing foam pollution." },
      { wrong: "Ignoring valency when drawing structures.", right: "Carbon must always show exactly four bonds, hydrogen exactly one." },
    ],
    board: [
      {
        q: "What is a homologous series? Write any two characteristics with an example.",
        marks: 3,
        answer: [
          "A series of compounds with the same functional group in which successive members differ by −CH₂.",
          "Members show gradation in physical properties and similar chemical properties.",
          "Example: CH₄, C₂H₆, C₃H₈ (alkanes).",
        ],
      },
      {
        q: "Explain the cleansing action of soap with the help of a micelle.",
        marks: 3,
        answer: [
          "A soap molecule has a hydrophobic hydrocarbon tail and a hydrophilic ionic head.",
          "Tails dissolve into the oily dirt while heads stay in water, forming a spherical micelle around the dirt.",
          "Agitation lifts the micelles into the water and the dirt is washed away.",
        ],
      },
      {
        q: "Why does carbon form covalent bonds rather than ionic bonds?",
        marks: 2,
        answer: [
          "Carbon has four valence electrons; losing or gaining four electrons would need very high energy and give an unstable ion.",
          "So it shares electrons and forms covalent bonds.",
        ],
      },
    ],
    quiz: [
      {
        id: "c4q1",
        type: "mcq",
        q: "The general formula of alkynes is:",
        options: ["CₙH₂ₙ₊₂", "CₙH₂ₙ", "CₙH₂ₙ₋₂", "CₙH₂ₙ₊₁"],
        answer: "CₙH₂ₙ₋₂",
        explain: "One triple bond removes four hydrogens compared with the alkane.",
        concept: "Homologous series",
      },
      {
        id: "c4q2",
        type: "mcq",
        q: "Which reagent distinguishes ethanol from ethanoic acid?",
        options: ["Blue litmus / sodium carbonate", "Sodium metal", "Water", "Bromine water"],
        answer: "Blue litmus / sodium carbonate",
        explain: "Only the acid turns blue litmus red and gives brisk effervescence of CO₂ with Na₂CO₃.",
        concept: "Tests for functional groups",
      },
      {
        id: "c4q3",
        type: "fill",
        q: "The process of converting vegetable oils into ghee-like fats using H₂/Ni is called ______.",
        answer: "hydrogenation",
        explain: "Unsaturated oils add hydrogen across the double bonds to become saturated.",
        concept: "Addition reaction",
      },
      {
        id: "c4q4",
        type: "short",
        q: "Why do soaps not work well in hard water?",
        answer: "They form insoluble scum with calcium and magnesium ions",
        explain: "Ca²⁺ and Mg²⁺ salts of soap are insoluble, so soap is wasted before lather forms.",
        concept: "Soaps and detergents",
      },
    ],
    summary: [
      "Tetravalency + catenation explain carbon's huge number of compounds.",
      "Alkane CₙH₂ₙ₊₂, alkene CₙH₂ₙ, alkyne CₙH₂ₙ₋₂.",
      "Functional group decides chemistry; suffix decides the IUPAC name.",
      "Ethanoic acid + ethanol → ester (esterification).",
      "Soap cleans through micelle formation; detergents also work in hard water.",
    ],
  },
];