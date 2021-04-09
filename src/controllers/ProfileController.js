const Profile = require('../model/Profile');

module.exports = {
    async index(req, res) {
        return res.render("profile", { profile: await Profile.get() });
    },

    async update(req, res) {
        // req.body para pegar dados - 
        const data = req.body;
        //definir quantas semanas tem um ano - 
        const weeksPerYear = 52;
        //remover férias do ano para pegar qauntas semanas tem em 1 mes
        const weeksPerMonth = (weeksPerYear -data["vacation-per-year"]) / 12;
        //quantas horas por semana estou trabalhando - 
        const weekTotalHours = data["hours-per-day"] * data["days-per-week"];
        //total de hroas trabalhadas no mês
        const monthlyTotalHours = weekTotalHours * weeksPerMonth;
        //qual valor da minha hora
        const valueHour = data["monthly-budget"] / monthlyTotalHours;

        const profile = await Profile.get();

        await Profile.update({
            ...profile,
            ...req.body,
            "value-hour": valueHour
        });
       //controller pede pro update que fica no model atualizar os daos para ele
        return res.redirect('/profile');
    }
}