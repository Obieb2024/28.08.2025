/* ==========================================================================
   28.08.2026 — INTERACTIVE LOGIC & ANIMATIONS
   ========================================================================== */
const CONFIG = {
    // Link Video Rekap (Format GDrive / Embed)
    videoRekapUrl: "https://drive.google.com/file/d/1Y7QeuAbahhnyd_kLj7nD0B9-05JVI_zS/view?usp=drive_link",

    // Daftar Foto Pasangan (33 Foto Assets)
    PHOTOS: {
        POLAROID: [
            { src: "assets/images/download (3).jpeg", caption: "Awalnya cuma kenal." },
            { src: "assets/images/download (4).jpeg", caption: "Kemudian jadi dekat." },
            { src: "assets/images/download (5).jpeg", caption: "Momen manis kita." },
            { src: "assets/images/download (6).jpeg", caption: "Photoshoot." },
            { src: "assets/images/download (7).jpeg", caption: "Karawang." },
            { src: "assets/images/download (8).jpeg", caption: "Momen yang cuma kita yang ngerti." },
            { src: "assets/images/download (9).jpeg", caption: "Konser." },
            { src: "assets/images/download (10).jpeg", caption: "Cerita indah kita." },
            { src: "assets/images/download (11).jpeg", caption: "Selalu bahagia bersamamu." },
            { src: "assets/images/download (12).jpeg", caption: "Hari yang berkesan." },
            { src: "assets/images/download (13).jpeg", caption: "Setiap detik bersamamu." },
            { src: "assets/images/download (14).jpeg", caption: "Love you, Sayanggg 💜" }
        ],
        GALLERY: [
            { src: "assets/images/download (15).jpeg", size: "masonry-square" },
            { src: "assets/images/download (16).jpeg", size: "masonry-tall" },
            { src: "assets/images/download (17).jpeg", size: "masonry-square" },
            { src: "assets/images/download (18).jpeg", size: "masonry-large" },
            { src: "assets/images/download (19).jpeg", size: "masonry-wide" },
            { src: "assets/images/download (20).jpeg", size: "masonry-square" },
            { src: "assets/images/download (21).jpeg", size: "masonry-tall" },
            { src: "assets/images/download (22).jpeg", size: "masonry-square" },
            { src: "assets/images/download (23).jpeg", size: "masonry-wide" },
            { src: "assets/images/download (24).jpeg", size: "masonry-large" },
            { src: "assets/images/download (25).jpeg", size: "masonry-square" },
            { src: "assets/images/download (26).jpeg", size: "masonry-tall" },
            { src: "assets/images/download (27).jpeg", size: "masonry-square" },
            { src: "assets/images/download (28).jpeg", size: "masonry-wide" },
            { src: "assets/images/download (29).jpeg", size: "masonry-square" },
            { src: "assets/images/download (30).jpeg", size: "masonry-tall" },
            { src: "assets/images/download (31).jpeg", size: "masonry-square" },
            { src: "assets/images/download (32).jpeg", size: "masonry-large" }
        ]
    }
};

/* ==========================================================================
   TOAST NOTIFICATION SYSTEM
   ========================================================================== */
function showToast(message, duration = 3000) {
    const toast = document.getElementById('toast');
    if (!toast) return;

    toast.innerText = message;
    toast.classList.add('active');

    setTimeout(() => {
        toast.classList.remove('active');
    }, duration);
}

/* ==========================================================================
   PARTICLE GENERATOR & HEART BURSTS
   ========================================================================== */
function initParticles() {
    const container = document.getElementById('particles-container');
    if (!container) return;

    container.innerHTML = '';
    const particleCount = 18;
    const icons = ['💜', '✨', '🌸', '💖', '✦'];

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'floating-particle';
        particle.innerText = icons[Math.floor(Math.random() * icons.length)];
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDuration = `${6 + Math.random() * 8}s`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particle.style.fontSize = `${12 + Math.random() * 14}px`;
        container.appendChild(particle);
    }
}

