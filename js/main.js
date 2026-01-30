// DATA DÙNG CHUNG
const data = {
    hs1: {
        name: "Nguyễn Văn A",
        img: "https://i.pravatar.cc/150?img=1",
        desc: "Lớp phó học tập – năng động, chăm chỉ"
    },
    hs2: {
        name: "Trần Thị B",
        img: "https://i.pravatar.cc/150?img=2",
        desc: "Lớp trưởng – trách nhiệm, thân thiện"
    },
    hs3: {
        name: "Lê Văn C",
        img: "https://i.pravatar.cc/150?img=3",
        desc: "Ủy viên văn thể – năng động, sáng tạo"
    },
    hs4: {
        name: "Phạm Thị D",
        img: "https://i.pravatar.cc/150?img=4",
        desc: "Ủy viên văn thư – tỉ mỉ, cẩn thận"
    },
    hs5: {
        name: "Hoàng Văn E",
        img: "https://i.pravatar.cc/150?img=5",
        desc: "Thành viên năng nổ – nhiệt tình, hòa đồng"
    },
    hs6: {
        name: "Đỗ Thị F",
        img: "https://i.pravatar.cc/150?img=6",
        desc: "Thành viên tích cực – chăm chỉ, ham học hỏi"
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
    gvbm2: {
        name: "GV Ngữ Văn",
        img: "https://i.pravatar.cc/150?img=22",
        desc: "Giáo viên bộ môn Ngữ Văn – tâm huyết"
    },
    gvbm3: {
        name: "GV Tiếng Anh",
        img: "https://i.pravatar.cc/150?img=23",
        desc: "Giáo viên bộ môn Tiếng Anh – tận tình"
    },
    gvbm4: {
        name: "GV Vật Lý",
        img: "https://i.pravatar.cc/150?img=24",
        desc: "Giáo viên bộ môn Vật Lý – sáng tạo"
    },
    gvbm5: {
        name: "GV Hóa Học",
        img: "https://i.pravatar.cc/150?img=25",
        desc: "Giáo viên bộ môn Hóa Học – nhiệt huyết"
    },
    gvbm6: {
        name: "GV Sinh Học",
        img: "https://i.pravatar.cc/150?img=26",
        desc: "Giáo viên bộ môn Sinh Học – chu đáo"
    },
    gvbm7: {
        name: "GV Lịch Sử",
        img: "https://i.pravatar.cc/150?img=27",
        desc: "Giáo viên bộ môn Lịch Sử – giàu kinh nghiệm"
    },
    gvbm8: {
        name: "GV Địa Lý",
        img: "https://i.pravatar.cc/150?img=28",
        desc: "Giáo viên bộ môn Địa Lý – tận tâm"
    },
    gvbm9: {
        name: "GV GDCD",
        img: "https://i.pravatar.cc/150?img=29",
        desc: "Giáo viên bộ môn GDCD – đạo đức"
    },
    gvbm10: {
        name: "GV Công Nghệ",
        img: "https://i.pravatar.cc/150?img=30",
        desc: "Giáo viên bộ môn Công Nghệ – hiện đại"
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
    floatingContainer.classList.remove('ready');
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
    // Thêm class ready để fade-in mượt mà
    requestAnimationFrame(() => {
        floatingContainer.classList.add('ready');
    });
}

function createStars() {
    floatingContainer.innerHTML = '';
    floatingContainer.classList.remove('ready');
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
    // Thêm class ready để fade-in mượt mà
    requestAnimationFrame(() => {
        floatingContainer.classList.add('ready');
    });
}

// ===================
// MUSIC PLAYER
// ===================

// 1. Danh sách nhạc
const playlist = [
    { title: "Nắng lung linh", url: "music/nanglunglinh.mp3" },
    { title: "Cốt truyện bi thương", url: "music/cottruyenbithuong.mp3" },
    { title: "Fireworks", url: "music/fireworksjp.mp3" }
];

let currentIdx = parseInt(localStorage.getItem('musicIdx')) || 0;
const audio = document.getElementById('bgMusic');
const playBtn = document.getElementById('playBtn');
const titleDisplay = document.getElementById('songTitle');
const seekBar = document.getElementById('seekBar');
const currentTimeDisplay = document.getElementById('currentTime');
const durationDisplay = document.getElementById('duration');

// Helper function to format time
function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// 2. Hàm tải bài hát
function loadSong(idx) {
    if (idx < 0 || idx >= playlist.length) idx = 0;
    currentIdx = idx;

    const song = playlist[idx];
    audio.src = song.url;
    titleDisplay.innerText = song.title;
    localStorage.setItem('musicIdx', idx);

    // Update UI
    seekBar.value = 0;
    currentTimeDisplay.innerText = '0:00';
}

// 3. Hàm Bật/Tắt
function toggleMusic() {
    const audio = document.getElementById('bgMusic');
    const playBtn = document.getElementById('playBtn');
    if (!audio || !playBtn) return;

    if (audio.paused) {
        audio.play().then(() => {
            playBtn.innerText = '⏸️';
            localStorage.setItem('musicStatus', 'playing');
        }).catch(() => {
            console.log("Cần click để tiếp tục nhạc");
            playBtn.innerText = '▶️';
            localStorage.setItem('musicStatus', 'paused');
        });
    } else {
        audio.pause();
        playBtn.innerText = '▶️';
        localStorage.setItem('musicStatus', 'paused');
    }
}

// 4. Next/Prev
function nextSong() {
    const audio = document.getElementById('bgMusic');
    const playBtn = document.getElementById('playBtn');
    if (!audio || !playBtn) return;

    let currentIdx = parseInt(localStorage.getItem('musicIdx')) || 0;
    currentIdx = (currentIdx + 1) % playlist.length;
    localStorage.setItem('musicIdx', currentIdx);

    const song = playlist[currentIdx];
    audio.src = song.url;
    document.getElementById('songTitle').innerText = song.title;

    audio.play().then(() => {
        playBtn.innerText = '⏸️';
        localStorage.setItem('musicStatus', 'playing');
    }).catch(() => {
        playBtn.innerText = '▶️';
    });
}

function prevSong() {
    const audio = document.getElementById('bgMusic');
    const playBtn = document.getElementById('playBtn');
    if (!audio || !playBtn) return;

    let currentIdx = parseInt(localStorage.getItem('musicIdx')) || 0;
    currentIdx = (currentIdx - 1 + playlist.length) % playlist.length;
    localStorage.setItem('musicIdx', currentIdx);

    const song = playlist[currentIdx];
    audio.src = song.url;
    document.getElementById('songTitle').innerText = song.title;

    audio.play().then(() => {
        playBtn.innerText = '⏸️';
        localStorage.setItem('musicStatus', 'playing');
    }).catch(() => {
        playBtn.innerText = '▶️';
    });
}

// 5. Seek bar handler
function seekSong() {
    const audio = document.getElementById('bgMusic');
    const seekBar = document.getElementById('seekBar');
    if (!audio || !seekBar || !audio.duration) return;

    audio.currentTime = (seekBar.value / 100) * audio.duration;
}

// 6. Update seek bar and time display as music plays (handled in initMusicPlayer)
// Event listeners are now set up dynamically in initMusicPlayer to ensure
// they're attached to the correct audio element on each page

// 7. (Removed - handled in initMusicPlayer)

// 8. Auto-next khi hết bài (handled in initMusicPlayer)

// 9. Initialize on page load
function initMusicPlayer() {
    const audio = document.getElementById('bgMusic');
    const playBtn = document.getElementById('playBtn');
    const titleDisplay = document.getElementById('songTitle');
    const seekBar = document.getElementById('seekBar');
    const currentTimeDisplay = document.getElementById('currentTime');
    const durationDisplay = document.getElementById('duration');

    // Exit if elements don't exist
    if (!audio || !playBtn) return;

    // Re-assign global references
    window.audio = audio;
    window.playBtn = playBtn;
    window.titleDisplay = titleDisplay;
    window.seekBar = seekBar;
    window.currentTimeDisplay = currentTimeDisplay;
    window.durationDisplay = durationDisplay;

    const currentIdx = parseInt(localStorage.getItem('musicIdx')) || 0;
    const savedTime = parseFloat(localStorage.getItem('musicTime')) || 0;
    const status = localStorage.getItem('musicStatus');

    // Load the song
    if (currentIdx < playlist.length) {
        const song = playlist[currentIdx];
        audio.src = song.url;
        titleDisplay.innerText = song.title;
        seekBar.value = 0;
        currentTimeDisplay.innerText = '0:00';
    }

    // Set up event listeners
    audio.addEventListener('timeupdate', function () {
        if (audio.duration) {
            seekBar.max = 100;
            seekBar.value = (audio.currentTime / audio.duration) * 100;
            currentTimeDisplay.innerText = formatTime(audio.currentTime);
            durationDisplay.innerText = formatTime(audio.duration);

            // Lưu thời gian mỗi giây để tránh mất dữ liệu
            if (Math.floor(audio.currentTime) % 1 === 0) {
                localStorage.setItem('musicTime', audio.currentTime);
            }
        }
    });

    audio.addEventListener('loadedmetadata', function () {
        durationDisplay.innerText = formatTime(audio.duration);
    });

    audio.addEventListener('ended', function () {
        nextSong();
    });

    // Restore playback state
    if (status === 'playing') {
        audio.currentTime = savedTime;
        audio.play().then(() => {
            playBtn.innerText = '⏸️';
        }).catch(() => {
            playBtn.innerText = '▶️';
            console.log("Cần click để tiếp tục nhạc");
        });
    } else {
        playBtn.innerText = '▶️';
    }
}

// Call after DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMusicPlayer);
} else {
    initMusicPlayer();
}

// ===================
// HOME & CLASS NAVIGATION
// ===================

function openClass(className) {
    console.log("openClass called with:", className);
    if (className === "12A1" || className === "11A1" || className === "10A1") {
        // Ẩn home section (nếu tồn tại - index.html có, classes.html không)
        const homeSection = document.getElementById("homeSection");
        if (homeSection) {
            homeSection.classList.remove("active");
        }

        const classSection = document.getElementById("classSection");
        if (classSection) {
            classSection.classList.add("active");
            console.log("classSection shown");
        }

        // Reset tất cả sections về ban đầu
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });

        // Hiện section students (section đầu tiên)
        const studentsSection = document.getElementById("students");
        if (studentsSection) {
            studentsSection.classList.add("active");
            console.log("students section activated");
        }

        // Reset sidebar active item
        document.querySelectorAll('.menu-item').forEach(item => {
            item.classList.remove('active');
        });
        const firstMenuItem = document.querySelector('.menu-item');
        if (firstMenuItem) {
            firstMenuItem.classList.add('active');
        }

        // Set currentClass
        localStorage.setItem("currentClass", className);

        // Lần đầu vào lớp → hiện welcome screen (dùng flag hasSeenGuide)
        const hasSeenGuide = localStorage.getItem("hasSeenGuide");
        console.log("hasSeenGuide:", hasSeenGuide);
        console.log("DOM ready - welcome element:", document.getElementById("welcome") ? "found" : "not found");

        // Chỉ hiện welcome nếu chưa xem guide (hasSeenGuide không tồn tại)
        if (!hasSeenGuide) {
            console.log("First time visiting classroom - will show welcome");
            // Dùng setTimeout để đảm bảo DOM đã sẵn sàng
            setTimeout(() => {
                const welcomeEl = document.getElementById("welcome");
                console.log("In setTimeout - welcome element:", welcomeEl ? "found" : "not found");
                if (welcomeEl) {
                    welcomeEl.style.display = "flex";
                    welcomeEl.style.zIndex = "9999";
                    console.log("Welcome screen displayed with flex and z-index 9999");
                } else {
                    console.error("Welcome element not found!");
                }
            }, 200);
        } else {
            console.log("Already seen guide - not showing welcome");
            const welcomeEl = document.getElementById("welcome");
            if (welcomeEl) {
                welcomeEl.style.display = "none";
            }
        }
    }
}

