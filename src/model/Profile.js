const { update } = require("../controllers/ProfileController");

let data = {
    name: "Diego",
    avatar: "https://avatars.githubusercontent.com/u/70728380?v=4",
    "monthly-budget": 3000,
    "days-per-week": 5,
    "hours-per-day": 5,
    "vacation-per-year": 4,
    "value-hour": 75
};

module.exports = {
    get() {
        return data;
    },

    update(newData) {
        data = newData;
    }
};
//quem manda nos dados é o model