/* Heart burst on click */
document.addEventListener('click', (e) => {
    // Exclude button clicks to avoid clutter
    if (e.target.closest('button') || e.target.closest('input') || e.target.closest('a')) return;

    const burst = document.createElement('div');
    burst.innerText = '💜';
    burst.style.position = 'fixed';
    burst.style.left = `${e.clientX - 10}px`;
    burst.style.top = `${e.clientY - 10}px`;
    burst.style.fontSize = '20px';
    burst.style.pointerEvents = 'none';
    burst.style.zIndex = '9999';
    burst.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
    burst.style.opacity = '1';

    document.body.appendChild(burst);

    requestAnimationFrame(() => {
        burst.style.transform = `translateY(-40px) scale(1.4)`;
        burst.style.opacity = '0';
    });

    setTimeout(() => burst.remove(), 800);
});

/* ==========================================================================
   IMAGE FALLBACKS
   ========================================================================== */
function handleImageFallback(imgElement, fallbackTextTitle) {
    if (!imgElement) return;
    imgElement.style.display = 'none';

    const parent = imgElement.parentNode;
    if (!parent) return;

    let fallbackDiv = parent.querySelector('.img-fallback');
    if (!fallbackDiv) {
        const template = document.getElementById('fallback-template');
        if (!template) return;

        const clone = template.content.cloneNode(true);
        fallbackDiv = clone.querySelector('.img-fallback');

        if (fallbackTextTitle && fallbackDiv.querySelector('.fallback-text')) {
            fallbackDiv.querySelector('.fallback-text').innerText = fallbackTextTitle;
        }

        parent.appendChild(fallbackDiv);
    } else {
        fallbackDiv.style.display = 'flex';
    }
}

/* ==========================================================================
   QUIZ DATA & STATE
   ========================================================================== */