function goHome() {
    // Quay về trang chọn lớp - không reset hasSeenGuide
    window.location.href = 'index.html';
}

function goToPage(page) {
    window.location.href = page;
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

// ===== DETAILED INFO MODAL =====
const detailedInfo = {
    hs1: {
        intro: "Nguyễn Văn A là lớp phó học tập của lớp 12A1, với trách nhiệm giúp đỡ các bạn trong học tập. Anh ta rất tích cực và có khả năng tổ chức tốt.",
        style: "Lớp phó An có phong cách làm việc chuyên nghiệp, luôn lắng nghe ý kiến của mọi người. Anh ta được các bạn yêu quý vì sự tận tâm và công bằng.",
        feature: "Điểm đặc trưng của An là khả năng giao tiếp tốt, luôn có giải pháp khi gặp khó khăn, và rất trách nhiệm với công việc được giao phó.",
        impact: "Với nỗ lực của mình, An đã giúp nhiều bạn cải thiện điểm số và tạo ra một không khí học tập tích cực trong lớp."
    },
    hs2: {
        intro: "Trần Thị B là lớp trưởng của lớp 12A1, luôn dẫn dắt và định hướng cho cả lớp. Cô ấy có khả năng lãnh đạo xuất sắc và được mọi người tin tưởng.",
        style: "Lớp trưởng B có phong cách làm việc nghiêm túc nhưng rất gần gũi với các bạn. Cô ấy luôn tạo ra môi trường học tập thân thiện và hỗ trợ lẫn nhau.",
        feature: "Điểm đặc trưng của B là khả năng quản lý tốt, giải quyết vấn đề nhanh chóng, và luôn đặt lợi ích tập thể lên trên hết.",
        impact: "Dưới sự lãnh đạo của B, lớp 12A1 luôn đoàn kết và đạt được nhiều thành tích trong các hoạt động tập thể."
    },
    hs3: {
        intro: "Lê Văn C là ủy viên văn thể của lớp, phụ trách các hoạt động văn hóa và thể thao. Anh ấy rất năng động và sáng tạo trong việc tổ chức sự kiện.",
        style: "C có phong cách làm việc vui vẻ, luôn mang lại năng lượng tích cực cho mọi người. Anh ấy biết cách kết hợp giữa học tập và giải trí.",
        feature: "Điểm đặc trưng của C là khả năng tổ chức sự kiện, sáng tạo trong các hoạt động, và luôn tạo ra không khí vui vẻ cho lớp.",
        impact: "Nhờ những hoạt động do C tổ chức, lớp 12A1 có nhiều kỷ niệm đẹp và tinh thần tập thể được nâng cao."
    },
    hs4: {
        intro: "Phạm Thị D là ủy viên văn thư, phụ trách công tác hành chính và lưu trữ. Cô ấy rất tỉ mỉ và có trách nhiệm cao trong công việc.",
        style: "D có phong cách làm việc cẩn thận, luôn hoàn thành nhiệm vụ đúng hạn. Cô ấy rất chu đáo trong việc quản lý các tài liệu của lớp.",
        feature: "Điểm đặc trưng của D là sự tỉ mỉ, cẩn thận, và khả năng tổ chức tốt. Cô ấy luôn đảm bảo mọi thứ được sắp xếp gọn gàng.",
        impact: "Với sự quản lý của D, các tài liệu và hồ sơ của lớp luôn được bảo quản tốt, giúp ích nhiều cho công tác của lớp."
    },
    hs5: {
        intro: "Hoàng Văn E là thành viên năng nổ của lớp, luôn tham gia tích cực vào các hoạt động. Anh ấy rất nhiệt tình và hòa đồng với mọi người.",
        style: "E có phong cách làm việc thân thiện, luôn sẵn sàng giúp đỡ các bạn. Anh ấy mang lại sự vui vẻ và năng động cho tập thể lớp.",
        feature: "Điểm đặc trưng của E là sự nhiệt tình, hòa đồng, và luôn tích cực tham gia mọi hoạt động của lớp.",
        impact: "Sự năng nổ của E đã góp phần làm phong phú thêm các hoạt động ngoại khóa và tăng cường tình đoàn kết trong lớp."
    },
    hs6: {
        intro: "Đỗ Thị F là thành viên tích cực trong lớp, luôn chăm chỉ học tập và tham gia các hoạt động. Cô ấy rất ham học hỏi và cầu tiến.",
        style: "F có phong cách làm việc nghiêm túc, luôn nỗ lực hết mình trong học tập. Cô ấy là hình mẫu cho các bạn về tinh thần học hỏi.",
        feature: "Điểm đặc trưng của F là sự chăm chỉ, ham học hỏi, và luôn cố gắng cải thiện bản thân mỗi ngày.",
        impact: "Với nỗ lực học tập của F, cô ấy đã đạt được nhiều thành tích và truyền cảm hứng cho các bạn khác trong lớp."
    },
    gvcn1: {
        intro: "Cô Nguyễn Thị A là giáo viên chủ nhiệm của lớp 12A1 với nhiều năm kinh nghiệm giảng dạy. Cô rất tận tâm với sự phát triển của học sinh.",
        style: "Cô giáo có phong cách dạy rất thân thiện nhưng đầy kỷ luật. Cô luôn tạo ra một lớp học vui vẻ nhưng vẫn đảm bảo kỷ cương.",
        feature: "Đặc trưng nổi bật là lòng yêu thương với học sinh, kỹ năng quản lý lớp xuất sắc, và khả năng motivate học sinh rất tốt.",
        impact: "Nhờ công tác quản lý tài tình, lớp 12A1 luôn là một trong những lớp có kết quả học tập tốt nhất trong khối 12."
    },
    toan: {
        intro: "Giáo viên bộ môn Toán có kiến thức sâu rộng và phương pháp dạy học hiệu quả. Anh ấy rất yêu thích môn Toán và truyền cảm hứng cho học sinh.",
        style: "Anh có phong cách dạy linh hoạt, kết hợp lý thuyết với thực hành. Luôn tạo ra các bài giảng thú vị và dễ hiểu.",
        feature: "Điểm đặc trưng là khả năng giải thích các khái niệm khó một cách đơn giản, sáng tạo trong việc thiết kế bài tập, và lắng nghe học sinh.",
        impact: "Dưới sự hướng dẫn của anh, nhiều học sinh đã đạt thành tích cao trong các kỳ thi Toán, đặc biệt là kỳ thi chọn lọc."
    },
    gvbm2: {
        intro: "Giáo viên bộ môn Ngữ Văn có tâm huyết với văn học và ngôn ngữ. Cô ấy giúp học sinh phát triển khả năng cảm thụ và sáng tạo văn học.",
        style: "Cô có phong cách dạy truyền cảm, luôn tạo ra không khí thảo luận sôi nổi trong giờ học. Cô khuyến khích học sinh bày tỏ ý kiến cá nhân.",
        feature: "Điểm đặc trưng là khả năng phân tích tác phẩm sâu sắc, hướng dẫn viết văn hiệu quả, và nuôi dưỡng tình yêu văn học cho học sinh.",
        impact: "Nhiều học sinh dưới sự dạy dỗ của cô đã đạt giải cao trong các cuộc thi văn học và có khả năng viết văn xuất sắc."
    },
    gvbm3: {
        intro: "Giáo viên bộ môn Tiếng Anh có phương pháp dạy hiện đại và hiệu quả. Anh ấy giúp học sinh tự tin giao tiếp bằng tiếng Anh.",
        style: "Anh có phong cách dạy tương tác cao, sử dụng nhiều hoạt động nhóm và công nghệ trong giảng dạy. Luôn tạo môi trường học tập vui vẻ.",
        feature: "Điểm đặc trưng là khả năng phát âm chuẩn, phương pháp dạy nghe nói hiệu quả, và cập nhật kiến thức về văn hóa Anh Mỹ.",
        impact: "Học sinh của anh thường đạt điểm cao trong các kỳ thi tiếng Anh và có khả năng giao tiếp tự tin trong môi trường quốc tế."
    },
    gvbm4: {
        intro: "Giáo viên bộ môn Vật Lý có kiến thức chuyên sâu và khả năng thực nghiệm tốt. Anh ấy truyền cảm hứng cho học sinh yêu thích khoa học.",
        style: "Anh có phong cách dạy thực tiễn, luôn kết hợp lý thuyết với thí nghiệm. Khuyến khích học sinh đặt câu hỏi và khám phá.",
        feature: "Điểm đặc trưng là khả năng giải thích hiện tượng vật lý một cách trực quan, thiết kế thí nghiệm sáng tạo, và phát triển tư duy logic.",
        impact: "Nhiều học sinh đã chọn ngành kỹ thuật nhờ sự hướng dẫn của anh và đạt thành tích cao trong các cuộc thi vật lý."
    },
    gvbm5: {
        intro: "Giáo viên bộ môn Hóa Học có nhiệt huyết với ngành hóa và nghiên cứu. Cô ấy giúp học sinh hiểu được sự kỳ diệu của thế giới nguyên tử.",
        style: "Cô có phong cách dạy khoa học, luôn nhấn mạnh vào việc quan sát và phân tích. Tạo ra các thí nghiệm an toàn và thú vị.",
        feature: "Điểm đặc trưng là khả năng trình bày kiến thức hóa học một cách sinh động, hướng dẫn thí nghiệm chính xác, và phát triển kỹ năng nghiên cứu.",
        impact: "Học sinh của cô thường đạt giải cao trong các cuộc thi hóa học và có nền tảng tốt cho các ngành khoa học tự nhiên."
    },
    gvbm6: {
        intro: "Giáo viên bộ môn Sinh Học có kiến thức rộng về thế giới sinh vật. Anh ấy giúp học sinh khám phá sự đa dạng và phức tạp của sự sống.",
        style: "Anh có phong cách dạy khám phá, khuyến khích học sinh quan sát và nghiên cứu thực tế. Luôn tạo ra các dự án học tập thú vị.",
        feature: "Điểm đặc trưng là khả năng giảng dạy sinh học một cách toàn diện, từ phân tử đến hệ sinh thái, và phát triển tư duy khoa học.",
        impact: "Nhiều học sinh đã chọn ngành y và sinh học nhờ sự truyền cảm hứng của anh và đạt được thành công trong các lĩnh vực này."
    },
    gvbm7: {
        intro: "Giáo viên bộ môn Lịch Sử có kiến thức sâu rộng về quá khứ. Cô ấy giúp học sinh hiểu được bài học từ lịch sử để xây dựng tương lai.",
        style: "Cô có phong cách dạy kể chuyện, biến các sự kiện lịch sử thành những câu chuyện sống động. Khuyến khích học sinh suy nghĩ phê phán.",
        feature: "Điểm đặc trưng là khả năng phân tích sự kiện lịch sử một cách khách quan, phát triển kỹ năng nghiên cứu tài liệu, và nuôi dưỡng ý thức công dân.",
        impact: "Học sinh của cô có nhận thức tốt về lịch sử dân tộc và thế giới, góp phần xây dựng thế hệ trẻ có trách nhiệm với xã hội."
    },
    gvbm8: {
        intro: "Giáo viên bộ môn Địa Lý có đam mê với việc khám phá thế giới. Anh ấy giúp học sinh hiểu được sự đa dạng và tương tác của trái đất.",
        style: "Anh có phong cách dạy thực tế, sử dụng bản đồ và hình ảnh để minh họa. Luôn khuyến khích học sinh quan tâm đến môi trường.",
        feature: "Điểm đặc trưng là khả năng giảng dạy địa lý toàn diện, từ vật lý đến nhân văn, và phát triển kỹ năng đọc bản đồ và phân tích không gian.",
        impact: "Học sinh của anh có kiến thức tốt về địa lý và môi trường, góp phần nâng cao ý thức bảo vệ thiên nhiên và phát triển bền vững."
    },
    gvbm9: {
        intro: "Giáo viên bộ môn GDCD có tâm huyết với việc giáo dục đạo đức. Cô ấy giúp học sinh phát triển nhân cách và ý thức công dân.",
        style: "Cô có phong cách dạy gần gũi, luôn tạo ra các tình huống thảo luận thực tế. Khuyến khích học sinh bày tỏ quan điểm đạo đức.",
        feature: "Điểm đặc trưng là khả năng hướng dẫn học sinh phân tích vấn đề đạo đức, phát triển kỹ năng ra quyết định, và nuôi dưỡng lòng nhân ái.",
        impact: "Học sinh của cô có ý thức tốt về đạo đức và trách nhiệm xã hội, góp phần xây dựng một thế hệ trẻ có nhân cách tốt."
    },
    gvbm10: {
        intro: "Giáo viên bộ môn Công Nghệ có kiến thức hiện đại về kỹ thuật. Anh ấy giúp học sinh phát triển kỹ năng thực hành và sáng tạo.",
        style: "Anh có phong cách dạy thực hành, luôn khuyến khích học sinh thử nghiệm và sáng tạo. Sử dụng công nghệ trong giảng dạy.",
        feature: "Điểm đặc trưng là khả năng hướng dẫn kỹ thuật thực tế, phát triển tư duy logic, và cập nhật kiến thức công nghệ mới.",
        impact: "Nhiều học sinh đã chọn ngành công nghệ nhờ sự hướng dẫn của anh và có khả năng ứng dụng công nghệ hiệu quả trong cuộc sống."
    }
};

function showDetailedInfo(type) {
    const currentKey = getCurrentModalKey();
    if (!currentKey || !detailedInfo[currentKey]) return;

    const info = detailedInfo[currentKey];
    const titles = {
        intro: "📋 Giới thiệu chung",
        style: "🎨 Phong cách",
        feature: "✨ Đặc trưng",
        impact: "⭐ Dấu ấn"
    };

    document.getElementById('detail-title').innerText = titles[type] || "Thông tin";
    document.getElementById('detail-content').innerText = info[type] || "Không có thông tin chi tiết.";
    document.getElementById('detailModal').style.display = 'flex';
}

function closeDetailModal() {
    document.getElementById('detailModal').style.display = 'none';
}

// Store current modal key to know which person is being viewed
let currentModalKey = null;

function getCurrentModalKey() {
    return currentModalKey;
}

// Modify openModal to track current key
const originalOpenModal = window.openModal;
function openModal(key) {
    currentModalKey = key;
    const m = data[key];
    if (!m) return;
    document.getElementById('modal-img').src = m.img;
    document.getElementById('modal-title').innerText = m.name;
    document.getElementById('modal-desc').innerText = m.desc;
    document.getElementById('modal').style.display = 'flex';
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
    document.documentElement.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');

    // Lưu trạng thái vào localStorage
    localStorage.setItem('theme', isDark ? 'dark' : 'light');

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
    },
    {
        el: ".music-controls",
        text: "🎵 Nhạc nền ở góc trên bên phải: phát, tạm dừng, chuyển bài hát. Kéo thanh tiến độ để tua nhanh/lùi lại!"
    },
    {
        el: ".bottom-bar",
        text: "📧 Về chúng tôi và Liên hệ ở góc dưới bên phải. Click để xem thêm thông tin về lớp chúng ta!"
    }
];

