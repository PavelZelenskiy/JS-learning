//T2

function showSuccessMessage(message) {
    console.log(message)
};

function showErrorMessage(message) {
    console.error(message)
};

function checkTextOnErrorSymbol(text, errorSymbol, successCallback, errorCallback) {
    let error = 'false';
    for (let i = 0; i < text.length; i++) {
        if (text[i] === errorSymbol) {
            error = 'true'
            errorCallback(showErrorMessage(`Найден запрещенный символ ${text[i]} под индексом ${i}`));
        };
    };
    if (error === 'false') {
        successCallback(showSuccessMessage(`В данном тексте нет запрещенных символов`))
    };
};

let text = "Привет! Как дела! Давно мы с тобой не виделись.";
checkTextOnErrorSymbol(text, "а", showSuccessMessage, showErrorMessage);
text = "Привет! Кк дел! Двно мы с тобой не виделись.";
checkTextOnErrorSymbol(text, "а", showSuccessMessage, showErrorMessage);