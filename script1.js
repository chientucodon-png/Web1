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
  kn1: {
    name: "Đà Lạt 2024",
    img: "https://picsum.photos/300/300?2",
    desc: "Chuyến đi đáng nhớ nhất của cả lớp"
  },
  gallery1: {
    name: "Hình ảnh lớp",
    img: "https://picsum.photos/300/300",
    desc: "Ảnh kỷ niệm của lớp học"
  }
};

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

// ===================
// UI TOGGLES
// ===================

function toggleDarkMode() {
  document.body.classList.toggle('dark');
}

function toggleSearch() {
  const input = document.getElementById("searchInput");
  input.classList.toggle("active");
  input.focus();
}

function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('open');
}

function searchContent() {
  const keyword = document.getElementById("searchInput").value.toLowerCase();

  // Chỉ tìm trong section đang active
  const activeSection = document.querySelector(".section.active");
  if (!activeSection) return;

  const cards = activeSection.querySelectorAll(".card:not(.add-card)");

  cards.forEach(card => {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(keyword) ? "block" : "none";
  });
}

// ===================
// GUIDE SYSTEM
// ===================

// ===== STATE =====
let guideStep = 0;

const guideSteps = [
  {
    el: ".top-bar",
    text: "Đây là thanh trợ năng: tìm kiếm, dark mode, hướng dẫn."
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
  const welcome = document.getElementById("welcome");
  const guide = document.getElementById("guideOverlay");
  const finish = document.getElementById("finishGuide");

  welcome.style.display = "none";
  guide.style.display = "none";
  finish.style.display = "none";

  // Nếu đang guide → QUAY LẠI CHÀO (theo yêu cầu của bạn)
  if (localStorage.getItem("isGuiding") === "true") {
    localStorage.removeItem("isGuiding");
    welcome.style.display = "flex";
    return;
  }

  // Nếu chưa bỏ qua → hiện chào
  if (localStorage.getItem("skipGuide") !== "true") {
    welcome.style.display = "flex";
  }
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
  localStorage.removeItem("isGuiding"); // ← THÊM
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