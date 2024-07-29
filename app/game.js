import {
    Quote
} from './quote.js'

class Game {
    currentStep = 0;
    lastStep = 8;

    quotes = [{
            text: "pan tadeusz",
            category: "Utwór literacki"
        },
        {
            text: "janko muzykant",
            category: "Utwór literacki"
        },
        {
            text: "akademia pana lleksa",
            category: "Film"
        },
        {
            text: "ogniem i mieczem",
            category: "Utwór literacki"
        },
    ];

    constructor({
        lettersWrapper,
        categoryWrapper,
        wordWrapper,
        outputWrapper
    }) {
        this.lettersWrapper = lettersWrapper;
        this.categoryWrapper = categoryWrapper;
        this.wordWrapper = wordWrapper;
        this.outputWrapper = outputWrapper;

        const {
            text,
            category
        } = this.quotes[Math.floor(Math.random() * this.quotes.length)];
        this.categoryWrapper.innerHTML = category;
        this.quote = new Quote(text);
    }

    guess(letter, event) {
        event.target.disabled = true;
        if (this.quote.quess(letter)) {
            this.drawQuote();
        } else {
            this.currentStep++;
            document.getElementsByClassName('step')[this.currentStep].style.opacity = 1;
            if (this.currentStep == this.lastStep) {
                this.loosing();
            }
        }


    }

    drawLetters() {
        for (let i = 0; i < 26; i++) {
            const label = (i + 10).toString(36);
            console.log(label);
            const button = document.createElement('button');
            button.innerHTML = label;
            button.addEventListener('click', (event) => {
                this.guess(label, event)
            })
            this.lettersWrapper.appendChild(button);

        }
    }

    drawQuote() {
        const content = this.quote.getContent();
        this.wordWrapper.innerHTML = content;
        if (!content.includes('_')) {
            this.winning();
        }
    }

    start() {
        document.getElementsByClassName('step')[this.currentStep].style.opacity = 1;
        this.drawLetters();
        this.drawQuote();
    }

    winning() {
        this.wordWrapper.innerHTML = 'Gratulacje! Wygrałeś! Koniec gry.';
        this.letter.innerHTML = '';
    }

    loosing() {
        this.wordWrapper.innerHTML = 'Przegrałeś! Koniec gry.';
        this.letter.innerHTML = '';
    }
}

const game = new Game({
    lettersWrapper: document.getElementById('letters'),
    categoryWrapper: document.getElementById('category'),
    wordWrapper: document.getElementById('word'),
    outputWrapper: document.getElementById('output'),
});
game.start();