// T4

class Dictionary {
    constructor(name) {
        this.name = name;
        this.words = {};
    }
    add(word, description) {
        if (!this.words[word]) {
            this.words[word] = {
                word : String(word),
                description : String(description),
                    };
                };

        } 
    remove(word) {
        delete this.words[word];
    }
    get(word) {
        return this.words[word];
    }
    showAllWords() {
        for(const key in this.words) {
            console.log(`${key} - ${this.words[key].description}`)
        };
    };
}

class HardWordsDictionary extends Dictionary {
    constructor(name) {
        super(name); 
    }
    add(word, description) {
        if (!this.words[word]) {

        this.words[word] = {
        word : String(word),
        description : String(description),
        isDifficult: true,
        };
        
    }
  };
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