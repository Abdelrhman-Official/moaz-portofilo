"use client";
import { createContext, useContext, useEffect, useState } from "react";

const EN = {
  dir: "ltr",
  name: "MOAZ HUSSEIN",
  nav: { links: ["Archive", "Practice", "Method", "Atelier", "Journey"], cta: "Start a project ↗", badge: "15 Y/O" },
  ticker: [["MOAZ HUSSEIN", "15-YEAR-OLD DESIGNER", "BRAND / SOCIAL / AI / PATTERN", "OPEN FOR PROJECTS"]],
  hero: {
    avail: "● AVAILABLE — 2 SLOTS / MONTH", loc: "CAIRO → WORLDWIDE", est: "AR + EN • EST. 2027",
    l1: "MOAZ", l2: "Hussein",
    l3a: "15-year-old designer shaping ", l3b: "brands, feeds & garments",
    ledeA: "I'm ", ledeB: "Moaz Hussein", ledeC: " — graphic designer, 15 years old. I build identities that survive print and pixels: logos, social systems, cinematic AI visuals, and clothing prints that actually sew correctly. Started at 12 on phone apps — now full desktop workflow. Quiet process. Loud precision.",
    cta1: "Browse the archive ↓", cta2: "Book a 15-min call →",
    stats: [{ n: 3, s: "yrs", l: "creating every day" }, { n: 80, s: "+", l: "pieces delivered" }, { n: 5, s: "◆", l: "crafts, one eye" }],
    strip: ["◐ STRATEGY BEFORE STYLE", "◎ PRINT + PIXEL NATIVE", "✦ AI AS PENCIL, EYE AS JUDGE"],
    chips: [{ t: "★ BRAND ID", s: "logo + system" }, { t: "◐ AI LOOP", s: "cinematic stills" }, { t: "✂ PATTERN", s: "cut + sew ready" }],
    fig: "FIG. 01 — THE DESIGNER", fig2: "MOAZ • 15 • 2027",
    marq: ["Brand identities", "Social systems", "AI worlds", "Repeat prints", "Editorial", "Packaging"]
  },
  strip: { label: "FROM THE ARCHIVE — REAL PIECES", names: ["Eqqual Berry ×3", "Studio Shodwe", "Monster — Spec", "Nescafé — Concept"] },
  mani: {
    label: "01 — MANIFESTO / WHY ME", lead: "Three years of daily practice taught me this:",
    words: "Good design is not decoration. It is structure with manners — type that breathes, color that remembers, and grids strict enough to break beautifully.".split(" "),
    minis: [
      { b: "◐ Attentive", p: "Off-grid, blurry or off-tone never ships. I check twice, export once." },
      { b: "◎ Systematic", p: "Every kit ships with rules — so anyone can post without breaking the brand." },
      { b: "♡ Bilingual eye", p: "Arabic + English lockups that actually respect both scripts." },
      { b: "✦ Atelier hybrid", p: "Graphics + garment pattern knowledge. Few designers cut fabric. I do." }
    ]
  },
  work: {
    label: "02 — SELECTED ARCHIVE / OLD WORK", t1: "An index,", t2: "not a carousel.",
    desc: "pieces from the desk — a 3-flavor skincare system, two spec ads, one fashion teaser. Click any row for the full piece.",
    total: "total", in: "in", filters: ["All", "Skincare", "Spec Ad", "Fashion"],
    use: "Use this style →", close: "Close", empty: "Nothing here yet — more old work coming.",
    role: "ROLE", roleV: "Concept → design → handover, solo.", stack: "STACK", stackV: "Photoshop + AI + print-ready export.",
    out: "OUTCOME", outV: "Shipped + posted + reordered.", before: "Before/after", mock: "Mockup", src: "Source files",
    drop: "Drop your image in", slots: "and it slots straight into this browser frame.", site: "moazhussein.work"
  },
  inter: {
    label: "INTERLUDE — AI + MEMORY", h1: "Gold loves", h2: "the dark.",
    p: "A chair in a field. A TV full of static. I rebuild half-remembered scenes with AI, grain and gold — then hang them on brands, covers and garments.",
    c1: "See Eqqual Berry →", c2: "Commission a world"
  },
  svc: {
    label: "03 — PRACTICE / 5 CRAFTS", t1: "What I ", t2: "take on.", tag: "5 CRAFTS",
    items: [
      { t: "Social & Content Design", d: "Carousels, covers, ads that stop thumbs. Hook in 0.8s. Arabic + English systems with reusable templates so you can post daily.", tags: ["Carousels", "Ad creatives", "Kits", "Thumbs"] },
      { t: "Brand Identity & Direction", d: "Logo, palette, type, art direction. Small brands that need to look established. Includes a 1-page guideline.", tags: ["Logo", "Palette", "Guidelines"] },
      { t: "AI Visuals & Loops", d: "Cinematic key visuals and backgrounds. Prompt → curate → retouch in Photoshop. No plastic AI look.", tags: ["Key visuals", "Worlds", "Retouch"] },
      { t: "Visual Storytelling", d: "Launch sequences: teaser → reveal → proof. Built for drops and collections.", tags: ["Teasers", "Sequences"] },
      { t: "Fashion & Pattern Making", d: "My unfair edge. Sketch → pattern → print-ready repeat. Apparel graphics that actually sew correctly.", tags: ["Patterns", "Prints", "Tech packs"] }
    ]
  },
  method: {
    label: "04 — METHOD / SCROLL →", t1: "Four moves, ", t2: "no chaos.", drag: "DRAG / SCROLL HORIZONTALLY →",
    steps: [
      { t: "Excavate", d: "15-min call + 5 quick questions. I study what competitors do. You approve a direction before any pixels." },
      { t: "Blueprint", d: "One moodboard, two routes: safe vs bold. Palette, type and vibe locked in a day." },
      { t: "Build", d: "Real content drafts, daily WhatsApp previews. Two revision rounds, tight and kind." },
      { t: "Release", d: "Final + source + mockups + usage note. I stay for launch-day fixes." }
    ],
    phase: "PHASE", fixed: "FIXED PRICE", yourT: "Your turn", yourD: "Tell me the deadline. I'll tell you honestly if I can beat it.", avail: "Check availability"
  },
  atelier: {
    label: "05 — ATELIER EDGE / FASHION", a1: "Most designers ", a2: "can't cut fabric.", a3: "I can.",
    p: "Pattern-making courses + hands-on sewing, on top of years in Photoshop — so my apparel graphics aren't just pretty, they're sewable. Neck ribbing, repeat scale, bleed for sublimation: handled.",
    chip: "FLAT SKETCH → PATTERN → PRINT", c1: "Request apparel work →", c2: "See the archive →",
    ptag: "PRINT / STUDY", reptile: "REPEAT TILE 40×40", ph: "PATTERN STUDY"
  },
  journey: {
    label: "JOURNEY — SO FAR", t: "Young, but already shipping.",
    jobs: [
      { h: "Freelance Graphic Designer — 2023 → now", s: "Identities • Social • Print", ul: ["80+ deliveries: logos, menus, kits, ads for shops & creators", "Small brand identities with templates that clients reuse", "Known for fast replies and clean file handover"] },
      { h: "Picture Studio Film — Design / Edit assist", s: "Cinema thinking for stills", p: "Staging help, continuity stills, teaser cuts. Learned pacing I now use in carousels and launches.", ph: "[Add director / exact credit]" },
      { h: "Training & Courses", s: "Always learning", p: "Fashion design & pattern-making courses, advanced Photoshop training, AI visual workflows — alongside school.", ph: "[Add school / certificate names]" }
    ],
    stackT: "STACK — WHAT I CUT WITH", stackSub: "TOOL / LEVEL",
    tools: [["Photoshop", 92], ["Illustrator", 80], ["Figma / Canva", 85], ["Midjourney / Firefly", 88], ["Premiere / CapCut", 80], ["Pattern drafting", 78]],
    honest: "HONEST LEVELS — 100% = I teach it. 60% = I ship with it, slowly.",
    formats: "PSD • AI • FIG • PDF • MP4", aren: "AR + EN TYPE"
  },
  testi: {
    label: "FIELD NOTES / FROM THE DESK", t1: "Build diaries,", t2: "not reviews.", tag: "★ PROCESS, HONESTLY",
    items: [
      { q: "Blue serum took the longest — matching 40+ leaves to the bottle's exact blue. Worth it.", n: "Eqqual Berry — Blue Flow" },
      { q: "Pink is the same grid as blue, re-skinned. That's the whole trick: systems beat one-offs.", n: "Eqqual Berry — Blush" },
      { q: "Monster was a study, not a client. I rebuilt the splash to learn product compositing.", n: "Monster Zero — Spec Ad" }
    ]
  },
  faq: {
    label: "BEFORE YOU ASK", t1: "Questions, ", t2: "answered.",
    items: [
      { q: "How fast? I need it this week.", a: "Social kits: 3–5 days. Identities: 10–14 days. Rush is possible if my 2 monthly slots allow — ask on WhatsApp first, I answer honestly." },
      { q: "What do I receive at the end?", a: "Final exports (PNG/JPG/PDF/MP4) + organized source files + a 1-page usage guide + mockups. No locked files." },
      { q: "How many revisions?", a: "Two full rounds per phase, included in the quote. Extra rounds billed small and quoted upfront." },
      { q: "AI or handmade?", a: "Both. AI for ideation, worlds and backgrounds; human hands for type, layout, color and taste. Fashion patterns are drafted properly — they sew." }
    ]
  },
  contact: {
    label: "06 — SAY HELLO / START A PROJECT", g1: "SAY ", g2: "hello.",
    sub: "Reply within 24h — after school hours (Cairo time). Fixed quote before we start.",
    steps: [{ b: "STEP 1 — BRIEF", p: "You send 1 paragraph + deadline. 30 seconds." }, { b: "STEP 2 — QUOTE", p: "Fixed price + date in 24h. No hourly fog." }, { b: "STEP 3 — DELIVERY", p: "Drafts on WhatsApp, finals + source + guide." }],
    direct: "DIRECT", sharp: "Let's make it sharp.", fastest: "◉ WhatsApp — fastest", replace: "[REPLACE]", avail: "● AVAILABLE NOW — 2 SLOTS",
    brief: "BRIEF — 30 SECONDS", name: "Name", namePh: "Your name", reach: "Reach you at", reachPh: "Email / WhatsApp",
    need: "Need", needs: ["Social kit", "Branding", "AI visuals", "Fashion / print"], budget: "Budget",
    budgets: ["$100 – $300", "$300 – $800", "$800+"], msg: "Project in one paragraph", msgPh: "What, when, links you like…",
    send: "✦ Send brief →", sent: "OPENING YOUR EMAIL APP — SHUKRAN!", mail: "hello@moazhussein.design"
  },
  footer: { r: "© 2027 MOAZ HUSSEIN — ATELIER NOIR. SAME GOLD, NEW CUT.", built: "DESIGNED WITH LIGHT IN THE DARK" }
};

