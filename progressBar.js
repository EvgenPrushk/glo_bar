'use strick';

class ProgressBar{
    constructor(option = {}){
        const { 
            start = 10,
            end = 30,
            bg = 'green',
            height = 20,
            textColor = 'white',
            border = '1px solid black',
        } = option;

        this.start = start;
        this.end = end;
        this.bg = bg;
        this.height = height;
        this.textColor = textColor;
        this.border = border;
    }

    init(selector) {
        document.querySelector(selector).append(this.createProgressBar());
        
        
    }

    createProgressBar() {
        const progressBar = document.createElement('div');
        const bar = this.createBar();
        progressBar.append(bar);
        progressBar.style.width = '100%';
        progressBar.style.border = this.border;
        animatebar
        return  progressBar;
        

    }

    createBar() {
        const bar = document.createElement('div');
        
        bar.style.cssText = `
        text-align: center;
        background-color: ${this.bg};
        height: ${this.height}px;
        line-height: ${this.height}px;
        color: ${this.textColor};
        `;

        this.stateProgress(bar);

        return bar;
    }

    stateProgress(elem) {
        elem.style.width = `${this.start}%`;
        elem.textContent = `${this.start}%`;
    }
}




