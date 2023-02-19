function phoneShop (input) {
    let phones = input.shift().split(", ");

    for (let i = 0; i < input.length; i++) {
        let [command, value] = input[i].split(" - ");

        switch (command) {
            case "Add":
                if (!phones.includes(value)) {
                    phones.push(value);
                }
                break;
            case "Remove":
                if (phones.includes(value)) {
                    let index = phones.indexOf(value);
                    phones.splice(index, 1);
                }
                break;
            case "Bonus Phone":
                let [oldPhone, newPhone] = value.split(":");
                if (phones.includes(oldPhone)) {
                    let index = phones.indexOf(oldPhone);
                    phones.splice(index + 1, 0, newPhone);
                }
                break;
            case "Last":
                if (phones.includes(value)) {
                    let index = phones.indexOf(value);
                    phones.splice(index, 1);
                    phones.push(value);
                }
                break;
            case "End":
                console.log(phones.join(", "));
                break;
        }
    }
}

phoneShop(["HuaweiP20, XiaomiNote",
    "Remove - Samsung",
    "Bonus Phone - XiaomiNote:Iphone5",
    "End"]);
