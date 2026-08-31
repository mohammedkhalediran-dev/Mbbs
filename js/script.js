class LectureMate {
    constructor() {
        this.themeToggleBtn = document.getElementById('toggle-theme-btn');
        this.generateMcqBtn = document.getElementById('generate-mcq-btn');

        this.init();
    }

    init() {
        this.bindEvents();
        this.loadSavedTheme();
    }

    bindEvents() {
        if (this.themeToggleBtn) {
            this.themeToggleBtn.addEventListener('click', () => this.toggleTheme());
        }
        if (this.generateMcqBtn) {
            this.generateMcqBtn.addEventListener('click', () => this.generateMCQ());
        }
    }

    toggleTheme() {
        const body = document.body;
        if (body.getAttribute('data-theme') === 'dark') {
            body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        } else {
            body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    }

    loadSavedTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.setAttribute('data-theme', 'dark');
        }
    }

    generateMCQ() {
        alert("جارٍ تحليل النص الحالي (Oxidative Phosphorylation)...\n\nسيتم إرسال أسئلة المراجعة (MCQ) إلى بوت التيليجرام الخاص بك لبرمجتها كاختبار تفاعلي.");
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new LectureMate();
});