const quizQuestions = [
    {
        question: "Kita pertama kali saling kenal di mana?",
        options: [" Waarung Timbel", "Kepanitiaan PKKMB", "Curug Cibareubeuy", "Kodim"],
        answerIndex: 1, // B
        feedbackCorrect: "Ternyata kamu masih ingat betul cerita awal kenal kita 💜",
        feedbackWrong: "Nggak apa-apa sayang. Yang penting kita punya banyak cerita manis berdua."
    },
    {
        question: "Setelah kepanitiaan PKKMB selesai, apa yang terjadi?",
        options: ["Kita jadi jarang ngobrol", "Kita mulai saling menjauh", "Kita justru mulai semakin dekat", "Kita langsung pergi ke Curug"],
        answerIndex: 2, // C
        feedbackCorrect: "Tepat sekali! Di situlah semuanya mulai makin dekat.",
        feedbackWrong: "Nggak dong sayang, kita justru makin intens ngobrolnya!"
    },
    {
        question: "Tanggal berapa cerita kita resmi menjadi ‘kita’?",
        options: ["14 Februari 2026", "17 Agustus 2025", "28 Agustus 2025", "1 September 2026"],
        answerIndex: 2, // C
        feedbackCorrect: "Tanggal spesial yang akan selalu ada tempatnya di hati aku ✨",
        feedbackWrong: "Masa tanggal jadian kita lupa sayanggg? 😭 28 Agustus!"
    },
    {
        question: "Tempat yang menjadi salah satu bagian dari cerita kenangan kita?",
        options: ["Timbel di samping perpustakaan Subang", "Bansus", "Nasi Goreng Mas Wito", "Warjo"],
        answerIndex: 0, // A
        feedbackCorrect: "Tempat sederhana tapi penuh kenangan indah berdua.",
        feedbackWrong: "Jawabannya Timbel sayanggg 🍚"
    },
    {
        question: "Aktivitas paling random tapi seru kalau dilakukan berdua?",
        options: ["Gibahin orang sambil naik motor", "Masak Bareng", "Jogging pagi", "Joget Joget"],
        answerIndex: 0, // A
        feedbackCorrect: "HAHAHA bener banget! Receh tapi paling ngangenin.",
        feedbackWrong: "Kayaknya yang A deh lebih sering 😭"
    },
    {
        question: "Apa salah satu hal yang paling aku suka dari kamu?",
        options: ["Kamu baik", "Kamu lucu & gemes", "Kamu suka masakin aku", "Semuanya benar!"],
        answerIndex: 3, // D
        feedbackCorrect: "Karena satu alasan aja nggak akan pernah cukup untuk mendeskripsikan kamu 💜",
        feedbackWrong: "Semuanya benar sayanggg..."
    },
    {
        question: "Kalau suatu hari kita mewujudkan impian, rumah seperti apa yang kita inginkan?",
        options: ["Rumah di tengah kota", "Rumah di daerah Lembang", "Rumah dekat pantai", "Apartemen di Jakarta"],
        answerIndex: 1, // B
        feedbackCorrect: "Rumah impian di Lembang, tempat kita pulang nanti 🏡",
        feedbackWrong: "Rumah di Lembang sayanggg 🏡"
    },
    {
        question: "Kalau boleh memilih satu hal untuk masa depan kita...",
        options: ["Punya rumah impian", "Punya tempat usaha bersama", "Punya uang unlimited", "Semua itu, tapi yang paling penting tetap bersama"],
        answerIndex: 3, // D
        feedbackCorrect: "Karena semua mimpi itu nggak akan lengkap kalau nggak dijalani sama kamu 💜",
        feedbackWrong: "Jawaban yang benar adalah D. Karena kamu yang paling penting."
    }
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

/* ==========================================================================
   NAVIGATION & SEQUENCES
   ========================================================================== */
function nextSection(sectionId) {
    document.querySelectorAll('.section').forEach(sec => {
        sec.classList.remove('active');
    });

    const target = document.getElementById(sectionId);
    if (target) {
        target.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Sequences
        if (sectionId === 'opening') animateSequence('.seq-hero', 300);
        else if (sectionId === 'pre-quiz') animateSequence('.seq-prequiz', 300);
        else if (sectionId === 'cinematic-transition') animateSequence('.seq-cine', 1200);
        else if (sectionId === 'video-intro') animateSequence('.seq-vid', 800);
        else if (sectionId === 'final-screen') animateSequence('.seq-final', 800);

        // Lazy Initialization for photos
        if (sectionId === 'polaroid-section' && !photosLoaded) {
            loadPhotos();
            photosLoaded = true;
        }
    }
}

function animateSequence(selector, delayMs = 600) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => el.classList.remove('visible'));

    elements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('visible');
        }, index * delayMs + 150);
    });
}

window.addEventListener('DOMContentLoaded', () => {
    initParticles();
    animateSequence('.seq-hero', 300);
    applyPhotosToApp();
    setupSecretTriggers();
});

/* ==========================================================================
   QUIZ LOGIC
   ========================================================================== */
function startQuiz() {
    currentQuestion = 0;
    score = 0;
    nextSection('quiz');
    renderQuestion();
}

function renderQuestion() {
    selectedAnswer = null;
    const q = quizQuestions[currentQuestion];

    // Progress
    const qNum = currentQuestion + 1;
    document.getElementById('q-num-display').innerText = qNum < 10 ? '0' + qNum : qNum;
    document.getElementById('q-current').innerText = qNum;

    const progressFill = document.getElementById('quiz-progress-fill');
    if (progressFill) {
        progressFill.style.width = `${(qNum / quizQuestions.length) * 100}%`;
    }

    // Text
    document.getElementById('question-text').innerText = q.question;

    // Options
    const container = document.getElementById('options-container');
    container.innerHTML = '';

    const letters = ['A', 'B', 'C', 'D'];
    q.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `<span class="option-letter">${letters[index]}</span> <span class="option-text">${opt}</span>`;
        btn.onclick = () => selectOption(index, btn);
        container.appendChild(btn);
    });
}

function selectOption(index, btnElement) {
    selectedAnswer = index;
    document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
    btnElement.classList.add('selected');
}

