/* ==========================================================================
   Matamis — interactions + recipe data
   ========================================================================== */

// --- Recipe data (researched from trusted Filipino kitchens) ---
const RECIPES = [
  {
    id: "leche-flan-classic",
    dessert: "Leche Flan",
    type: "Traditional",
    name: "Classic Leche Flan",
    category: "Custard · Crème Caramel",
    region: "Nationwide — Spanish colonial influence",
    difficulty: "Medium",
    prep: "15 min",
    cook: "50–60 min",
    servings: "12",
    image: "images/leche-flan-classic.webp",
    ingredients: [
      "9 tbsp granulated sugar (for caramel)",
      "12 large egg yolks",
      "1 can (14 oz) sweetened condensed milk",
      "1 can (12 oz) evaporated milk",
      "1 tsp vanilla extract (optional)",
      "Calamansi or lime zest (optional)",
    ],
    steps: [
      "Preheat the oven to 375°F (190°C).",
      "Place 3 tbsp sugar in each of 3 llanera molds. Set over low heat, swirling with tongs, until the sugar melts into a golden caramel; tilt to coat evenly and let harden.",
      "In a bowl, combine the egg yolks and condensed milk; stir to combine.",
      "Add the evaporated milk, stirring gently in a circular motion until blended. Add vanilla or zest if using.",
      "Strain the mixture through a cheesecloth or fine-mesh sieve to remove stray egg whites.",
      "Pour into the prepared llaneras and cover tightly with foil.",
      "Arrange the llaneras in a baking dish with about 1 inch of water (bain-marie).",
      "Bake 50–60 minutes, until a toothpick inserted in the center comes out clean.",
      "Cool, then refrigerate to fully set.",
      "To serve, invert onto a plate so the caramel runs over the top.",
    ],
    notes: "Bake in a water bath for a velvety texture; stir in one direction and strain to avoid air bubbles. Don't overcook — the custard continues to set as it chills.",
    source: "https://www.kawalingpinoy.com/leche-flan/",
  },
  {
    id: "ube-leche-flan",
    dessert: "Leche Flan",
    type: "Modern",
    name: "Ube Leche Flan",
    category: "Custard · Fusion",
    region: "Modern fusion — nationwide trend",
    difficulty: "Easy",
    prep: "25 min",
    cook: "50–65 min",
    servings: "6",
    image: "images/ube-leche-flan.webp",
    ingredients: [
      "Caramel: ½ cup sugar, 2 tbsp water, ½ tsp lemon juice",
      "Custard: 4 large eggs, ½ cup condensed milk, 1 cup whole/evaporated milk, 1 tsp vanilla",
      "Ube layer: ¾ cup fresh ube (peeled & cubed), ¼ cup condensed milk, ¼ cup coconut milk, 1 egg, 1 tbsp melted butter, ½ tsp ube extract",
    ],
    steps: [
      "Make the caramel: combine sugar, water, and lemon juice; cook over medium heat without stirring until deep amber; pour into the mold and swirl to coat.",
      "Flan layer: gently whisk the eggs (minimal bubbles), add condensed milk, milk, and vanilla; strain through a sieve.",
      "Ube layer: soften the ube (microwave 5–7 min with a splash of water, or steam), then blend with condensed milk, coconut milk, egg, butter, and ube extract until smooth.",
      "Pour the flan mixture over the set caramel, then slowly spoon the ube layer on top (some mixing is fine — it creates a marbled effect).",
      "Preheat the oven to 325°F (160°C). Place the mold in a larger dish with hot water halfway up (water bath) and cover loosely with foil.",
      "Bake 50–65 minutes until just set (the center should jiggle slightly).",
      "Cool ~1 hour at room temperature, then refrigerate 4+ hours or overnight.",
      "Run a knife around the edges, flip onto a plate, and serve chilled.",
    ],
    notes: "Oven-baked (no steaming); use a water bath and strain to prevent cracks and eggy lumps. Can substitute ube halaya (reduce sugar) or ube powder.",
    source: "https://jenhdao.com/fresh-ube-flan/",
  },
  {
    id: "halo-halo-classic",
    dessert: "Halo-Halo",
    type: "Traditional",
    name: "Classic Halo-Halo",
    category: "Shaved ice · Assembly",
    region: "Nationwide — roots in Japanese kakigori",
    difficulty: "Medium",
    prep: "15 min",
    cook: "20 min",
    servings: "4",
    image: "images/halo-halo-classic.webp",
    ingredients: [
      "Minatamis na saging: 3 saba bananas, 1 cup water, ¾ cup brown sugar, ¼ tsp salt, ¼ tsp vanilla",
      "¼ cup small tapioca pearls (optional)",
      "1 (20 oz) can jackfruit in syrup",
      "Milk: ⅔ cup coconut milk, 3 tbsp evaporated milk, 3 tbsp condensed milk",
      "4 scoops coconut or ube ice cream",
      "½ cup macapuno (coconut sport strings)",
      "½ cup ube halaya",
      "1½ cups nata de coco",
      "4 cups shaved ice (plus more)",
    ],
    steps: [
      "Tapioca (optional): boil water, add pearls, and simmer until al dente (~7–8 min); drain.",
      "Minatamis na saging: bring water, brown sugar, and salt to a boil; add sliced bananas and simmer until tender and translucent (~5 min); stir in vanilla and tapioca; chill ~2 hours.",
      "Coarsely chop the jackfruit into bite-size pieces and return to the can with its syrup.",
      "Stir together the coconut milk, evaporated milk, and condensed milk.",
      "Layer each serving in a 16-oz glass: minatamis na saging, a scoop of ice cream, macapuno, ube halaya, jackfruit + syrup, nata de coco.",
      "Top generously with shaved ice and drizzle 3 tbsp of the milk mixture; add more ice to fill.",
      "Serve immediately with a long spoon — mix everything together before eating.",
    ],
    notes: "Mix-ins are flexible — common additions include sweet beans, corn, leche flan, mango, and sago. Texture contrast (creamy, chewy, gelatinous, crunchy) is what makes halo-halo work.",
    source: "https://www.thekitchn.com/halo-halo-recipe-23185201",
  },
  {
    id: "razons-halo-halo",
    dessert: "Halo-Halo",
    type: "Modern",
    name: "Razon's Halo-Halo",
    category: "Shaved ice · Restaurant-style",
    region: "Pampanga (Guagua) — famous chain",
    difficulty: "Easy",
    prep: "15 min",
    cook: "10 min",
    servings: "4",
    image: "images/razons-halo-halo.webp",
    ingredients: [
      "2 cups coco jam (coconut jam)",
      "⅓ cup water",
      "2 very ripe saba (or regular) bananas, diced small",
      "8 tbsp macapuno (sweet coconut strings)",
      "8 cups shaved ice",
      "1 cup evaporated milk",
      "1 llanera leche flan, sliced",
      "Calamansi rind (optional garnish)",
    ],
    steps: [
      "Caramelized bananas: combine the coco jam and water in a saucepan and bring to a boil over medium heat (~3 min).",
      "Turn off the heat, add the ripe bananas, and stir just to heat through (do not fully cook); transfer to a bowl to cool completely.",
      "Build each serving: 2 tbsp caramelized bananas, then 1 tbsp macapuno, then ~2 cups shaved ice.",
      "Pour evaporated milk generously over the ice (if it melts the ice, add more ice and more milk).",
      "Top with 3 slices of leche flan.",
      "Optional: grate calamansi rind over the flan for a flavor counterpoint. Serve immediately.",
    ],
    notes: "Razon's of Guagua (est. 1970s Pampanga) made its name on a deliberately minimalist halo-halo — just caramelized saba, macapuno, milk, and leche flan.",
    source: "https://rezelkealoha.com/razons-halo-halo/",
  },
  {
    id: "ube-halaya",
    dessert: "Ube Halaya",
    type: "Traditional",
    name: "Ube Halaya",
    category: "Kakanin · Purple yam jam",
    region: "Nationwide",
    difficulty: "Medium",
    prep: "15 min",
    cook: "1 hr 15 min",
    servings: "~3 cups",
    image: "images/ube-halaya.webp",
    ingredients: [
      "2.2 lbs fresh ube (purple yam)",
      "1 can (12 oz) evaporated milk",
      "½ cup packed brown sugar",
      "1 can (10–14 oz) sweetened condensed milk",
      "½ tsp salt",
      "¼ cup unsalted butter, cubed",
    ],
    steps: [
      "Cook the ube: cut into pot-fitting pieces, cover with water, and boil until fork-tender (~30 min).",
      "Cool ~10 minutes, then peel and mash with a fork or potato masher (or grate for a smoother, more traditional texture).",
      "In a large non-stick skillet over medium heat, stir the evaporated milk and brown sugar until the sugar dissolves.",
      "Add the mashed ube, condensed milk, and salt.",
      "Stir constantly (do not exceed medium heat) until the mixture thickens; add the butter at about the 20-minute mark and stir until melted.",
      "The jam is done when it holds its shape when you drag a spoon through the center (~30 min total).",
      "Optional: stir ~10 minutes more for a firmer, more traditional texture.",
      "Transfer to a heat-proof container, cool, and enjoy — it thickens further as it cools.",
    ],
    notes: "Grating the ube (traditional) removes more fiber strands. Frozen grated ube works but add 1 tsp ube extract for flavor. Keeps up to 1 week refrigerated, 3–4 weeks frozen.",
    source: "https://theunlikelybaker.com/ube-halaya-recipe-ube-jam/",
  },
  {
    id: "ube-basque-cheesecake",
    dessert: "Ube Halaya",
    type: "Modern",
    name: "Ube Basque Cheesecake",
    category: "Cheesecake · Fusion",
    region: "Modern fusion — Basque × Filipino ube",
    difficulty: "Medium",
    prep: "15 min",
    cook: "~1 hr",
    servings: "12",
    image: "images/ube-basque-cheesecake.webp",
    ingredients: [
      "48 oz (4 blocks) full-fat cream cheese, room temperature",
      "1½ cups granulated sugar",
      "6 large eggs, room temperature",
      "2¾ cups heavy cream, room temperature",
      "1 tsp salt",
      "4 tsp ube extract",
      "⅓ cup all-purpose flour",
    ],
    steps: [
      "Preheat the oven to 400°F (200°C). Line a 10-inch springform pan with 2 overlapping sheets of parchment, extending at least 2 inches above the rim.",
      "Beat the cream cheese and sugar on low-medium speed until very smooth with no lumps (2–3 min); scrape the bowl.",
      "Add the eggs one at a time on medium speed, blending each before the next (~15–20 sec each); scrape the bowl.",
      "Add the heavy cream, salt, and ube extract; beat on medium-low until combined (~1 min).",
      "Sift the flour over the mixture and beat on low until incorporated (15–20 sec).",
      "Scrape the bowl and beat until the batter is smooth and silky (10–15 sec).",
      "Pour the batter into the prepared pan; bake 45 minutes until the sides are set.",
      "Increase the oven to 500°F and bake 5–10 minutes more until the top develops a burnt, caramelized exterior.",
      "Cool slightly in the pan (it will deflate), then remove; once fully cool, peel away the parchment, slice, and serve.",
    ],
    notes: "No water bath, no crust, no cracks to worry about. The center should stay jiggly — don't over-bake. If the top is still pale, broil on high 1–2 minutes for the burnt look.",
    source: "https://theunlikelybaker.com/ube-basque-cheesecake/",
  },
];

