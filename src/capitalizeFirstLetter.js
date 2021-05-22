export function capitalizeFirstLetter(string) {
    let stringToEdit = string.charAt(0).toUpperCase() + string.slice(1);
    
    if (stringToEdit.includes("-")) {
        const spaceIndex = stringToEdit.indexOf("-");
        let nameFirstPart = stringToEdit.slice(0, spaceIndex);

        if (nameFirstPart === "Mr") {
            nameFirstPart = nameFirstPart + ".";
        }

        let nameSecondPart = stringToEdit.slice(spaceIndex + 1);
        nameSecondPart = nameSecondPart.charAt(0).toUpperCase() + nameSecondPart.slice(1);

        return nameFirstPart + " " + nameSecondPart;
    }

    return stringToEdit;
}