function submitAnswer() {
    if (selectedAnswer === null) {
        showWarningModal();
        return;
    }

    const q = quizQuestions[currentQuestion];
    const isCorrect = (selectedAnswer === q.answerIndex);

    if (isCorrect) score += 10;

    showFeedbackModal(isCorrect, isCorrect ? q.feedbackCorrect : q.feedbackWrong);
}

function showWarningModal() {
    const modal = document.getElementById('quiz-modal');
    document.getElementById('quiz-modal-icon').innerHTML = "✨";
    document.getElementById('quiz-modal-title').innerText = "Eits, Sayangggg...";
    document.getElementById('quiz-modal-text').innerText = "Pilih jawabannya dulu yaa 💜";

    const btn = document.getElementById('quiz-modal-btn');
    btn.innerHTML = "Oke Sayang <span class=\"arrow\">&rarr;</span>";
    btn.onclick = () => { modal.classList.remove('active'); };

    modal.classList.add('active');
}

function showFeedbackModal(isCorrect, text) {
    const modal = document.getElementById('quiz-modal');

    if (isCorrect) {
        document.getElementById('quiz-modal-icon').innerHTML = "💜";
        document.getElementById('quiz-modal-title').innerText = "Benar, Sayangggg! 💜";
        document.getElementById('quiz-modal-text').innerText = text;

        const btn = document.getElementById('quiz-modal-btn');
        btn.innerHTML = "Lanjut <span class=\"arrow\">&rarr;</span>";
        btn.onclick = () => {
            modal.classList.remove('active');
            setTimeout(nextQuestion, 300);
        };
    } else {
        document.getElementById('quiz-modal-icon').innerHTML = "😭";
        document.getElementById('quiz-modal-title').innerText = "Belum Tepat Sayang 😭";
        document.getElementById('quiz-modal-text').innerText = text;

        const btn = document.getElementById('quiz-modal-btn');
        btn.innerHTML = "Lanjut <span class=\"arrow\">&rarr;</span>";
        btn.onclick = () => {
            modal.classList.remove('active');
            setTimeout(nextQuestion, 300);
        };
    }

    modal.classList.add('active');
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizQuestions.length) {
        renderQuestion();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        showQuizResult();
    }
}

function showQuizResult() {
    nextSection('quiz-result');

    const calcBox = document.getElementById('calculating-score');
    const resultBox = document.getElementById('final-score-box');

    calcBox.classList.remove('hidden');
    resultBox.classList.add('hidden');

    setTimeout(() => {
        calcBox.classList.add('hidden');
        resultBox.classList.remove('hidden');

        // Count up animation
        const scoreEl = document.getElementById('final-score');
        let current = 0;
        const timer = setInterval(() => {
            current += 2;
            scoreEl.innerText = current;
            if (current >= score) {
                clearInterval(timer);
                scoreEl.innerText = score;
            }
        }, 30);

        const msgEl = document.getElementById('score-message');
        if (score >= 70) {
            msgEl.innerText = "Luar biasa! Kamu memang soulmate Obieb yang luar biasa 💜. Kirim SS nya ke aku sayanggg";
        } else if (score >= 40) {
            msgEl.innerText = "Ternyata kamu masih hafal banyak cerita kenangan manis kita. Kirim SS nya ke aku sayanggg";
        } else {
            msgEl.innerText = "Nggak apa-apa sayang, yang penting kita buat lebih banyak kenangan baru berdua 💜. Kirim SS nya ke aku sayanggg";
        }
    }, 1500);
}

/* ==========================================================================
   PHOTOS
   ========================================================================== */
