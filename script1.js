// DATA DÙNG CHUNG
const data = {
  hs1: {
    name: "Nguyễn Văn A",
    img: "https://i.pravatar.cc/150?img=1",
    desc: "Lớp phó học tập – năng động, chăm chỉ"
  },
  gvcn1: {
    name: "Nguyễn Thị A",
    img: "https://i.pravatar.cc/150?img=11",
    desc: "Giáo viên chủ nhiệm – bộ môn Toán"
  },
  toan: {
    name: "GV Toán",
    img: "https://i.pravatar.cc/150?img=21",
    desc: "Giáo viên bộ môn Toán – chuyên môn cao"
  },
  img1: {
    name: "Đà Lạt 2024",
    img: "https://picsum.photos/500/400?random=1",
    desc: "Chuyến đi Đà Lạt - Kỷ niệm đáng nhớ nhất"
  },
  img2: {
    name: "Chuyến đi ngoại khóa",
    img: "https://picsum.photos/500/400?random=2",
    desc: "Các bạn học sinh tại điểm du lịch"
  },
  img3: {
    name: "Kỉ niệm tập thể",
    img: "https://picsum.photos/500/400?random=3",
    desc: "Lớp 12A1 - Gia đình to"
  },
  vid1: {
    name: "Video Đà Lạt",
    img: "https://picsum.photos/500/400?random=4",
    desc: "Video ghi lại những khoảnh khắc ở Đà Lạt"
  },
  vid2: {
    name: "Video lớp 12A1",
    img: "https://picsum.photos/500/400?random=5",
    desc: "Video giới thiệu lớp 12A1"
  },
  vid3: {
    name: "Tập thể video",
    img: "https://picsum.photos/500/400?random=6",
    desc: "Video tập thể của cả lớp"
  }
};

// ===================
// ANIMATION LOGIC
// ===================

const floatingContainer = document.getElementById('floating-container');

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function createCookies() {
  floatingContainer.innerHTML = '';
  const count = 12;
  for (let i = 0; i < count; i++) {
    const el = document.createElement('div');
    el.classList.add('cookie');
    const icons = ['🍪', '🍘', '🍩'];
    el.innerText = icons[Math.floor(Math.random() * icons.length)];
    el.style.left = random(0, 100) + 'vw';
    el.style.top = random(0, 100) + 'vh';
    el.style.animationDuration = random(6, 15) + 's';
    el.style.fontSize = random(20, 50) + 'px';
    floatingContainer.appendChild(el);
  }
}

function createStars() {
  floatingContainer.innerHTML = '';
  const count = 40;
  for (let i = 0; i < count; i++) {
    const el = document.createElement('div');
    el.classList.add('star');
    el.innerText = '✦';
    el.style.left = random(0, 100) + 'vw';
    el.style.top = random(0, 100) + 'vh';
    el.style.fontSize = random(10, 25) + 'px';
    el.style.animationDelay = random(0, 3) + 's';
    floatingContainer.appendChild(el);
  }
}

// ===================
// HOME & CLASS NAVIGATION
// ===================

function openClass(className) {
  console.log("openClass called with:", className);
  if (className === "12A1") {
    // Ẩn home section
    document.getElementById("homeSection").classList.remove("active");
    document.getElementById("classSection").classList.add("active");
    console.log("homeSection hidden, classSection shown");

    // Reset tất cả sections về ban đầu
    document.querySelectorAll('.section').forEach(section => {
      section.classList.remove('active');
    });

    // Hiện section students (section đầu tiên)
    document.getElementById("students").classList.add("active");
    console.log("students section activated");

    // Reset sidebar active item
    document.querySelectorAll('.menu-item').forEach(item => {
      item.classList.remove('active');
    });
    document.querySelector('.menu-item').classList.add('active');

    // Set currentClass
    localStorage.setItem("currentClass", "12A1");

    // Lần đầu vào lớp và chưa skip guide → hiện welcome screen
    if (localStorage.getItem("skipGuide") !== "true") {
      console.log("First time or guide not skipped - showing welcome");
      document.getElementById("welcome").style.display = "flex";
      localStorage.setItem("skipGuide", "false");
    } else {
      console.log("Guide already skipped - not showing welcome");
    }
  }
}

