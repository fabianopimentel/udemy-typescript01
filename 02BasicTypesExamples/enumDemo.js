function enumExample() {
    var championsBrazilianCup;
    (function (championsBrazilianCup) {
        championsBrazilianCup[championsBrazilianCup["Vasco"] = 0] = "Vasco";
        championsBrazilianCup[championsBrazilianCup["Flamengo"] = 1] = "Flamengo";
        championsBrazilianCup[championsBrazilianCup["Botafogo"] = 2] = "Botafogo";
        championsBrazilianCup[championsBrazilianCup["Fluminense"] = 3] = "Fluminense";
    })(championsBrazilianCup || (championsBrazilianCup = {}));
    ;
    var wins = championsBrazilianCup.Flamengo;
    switch (wins) {
        case championsBrazilianCup.Vasco:
            console.log("Vasco: 4 Times | 1974, 1989, 1997 and 2000");
            break;
        case championsBrazilianCup.Flamengo:
            console.log("Flamengo: 4 Times | 1980, 1982, 1983, and 2009");
            break;
        case championsBrazilianCup.Botafogo:
            console.log("Botafogo: 2 Times | 1968 and 1995");
            break;
        case championsBrazilianCup.Fluminense:
            console.log("Fluminese: 4 Times | 1970, 1984, 2010 and 2012");
            break;
    }
}
enumExample();
//# sourceMappingURL=enumDemo.js.map