let photosLoaded = false;
function loadPhotos() {
    const pContainer = document.getElementById('polaroid-container');
    const gContainer = document.getElementById('masonry-container');

    if (!pContainer || !gContainer) return;

    pContainer.innerHTML = '';
    gContainer.innerHTML = '';

    // Polaroids
    CONFIG.PHOTOS.POLAROID.forEach((p) => {
        const rotation = (Math.random() * 6 - 3).toFixed(1);
        const el = document.createElement('div');
        el.className = 'polaroid-card';
        el.style.setProperty('--rot', rotation);

        const img = document.createElement('img');
        img.src = p.src;
        img.className = 'polaroid-img';
        img.alt = p.caption;
        img.onerror = function () { handleImageFallback(this, p.caption); };
        img.onclick = () => openImageModal(p.src, p.caption);

        const cap = document.createElement('div');
        cap.className = 'polaroid-caption';
        cap.innerText = p.caption;

        el.appendChild(img);
        el.appendChild(cap);
        pContainer.appendChild(el);
    });

    // Masonry Gallery
    CONFIG.PHOTOS.GALLERY.forEach((item) => {
        const el = document.createElement('div');
        el.className = `masonry-item ${item.size || ''}`;

        const img = document.createElement('img');
        img.src = item.src;
        img.alt = 'Memory';
        img.onerror = function () { handleImageFallback(this, 'Memory'); };
        img.onclick = () => openImageModal(item.src, 'Kenangan manis kita 💜');

        el.appendChild(img);
        gContainer.appendChild(el);
    });
}

function openImageModal(src, caption) {
    const modal = document.getElementById('image-modal');
    const img = document.getElementById('modal-img');
    img.src = src;

    img.onerror = function () {
        this.style.display = 'none';
        document.getElementById('modal-caption').innerText = "Kenangan kita 💜";
    };
    img.style.display = 'block';

    document.getElementById('modal-caption').innerText = caption;
    modal.classList.add('active');
}

function closeImageModal() {
    document.getElementById('image-modal').classList.remove('active');
}

/* ==========================================================================
   SECRET ADMIN PHOTO MANAGER LOGIC
   ========================================================================== */
const PHOTO_STORAGE_KEY = 'user_photos_config_v3';
const DEFAULT_TIMELINE_PHOTOS = {
    1: "assets/images/download.jpeg",
    2: "assets/images/download (1).jpeg",
    4: "assets/images/download (2).jpeg"
};

let activePhotosConfig = loadPhotosConfig();

function loadPhotosConfig() {
    try {
        const saved = localStorage.getItem(PHOTO_STORAGE_KEY);
        if (saved) {
            const parsed = JSON.parse(saved);
            return {
                TIMELINE: { ...DEFAULT_TIMELINE_PHOTOS, ...(parsed.TIMELINE || {}) },
                POLAROID: parsed.POLAROID || JSON.parse(JSON.stringify(CONFIG.PHOTOS.POLAROID)),
                GALLERY: parsed.GALLERY || JSON.parse(JSON.stringify(CONFIG.PHOTOS.GALLERY))
            };
        }
    } catch (e) {
        console.warn("Could not load custom photos config:", e);
    }
    return {
        TIMELINE: { ...DEFAULT_TIMELINE_PHOTOS },
        POLAROID: JSON.parse(JSON.stringify(CONFIG.PHOTOS.POLAROID)),
        GALLERY: JSON.parse(JSON.stringify(CONFIG.PHOTOS.GALLERY))
    };
}

function applyPhotosToApp() {
    CONFIG.PHOTOS.POLAROID = activePhotosConfig.POLAROID;
    CONFIG.PHOTOS.GALLERY = activePhotosConfig.GALLERY;

    updateTimelineImageSrc('timeline-img-1', activePhotosConfig.TIMELINE[1]);
    updateTimelineImageSrc('timeline-img-2', activePhotosConfig.TIMELINE[2]);
    updateTimelineImageSrc('timeline-img-4', activePhotosConfig.TIMELINE[4]);

    loadPhotos();
    photosLoaded = true;
}

function updateTimelineImageSrc(imgId, newSrc) {
    const imgEl = document.getElementById(imgId);
    if (!imgEl) return;

    if (newSrc && newSrc.trim() !== '') {
        imgEl.src = newSrc;
        imgEl.style.display = 'block';
        if (imgEl.parentNode) {
            const fallbackDiv = imgEl.parentNode.querySelector('.img-fallback');
            if (fallbackDiv) {
                fallbackDiv.style.display = 'none';
            }
        }
    }
}