const AR = {
  dir: "rtl",
  name: "معاذ حسين",
  nav: { links: ["الأعمال", "خبراتي", "منهجيتي", "الأتيليه", "رحلتي"], cta: "ابدأ مشروعك ↗", badge: "١٥ سنة" },
  ticker: [["معاذ حسين", "مصمم عنده 15 سنة", "براند / سوشيال / ذكاء اصطناعي / باترون", "متاح لمشاريع"]],
  hero: {
    avail: "● متاح — مكانين في الشهر", loc: "القاهرة → كل العالم", est: "عربي + إنجليزي • 2027",
    l1: "معاذ", l2: "حسين",
    l3a: "مصمم عنده 15 سنة بيشكّل ", l3b: "براندات وفيدز ولبس",
    ledeA: "أنا ", ledeB: "معاذ حسين", ledeC: " — مصمم جرافيك عندي 15 سنة. ببني هويات تستحمل الطباعة والشاشة: لوجوهات، أنظمة سوشيال، فيجوالز سينمائية بالذكاء الاصطناعي، وبرنتات هدوم تتخيّط صح. بدأت من 12 سنة على الموبايل — ودلوقتي شغل ديسكتوب كامل. شغل هادي. دقة عالية.",
    cta1: "شوف الأعمال ↓", cta2: "احجز مكالمة 15 دقيقة →",
    stats: [{ n: 3, s: "سنين", l: "شغل كل يوم" }, { n: 80, s: "+", l: "قطعة اتسلّمت" }, { n: 5, s: "◆", l: "حرف بعين واحدة" }],
    strip: ["◐ الاستراتيجية قبل الشكل", "◎ طباعة وشاشة مع بعض", "✦ الذكاء الاصطناعي قلم، والعين هي الحكم"],
    chips: [{ t: "★ هوية براند", s: "لوجو + سيستم" }, { t: "◐ لوب ذكاء اصطناعي", s: "مشاهد سينمائية" }, { t: "✂ باترون", s: "جاهز للقص والخياطة" }],
    fig: "شكل ٠١ — المصمم", fig2: "معاذ • ١٥ • ٢٠٢٧",
    marq: ["هويات براند", "أنظمة سوشيال", "عوالم ذكاء اصطناعي", "برنتات متكررة", "إيديتوريال", "تغليف"]
  },
  strip: { label: "من الأرشيف — شغل حقيقي", names: ["إيكوال بيري ×٣", "ستوديو شودوي", "مونستر — تجريبي", "نسكافيه — كونسبت"] },
  mani: {
    label: "٠١ — البيان / ليه أنا", lead: "٣ سنين شغل يومي علّموني كده:",
    words: "الديزاين الكويس مش زينة. هو نظام له أخلاق — تايب يتنفس، ولون يفتكر، وجريد صارمة كفاية عشان تتكسر بجمال.".split(" "),
    minis: [
      { b: "◐ منتبه", p: "مفيش حاجة بتطلع مبكسلة أو خارج الجريد. براجع مرتين وبسلّم مرة." },
      { b: "◎ منظم", p: "كل كيت بييجي معاها قواعد — عشان أي حد يعرف ينشر من غير ما يبوظ البراند." },
      { b: "♡ عين ثنائية اللغة", p: "تركيبات عربي وإنجليزي بتحترم الخطين بجد." },
      { b: "✦ هجين الأتيليه", p: "جرافيك + باترون ملابس. مصممين قليلين بيعرفوا يقصوا قماش. أنا بعرف." }
    ]
  },
  work: {
    label: "٠٢ — الأرشيف / شغل قديم", t1: "فهرس،", t2: "مش سلايدر.",
    desc: "قطعة من على المكتب — سيستم سكين كير من ٣ فليفرز، إعلانين تجريبيين، وتشويق فاشون. دوس على أي صف عشان تشوف القطعة كاملة.",
    total: "الإجمالي", in: "في", filters: ["الكل", "سكين كير", "تجريبي", "فاشون"],
    use: "عايز نفس الستايل →", close: "اقفل", empty: "لسه مفيش هنا — شغل قديم جاي.",
    role: "الدور", roleV: "فكرة → ديزاين → تسليم، لوحدي.", stack: "العدة", stackV: "فوتوشوب + ذكاء اصطناعي + تصدير جاهز للطباعة.",
    out: "النتيجة", outV: "اتسلّم واتنشر واتطلب تاني.", before: "قبل/بعد", mock: "موكب", src: "ملفات المصدر",
    drop: "حط صورتك في", slots: " وهتركب في نفس الفريم ده.", site: "moazhussein.work"
  },
  inter: {
    label: "استراحة — ذكاء اصطناعي + ذاكرة", h1: "الدهبي بيحب", h2: "الضلمة.",
    p: "كرسي في غيط. تليفزيون مليان وش. بعيد بناء مشاهد نص فاكرها بالذكاء الاصطناعي والتحبيب والدهبي — وبعدين أعلّقها على براندات وأغلفة وهدوم.",
    c1: "شوف إيكوال بيري →", c2: "اطلب عالم خاص بيك"
  },
  svc: {
    label: "٠٣ — شغلي / ٥ حرف", t1: "أنا بعمل ", t2: "إيه.", tag: "٥ حرف",
    items: [
      { t: "ديزاين سوشيال ومحتوى", d: "كاروسيلات وأغلفة وإعلانات توقف الصباع. الخطاف في ٠.٨ ثانية. أنظمة عربي وإنجليزي بقوالب تقدر تنشر بيها كل يوم.", tags: ["كاروسيل", "إعلانات", "كيت", "ثامنيل"] },
      { t: "هوية براند وإخراج", d: "لوجو وألوان وتايب وإخراج فني. براندات صغيرة عايزة تبان كبيرة. ومعاها صفحة قواعد واحدة.", tags: ["لوجو", "ألوان", "قواعد"] },
      { t: "فيجوالز ذكاء اصطناعي", d: "مشاهد أساسية سينمائية وخلفيات. برومبت → تنقية → ريتاتش في الفوتوشوب. من غير شكل البلاستيك.", tags: ["مشاهد أساسية", "عوالم", "ريتاتش"] },
      { t: "حكي بالصور", d: "سيكوينس إطلاق: تشويق → كشف → إثبات. معمول للدروبات والكولكشنز.", tags: ["تشويق", "سيكوينس"] },
      { t: "فاشون وباترون", d: "ميزتي الظالمة. سكتش → باترون → برنت جاهز للطباعة. جرافيك هدوم يتخيّط صح بجد.", tags: ["باترون", "برنت", "تك باك"] }
    ]
  },
  method: {
    label: "٠٤ — المنهجية / اسحب →", t1: "أربع خطوات، ", t2: "من غير عك.", drag: "اسحب أفقي →",
    steps: [
      { t: "تنقيب", d: "مكالمة ١٥ دقيقة + ٥ أسئلة سريعة. بذاكر المنافسين. وبتوافق على الاتجاه قبل أي بكسل." },
      { t: "بلوبرنت", d: "مودبورد واحدة وطريقين: آمن وجريء. الألوان والتايب والجو بيتقفلوا في يوم." },
      { t: "بناء", d: "مسودات بمحتوى حقيقي ومعاينة يومية على واتساب. جولتين مراجعة، مظبوطين." },
      { t: "إطلاق", d: "نهائي + سورس + موكبس + ورقة استخدام. وبفضل معاك يوم الإطلاق لأي تظبيط." }
    ],
    phase: "مرحلة", fixed: "سعر ثابت", yourT: "دورك", yourD: "قولي الديدلاين. وهقولك بصراحة لو أقدر أخلص قبله.", avail: "شوف المواعيد"
  },
  atelier: {
    label: "٠٥ — ميزة الأتيليه / الفاشون", a1: "مصممين كتير ", a2: "ميعرفوش يقصوا قماش.", a3: "أنا بعرف.",
    p: "كورسات باترون وخياطة عملية، فوق سنين في الفوتوشوب — فجرافيك الهدوم بتاعي مش حلو بس، ده يتخيّط. حردة الرقبة ومقاس التكرار والنزيف للسبلميشن: متظبطين.",
    chip: "سكتش → باترون → طباعة", c1: "اطلب شغل هدوم →", c2: "شوف الأرشيف →",
    ptag: "برنت / دراسة", reptile: "بلاطة مكررة ٤٠×٤٠", ph: "دراسة باترون"
  },
  journey: {
    label: "الرحلة — لحد دلوقتي", t: "صغير، بس بيسلّم.",
    jobs: [
      { h: "مصمم جرافيك حر — ٢٠٢٣ → دلوقتي", s: "هويات • سوشيال • طباعة", ul: ["+٨٠ تسليمة: لوجوهات ومنيوهات وكيتات وإعلانات لمحلات وصناع محتوى", "هويات صغيرة بقوالب العملا بيعيدوا استخدامها", "مشهور بالرد السريع وتسليم الملفات نضيفة"] },
      { h: "Picture Studio Film — مساعد ديزاين ومونتاج", s: "تفكير سينما للصور الثابتة", p: "مساعدة في التجهيز وصور الاستمرارية وقص التشويقات. اتعلمت الإيقاع اللي بستخدمه دلوقتي في الكاروسيلات.", ph: "[ضيف اسم المخرج / التكريم المظبوط]" },
      { h: "تدريب وكورسات", s: "بتعلم على طول", p: "كورسات ديزاين أزياء وباترون، فوتوشوب متقدم، وشغل فيجوالز بالذكاء الاصطناعي — جنب المدرسة.", ph: "[ضيف أسماء المدارس / الشهادات]" }
    ],
    stackT: "العدة — بشتغل بإيه", stackSub: "الأداة / المستوى",
    tools: [["فوتوشوب", 92], ["إليستريتور", 80], ["فيجما / كانفا", 85], ["ميدجورني / فايرفلاي", 88], ["بريميير / كاب كت", 80], ["رسم باترون", 78]],
    honest: "مستويات صريحة — ١٠٠٪ = أدرّسها. ٦٠٪ = بسلّم بيها بس ببطء.",
    formats: "PSD • AI • FIG • PDF • MP4", aren: "عربي + إنجليزي"
  },
  testi: {
    label: "ملاحظات من على المكتب", t1: "يوميات شغل،", t2: "مش ريفيوهات.", tag: "★ العملية بصراحة",
    items: [
      { q: "سيروم الأزرق خد أطول وقت — مطابقة ٤٠+ ورقة لنفس أزرق الإزازة بالظبط. استاهل.", n: "إيكوال بيري — بلو" },
      { q: "البينك نفس جريد الأزرق بس بجلد جديد. دي الحيلة كلها: السيستم يكسب.", n: "إيكوال بيري — بلاش" },
      { q: "مونستر كان دراسة مش عميل. أعدت بناء الرشة عشان أتعلم دمج المنتجات.", n: "مونستر زيرو — تجريبي" }
    ]
  },
  faq: {
    label: "قبل ما تسأل", t1: "أسئلة، ", t2: "متجاوبة.",
    items: [
      { q: "بسرعة قد إيه؟ محتاجه الأسبوع ده.", a: "كيت سوشيال: ٣–٥ أيام. هوية: ١٠–١٤ يوم. المستعجل ممكن لو المكانين بتوع الشهر سامحين — اسأل واتساب الأول وأنا هرد بصراحة." },
      { q: "هستلم إيه في الآخر؟", a: "تصديرات نهائية + ملفات المصدر مترتبة + ورقة استخدام صفحة واحدة + موكبس. مفيش ملفات مقفولة." },
      { q: "كام مراجعة؟", a: "جولتين كاملين في كل مرحلة ضمن السعر. أي جولة زيادة بحساب صغير ومتفق عليه من الأول." },
      { q: "ذكاء اصطناعي ولا شغل إيد؟", a: "الاتنين. ذكاء اصطناعي للأفكار والعوالم والخلفيات؛ وإيد بني آدم للتايب والترتيب واللون والذوق. والباترون مرسوم صح — يتخيّط." }
    ]
  },
  contact: {
    label: "٠٦ — سلام / ابدأ مشروع", g1: "قول ", g2: "سلام.",
    sub: "برد خلال ٢٤ ساعة — بعد المدرسة (بتوقيت القاهرة). سعر ثابت قبل ما نبدأ.",
    steps: [{ b: "خطوة ١ — بريف", p: "ابعت فقرة + ديدلاين. ٣٠ ثانية." }, { b: "خطوة ٢ — سعر", p: "سعر ثابت + معاد خلال ٢٤ ساعة. من غير ضباب." }, { b: "خطوة ٣ — تسليم", p: "مسودات واتساب، ونهائي + سورس + دليل." }],
    direct: "مباشر", sharp: "خلينا نعمله حاد.", fastest: "◉ واتساب — أسرع", replace: "[غيّر]", avail: "● متاح دلوقتي — مكانين",
    brief: "بريف — ٣٠ ثانية", name: "الاسم", namePh: "اسمك", reach: "أوصلك على", reachPh: "إيميل / واتساب",
    need: "محتاج", needs: ["كيت سوشيال", "براند", "فيجوالز ذكاء اصطناعي", "فاشون / برنت"], budget: "الميزانية",
    budgets: ["$100 – $300", "$300 – $800", "$800+"], msg: "المشروع في فقرة", msgPh: "إيه وإمتى ولينكات عاجباك…",
    send: "✦ ابعت البريف →", sent: "بفتح الإيميل عندك — شكرًا!", mail: "hello@moazhussein.design"
  },
  footer: { r: "© 2027 معاذ حسين — أتيليه نوار. نفس الدهبي، قصّة جديدة.", built: "اتصمم بالنور في الضلمة" }
};

