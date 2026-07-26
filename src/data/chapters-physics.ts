import type { Chapter } from "./types";

export const physicsChapters: Chapter[] = [
  {
    number: 9,
    slug: "light-reflection-and-refraction",
    title: "Light — Reflection and Refraction",
    subject: "physics",
    tagline: "Drag the object, watch the image solve itself.",
    intro:
      "Every ray diagram in this chapter is drawn from the mirror and lens equations in real time. Move the object and the image position, size, nature and magnification are recomputed from the actual physics — nothing is pre-drawn.",
    moduleKey: "optics-lab",
    moduleTitle: "Optical Bench — Mirrors & Lenses",
    moduleBlurb:
      "Switch between concave/convex mirror and convex/concave lens, drag the object, change focal length and object height. The engine solves 1/v ± 1/u = 1/f, computes m, h′ and power, and traces every construction ray.",
    videoId: "IfWAhHZl1FY",
    videoTitle: "Light: Reflection and Refraction — full chapter revision",
    videoDescription:
      "Laws of reflection, spherical mirrors and their ray diagrams, mirror formula and magnification, refraction, refractive index, lens formula, and power of a lens with numericals.",
    notesFileId: "1TkzaIzBcF--3GiPiXstejjEPe6mxUkZ1",
    notesTitle: "Rapid Revision — Light: Reflection and Refraction",
    formulas: [
      { name: "Mirror formula", expr: "1/v + 1/u = 1/f", meaning: "Relates image distance v, object distance u and focal length f.", note: "All distances measured from the pole, with the sign convention." },
      { name: "Magnification (mirror)", expr: "m = −v/u = h′/h", meaning: "Negative m means a real, inverted image." },
      { name: "Focal length", expr: "f = R/2", meaning: "Focal length is half the radius of curvature." },
      { name: "Lens formula", expr: "1/v − 1/u = 1/f", meaning: "Note the minus sign — this is what differs from the mirror formula." },
      { name: "Magnification (lens)", expr: "m = v/u = h′/h", meaning: "Positive m means an erect, virtual image." },
      { name: "Power of a lens", expr: "P = 1/f (f in metres), unit dioptre (D)", meaning: "Convex lens has positive power, concave negative." },
      { name: "Refractive index", expr: "n = c/v = sin i / sin r", meaning: "Snell's law; n₂₁ = n₂/n₁." },
    ],
    theory: [
      {
        id: "reflection",
        title: "Laws of reflection",
        simple:
          "The angle of incidence equals the angle of reflection, and the incident ray, reflected ray and normal all lie in the same plane.",
        deeper:
          "These laws hold for every reflecting surface, curved or plane. For spherical mirrors the normal at any point is the line joining that point to the centre of curvature.",
        keywords: ["pole", "principal axis", "centre of curvature", "aperture"],
      },
      {
        id: "sign",
        title: "New Cartesian sign convention",
        simple:
          "Take the pole (or optical centre) as origin. Distances measured in the direction of incident light are positive; against it negative. Heights above the axis are positive, below negative.",
        deeper:
          "Consequences: object distance u is always negative. For a concave mirror f is negative; for a convex mirror f is positive. For a convex lens f is positive; for a concave lens f is negative.",
        keywords: ["sign convention", "u", "v", "f"],
        misconception: "Students often plug u as positive. u is negative for a real object, always.",
      },
      {
        id: "images",
        title: "Image formation by a concave mirror",
        simple:
          "Beyond C → real, inverted, diminished, between F and C. At C → real, inverted, same size. Between F and C → real, inverted, enlarged, beyond C. At F → image at infinity. Between P and F → virtual, erect, enlarged.",
        deeper:
          "A convex mirror always gives a virtual, erect and diminished image between P and F, which is why it is used as a rear-view mirror — it gives a wide field of view.",
        keywords: ["real image", "virtual image", "magnification"],
      },
      {
        id: "refraction",
        title: "Refraction and refractive index",
        simple:
          "Light bends when it changes medium because its speed changes. Going into a denser medium it bends towards the normal.",
        deeper:
          "n = c/v, where c = 3 × 10⁸ m/s. A higher refractive index means light travels slower in that medium. A ray entering a rectangular glass slab emerges parallel to the incident ray but laterally displaced.",
        keywords: ["Snell's law", "optically denser", "lateral displacement"],
        misconception: "The frequency of light does not change on refraction — only speed and wavelength do.",
      },
    ],
    activities: [
      {
        id: "focal-length",
        title: "Finding the approximate focal length of a concave mirror",
        aim: "To determine the approximate focal length of a concave mirror using a distant object.",
        materials: ["Concave mirror", "Mirror stand", "White screen", "Metre scale"],
        procedure: [
          "Face the concave mirror towards a distant object (a far building or the sun through a window).",
          "Move a white screen in front of the mirror until a sharp, small inverted image is formed.",
          "Measure the distance between the mirror pole and the screen.",
        ],
        observation: "A sharp, real, inverted and highly diminished image forms on the screen.",
        explanation:
          "Rays from a distant object are effectively parallel to the principal axis, so they converge at the principal focus. Hence the mirror–screen distance is the focal length.",
        conclusion: "The measured distance gives the approximate focal length f, and R = 2f.",
        precautions: ["Never look at the sun directly through the mirror.", "Keep mirror and screen parallel and measure along the principal axis."],
        viva: [
          { q: "Why is the image inverted?", a: "Rays cross at the focus, so the image is real and inverted." },
          { q: "Relation between f and R?", a: "f = R/2." },
        ],
      },
    ],
    numericals: [
      {
        id: "concave-1",
        question:
          "An object is placed 20 cm in front of a concave mirror of focal length 15 cm. Find the position, nature and magnification of the image.",
        given: ["u = −20 cm", "f = −15 cm (concave)"],
        formula: "1/v + 1/u = 1/f ; m = −v/u",
        substitution: "1/v = 1/f − 1/u = 1/(−15) − 1/(−20)",
        steps: [
          "1/v = −1/15 + 1/20 = (−4 + 3)/60 = −1/60",
          "v = −60 cm → image is 60 cm in front of the mirror (real)",
          "m = −v/u = −(−60)/(−20) = −3",
        ],
        answer: "v = −60 cm; real, inverted, magnified 3 times",
        unitCheck: "cm ✓ ; m is dimensionless ✓",
        concept: "Object between F and C of a concave mirror gives a real, inverted, enlarged image beyond C.",
      },
      {
        id: "lens-1",
        question: "A convex lens of focal length 10 cm forms an image of an object placed 15 cm away. Find v and m.",
        given: ["u = −15 cm", "f = +10 cm (convex)"],
        formula: "1/v − 1/u = 1/f ; m = v/u",
        substitution: "1/v = 1/10 + 1/(−15)",
        steps: ["1/v = 1/10 − 1/15 = (3 − 2)/30 = 1/30", "v = +30 cm (real image on the other side)", "m = v/u = 30/(−15) = −2"],
        answer: "v = +30 cm; real, inverted, twice the size",
        unitCheck: "cm ✓",
        concept: "Object between f and 2f of a convex lens gives a real, inverted, enlarged image beyond 2f.",
      },
      {
        id: "power",
        question: "Find the power of a concave lens of focal length 25 cm.",
        given: ["f = −25 cm = −0.25 m"],
        formula: "P = 1/f (f in metres)",
        substitution: "P = 1 / (−0.25)",
        steps: ["Convert: 25 cm = 0.25 m", "Concave lens → f is negative", "P = 1/(−0.25) = −4 D"],
        answer: "P = −4 dioptre",
        unitCheck: "1/m = D ✓",
        concept: "Power is negative for diverging (concave) lenses.",
        alternative: "For lenses in contact, P = P₁ + P₂.",
      },
    ],
    diagrams: [
      {
        id: "concave-mirror-parts",
        title: "Parts of a concave mirror",
        width: 440,
        height: 260,
        shapes: [
          { k: "line", x1: 20, y1: 130, x2: 420, y2: 130, c: "rgba(200,210,255,0.5)", w: 1, dash: "6 6" },
          { k: "path", d: "M340 40 A 160 160 0 0 0 340 220", c: "#9db7ff", w: 3 },
          { k: "circle", cx: 340, cy: 130, r: 4, c: "#ffcf6b", fill: "#ffcf6b" },
          { k: "circle", cx: 260, cy: 130, r: 4, c: "#7ee0ff", fill: "#7ee0ff" },
          { k: "circle", cx: 180, cy: 130, r: 4, c: "#ff9ecb", fill: "#ff9ecb" },
          { k: "path", d: "M180 130 L340 130", c: "rgba(255,158,203,0.4)", w: 1 },
          { k: "path", d: "M60 130 L60 70 L70 82 M60 70 L50 82", c: "#9bf7c0", w: 2 },
        ],
        parts: [
          { id: "pole", label: "Pole (P)", x: 340, y: 130, lx: 392, ly: 108, hint: "Centre point of the reflecting surface." },
          { id: "focus", label: "Principal focus (F)", x: 260, y: 130, lx: 262, ly: 92, hint: "Where parallel rays converge; f = R/2." },
          { id: "centre", label: "Centre of curvature (C)", x: 180, y: 130, lx: 150, ly: 74, hint: "Centre of the sphere the mirror is part of." },
          { id: "axis", label: "Principal axis", x: 100, y: 130, lx: 74, ly: 152, hint: "Line through P and C." },
          { id: "object", label: "Object", x: 60, y: 90, lx: 34, ly: 60, hint: "Placed on the principal axis, upright." },
        ],
      },
    ],
    commonErrors: [
      { wrong: "Taking u as positive.", right: "For a real object u is always negative in the New Cartesian convention." },
      { wrong: "Using 1/v + 1/u = 1/f for a lens.", right: "Lenses use 1/v − 1/u = 1/f." },
      { wrong: "Using f in cm while finding power.", right: "Power needs f in metres: P = 1/f(m)." },
      { wrong: "Saying a virtual image cannot be seen.", right: "A virtual image can be seen by the eye; it just cannot be caught on a screen." },
    ],
    board: [
      {
        q: "State the laws of refraction of light and define absolute refractive index.",
        marks: 3,
        answer: [
          "The incident ray, refracted ray and normal at the point of incidence all lie in the same plane.",
          "sin i / sin r = constant for a given pair of media (Snell's law).",
          "Absolute refractive index n = speed of light in vacuum / speed of light in the medium = c/v.",
        ],
      },
      {
        q: "Why are convex mirrors used as rear-view mirrors in vehicles?",
        marks: 2,
        answer: [
          "They always form virtual, erect and diminished images of objects behind.",
          "They have a much wider field of view than a plane mirror of the same size.",
        ],
      },
      {
        q: "Draw and explain the image formed when an object is placed between the pole and focus of a concave mirror.",
        marks: 3,
        answer: [
          "The reflected rays diverge and appear to come from behind the mirror.",
          "The image is virtual, erect and enlarged, formed behind the mirror.",
          "This is why a concave mirror is used as a shaving/make-up mirror.",
        ],
      },
    ],
    quiz: [
      {
        id: "p9q1",
        type: "mcq",
        q: "A concave mirror forms an erect and magnified image. The object must be:",
        options: ["Beyond C", "At C", "Between F and C", "Between P and F"],
        answer: "Between P and F",
        explain: "Only in this position is the image virtual, erect and enlarged.",
        concept: "Image formation by concave mirrors",
      },
      {
        id: "p9q2",
        type: "mcq",
        q: "The power of a lens is +2.5 D. Its focal length is:",
        options: ["+40 cm", "−40 cm", "+25 cm", "+2.5 m"],
        answer: "+40 cm",
        explain: "f = 1/P = 1/2.5 = 0.4 m = +40 cm; positive means convex.",
        concept: "Power of a lens",
      },
      {
        id: "p9q3",
        type: "fill",
        q: "For a spherical mirror, f = ______ (in terms of R).",
        answer: "R/2",
        explain: "Focal length is half the radius of curvature.",
        concept: "Mirror geometry",
      },
      {
        id: "p9q4",
        type: "assertion",
        q: "Assertion: A ray of light bends towards the normal when it enters glass from air. Reason: Glass is optically denser and light slows down in it.",
        options: ["Both true, reason explains assertion", "Both true, reason does not explain", "Assertion true, reason false", "Both false"],
        answer: "Both true, reason explains assertion",
        explain: "Reduced speed in a denser medium is exactly why the ray bends towards the normal.",
        concept: "Refraction",
      },
    ],
    summary: [
      "Mirror: 1/v + 1/u = 1/f, m = −v/u. Lens: 1/v − 1/u = 1/f, m = v/u.",
      "f = R/2; power P = 1/f in metres, unit dioptre.",
      "Concave mirror and convex lens can give real or virtual images; convex mirror and concave lens always give virtual, erect, diminished images.",
      "Refraction happens because the speed of light changes; n = c/v.",
      "Always apply the New Cartesian sign convention before substituting.",
    ],
  },
  {
    number: 10,
    slug: "human-eye-and-colourful-world",
    title: "The Human Eye and the Colourful World",
    subject: "physics",
    tagline: "Correct myopia and hypermetropia with real lens maths.",
    intro:
      "The eye is a variable-focus camera. This chapter's live module computes the exact corrective lens power for any far point or near point using the lens formula — the same calculation an optometrist does.",
    moduleKey: "eye-lab",
    moduleTitle: "Vision Defect & Dispersion Lab",
    moduleBlurb:
      "Set the defect and the patient's far/near point. The engine solves the lens formula for the required power, shows where the image was forming and where it forms after correction, and drives a live prism dispersion and scattering model.",
    videoId: "ntvqlm2ZXqk",
    videoTitle: "Human Eye and the Colourful World — full chapter revision",
    videoDescription:
      "Structure of the eye, accommodation, defects of vision and their correction, dispersion through a prism, atmospheric refraction, and scattering of light.",
    notesFileId: "1Jx5dF6bIf1zkdnA3keHd0WEfz2AQb_OY",
    notesTitle: "Rapid Revision — Human Eye and the Colourful World",
    formulas: [
      { name: "Corrective lens (myopia)", expr: "P = 1/f, f = −(far point distance)", meaning: "A concave lens brings the image from in front of the retina onto it." },
      { name: "Corrective lens (hypermetropia)", expr: "1/f = 1/v − 1/u with u = −25 cm, v = −(near point)", meaning: "A convex lens lets the eye focus at the normal near point of 25 cm." },
      { name: "Power", expr: "P = 1/f (metres), unit D", meaning: "Negative for concave, positive for convex." },
      { name: "Range of vision", expr: "Near point 25 cm to far point infinity", meaning: "For a normal adult eye." },
      { name: "Scattering", expr: "Intensity ∝ 1/λ⁴ (Rayleigh)", meaning: "Blue scatters far more than red — the sky is blue." },
    ],
    theory: [
      {
        id: "structure",
        title: "Structure and accommodation",
        simple:
          "Light passes through the cornea, pupil and eye lens and forms a real, inverted image on the retina. Ciliary muscles change the lens's curvature to focus near or far — this is accommodation.",
        deeper:
          "The iris controls pupil size and hence the light entering. Rods detect dim light, cones detect colour. The least distance of distinct vision for a normal eye is 25 cm.",
        keywords: ["cornea", "iris", "retina", "ciliary muscle", "accommodation"],
      },
      {
        id: "defects",
        title: "Defects of vision",
        simple:
          "Myopia (short-sight): image forms in front of the retina; corrected by a concave lens. Hypermetropia (long-sight): image forms behind the retina; corrected by a convex lens. Presbyopia: ageing loss of accommodation; corrected by bifocals.",
        deeper:
          "Myopia is caused by excessive curvature of the lens or an elongated eyeball. Hypermetropia is caused by a low converging power or a shortened eyeball.",
        keywords: ["myopia", "hypermetropia", "presbyopia", "bifocal"],
        misconception: "Cataract is not corrected by lenses — it needs surgical replacement of the clouded lens.",
      },
      {
        id: "dispersion",
        title: "Dispersion and the rainbow",
        simple:
          "White light splits into VIBGYOR through a prism because each colour bends by a different amount — red least, violet most.",
        deeper:
          "A rainbow forms by refraction, total internal reflection and again refraction inside water droplets, with the sun behind the observer.",
        keywords: ["spectrum", "prism", "deviation", "VIBGYOR"],
      },
      {
        id: "scattering",
        title: "Atmospheric refraction and scattering",
        simple:
          "Twinkling of stars, the advance sunrise and delayed sunset are due to atmospheric refraction. The blue sky and red sunrise/sunset are due to scattering.",
        deeper:
          "Rayleigh scattering intensity varies as 1/λ⁴, so short-wavelength blue scatters strongly. At sunset light travels a longer path, blue is scattered away and red reaches us. Danger signals are red because red scatters least and travels farthest.",
        keywords: ["Tyndall effect", "Rayleigh scattering", "atmospheric refraction"],
      },
    ],
    activities: [
      {
        id: "prism",
        title: "Dispersion of white light by a glass prism",
        aim: "To obtain a spectrum of white light using a glass prism.",
        materials: ["Triangular glass prism", "Cardboard with a narrow slit", "White screen", "Light source"],
        procedure: [
          "Allow a narrow beam of white light to fall on one face of the prism.",
          "Place a white screen on the other side.",
          "Rotate the prism slowly until a band of colours appears.",
        ],
        observation: "A band of seven colours (violet to red) appears, with violet bent the most and red the least.",
        explanation: "Different colours have different wavelengths, so the prism's refractive index differs for each and each is deviated differently.",
        conclusion: "White light is composite; a prism disperses it into its constituent colours.",
        precautions: ["Use a narrow slit for a sharp spectrum.", "Darken the room and keep the screen perpendicular."],
        viva: [
          { q: "Which colour deviates most?", a: "Violet, because it has the shortest wavelength and the highest refractive index." },
          { q: "How can the spectrum be recombined?", a: "Using a second, inverted prism (Newton's experiment)." },
        ],
      },
    ],
    numericals: [
      {
        id: "myopia",
        question: "A person cannot see objects beyond 80 cm clearly. Find the nature and power of the corrective lens.",
        given: ["Far point = 80 cm = 0.8 m", "Object at infinity must be imaged at the far point"],
        formula: "1/v − 1/u = 1/f with u = ∞, v = −0.8 m ; P = 1/f",
        substitution: "1/f = 1/(−0.8) − 0 ",
        steps: ["f = −0.8 m", "P = 1/f = 1/(−0.8) = −1.25 D", "Negative power → concave lens"],
        answer: "Concave lens of power −1.25 D",
        unitCheck: "1/m = D ✓",
        concept: "Myopia is corrected by a diverging lens whose focal length equals the far point distance.",
      },
      {
        id: "hypermetropia",
        question: "A person's near point is 1 m. What lens is needed to read at the normal 25 cm?",
        given: ["u = −25 cm = −0.25 m", "v = −1 m (image at his near point)"],
        formula: "1/f = 1/v − 1/u ; P = 1/f",
        substitution: "1/f = 1/(−1) − 1/(−0.25)",
        steps: ["1/f = −1 + 4 = 3", "f = +0.333 m", "P = +3 D → convex lens"],
        answer: "Convex lens of power +3 D",
        unitCheck: "D ✓",
        concept: "Hypermetropia is corrected by a converging lens.",
      },
    ],
    diagrams: [
      {
        id: "eye-structure",
        title: "Structure of the human eye",
        width: 420,
        height: 280,
        shapes: [
          { k: "circle", cx: 210, cy: 140, r: 96, c: "#9db7ff", fill: "rgba(140,175,255,0.12)" },
          { k: "path", d: "M114 140 A 96 96 0 0 1 130 88 A 46 46 0 0 0 130 192 A 96 96 0 0 1 114 140", c: "#7ee0ff", fill: "rgba(126,224,255,0.22)" },
          { k: "ellipse", cx: 150, cy: 140, rx: 16, ry: 34, c: "#ffe066", fill: "rgba(255,224,102,0.25)" },
          { k: "line", x1: 132, y1: 106, x2: 132, y2: 124, c: "#ff9ecb", w: 3 },
          { k: "line", x1: 132, y1: 156, x2: 132, y2: 174, c: "#ff9ecb", w: 3 },
          { k: "path", d: "M300 84 A 96 96 0 0 1 300 196", c: "#9bf7c0", w: 4 },
          { k: "line", x1: 306, y1: 140, x2: 380, y2: 150, c: "#c9b5ff", w: 3 },
          { k: "line", x1: 40, y1: 108, x2: 148, y2: 132, c: "#ffcf6b", w: 1.5 },
          { k: "line", x1: 40, y1: 172, x2: 148, y2: 148, c: "#ffcf6b", w: 1.5 },
          { k: "line", x1: 152, y1: 132, x2: 300, y2: 156, c: "#ffcf6b", w: 1.5 },
          { k: "line", x1: 152, y1: 148, x2: 300, y2: 132, c: "#ffcf6b", w: 1.5 },
        ],
        parts: [
          { id: "cornea", label: "Cornea", x: 120, y: 140, lx: 44, ly: 60, hint: "Transparent front layer where most refraction happens." },
          { id: "iris", label: "Iris", x: 132, y: 112, lx: 120, ly: 40, hint: "Coloured diaphragm controlling pupil size." },
          { id: "pupil", label: "Pupil", x: 132, y: 140, lx: 60, ly: 236, hint: "Hole through which light enters." },
          { id: "lens", label: "Eye lens", x: 150, y: 140, lx: 176, ly: 246, hint: "Fine-focuses light; curvature changed by ciliary muscles." },
          { id: "retina", label: "Retina", x: 300, y: 140, lx: 330, ly: 250, hint: "Light-sensitive screen with rods and cones." },
          { id: "optic", label: "Optic nerve", x: 350, y: 145, lx: 366, ly: 200, hint: "Carries signals to the brain." },
        ],
      },
    ],
    commonErrors: [
      { wrong: "Correcting myopia with a convex lens.", right: "Myopia needs a concave (diverging) lens; hypermetropia needs a convex lens." },
      { wrong: "Saying twinkling of planets occurs.", right: "Planets are extended sources, so their light does not twinkle." },
      { wrong: "Explaining the blue sky by reflection.", right: "It is scattering of shorter wavelengths by air molecules." },
      { wrong: "Forgetting to convert cm to m for power.", right: "P = 1/f only when f is in metres." },
    ],
    board: [
      {
        q: "What is presbyopia? How is it corrected?",
        marks: 2,
        answer: [
          "With age the ciliary muscles weaken and the eye lens becomes rigid, so the power of accommodation decreases and the near point recedes.",
          "It is corrected using bifocal lenses — concave upper part for distant vision and convex lower part for reading.",
        ],
      },
      {
        q: "Why does the sky appear blue while the sun appears reddish at sunrise and sunset?",
        marks: 3,
        answer: [
          "Air molecules scatter shorter wavelengths much more strongly (intensity ∝ 1/λ⁴).",
          "Blue light is scattered all over the sky, so the sky looks blue.",
          "At sunrise/sunset light travels a longer path, blue is scattered away and mainly red reaches the observer.",
        ],
      },
      {
        q: "Explain the working of the eye's power of accommodation.",
        marks: 3,
        answer: [
          "Ciliary muscles change the curvature and hence the focal length of the eye lens.",
          "For distant objects the muscles relax, the lens becomes thin and its focal length increases.",
          "For near objects the muscles contract, the lens becomes thick and its focal length decreases.",
        ],
      },
    ],
    quiz: [
      {
        id: "p10q1",
        type: "mcq",
        q: "The least distance of distinct vision for a normal adult eye is:",
        options: ["10 cm", "25 cm", "50 cm", "Infinity"],
        answer: "25 cm",
        explain: "The near point of a normal eye is about 25 cm.",
        concept: "Range of vision",
      },
      {
        id: "p10q2",
        type: "mcq",
        q: "Danger signals are red because red light:",
        options: ["Is brightest", "Is scattered the least", "Has the smallest wavelength", "Travels fastest"],
        answer: "Is scattered the least",
        explain: "Red has the longest wavelength, so it scatters least and is visible from far away.",
        concept: "Scattering of light",
      },
      {
        id: "p10q3",
        type: "fill",
        q: "Splitting of white light into its component colours is called ______.",
        answer: "dispersion",
        explain: "Each colour has a different refractive index in glass, so each deviates differently.",
        concept: "Dispersion",
      },
      {
        id: "p10q4",
        type: "short",
        q: "Why do stars twinkle but planets do not?",
        answer: "Stars are point sources whose light refracts variably; planets are extended sources",
        explain: "Averaging over many points of an extended source cancels out the fluctuation.",
        concept: "Atmospheric refraction",
      },
    ],
    summary: [
      "Image on the retina is real and inverted; ciliary muscles provide accommodation.",
      "Myopia → concave lens; hypermetropia → convex lens; presbyopia → bifocal.",
      "Prism disperses white light: violet bends most, red least.",
      "Scattering ∝ 1/λ⁴ explains the blue sky and red sunset.",
      "Atmospheric refraction explains twinkling and the advanced sunrise.",
    ],
  },
  {
    number: 11,
    slug: "electricity",
    title: "Electricity",
    subject: "physics",
    tagline: "A real circuit solver — series, parallel, power and heat.",
    intro:
      "The circuit lab here does not animate a picture; it solves the circuit. Resistances are combined by the correct rules, Ohm's law gives the current, and the V–I graph is plotted from the computed values.",
    moduleKey: "circuit-lab",
    moduleTitle: "Live Circuit Lab & V–I Grapher",
    moduleBlurb:
      "Add resistors, switch between series and parallel, set the battery emf. The engine computes equivalent resistance, current, branch voltages, power and heat produced, drives the ammeter/voltmeter and plots the V–I line.",
    videoId: "UI8nM-dSfh4",
    videoTitle: "Electricity — full chapter revision",
    videoDescription:
      "Electric current and potential difference, Ohm's law, factors affecting resistance, series and parallel combinations, heating effect of current and electric power with numericals.",
    notesFileId: "1R99dPYnZURCBUS3_C44gP_B9Keu0p7Xg",
    notesTitle: "Rapid Revision — Electricity",
    formulas: [
      { name: "Electric current", expr: "I = Q/t", meaning: "1 ampere = 1 coulomb per second." },
      { name: "Potential difference", expr: "V = W/Q", meaning: "1 volt = 1 joule per coulomb." },
      { name: "Ohm's law", expr: "V = IR", meaning: "At constant temperature, current is proportional to potential difference." },
      { name: "Resistance of a conductor", expr: "R = ρl/A", meaning: "Resistance increases with length and decreases with area of cross-section." },
      { name: "Series combination", expr: "Rs = R₁ + R₂ + R₃", meaning: "Same current through each resistor; voltages add." },
      { name: "Parallel combination", expr: "1/Rp = 1/R₁ + 1/R₂ + 1/R₃", meaning: "Same voltage across each; currents add." },
      { name: "Electric power", expr: "P = VI = I²R = V²/R", meaning: "Unit watt; commercial unit of energy is kWh." },
      { name: "Joule's heating", expr: "H = I²Rt", meaning: "Heat produced in a resistor in time t." },
    ],
    theory: [
      {
        id: "current",
        title: "Current, potential difference and Ohm's law",
        simple:
          "Current is the rate of flow of charge. Potential difference is the work done per unit charge. Ohm's law says V = IR at constant temperature.",
        deeper:
          "Conventional current flows from + to − outside the cell, opposite to electron flow. A V–I graph for an ohmic conductor is a straight line through the origin whose slope is R.",
        keywords: ["ampere", "volt", "ohm", "ohmic conductor"],
        misconception: "A voltmeter is connected in parallel and has very high resistance; an ammeter is in series and has very low resistance.",
      },
      {
        id: "resistance",
        title: "Factors affecting resistance",
        simple: "R depends on length (directly), area of cross-section (inversely), material (resistivity) and temperature.",
        deeper:
          "Resistivity ρ is a property of the material only. Alloys like nichrome have high resistivity and do not oxidise readily, so they are used in heating elements. Copper and aluminium have low resistivity and are used in wires.",
        keywords: ["resistivity", "nichrome", "rheostat"],
      },
      {
        id: "combinations",
        title: "Series and parallel",
        simple:
          "In series, current is same and Rs adds up. In parallel, voltage is same and 1/Rp adds up, so Rp is smaller than the smallest resistor.",
        deeper:
          "Household appliances are connected in parallel so each gets the full 220 V, each can be switched independently, and a failure in one does not break the circuit.",
        keywords: ["equivalent resistance", "branch current"],
      },
      {
        id: "heating",
        title: "Heating effect and power",
        simple: "H = I²Rt. Electric power P = VI = I²R = V²/R. Energy is billed in kilowatt-hours (1 kWh = 3.6 × 10⁶ J).",
        deeper:
          "A fuse is a short piece of wire with low melting point placed in series; it melts and breaks the circuit when current exceeds a safe value. The filament of a bulb is tungsten because of its very high melting point.",
        keywords: ["fuse", "kWh", "tungsten", "Joule's law"],
      },
    ],
    activities: [
      {
        id: "ohms-law",
        title: "Verification of Ohm's law",
        aim: "To study the dependence of current on potential difference across a resistor and verify Ohm's law.",
        materials: ["Nichrome wire / resistor", "Ammeter", "Voltmeter", "Cells", "Key", "Connecting wires"],
        procedure: [
          "Connect the resistor in series with an ammeter, key and cells; connect the voltmeter across the resistor.",
          "Take readings of V and I with one cell, then two, three and four cells.",
          "Plot V on the x-axis against I on the y-axis.",
        ],
        observation: "V/I comes out nearly constant, and the V–I graph is a straight line through the origin.",
        explanation: "The constant ratio V/I is the resistance R of the conductor — this is Ohm's law.",
        conclusion: "Current through a metallic conductor is directly proportional to the potential difference across it at constant temperature.",
        precautions: [
          "Connect the ammeter in series and the voltmeter in parallel with correct polarity.",
          "Keep the key open except while taking readings so the wire does not heat up.",
        ],
        viva: [
          { q: "What does the slope of the V–I graph give?", a: "The resistance R of the conductor." },
          { q: "Why must the temperature stay constant?", a: "Resistance of a metal increases with temperature, breaking the linear relation." },
        ],
      },
    ],
    numericals: [
      {
        id: "series-parallel",
        question: "Three resistors of 5 Ω, 10 Ω and 30 Ω are connected in parallel to a 12 V battery. Find the total current.",
        given: ["R₁ = 5 Ω, R₂ = 10 Ω, R₃ = 30 Ω", "V = 12 V"],
        formula: "1/Rp = 1/R₁ + 1/R₂ + 1/R₃ ; I = V/Rp",
        substitution: "1/Rp = 1/5 + 1/10 + 1/30",
        steps: ["1/Rp = (6 + 3 + 1)/30 = 10/30 = 1/3", "Rp = 3 Ω", "I = 12/3 = 4 A"],
        answer: "Rp = 3 Ω, total current = 4 A",
        unitCheck: "V/Ω = A ✓",
        concept: "In parallel the equivalent resistance is smaller than the smallest branch.",
        alternative: "Branch currents: 12/5 + 12/10 + 12/30 = 2.4 + 1.2 + 0.4 = 4 A ✓",
      },
      {
        id: "power-bill",
        question: "An electric heater of 1500 W runs 2 hours daily for 30 days. Find the energy used and cost at ₹5 per unit.",
        given: ["P = 1500 W = 1.5 kW", "t = 2 × 30 = 60 h", "rate = ₹5/kWh"],
        formula: "E = P × t (kWh) ; Cost = E × rate",
        substitution: "E = 1.5 × 60",
        steps: ["E = 90 kWh = 90 units", "Cost = 90 × 5 = ₹450"],
        answer: "90 units, costing ₹450",
        unitCheck: "kW × h = kWh ✓",
        concept: "Commercial energy is measured in kilowatt-hours.",
      },
      {
        id: "heat",
        question: "Find the heat produced in 4 minutes by a 5 Ω resistor carrying 2 A.",
        given: ["I = 2 A", "R = 5 Ω", "t = 4 min = 240 s"],
        formula: "H = I²Rt",
        substitution: "H = (2)² × 5 × 240",
        steps: ["I² = 4", "H = 4 × 5 × 240 = 4800 J"],
        answer: "H = 4800 J (4.8 kJ)",
        unitCheck: "A² × Ω × s = J ✓",
        concept: "Joule's law of heating.",
      },
    ],
    diagrams: [
      {
        id: "ohm-circuit",
        title: "Circuit to verify Ohm's law",
        width: 440,
        height: 260,
        shapes: [
          { k: "rect", x: 60, y: 60, w: 320, h: 150, r: 6, c: "#ffcf6b", fill: "transparent" },
          { k: "rect", x: 180, y: 48, w: 70, h: 24, r: 4, c: "#7ee0ff", fill: "rgba(126,224,255,0.18)" },
          { k: "circle", cx: 320, cy: 60, r: 18, c: "#9bf7c0", fill: "rgba(155,247,192,0.15)" },
          { k: "text", x: 315, y: 65, t: "A", size: 14, c: "#9bf7c0" },
          { k: "circle", cx: 215, cy: 150, r: 18, c: "#ff9ecb", fill: "rgba(255,158,203,0.15)" },
          { k: "text", x: 210, y: 155, t: "V", size: 14, c: "#ff9ecb" },
          { k: "line", x1: 180, y1: 150, x2: 180, y2: 60, c: "#ff9ecb", w: 1.5, dash: "4 4" },
          { k: "line", x1: 250, y1: 150, x2: 250, y2: 60, c: "#ff9ecb", w: 1.5, dash: "4 4" },
          { k: "line", x1: 100, y1: 200, x2: 116, y2: 200, c: "#ffcf6b", w: 4 },
          { k: "line", x1: 124, y1: 190, x2: 124, y2: 220, c: "#ffcf6b", w: 3 },
          { k: "line", x1: 132, y1: 196, x2: 132, y2: 214, c: "#ffcf6b", w: 6 },
          { k: "path", d: "M250 210 l14 -12 l0 24 z", c: "#ffe066", fill: "rgba(255,224,102,0.4)" },
        ],
        parts: [
          { id: "resistor", label: "Resistor (nichrome wire)", x: 215, y: 60, lx: 215, ly: 22, hint: "The conductor under test." },
          { id: "ammeter", label: "Ammeter (in series)", x: 320, y: 60, lx: 386, ly: 40, hint: "Low resistance; measures current." },
          { id: "voltmeter", label: "Voltmeter (in parallel)", x: 215, y: 150, lx: 215, ly: 186, hint: "High resistance; measures potential difference." },
          { id: "battery", label: "Battery / cells", x: 124, y: 205, lx: 60, ly: 240, hint: "Provides the potential difference." },
          { id: "key", label: "Plug key", x: 258, y: 210, lx: 320, ly: 240, hint: "Closes and opens the circuit." },
        ],
      },
    ],
    commonErrors: [
      { wrong: "Adding parallel resistances directly.", right: "Use 1/Rp = Σ1/Rᵢ; Rp is always less than the smallest resistor." },
      { wrong: "Connecting the ammeter in parallel.", right: "Ammeter always in series, voltmeter always in parallel." },
      { wrong: "Using P = V²/R with the wrong V in a series circuit.", right: "Use the voltage across that particular resistor, not the battery emf." },
      { wrong: "Treating 1 unit as 1 joule.", right: "1 unit = 1 kWh = 3.6 × 10⁶ J." },
    ],
    board: [
      {
        q: "Why are appliances in a house connected in parallel and not in series?",
        marks: 3,
        answer: [
          "Each appliance gets the full supply voltage of 220 V.",
          "Each can be switched on or off independently.",
          "If one appliance fails, the others keep working, and each can draw the current it needs.",
        ],
      },
      {
        q: "State Joule's law of heating and write two applications.",
        marks: 3,
        answer: [
          "H = I²Rt: heat produced is proportional to the square of the current, the resistance and the time.",
          "Applications: electric heater/iron and electric bulb filament.",
          "Also used in the electric fuse for safety.",
        ],
      },
      {
        q: "Define resistivity. How does the resistance of a wire change when its length is doubled at constant volume?",
        marks: 3,
        answer: [
          "Resistivity is the resistance of a conductor of unit length and unit area of cross-section; unit Ω m.",
          "At constant volume, doubling the length halves the area.",
          "R = ρl/A becomes ρ(2l)/(A/2) = 4R, so the resistance becomes four times.",
        ],
      },
    ],
    quiz: [
      {
        id: "p11q1",
        type: "mcq",
        q: "The SI unit of electric charge is:",
        options: ["Ampere", "Coulomb", "Volt", "Ohm"],
        answer: "Coulomb",
        explain: "1 C = 1 A × 1 s.",
        concept: "Basic quantities",
      },
      {
        id: "p11q2",
        type: "mcq",
        q: "Two 6 Ω resistors in parallel give an equivalent resistance of:",
        options: ["12 Ω", "6 Ω", "3 Ω", "1.5 Ω"],
        answer: "3 Ω",
        explain: "1/Rp = 1/6 + 1/6 = 2/6 → Rp = 3 Ω.",
        concept: "Parallel combination",
      },
      {
        id: "p11q3",
        type: "fill",
        q: "The commercial unit of electrical energy is the ______.",
        answer: "kilowatt hour",
        explain: "1 kWh = 3.6 × 10⁶ J and is called one unit.",
        concept: "Electrical energy",
      },
      {
        id: "p11q4",
        type: "assertion",
        q: "Assertion: Alloys are used in heating elements. Reason: Alloys have high resistivity and do not oxidise readily at high temperature.",
        options: ["Both true, reason explains assertion", "Both true, reason does not explain", "Assertion true, reason false", "Both false"],
        answer: "Both true, reason explains assertion",
        explain: "Nichrome is the standard example.",
        concept: "Resistivity",
      },
    ],
    summary: [
      "I = Q/t, V = W/Q, and Ohm's law V = IR.",
      "R = ρl/A; series adds R, parallel adds 1/R.",
      "P = VI = I²R = V²/R and H = I²Rt.",
      "Ammeter in series, voltmeter in parallel.",
      "1 unit = 1 kWh = 3.6 × 10⁶ J.",
    ],
  },
  {
    number: 12,
    slug: "magnetic-effects-of-electric-current",
    title: "Magnetic Effects of Electric Current",
    subject: "physics",
    tagline: "Field lines computed from the real Biot–Savart result.",
    intro:
      "Current creates a magnetic field. The module here computes actual field strengths from B = μ₀I/2πr and B = μ₀nI, then draws the field lines at the computed spacing — plus trainers for both of Fleming's rules.",
    moduleKey: "magnetism-lab",
    moduleTitle: "Magnetic Field & Fleming's Rule Lab",
    moduleBlurb:
      "Change the current, distance, number of turns and core. The engine computes the field in tesla, redraws the field pattern for a straight wire, loop or solenoid, and includes interactive Fleming's left- and right-hand rule trainers.",
    videoId: "D5rouymJ_UA",
    videoTitle: "Magnetic Effects of Electric Current — full chapter revision",
    videoDescription:
      "Magnetic field and field lines, field due to a current-carrying conductor, loop and solenoid, force on a conductor, electric motor, electromagnetic induction, generator and domestic circuits.",
    notesFileId: "1M0kQOtlgguM97edFGPoBUf2s7dJUfbPu",
    notesTitle: "Rapid Revision — Magnetic Effects of Electric Current",
    formulas: [
      { name: "Field near a straight wire", expr: "B = μ₀I / 2πr", meaning: "B is directly proportional to current and inversely proportional to distance." },
      { name: "Field inside a solenoid", expr: "B = μ₀ n I", meaning: "n is turns per metre; the field inside is uniform." },
      { name: "Permeability of free space", expr: "μ₀ = 4π × 10⁻⁷ T m A⁻¹", meaning: "Constant used in both field formulas." },
      { name: "Force on a conductor", expr: "F = BIL sinθ", meaning: "Maximum when the conductor is perpendicular to the field." },
      { name: "Right-hand thumb rule", expr: "Thumb = current, curled fingers = field", meaning: "Gives the direction of circular field lines around a wire." },
      { name: "Fleming's left-hand rule", expr: "Forefinger = field, Centre = current, Thumb = force", meaning: "Used for motors." },
      { name: "Fleming's right-hand rule", expr: "Forefinger = field, Thumb = motion, Centre = induced current", meaning: "Used for generators." },
    ],
    theory: [
      {
        id: "field",
        title: "Magnetic field and field lines",
        simple:
          "A magnetic field is the region where a magnetic force acts. Field lines emerge from the north pole and enter the south pole outside the magnet.",
        deeper:
          "Field lines never intersect — if they did, there would be two directions of the field at one point, which is impossible. Crowded lines mean a stronger field.",
        keywords: ["field line", "tesla", "compass"],
      },
      {
        id: "conductor",
        title: "Field due to current",
        simple:
          "A straight wire produces concentric circular field lines (right-hand thumb rule). A circular loop gives a field like a tiny bar magnet. A solenoid gives a uniform field inside, like a bar magnet.",
        deeper:
          "Placing a soft-iron core inside a solenoid makes an electromagnet whose strength depends on the current, the number of turns and the core material.",
        keywords: ["solenoid", "electromagnet", "soft iron core"],
        misconception: "Steel is used for permanent magnets, soft iron for electromagnets — not the other way round.",
      },
      {
        id: "motor",
        title: "Electric motor",
        simple:
          "A current-carrying coil in a magnetic field experiences forces on its two sides in opposite directions, so it rotates. A split-ring commutator reverses the current every half rotation to keep the rotation continuous.",
        deeper:
          "Direction of force is found by Fleming's left-hand rule. A motor converts electrical energy into mechanical energy.",
        keywords: ["commutator", "armature", "brushes"],
      },
      {
        id: "induction",
        title: "Electromagnetic induction and generator",
        simple:
          "Moving a conductor across a magnetic field (or changing the field through a coil) induces a current. This is electromagnetic induction, discovered by Faraday.",
        deeper:
          "An AC generator uses slip rings and produces alternating current; a DC generator uses a split-ring commutator. In India AC changes direction every 1/100 s (frequency 50 Hz).",
        keywords: ["induced current", "slip ring", "AC", "DC", "50 Hz"],
      },
    ],
    activities: [
      {
        id: "oersted",
        title: "Magnetic field due to a current-carrying straight conductor",
        aim: "To show that a current-carrying conductor produces a magnetic field around it.",
        materials: ["Straight thick copper wire", "Battery", "Key", "Small compass needle", "Cardboard with iron filings"],
        procedure: [
          "Pass a straight copper wire vertically through a horizontal cardboard.",
          "Sprinkle iron filings on the cardboard and connect the wire to a battery through a key.",
          "Close the key, tap the cardboard gently, and observe the pattern; also place a compass at various distances.",
        ],
        observation:
          "Iron filings arrange themselves in concentric circles around the wire; the compass deflects, and the deflection decreases as the distance increases and reverses when the current direction is reversed.",
        explanation: "A current produces a circular magnetic field whose direction is given by the right-hand thumb rule and whose strength B = μ₀I/2πr.",
        conclusion: "Electric current always produces a magnetic field around the conductor (Oersted's discovery).",
        precautions: ["Keep the key closed only briefly to avoid heating.", "Use a thick wire and keep the compass away from other magnets."],
        viva: [
          { q: "Why do circles get farther apart away from the wire?", a: "Field strength falls as 1/r, so the field weakens with distance." },
          { q: "What happens on reversing current?", a: "The direction of the field reverses and the compass deflects the other way." },
        ],
      },
    ],
    numericals: [
      {
        id: "straight-wire",
        question: "Find the magnetic field 5 cm from a long straight wire carrying 4 A.",
        given: ["I = 4 A", "r = 5 cm = 0.05 m", "μ₀ = 4π × 10⁻⁷"],
        formula: "B = μ₀I / 2πr",
        substitution: "B = (4π × 10⁻⁷ × 4) / (2π × 0.05)",
        steps: ["B = (2 × 10⁻⁷ × 4) / 0.05", "B = 8 × 10⁻⁷ / 0.05", "B = 1.6 × 10⁻⁵ T"],
        answer: "B = 1.6 × 10⁻⁵ T",
        unitCheck: "T m A⁻¹ × A / m = T ✓",
        concept: "Field around a straight conductor falls off as 1/r.",
      },
      {
        id: "solenoid",
        question: "A solenoid of 500 turns and length 0.25 m carries 2 A. Find the field inside it.",
        given: ["N = 500", "L = 0.25 m → n = 2000 turns/m", "I = 2 A"],
        formula: "B = μ₀ n I",
        substitution: "B = 4π × 10⁻⁷ × 2000 × 2",
        steps: ["n = 500 / 0.25 = 2000 turns/m", "B = 4π × 10⁻⁷ × 4000", "B ≈ 5.03 × 10⁻³ T"],
        answer: "B ≈ 5.03 × 10⁻³ T (uniform inside)",
        unitCheck: "T ✓",
        concept: "Field inside a solenoid is uniform and independent of position.",
      },
    ],
    diagrams: [
      {
        id: "motor",
        title: "Electric motor",
        width: 440,
        height: 260,
        shapes: [
          { k: "rect", x: 50, y: 70, w: 46, h: 120, r: 6, c: "#ff9ecb", fill: "rgba(255,158,203,0.18)" },
          { k: "text", x: 66, y: 138, t: "N", size: 18, c: "#ff9ecb" },
          { k: "rect", x: 330, y: 70, w: 46, h: 120, r: 6, c: "#7ee0ff", fill: "rgba(126,224,255,0.18)" },
          { k: "text", x: 346, y: 138, t: "S", size: 18, c: "#7ee0ff" },
          { k: "rect", x: 150, y: 90, w: 128, h: 80, r: 4, c: "#ffcf6b", fill: "transparent" },
          { k: "line", x1: 150, y1: 170, x2: 150, y2: 214, c: "#ffcf6b", w: 2 },
          { k: "line", x1: 278, y1: 170, x2: 278, y2: 214, c: "#ffcf6b", w: 2 },
          { k: "path", d: "M186 214 a28 20 0 0 1 56 0 z", c: "#c9b5ff", fill: "rgba(201,181,255,0.25)" },
          { k: "rect", x: 160, y: 224, w: 20, h: 14, r: 3, c: "#9bf7c0", fill: "rgba(155,247,192,0.2)" },
          { k: "rect", x: 248, y: 224, w: 20, h: 14, r: 3, c: "#9bf7c0", fill: "rgba(155,247,192,0.2)" },
          { k: "line", x1: 96, y1: 130, x2: 330, y2: 130, c: "rgba(200,210,255,0.25)", w: 1, dash: "5 5" },
        ],
        parts: [
          { id: "coil", label: "Armature coil (ABCD)", x: 214, y: 96, lx: 214, ly: 56, hint: "Rectangular coil that rotates in the field." },
          { id: "magnet-n", label: "North pole", x: 72, y: 130, lx: 34, ly: 46, hint: "Field runs from N to S across the coil." },
          { id: "magnet-s", label: "South pole", x: 352, y: 130, lx: 380, ly: 46, hint: "Field enters the south pole." },
          { id: "commutator", label: "Split-ring commutator", x: 214, y: 214, lx: 300, ly: 200, hint: "Reverses current every half rotation." },
          { id: "brush", label: "Carbon brush", x: 170, y: 231, lx: 70, ly: 246, hint: "Conducts current to the commutator." },
        ],
      },
    ],
    commonErrors: [
      { wrong: "Using the left-hand rule for a generator.", right: "Left hand for motors (force), right hand for generators (induced current)." },
      { wrong: "Saying field lines can cross.", right: "Two field directions at one point is impossible, so lines never intersect." },
      { wrong: "Using the live wire for earthing.", right: "The earth wire is green, connected to the metal body for safety." },
      { wrong: "Forgetting to convert cm to m in B = μ₀I/2πr.", right: "r must be in metres for B in tesla." },
    ],
    board: [
      {
        q: "State Fleming's left-hand rule. Where is it used?",
        marks: 3,
        answer: [
          "Stretch the thumb, forefinger and middle finger of the left hand mutually perpendicular.",
          "Forefinger points along the magnetic field, middle finger along the current; the thumb then gives the direction of force/motion.",
          "It is used to find the direction of motion in an electric motor.",
        ],
      },
      {
        q: "What is the role of the split ring in an electric motor?",
        marks: 2,
        answer: [
          "It reverses the direction of current through the coil after every half rotation.",
          "This keeps the torque acting in the same sense so the coil rotates continuously.",
        ],
      },
      {
        q: "Explain short-circuiting and overloading, and the role of the fuse.",
        marks: 3,
        answer: [
          "Short circuit: live and neutral wires touch directly, so resistance drops and current becomes very large.",
          "Overloading: too many appliances draw more current than the circuit is rated for.",
          "A fuse of suitable rating in series melts and breaks the circuit, preventing fire.",
        ],
      },
    ],
    quiz: [
      {
        id: "p12q1",
        type: "mcq",
        q: "The magnetic field inside a long current-carrying solenoid is:",
        options: ["Zero", "Uniform and parallel to the axis", "Circular", "Strongest at the ends"],
        answer: "Uniform and parallel to the axis",
        explain: "B = μ₀nI everywhere inside, like the field of a bar magnet.",
        concept: "Solenoid field",
      },
      {
        id: "p12q2",
        type: "mcq",
        q: "In Indian domestic supply, the frequency of AC is:",
        options: ["50 Hz", "60 Hz", "100 Hz", "25 Hz"],
        answer: "50 Hz",
        explain: "AC changes direction every 1/100 second, i.e. 50 cycles per second.",
        concept: "AC supply",
      },
      {
        id: "p12q3",
        type: "fill",
        q: "The device that converts mechanical energy into electrical energy is a ______.",
        answer: "generator",
        explain: "A motor does the reverse conversion.",
        concept: "Electromagnetic induction",
      },
      {
        id: "p12q4",
        type: "short",
        q: "Why is soft iron used as the core of an electromagnet?",
        answer: "It is easily magnetised and demagnetised",
        explain: "Soft iron gains a strong field with current and loses it when current stops, unlike steel.",
        concept: "Electromagnets",
      },
    ],
    summary: [
      "Current produces a magnetic field: B = μ₀I/2πr for a wire, B = μ₀nI inside a solenoid.",
      "Right-hand thumb rule gives field direction; Fleming's left hand gives force, right hand gives induced current.",
      "Motor: electrical → mechanical, uses a split-ring commutator.",
      "Generator: mechanical → electrical, uses slip rings for AC.",
      "Earth wire, fuse and correct wiring colours are the safety essentials.",
    ],
  },
];