// Compress Image using Canvas with HEIC iPhone support (Max 1000px, quality 0.8)
async function compressImage(file, maxWidth = 1000, maxHeight = 1000, quality = 0.8) {
    let imageFile = file;

    const isHeic = file.name.toLowerCase().endsWith('.heic') ||
        file.name.toLowerCase().endsWith('.heif') ||
        file.type.toLowerCase().includes('heic') ||
        file.type.toLowerCase().includes('heif');

    if (isHeic) {
        if (typeof heic2any !== 'undefined') {
            try {
                const convertedBlob = await heic2any({
                    blob: file,
                    toType: 'image/jpeg',
                    quality: 0.8
                });
                imageFile = Array.isArray(convertedBlob) ? convertedBlob[0] : convertedBlob;
            } catch (heicErr) {
                console.warn("HEIC conversion warning:", heicErr);
            }
        }
    }

    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                let width = img.width;
                let height = img.height;

                if (width > maxWidth || height > maxHeight) {
                    if (width > height) {
                        height = Math.round((height * maxWidth) / width);
                        width = maxWidth;
                    } else {
                        width = Math.round((width * maxHeight) / height);
                        height = maxHeight;
                    }
                }

                const canvas = document.createElement('canvas');
                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);

                const dataUrl = canvas.toDataURL('image/jpeg', quality);
                resolve(dataUrl);
            };
            img.onerror = reject;
            img.src = e.target.result;
        };
        reader.onerror = reject;
        reader.readAsDataURL(imageFile);
    });
}

// Secret Triggers Setup (3x click & Keyboard shortcut)
function setupSecretTriggers() {
    let dateClickCount = 0;
    let clickTimer = null;
    const triggerEl = document.getElementById('secret-date-trigger');

    if (triggerEl) {
        triggerEl.addEventListener('click', () => {
            dateClickCount++;
            clearTimeout(clickTimer);
            if (dateClickCount >= 3) {
                openAdminModal();
                dateClickCount = 0;
            } else {
                clickTimer = setTimeout(() => { dateClickCount = 0; }, 1000);
            }
        });
    }

    window.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'u') {
            e.preventDefault();
            openAdminModal();
        }
    });
}

// Modal Toggle & Tab Switcher
function openAdminModal() {
    const modal = document.getElementById('admin-photo-modal');
    if (!modal) return;

    const prev1 = document.getElementById('prev-timeline-1');
    const prev2 = document.getElementById('prev-timeline-2');
    const prev4 = document.getElementById('prev-timeline-4');

    if (prev1) prev1.src = activePhotosConfig.TIMELINE[1] || 'assets/images/download.jpeg';
    if (prev2) prev2.src = activePhotosConfig.TIMELINE[2] || 'assets/images/download (1).jpeg';
    if (prev4) prev4.src = activePhotosConfig.TIMELINE[4] || 'assets/images/download (2).jpeg';

    renderAdminPolaroidList();
    renderAdminGalleryList();

    modal.classList.add('active');
}

function closeAdminModal() {
    const modal = document.getElementById('admin-photo-modal');
    if (modal) modal.classList.remove('active');
}

function switchAdminTab(tabName) {
    const tabs = ['batch', 'timeline', 'polaroid', 'gallery'];
    tabs.forEach(t => {
        const btn = document.getElementById(`tab-btn-${t}`);
        const pane = document.getElementById(`admin-tab-${t}`);
        if (btn) btn.classList.toggle('active', t === tabName);
        if (pane) pane.classList.toggle('active', t === tabName);
    });
}

