// Task 1: Image Gallery JavaScript — Ayesha Iqbal CodeAlpha Task

// Helper function to create clean inline SVG placeholder cards if external image fails
function getSvgFallbackUrl(title, category) {
  const cleanTitle = (title || "Gallery Photo").replace(/"/g, '&quot;');
  const cleanCat = (category || "Showcase").toUpperCase();
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
    <rect width="800" height="600" fill="#1e293b"/>
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#6366f1"/>
        <stop offset="100%" stop-color="#ec4899"/>
      </linearGradient>
    </defs>
    <rect width="800" height="600" fill="url(#g)" opacity="0.5"/>
    <circle cx="400" cy="250" r="80" fill="#ffffff" opacity="0.1"/>
    <path d="M350 280 L400 210 L450 280 Z" fill="#ffffff" opacity="0.3"/>
    <text x="50%" y="68%" dominant-baseline="middle" text-anchor="middle" fill="#ffffff" font-family="system-ui, sans-serif" font-size="28" font-weight="700">${cleanTitle}</text>
    <text x="50%" y="78%" dominant-baseline="middle" text-anchor="middle" fill="#a5b4fc" font-family="system-ui, sans-serif" font-size="16" font-weight="600" letter-spacing="2">${cleanCat}</text>
  </svg>`;
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

// Preloaded Gallery Dataset — 30 High-Definition Images across 6 Categories
const defaultImages = [
  {
    id: 1,
    title: "Misty Mountain Peaks",
    category: "nature",
    url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 2,
    title: "Modern Glass Skyscraper",
    category: "architecture",
    url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 3,
    title: "Futuristic Cyber Circuit",
    category: "technology",
    url: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 4,
    title: "Fluid Acrylic Wave",
    category: "art",
    url: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 5,
    title: "Emerald Forest Path",
    category: "nature",
    url: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 6,
    title: "Gothic Arch Bridge",
    category: "architecture",
    url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 7,
    title: "Neon Cyberpunk Workstation",
    category: "technology",
    url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 8,
    title: "Geometric Color Burst",
    category: "art",
    url: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 9,
    title: "Tokyo Neon Alleyway",
    category: "urban",
    url: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 10,
    title: "Snow Leopard in Blizzard",
    category: "wildlife",
    url: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 11,
    title: "Autumn Lake Reflection",
    category: "nature",
    url: "https://images.unsplash.com/photo-1476514525535-ce74f45814ce?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 12,
    title: "Spiral Concrete Staircase",
    category: "architecture",
    url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 13,
    title: "Quantum Server Core",
    category: "technology",
    url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 14,
    title: "Abstract Neon Prism",
    category: "art",
    url: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 15,
    title: "New York Skyline Dusk",
    category: "urban",
    url: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 16,
    title: "Bengal Tiger Gaze",
    category: "wildlife",
    url: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 17,
    title: "Northern Lights Aurora",
    category: "nature",
    url: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 18,
    title: "Futuristic Glass Dome",
    category: "architecture",
    url: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 19,
    title: "Virtual Reality Workspace",
    category: "technology",
    url: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 20,
    title: "Golden Oil Swirls",
    category: "art",
    url: "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 21,
    title: "London Bridge Fog",
    category: "urban",
    url: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 22,
    title: "Hummingbird in Flight",
    category: "wildlife",
    url: "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 23,
    title: "Yosemite Waterfall Mist",
    category: "nature",
    url: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 24,
    title: "Cybernetic Fiber Optics",
    category: "technology",
    url: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 25,
    title: "Tropical Paradise Island",
    category: "nature",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 26,
    title: "Ancient Greek Temple",
    category: "architecture",
    url: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 27,
    title: "Deep Space Nebula",
    category: "technology",
    url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 28,
    title: "Vibrant Watercolor Canvas",
    category: "art",
    url: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 29,
    title: "Hong Kong Skyscraper Canyon",
    category: "urban",
    url: "https://images.unsplash.com/photo-1518599800720-6d43bc20d750?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 30,
    title: "Majestic African Lion",
    category: "wildlife",
    url: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=1200&q=80"
  }
];

// Load Images from localStorage for permanent storage
function loadStoredImages() {
  const stored = localStorage.getItem("ayesha_gallery_images_v3");
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    } catch (e) {
      console.error("Error loading gallery from localStorage:", e);
    }
  }
  localStorage.setItem("ayesha_gallery_images_v3", JSON.stringify(defaultImages));
  return [...defaultImages];
}

function saveImagesToStorage(images) {
  try {
    localStorage.setItem("ayesha_gallery_images_v3", JSON.stringify(images));
  } catch (e) {
    console.warn("Gallery storage limit:", e);
  }
}

let imagesData = loadStoredImages();
let currentFilteredImages = [...imagesData];
let currentLightboxIndex = 0;

// DOM Elements
const galleryGrid = document.getElementById("galleryGrid");
const searchInput = document.getElementById("searchInput");
const filterBtns = document.querySelectorAll(".filter-btn");
const noResults = document.getElementById("noResults");

// Add Image Modal Elements
const openAddModalBtn = document.getElementById("openAddModalBtn");
const closeAddModalBtn = document.getElementById("closeAddModalBtn");
const cancelAddBtn = document.getElementById("cancelAddBtn");
const addImageModal = document.getElementById("addImageModal");
const addImageForm = document.getElementById("addImageForm");
const presetPills = document.querySelectorAll(".preset-pill");
const toastContainer = document.getElementById("toastContainer");

// Lightbox Elements
const lightboxModal = document.getElementById("lightboxModal");
const lightboxOverlay = document.getElementById("lightboxOverlay");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxTitle = document.getElementById("lightboxTitle");
const lightboxCategory = document.getElementById("lightboxCategory");
const lightboxCounter = document.getElementById("lightboxCounter");
const closeBtn = document.getElementById("closeBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Attach multi-tier fallback handler to image elements
function attachImgFallback(imgEl, title, category, id) {
  imgEl.onerror = function() {
    this.onerror = function() {
      // SVG Dynamic Card Fallback
      this.src = getSvgFallbackUrl(title, category);
    };
    // Picsum CDN Fallback
    this.src = `https://picsum.photos/id/${(id * 13) % 1000 + 10}/800/600`;
  };
}

