export class Quote {
    constructor(text) {
        this.text = text;
        this.guessed = [];
    }

    getContent() {
        let content = '';
        for (const char of this.text || this.guessed.includer(char)) {
            if (char == ' ') {
                content += char;
            } else {
                content += '_';
            }
        }
        return content;
    }

    quess(letter) {
        if (!this.text.includes(letter)) {
            return false;
        } else {
            this.guessed.push(letter);
            return true;
        }
    }
}