// Batch Upload Handler
async function handleBatchUpload(event) {
    const files = Array.from(event.target.files);
    if (!files || files.length === 0) return;

    const statusMsg = document.getElementById('batch-status-msg');
    const prevContainer = document.getElementById('batch-preview-container');
    if (statusMsg) statusMsg.innerText = `Memproses ${files.length} foto... ⏳`;
    if (prevContainer) prevContainer.innerHTML = '';

    const sizeOptions = ['masonry-square', 'masonry-tall', 'masonry-large', 'masonry-wide'];

    for (let i = 0; i < files.length; i++) {
        try {
            const dataUrl = await compressImage(files[i]);

            if (prevContainer) {
                const thumb = document.createElement('div');
                thumb.className = 'preview-thumb-card';
                thumb.innerHTML = `<img src="${dataUrl}" alt="Batch Upload">`;
                prevContainer.appendChild(thumb);
            }

            activePhotosConfig.POLAROID.push({
                src: dataUrl,
                caption: `Kenangan ${activePhotosConfig.POLAROID.length + 1}`
            });

            const randomSize = sizeOptions[i % sizeOptions.length];
            activePhotosConfig.GALLERY.push({
                src: dataUrl,
                size: randomSize
            });

        } catch (e) {
            console.error("Error processing file:", e);
        }
    }

    if (statusMsg) statusMsg.innerText = `✅ Berhasil menambahkan ${files.length} foto! Klik 'Simpan & Terapkan' di bawah.`;

    renderAdminPolaroidList();
    renderAdminGalleryList();
}

// Timeline Single Upload Handler
async function handleTimelineUpload(event, storyNum) {
    const file = event.target.files[0];
    if (!file) return;

    try {
        const dataUrl = await compressImage(file);
        activePhotosConfig.TIMELINE[storyNum] = dataUrl;
        const prevImg = document.getElementById(`prev-timeline-${storyNum}`);
        if (prevImg) prevImg.src = dataUrl;
    } catch (e) {
        console.error("Error timeline upload:", e);
    }
}

// Render Polaroid List in Modal
function renderAdminPolaroidList() {
    const container = document.getElementById('admin-polaroid-list');
    if (!container) return;

    container.innerHTML = '';

    activePhotosConfig.POLAROID.forEach((p, idx) => {
        const card = document.createElement('div');
        card.className = 'admin-item-card';
        card.innerHTML = `
            <div class="admin-img-preview-box">
                <img id="prev-pol-${idx}" src="${p.src}" alt="Polaroid ${idx + 1}">
            </div>
            <div class="admin-item-details">
                <input type="text" class="admin-text-input" value="${p.caption || ''}" placeholder="Tulis caption..." onchange="updatePolaroidCaption(${idx}, this.value)">
                <input type="file" accept="image/*,.heic,.heif" class="admin-file-input" onchange="replacePolaroidImage(event, ${idx})">
            </div>
            <button class="btn-remove-item" title="Hapus Foto Ini" onclick="removePolaroidSlot(${idx})">&times;</button>
        `;
        container.appendChild(card);
    });
}

function updatePolaroidCaption(index, text) {
    if (activePhotosConfig.POLAROID[index]) {
        activePhotosConfig.POLAROID[index].caption = text;
    }
}

async function replacePolaroidImage(event, index) {
    const file = event.target.files[0];
    if (!file) return;

    try {
        const dataUrl = await compressImage(file);
        activePhotosConfig.POLAROID[index].src = dataUrl;
        const prevImg = document.getElementById(`prev-pol-${index}`);
        if (prevImg) prevImg.src = dataUrl;
    } catch (e) {
        console.error("Error replacing polaroid:", e);
    }
}

function addPolaroidSlot() {
    activePhotosConfig.POLAROID.push({
        src: "assets/images/download (3).jpeg",
        caption: "Kenangan baru 💜"
    });
    renderAdminPolaroidList();
}

function removePolaroidSlot(index) {
    activePhotosConfig.POLAROID.splice(index, 1);
    renderAdminPolaroidList();
}

