//T3

function handleObject (obj, key, action) {
 
    switch (action) {
        case "get":
            return obj[key];
        case "add":
            obj[key] = '';
            return obj;
        case "delete":
            delete obj[key];
            return obj;
        default:
            alert(`Я добавил default case, и еще ознакомился с hasOwnProperty, но не понял куда его тут можно использовать`);
    };
};

const student = {
    name: "Maxim",
    programmingLanguage: "JavaScript"
  };

  const result = handleObject(student, "programmingLanguage", "get");
  console.log(result);
  const result2 = handleObject(student, "programmingLanguage", "add");
  console.log(result2);
  const result3 = handleObject(student, "programmingLanguage", "delete");
  console.log(result3);
  const result4 = handleObject(student, "programmingLanguage");
  console.log(result4);

