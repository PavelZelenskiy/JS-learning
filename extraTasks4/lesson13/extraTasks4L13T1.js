// T1

class Dictionary {
    #name;
    #words;
    constructor(name) {
        this.#name = name;
        this.#words = {};
    };

    get mainName() {
        return this.#name
    };

    set mainName(name) {
        this.#name = name
    };

    get allWords() {
        return this.#words
    };

    _addNewWord(wordKey, wordObj) {
        this.#words[wordKey] = wordObj;
    };

    add(word, description) {
        const wordKey = word;
        const wordObj = {
            word: String(word),
            description: String(description),
            isDifficult: true,
        };
        if (!this.#words[wordKey]) {
            this._addNewWord(wordKey, wordObj)
        };

    } ;

    remove(word) {
        delete this.allWords[word];
    };

    get(word) {
        return this.words[word];
    };

    showAllWords() {
        for(const key in this.allWords) {
            console.log(`${key} - ${this.allWords[key].description}`)
        };
    };
}

class HardWordsDictionary extends Dictionary {
    constructor(name) {
        super(name); 
    }
};

const hardWordsDictionary = new HardWordsDictionary("Сложные слова");
hardWordsDictionary.add(
    "дилетант",
    "Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями."
  );
//   hardWordsDictionary.showAllWords();
  hardWordsDictionary.add(
    "неологизм",
    "Новое слово или выражение, а также новое значение старого слова."
  );
//   hardWordsDictionary.showAllWords();
  hardWordsDictionary.add(
    "квант",
    "Неделимая часть какой-либо величины в физике."
  );
//   hardWordsDictionary.showAllWords();
hardWordsDictionary.remove("неологизм");
hardWordsDictionary.showAllWords();

console.log(hardWordsDictionary.mainName);
hardWordsDictionary.mainName = 'Новый словарь';
console.log(hardWordsDictionary.mainName);
console.log(hardWordsDictionary.allWords);


