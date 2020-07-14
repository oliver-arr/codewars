const list = (names) => {
  return names.reduce((formattedNames, currentName, index) => {
    if (names.length === 1) {
      formattedNames += currentName.name;
    } else if (names.length === 2) {
      formattedNames += currentName.name;

      if (names.length - 2 === index) {
        formattedNames += " & ";
      }
    } else {
      formattedNames += `${currentName.name}`;

      if (names.length - 2 !== index && names.length - 1 !== index) {
        formattedNames += ", ";
      }

      if (names.length - 2 === index) {
        formattedNames += " & ";
      }
    }

    return formattedNames;
  }, "");
};

module.exports = list;