const LangCtx = createContext({ lang: "en", d: EN, toggle: () => {} });
export const useLang = () => useContext(LangCtx);

export function LangProvider({ children }) {
  const [lang, setLang] = useState("en");
  useEffect(() => {
    try {
      const s = localStorage.getItem("mh-lang");
      if (s === "ar" || s === "en") setLang(s);
    } catch {}
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang === "ar" ? "ar" : "en";
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    try { localStorage.setItem("mh-lang", lang); } catch {}
  }, [lang]);
  const d = lang === "ar" ? AR : EN;
  return <LangCtx.Provider value={{ lang, d, toggle: () => setLang((l) => (l === "en" ? "ar" : "en")) }}>{children}</LangCtx.Provider>;
}

// project catalogue stays language-neutral for titles; UI strings come from dict
export const projects = [
  { id: "01", title: "Monster Zero — Spec Ad", cat: "Spec Ad / Product Poster", arCat: "إعلان تجريبي / بوستر منتج", year: "2026", img: "/work/01.jpg", meta: "Layout study • ice + splash compositing", arMeta: "دراسة تخطيط • دمج تلج ورش", note: "Rebuilt the key visual as a study — same energy, tighter type lockup.", arNote: "أعدت بناء المشهد كدراسة — نفس الطاقة، بلوك تايب أشد." },
  { id: "02", title: "Eqqual Berry — Blue Flow", cat: "Skincare Campaign / Artwork", arCat: "حملة سكين كير / تصميم", year: "2026", img: "/work/02.webp", meta: "Flavor 01 • leaf + water compositing", arMeta: "فليفر ٠١ • دمج ورق وميه", note: "Flavor one of three. Matched the bottle blue across 40+ leaf cutouts and a watercolor wash.", arNote: "أول فليفر من تلاتة. طابقت أزرق الإزازة في ٤٠+ ورقة مقصوصة وغسيل ألوان ميه." },
  { id: "03", title: "Eqqual Berry — Blush", cat: "Skincare Campaign / Artwork", arCat: "حملة سكين كير / تصميم", year: "2026", img: "/work/03.webp", meta: "Flavor 02 • cherry-blossom system", arMeta: "فليفر ٠٢ • سيستم زهرة الكرز", note: "Same grid as Blue, re-skinned in cherry pink. Systems beat one-offs.", arNote: "نفس جريد الأزرق بس بجلد بينك. السيستم بيكسب القطعة الواحدة." },
  { id: "04", title: "Nescafé Gold — Concept", cat: "Spec Ad / Coffee", arCat: "إعلان تجريبي / قهوة", year: "2025", img: "/work/04.webp", meta: "Luxury podium • powder burst", arMeta: "منصة فاخرة • انفجار بودرة", note: "Nescafé Gold staged like jewelry — powder burst, wood podium, beige light.", arNote: "نسكافيه جولد متقدم زي المجوهرات — انفجار بودرة ومنصة خشب ونور بيج." },
  { id: "05", title: "Studio Shodwe — New Style", cat: "Fashion Poster / Drop Teaser", arCat: "بوستر فاشون / تشويق", year: "2026", img: "/work/05.jpg", meta: "Teaser • giant type + cutout", arMeta: "تشويقي • تايب عملاق", note: "Drop teaser for a studio: giant condensed type, browser chrome, red leather.", arNote: "تشويق دروب لاستوديو: تايب مكثف عملاق وفريم متصفح وجاكيت أحمر." },
  { id: "06", title: "Eqqual Berry — Aloe Calm", cat: "Skincare Campaign / Artwork", arCat: "حملة سكين كير / تصميم", year: "2026", img: "/work/06.webp", meta: "Flavor 03 • green monochrome", arMeta: "فليفر ٠٣ • أحادي أخضر", note: "Third flavor. Full green monochrome — bottle, leaves and light in one family.", arNote: "تالت فليفر. أحادي أخضر كامل — الإزازة والورق والنور عيلة واحدة." }
];
