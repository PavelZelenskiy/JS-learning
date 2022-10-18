// T3

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
        }
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
    }
};

const dictionary = new Dictionary("Толковый словарь");
console.log(dictionary);
dictionary.add("JavaScript", "популярный язык программирования");
dictionary.add(
    "Веб-разработчик",
    "Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие"
  );
// dictionary.add("Java", "Привет");
// dictionary.remove("Java")
// console.log(dictionary.get("Веб-разработчик"))
dictionary.remove("JavaScript");
dictionary.showAllWords();