// ===== INIT =====
window.onload = () => {
    const classSection = document.getElementById("classSection");
    const welcome = document.getElementById("welcome");
    const guide = document.getElementById("guideOverlay");
    const finish = document.getElementById("finishGuide");

    // Chỉ ẩn guide và finish, welcome sẽ được xử lý bởi openClass()
    if (guide) guide.style.display = "none";
    if (finish) finish.style.display = "none";

    // Only perform class redirect if we're on classes.html (has classSection)
    // about.html and contact.html don't have classSection, so they won't redirect
    if (!classSection) {
        // Not on classes.html, so skip the class parameter check
        return;
    }

    // Lấy tham số từ URL
    const params = new URLSearchParams(window.location.search);
    const classParam = params.get('class');

    // Nếu không có tham số class, redirect về index.html
    if (!classParam) {
        window.location.href = 'index.html';
        return;
    }

    // Nếu có tham số class, tự động mở lớp đó
    openClass(classParam);

    // Khởi tạo animation cookies - loại bỏ vì đã chạy trong classes.html
    // createCookies(); // đã di chuyển vào classes.html để tránh chạy 2 lần

    // Tạm thời: cho phép reset guide bằng cách gõ resetGuide() trong console
    window.resetGuide = () => {
        localStorage.clear();
        location.reload();
    };
};

