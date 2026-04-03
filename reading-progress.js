// reading-progress.js
export class ReadingProgress {
    constructor() {
        this.progressBar = document.getElementById('reading-progress-bar');
        this.prompt = document.getElementById('resume-prompt');
        this.btnYes = document.getElementById('resume-yes');
        this.btnNo = document.getElementById('resume-no');
        
        this.storageKey = 'aboutPageScrollPos';
        
        this.init();
    }

    init() {
        // 1. Check for saved position
        const savedPos = sessionStorage.getItem(this.storageKey);
        
        // If there's a meaningful saved position (> 200px), show the prompt
        if (savedPos && parseInt(savedPos) > 200) {
            this.showPrompt(parseInt(savedPos));
        }

        // 2. Listen to scrolling to update progress and save state
        window.addEventListener('scroll', () => this.handleScroll());
        
        // 3. Set up prompt buttons
        if (this.btnYes && this.btnNo) {
            this.btnYes.addEventListener('click', () => this.resume(parseInt(savedPos)));
            this.btnNo.addEventListener('click', () => this.dismiss());
        }
    }

    handleScroll() {
        // Calculate scroll percentage
        const scrollTop = window.scrollY;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;

        // Update CSS width of the bar
        if (this.progressBar) {
            this.progressBar.style.width = `${scrollPercent}%`;
        }

        // Save position to sessionStorage
        sessionStorage.setItem(this.storageKey, scrollTop);
    }

    showPrompt(position) {
        this.prompt.classList.remove('hidden');
        this.prompt.classList.add('visible');
    }

    resume(position) {
        window.scrollTo({ top: position, behavior: 'smooth' });
        this.dismiss();
    }

    dismiss() {
        this.prompt.classList.remove('visible');
        this.prompt.classList.add('hidden');
        // Clear the storage so it doesn't prompt again if they dismiss it
        sessionStorage.removeItem(this.storageKey); 
    }
}