// Render Gallery List in Modal
function renderAdminGalleryList() {
    const container = document.getElementById('admin-gallery-list');
    if (!container) return;

    container.innerHTML = '';

    const sizes = [
        { val: 'masonry-square', label: 'Kotak (Square)' },
        { val: 'masonry-tall', label: 'Tinggi (Tall)' },
        { val: 'masonry-wide', label: 'Lebar (Wide)' },
        { val: 'masonry-large', label: 'Besar (Large)' }
    ];

    activePhotosConfig.GALLERY.forEach((g, idx) => {
        const card = document.createElement('div');
        card.className = 'admin-item-card';

        let sizeOptionsHtml = sizes.map(s => `<option value="${s.val}" ${g.size === s.val ? 'selected' : ''}>${s.label}</option>`).join('');

        card.innerHTML = `
            <div class="admin-img-preview-box">
                <img id="prev-gal-${idx}" src="${g.src}" alt="Galeri ${idx + 1}">
            </div>
            <div class="admin-item-details">
                <select class="admin-text-input" onchange="updateGallerySize(${idx}, this.value)">
                    ${sizeOptionsHtml}
                </select>
                <input type="file" accept="image/*,.heic,.heif" class="admin-file-input" onchange="replaceGalleryImage(event, ${idx})">
            </div>
            <button class="btn-remove-item" title="Hapus Foto Ini" onclick="removeGallerySlot(${idx})">&times;</button>
        `;
        container.appendChild(card);
    });
}

function updateGallerySize(index, sizeVal) {
    if (activePhotosConfig.GALLERY[index]) {
        activePhotosConfig.GALLERY[index].size = sizeVal;
    }
}

async function replaceGalleryImage(event, index) {
    const file = event.target.files[0];
    if (!file) return;

    try {
        const dataUrl = await compressImage(file);
        activePhotosConfig.GALLERY[index].src = dataUrl;
        const prevImg = document.getElementById(`prev-gal-${index}`);
        if (prevImg) prevImg.src = dataUrl;
    } catch (e) {
        console.error("Error replacing gallery image:", e);
    }
}

function addGallerySlot() {
    activePhotosConfig.GALLERY.push({
        src: "assets/images/download (15).jpeg",
        size: "masonry-square"
    });
    renderAdminGalleryList();
}

function removeGallerySlot(index) {
    activePhotosConfig.GALLERY.splice(index, 1);
    renderAdminGalleryList();
}

// Save & Reset Configuration
function saveAllPhotosConfig() {
    try {
        localStorage.setItem(PHOTO_STORAGE_KEY, JSON.stringify(activePhotosConfig));
        applyPhotosToApp();
        closeAdminModal();
        showToast("✨ Foto Berhasil Disimpan & Diterapkan!");
    } catch (e) {
        alert("Gagal menyimpan ke browser storage (mungkin ukuran foto terlalu besar). Coba kurangi jumlah foto!");
        console.error("Save failed:", e);
    }
}

function resetToDefaultPhotos() {
    if (confirm("Apakah kamu yakin ingin mengembalikan semua foto ke foto bawaan awal?")) {
        localStorage.removeItem(PHOTO_STORAGE_KEY);
        activePhotosConfig = loadPhotosConfig();
        applyPhotosToApp();
        closeAdminModal();
        showToast("↻ Foto Dikembalikan ke Default");
    }
}

// Export & Import Configuration across devices
function exportPhotosConfig() {
    try {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(activePhotosConfig));
        const downloadAnchor = document.createElement('a');
        downloadAnchor.setAttribute("href", dataStr);
        downloadAnchor.setAttribute("download", "foto_website_kita.json");
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        downloadAnchor.remove();
        showToast("📥 File Konfigurasi Foto Berhasil Diunduh");
    } catch (e) {
        alert("Gagal mengekspor foto.");
    }
}

function importPhotosConfig(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const imported = JSON.parse(e.target.result);
            if (imported && (imported.POLAROID || imported.GALLERY || imported.TIMELINE)) {
                activePhotosConfig = imported;
                saveAllPhotosConfig();
                showToast("✨ Berhasil Mengimpor Foto!");
            } else {
                alert("File konfigurasi tidak valid.");
            }
        } catch (err) {
            alert("Gagal membaca file konfigurasi.");
        }
    };
    reader.readAsText(file);
}