// Render Gallery Cards
function renderGallery(images) {
  galleryGrid.innerHTML = "";
  
  if (images.length === 0) {
    noResults.style.display = "block";
    return;
  } else {
    noResults.style.display = "none";
  }

  images.forEach((img, index) => {
    const card = document.createElement("div");
    card.className = "gallery-card";
    card.setAttribute("data-id", img.id);

    const fallbackSvg = getSvgFallbackUrl(img.title, img.category);
    const initialUrl = img.url || fallbackSvg;

    card.innerHTML = `
      <div class="img-wrapper">
        <img id="gallery-img-${img.id}" src="${initialUrl}" alt="${img.title}" loading="lazy">
        <div class="overlay">
          <span class="overlay-tag">${img.category}</span>
          <h3 class="overlay-title">${img.title}</h3>
          <div class="overlay-icon"><i class="fa-solid fa-expand"></i></div>
        </div>
      </div>
    `;

    galleryGrid.appendChild(card);

    const imgEl = card.querySelector("img");
    attachImgFallback(imgEl, img.title, img.category, img.id);

    card.addEventListener("click", () => openLightbox(index));
  });
}

// Filter Images
function filterGallery() {
  const activeBtn = document.querySelector(".filter-btn.active");
  const activeCategory = activeBtn ? activeBtn.getAttribute("data-category") : "all";
  const searchQuery = searchInput.value.toLowerCase().trim();

  currentFilteredImages = imagesData.filter(img => {
    const matchesCategory = activeCategory === "all" || img.category === activeCategory;
    const matchesSearch = img.title.toLowerCase().includes(searchQuery) || img.category.toLowerCase().includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  renderGallery(currentFilteredImages);
}

// Category Button Event Handlers
filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    filterGallery();
  });
});

// Search Input Listener
searchInput.addEventListener("input", filterGallery);