// ===== WELCOME =====
function skipGuide() {
    // Lưu flag vào localStorage để lần sau không hiện welcome nữa
    localStorage.setItem("hasSeenGuide", "true");
    const welcomeEl = document.getElementById("welcome");
    if (welcomeEl) {
        welcomeEl.style.display = "none";
    }
    console.log("Guide skipped - set hasSeenGuide");
}

function startGuide() {
    localStorage.setItem("isGuiding", "true"); // ← THÊM

    // Luôn chuyển về section học sinh khi bắt đầu guide
    const studentsMenuItem = document.querySelector('.menu-item[onclick*="students"]');
    if (studentsMenuItem) {
        showSection('students', studentsMenuItem);
    }

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
    } else if (step.el === ".bottom-bar") {
        left = window.innerWidth - 350; // Position more to the left
        boxTop = window.innerHeight - 220; // Position higher up
    }

    box.style.top = boxTop + "px";
    box.style.left = left + "px";

    document.getElementById("guideText").innerText = step.text;

    // Toggle top-bar visibility based on current step
    if (step.el === ".top-bar" || step.el === ".music-controls") {
        document.body.classList.add("top-bar-guide");
    } else {
        document.body.classList.remove("top-bar-guide");
    }

    // Toggle bottom-bar visibility based on current step
    if (step.el === ".bottom-bar") {
        document.body.classList.add("bottom-bar-guide");
    } else {
        document.body.classList.remove("bottom-bar-guide");
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

    // Special arrow positioning for bottom-bar
    if (step.el === ".bottom-bar") {
        arrow.style.left = rect.right - 15 + "px"; // Center on bottom-bar
        arrow.style.top = rect.top - 30 + "px"; // Point up from bottom-bar
        arrow.style.transform = "rotate(45deg)"; // Point up
    }
}

// ===== FINISH =====
function finishGuide() {
    localStorage.removeItem("isGuiding");
    localStorage.setItem("hasSeenGuide", "true"); // Lưu flag khi hoàn thành guide
    document.body.classList.remove("guide-active");
    document.getElementById("guideOverlay").style.display = "none";
    document.getElementById("finishGuide").style.display = "flex";
    console.log("Guide finished - set hasSeenGuide");
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
