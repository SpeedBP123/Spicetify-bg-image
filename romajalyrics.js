// romajaLyrics.js
// Spicetify Extension: Convert Korean lyrics into Romaja (romanisation)

//
// --- Hangul → Romaja Converter ---
// Based on Revised Romanisation system
//

const INITIAL = ["g","kk","n","d","tt","r","m","b","pp","s","ss","","j","jj","ch","k","t","p","h"];
const VOWEL = ["a","ae","ya","yae","eo","e","yeo","ye","o","wa","wae","oe","yo","u","weo","we","wi","yu","eu","ui","i"];
const FINAL = ["","k","k","ks","n","nj","nh","t","l","lk","lm","lb","ls","lt","lp","lh","m","p","ps","t","t","ng","t","t","k","t","p","t"];

function hangulToRomaja(text) {
    let result = "";

    for (let i = 0; i < text.length; i++) {
        const code = text.charCodeAt(i);

        // Hangul Syllable block range
        if (code >= 0xAC00 && code <= 0xD7A3) {
            const sIndex = code - 0xAC00;

            const iConsonant = Math.floor(sIndex / 588);
            const vVowel = Math.floor((sIndex % 588) / 28);
            const fConsonant = sIndex % 28;

            result += INITIAL[iConsonant] + VOWEL[vVowel] + FINAL[fConsonant];
        } else {
            // Non-Korean characters stay the same
            result += text[i];
        }
    }

    return result;
}

//
// --- Lyrics Processing ---
//

function processLyrics() {
    const lyricsEl = document.querySelector('[data-testid="lyrics-container"]');
    if (!lyricsEl) return;

    const lines = lyricsEl.querySelectorAll("span");
    lines.forEach(span => {
        span.textContent = hangulToRomaja(span.textContent);
    });
}

//
// --- Run Extension ---
//
(function lyricRomaja() {
    if (!Spicetify?.Platform) {
        setTimeout(lyricRomaja, 300);
        return;
    }

    const observer = new MutationObserver(() => {
        processLyrics();
    });

    observer.observe(document.body, { childList: true, subtree: true });
})();