// Modal Show & Hide
function openAddModal() {
  addImageModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeAddModal() {
  addImageModal.classList.remove("active");
  document.body.style.overflow = "auto";
  addImageForm.reset();
}

openAddModalBtn.addEventListener("click", openAddModal);
closeAddModalBtn.addEventListener("click", closeAddModal);
cancelAddBtn.addEventListener("click", closeAddModal);

addImageModal.addEventListener("click", (e) => {
  if (e.target === addImageModal) closeAddModal();
});

// Preset Sample Pill Handler
presetPills.forEach(pill => {
  pill.addEventListener("click", () => {
    const title = pill.getAttribute("data-title");
    const cat = pill.getAttribute("data-cat") || pill.getAttribute("data-category");
    const url = pill.getAttribute("data-url");
    
    if (document.getElementById("imgTitle")) document.getElementById("imgTitle").value = title || "";
    if (document.getElementById("imgCategory")) document.getElementById("imgCategory").value = cat || "nature";
    if (document.getElementById("imgUrl")) document.getElementById("imgUrl").value = url || "";
  });
});

// Add New Image Form Submit Handler (Supports File Uploads & URLs!)
addImageForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const titleInput = document.getElementById("imgTitle");
  const categorySelect = document.getElementById("imgCategory");
  const fileInput = document.getElementById("imgFile");
  const urlInput = document.getElementById("imgUrl");

  const title = titleInput ? titleInput.value.trim() : "";
  const category = categorySelect ? categorySelect.value : "nature";

  if (!title || !category) return;

  function createAndSaveImage(finalUrl) {
    const newImage = {
      id: Date.now(),
      title: title,
      category: category,
      url: finalUrl
    };

    imagesData.unshift(newImage);
    saveImagesToStorage(imagesData);

    closeAddModal();
    
    // Reset filters to show all images including newly added
    filterBtns.forEach(b => b.classList.remove("active"));
    const allFilterBtn = document.querySelector('.filter-btn[data-category="all"]');
    if (allFilterBtn) allFilterBtn.classList.add("active");
    if (searchInput) searchInput.value = "";

    filterGallery();
    showToast(`"${title}" added to gallery permanently!`);
  }

  if (fileInput && fileInput.files && fileInput.files[0]) {
    const file = fileInput.files[0];
    const reader = new FileReader();
    reader.onload = function(evt) {
      createAndSaveImage(evt.target.result); // Permanent Base64 Data URL
    };
    reader.readAsDataURL(file);
  } else if (urlInput && urlInput.value.trim()) {
    createAndSaveImage(urlInput.value.trim());
  } else {
    createAndSaveImage(getSvgFallbackUrl(title, category));
  }
});

// Toast Notification System
function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${message}</span>`;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("show");
  }, 10);

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Lightbox Open & Navigation
function openLightbox(index) {
  if (currentFilteredImages.length === 0) return;
  currentLightboxIndex = (index + currentFilteredImages.length) % currentFilteredImages.length;
  updateLightboxContent();

  lightboxModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function updateLightboxContent() {
  const img = currentFilteredImages[currentLightboxIndex];
  lightboxImg.src = img.url;
  attachImgFallback(lightboxImg, img.title, img.category, img.id);

  lightboxTitle.textContent = img.title;
  lightboxCategory.textContent = img.category;
  lightboxCounter.textContent = `${currentLightboxIndex + 1} of ${currentFilteredImages.length}`;
}

function closeLightbox() {
  lightboxModal.classList.remove("active");
  document.body.style.overflow = "auto";
}

function showPrevLightboxImage() {
  currentLightboxIndex = (currentLightboxIndex - 1 + currentFilteredImages.length) % currentFilteredImages.length;
  updateLightboxContent();
}

function showNextLightboxImage() {
  currentLightboxIndex = (currentLightboxIndex + 1) % currentFilteredImages.length;
  updateLightboxContent();
}

// Lightbox Event Listeners
closeBtn.addEventListener("click", closeLightbox);
lightboxOverlay.addEventListener("click", closeLightbox);
prevBtn.addEventListener("click", showPrevLightboxImage);
nextBtn.addEventListener("click", showNextLightboxImage);

// Keyboard Navigation
document.addEventListener("keydown", (e) => {
  if (addImageModal.classList.contains("active")) {
    if (e.key === "Escape") closeAddModal();
    return;
  }

  if (lightboxModal.classList.contains("active")) {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") showPrevLightboxImage();
    if (e.key === "ArrowRight") showNextLightboxImage();
  }
});

// Initialize Gallery
filterGallery();