// --- DOM helpers ---
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

// --- Render collection cards ---
function renderCards() {
  const grid = $("#collectionGrid");
  grid.innerHTML = "";
  RECIPES.forEach((r) => {
    const card = document.createElement("article");
    card.className = "card reveal";
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `${r.name} — ${r.type} recipe`);
    card.dataset.id = r.id;

    const modern = r.type === "Modern" ? " card__badge--modern" : "";
    card.innerHTML = `
      <div class="card__media">
        <img src="${r.image}" alt="${r.name}" loading="lazy" />
        <span class="card__badge${modern}">${r.type}</span>
      </div>
      <div class="card__body">
        <span class="card__cat">${r.dessert} · ${r.type}</span>
        <h3 class="card__title">${r.name}</h3>
        <div class="card__meta">
          <span>${r.difficulty}</span><span class="dot">·</span>
          <span>${r.cook}</span><span class="dot">·</span>
          <span>Serves ${r.servings}</span>
        </div>
      </div>
    `;
    card.addEventListener("click", () => openModal(r));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openModal(r);
      }
    });
    grid.appendChild(card);
  });
}

// --- Modal ---
const modal = $("#recipeModal");

function openModal(r) {
  $("#modalImage").src = r.image;
  $("#modalImage").alt = r.name;
  $("#modalBadge").textContent = r.type;
  $("#modalTitle").textContent = r.name;
  $("#modalRegion").textContent = r.region;

  $("#modalMeta").innerHTML = `
    <li><strong>Difficulty</strong>${r.difficulty}</li>
    <li><strong>Prep</strong>${r.prep}</li>
    <li><strong>Cook</strong>${r.cook}</li>
    <li><strong>Serves</strong>${r.servings}</li>
  `;

  $("#modalIngredients").innerHTML = r.ingredients
    .map((i) => `<li>${i}</li>`)
    .join("");

  $("#modalSteps").innerHTML = r.steps.map((s) => `<li>${s}</li>`).join("");

  $("#modalNotes").textContent = r.notes;
  const src = $("#modalSource");
  src.href = r.source;

  modal.hidden = false;
  document.body.style.overflow = "hidden";
  modal.querySelector(".modal__panel").scrollTop = 0;
  const focusTarget = $("#modalTitle");
  focusTarget.setAttribute("tabindex", "-1");
  focusTarget.focus();
}

function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = "";
  lastFocused?.focus?.();
}

let lastFocused = null;
document.addEventListener("click", (e) => {
  if (e.target.closest(".card")) {
    lastFocused = e.target.closest(".card");
  }
});
modal.addEventListener("click", (e) => {
  if (e.target.closest("[data-close]")) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.hidden) closeModal();
});

// --- Nav: scrolled state + mobile toggle ---
const nav = $("#nav");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 40);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

const navToggle = $("#navToggle");
navToggle.addEventListener("click", () => {
  const open = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!open));
  nav.classList.toggle("open", !open);
});
// Close mobile nav on link tap
$$(".nav__links a", nav).forEach((a) =>
  a.addEventListener("click", () => {
    navToggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("open");
  })
);

// --- Scroll reveal ---
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
const observeReveals = () =>
  $$(".reveal:not(.is-visible)").forEach((el) => revealObserver.observe(el));

// --- Footer year ---
$("#year").textContent = new Date().getFullYear();

// --- Init ---
renderCards();
observeReveals();