function goHome() {
  document.getElementById("homeSection").classList.add("active");
  document.getElementById("classSection").classList.remove("active");
  localStorage.removeItem("currentClass");
}

function showComingSoon() {
  const modal = document.getElementById("modal");
  document.getElementById("modal-img").style.display = "none";
  document.getElementById("modal-title").innerText = "⏰ Đang Cập Nhật";
  document.getElementById("modal-desc").innerText = "Lớp này sẽ sớm được kích hoạt. Vui lòng quay lại sau!";
  modal.style.display = "flex";
}

// ===================
// SECTION MANAGEMENT
// ===================

function showSection(id, el) {
  document.querySelectorAll('.section')
    .forEach(s => s.classList.remove('active'));

  document.querySelectorAll('.menu-item')
    .forEach(m => m.classList.remove('active'));

  document.getElementById(id).classList.add('active');
  el.classList.add('active');
}

// ===================
// MODAL FUNCTIONS
// ===================

function openModal(key) {
  const m = data[key];
  if (!m) return; // Prevent error if key not found
  document.getElementById('modal-img').src = m.img;
  document.getElementById('modal-title').innerText = m.name;
  document.getElementById('modal-desc').innerText = m.desc;
  document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

function openMemoryType(type) {
  // Ẩn section memories
  document.getElementById('memories').classList.remove('active');

  if (type === 'images') {
    document.getElementById('memoryImages').classList.add('active');
    document.getElementById('memoryVideos').classList.remove('active');
  } else if (type === 'videos') {
    document.getElementById('memoryVideos').classList.add('active');
    document.getElementById('memoryImages').classList.remove('active');
  }
}

function backToMemories() {
  document.getElementById('memories').classList.add('active');
  document.getElementById('memoryImages').classList.remove('active');
  document.getElementById('memoryVideos').classList.remove('active');
}

// ===================
// UI TOGGLES
// ===================

function toggleDarkMode() {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');

  if (isDark) {
    createStars();
  } else {
    createCookies();
  }
}

function toggleSearch() {
  const input = document.getElementById("searchInput");
  input.classList.toggle("active");
  input.focus();
}

// Function để lấy tất cả items có thể tìm kiếm từ section hiện tại
function getSearchableItems() {
  const activeSection = document.querySelector(".section.active");
  if (!activeSection) return [];

  const items = [];
  const cards = activeSection.querySelectorAll(".card:not(.add-card)");

  cards.forEach(card => {
    const text = card.innerText.trim();
    if (text) {
      items.push({
        text: text,
        element: card
      });
    }
  });

  return items;
}

// Function để hiển thị gợi ý autocomplete
function displaySuggestions(keyword) {
  const suggestionsContainer = document.getElementById("searchSuggestions");

  if (!keyword.trim()) {
    suggestionsContainer.classList.remove("active");
    suggestionsContainer.innerHTML = "";
    return;
  }

  const items = getSearchableItems();
  const filtered = items.filter(item =>
    item.text.toLowerCase().includes(keyword.toLowerCase())
  ).slice(0, 8); // Hiển thị tối đa 8 gợi ý

  if (filtered.length === 0) {
    suggestionsContainer.classList.remove("active");
    suggestionsContainer.innerHTML = "";
    return;
  }

  suggestionsContainer.innerHTML = filtered.map((item, index) => {
    const highlight = item.text.replace(
      new RegExp(`(${keyword})`, "gi"),
      "<span class='highlight'>$1</span>"
    );
    return `<li class="suggestion-item" data-index="${index}">${highlight}</li>`;
  }).join("");

  suggestionsContainer.classList.add("active");

  // Gắn event listener cho mỗi suggestion
  suggestionsContainer.querySelectorAll(".suggestion-item").forEach(item => {
    item.addEventListener("click", selectSuggestion);
    item.addEventListener("mouseover", highlightSuggestion);
  });
}

// Function để highlight gợi ý khi hover
function highlightSuggestion(e) {
  document.querySelectorAll(".suggestion-item").forEach(item => {
    item.classList.remove("selected");
  });
  e.target.classList.add("selected");
}

// Function để chọn gợi ý
function selectSuggestion(e) {
  const suggestion = e.target.textContent.replace(/\s+/g, " ");
  document.getElementById("searchInput").value = suggestion.trim();

  // Gọi filter để cập nhật hiển thị
  filterCards(suggestion.trim());

  // Ẩn suggestions
  document.getElementById("searchSuggestions").classList.remove("active");
}

// Function để lọc cards dựa trên keyword
function filterCards(keyword) {
  const activeSection = document.querySelector(".section.active");
  if (!activeSection) return;

  const cards = activeSection.querySelectorAll(".card:not(.add-card)");
  const lowerKeyword = keyword.toLowerCase();

  cards.forEach(card => {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(lowerKeyword) ? "block" : "none";
  });
}

// Function xử lý input (autocomplete)
function handleSearchInput() {
  const keyword = document.getElementById("searchInput").value;

  if (keyword.trim()) {
    displaySuggestions(keyword);
    filterCards(keyword);
  } else {
    // Nếu rỗng, hiển thị tất cả
    document.getElementById("searchSuggestions").classList.remove("active");
    const activeSection = document.querySelector(".section.active");
    if (activeSection) {
      activeSection.querySelectorAll(".card:not(.add-card)").forEach(card => {
        card.style.display = "block";
      });
    }
  }
}

// Function xử lý keyboard (arrow keys, enter)
function handleSearchKeydown(e) {
  const suggestionsContainer = document.getElementById("searchSuggestions");
  const items = suggestionsContainer.querySelectorAll(".suggestion-item");

  if (items.length === 0) return;

  let selectedIndex = -1;
  items.forEach((item, index) => {
    if (item.classList.contains("selected")) {
      selectedIndex = index;
    }
  });

  switch (e.key) {
    case "ArrowDown":
      e.preventDefault();
      const nextIndex = selectedIndex < items.length - 1 ? selectedIndex + 1 : 0;
      items[nextIndex].classList.add("selected");
      if (selectedIndex >= 0) items[selectedIndex].classList.remove("selected");
      break;

    case "ArrowUp":
      e.preventDefault();
      const prevIndex = selectedIndex > 0 ? selectedIndex - 1 : items.length - 1;
      items[prevIndex].classList.add("selected");
      if (selectedIndex >= 0) items[selectedIndex].classList.remove("selected");
      break;

    case "Enter":
      e.preventDefault();
      if (selectedIndex >= 0) {
        items[selectedIndex].click();
      }
      break;

    case "Escape":
      suggestionsContainer.classList.remove("active");
      document.getElementById("searchInput").value = "";
      handleSearchInput();
      break;
  }
}

// Old function for backward compatibility
function searchContent() {
  handleSearchInput();
}

// ===================
// GUIDE SYSTEM
// ===================

// ===== STATE =====
let guideStep = 0;

const guideSteps = [
  {
    el: ".top-bar",
    text: "Đây là thanh trợ năng: tìm kiếm, dark mode, hướng dẫn, home,... "
  },
  {
    el: ".sidebar",
    text: "Thanh danh mục: học sinh, giáo viên, kỷ niệm..."
  },
  {
    el: "#students",
    text: "Danh sách học sinh – click avatar để xem chi tiết."
  }
];

// ===== INIT =====
window.onload = () => {
  const homeSection = document.getElementById("homeSection");
  const classSection = document.getElementById("classSection");
  const welcome = document.getElementById("welcome");
  const guide = document.getElementById("guideOverlay");
  const finish = document.getElementById("finishGuide");

  welcome.style.display = "none";
  guide.style.display = "none";
  finish.style.display = "none";

  // Luôn hiển thị giao diện chính trước
  homeSection.classList.add("active");
  classSection.classList.remove("active");

  // Khởi tạo animation cookies
  createCookies();

  // Reset skipGuide khi load trang để lần đầu hiển thị welcome
  if (!localStorage.getItem("hasOpenedClass")) {
    localStorage.removeItem("skipGuide");
  }

  // Tạm thời: cho phép reset guide bằng cách gõ resetGuide() trong console
  window.resetGuide = () => {
    localStorage.clear();
    location.reload();
  };
};

// ===== WELCOME =====
function skipGuide() {
  localStorage.setItem("skipGuide", "true");
  document.getElementById("welcome").style.display = "none";
}

function startGuide() {
  localStorage.setItem("isGuiding", "true"); // ← THÊM

  document.body.classList.add("guide-active");
  document.getElementById("welcome").style.display = "none";
  document.getElementById("finishGuide").style.display = "none";
  document.getElementById("guideOverlay").style.display = "block";

  guideStep = 0;
  // Delay to ensure DOM updates after adding class
  setTimeout(() => showGuideStep(), 100);
}

// ===== GUIDE =====
function showGuideStep() {
  const step = guideSteps[guideStep];
  const target = document.querySelector(step.el);
  if (!target) return;

  const rect = target.getBoundingClientRect();

  const focus = document.querySelector(".guide-focus");
  focus.style.top = rect.top + "px";
  focus.style.left = rect.left + "px";
  focus.style.width = rect.width + "px";
  focus.style.height = rect.height + "px";

  const box = document.querySelector(".guide-box");

  // Positioning: prefer right side, fallback to left if not enough space
  let left = rect.right + 20;
  if (left + 260 > window.innerWidth) {
    left = Math.max(20, rect.left - 260); // Ensure not off-screen left
  }

  // Special positioning for top-bar: place near top-bar
  let boxTop;
  if (step.el === ".top-bar") {
    left = 20; // Left side
    boxTop = 60; // Near top-bar
  } else if (step.el === ".sidebar") {
    boxTop = rect.top - 20; // Slightly higher for sidebar, adjusted down 10px
  } else if (step.el === "#students") {
    boxTop = rect.top - 25; // Up 5px more
  }

  box.style.top = boxTop + "px";
  box.style.left = left + "px";

  document.getElementById("guideText").innerText = step.text;

  // Toggle top-bar visibility based on current step
  if (step.el === ".top-bar") {
    document.body.classList.add("top-bar-guide");
  } else {
    document.body.classList.remove("top-bar-guide");
  }

  const arrow = document.querySelector(".guide-arrow");
  const isLeft = left < rect.left;
  if (isLeft) {
    arrow.style.left = rect.left - 30 + "px";
    arrow.style.transform = "rotate(135deg)"; // Point right
  } else {
    arrow.style.left = rect.right + "px";
    arrow.style.transform = "rotate(-45deg)"; // Point left
  }
  arrow.style.top = rect.top + rect.height / 2 + "px";
}

// ===== FINISH =====
function finishGuide() {
  localStorage.removeItem("isGuiding");
  localStorage.setItem("skipGuide", "true");
  document.body.classList.remove("guide-active");
  document.getElementById("guideOverlay").style.display = "none";
  document.getElementById("finishGuide").style.display = "flex";
}

function closeFinish() {
  document.getElementById("finishGuide").style.display = "none";
}

function nextGuide() {
  guideStep++;

  if (guideStep >= guideSteps.length) {
    finishGuide();
    return;
  }

  showGuideStep();
}