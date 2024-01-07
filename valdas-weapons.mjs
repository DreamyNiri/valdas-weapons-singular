import registerBaseSettingsValda from "./settings.mjs";

function PrepareWeaponProfs() {
  var conf = CONFIG.DND5E;
  conf.weaponProficiencies['exo'] = "Exotic Weapons";
  conf.weaponProficienciesMap['exoticM'] = 'exo';
  conf.weaponProficienciesMap['exoticR'] = 'exo';

  conf.weaponTypes['exoticM'] = 'Exotic Melee';
  conf.weaponTypes['exoticR'] = 'Exotic Ranged';

  if (game.settings.get("valdas-weapons", "exotic-weapons")) {

    var exotic = [
      // Exotic Melee
      { name: "assassin", id: "Pz22jHzJtnsESwmw" },
      { name: "bastard", id: "6SvAU9JMs31lCdF4" },
      { name: "chainwhip", id: "h6uNSk5qMmvwkvhM" },
      { name: "dervish", id: "6G4LozbYzyMVX5jx" },
      { name: "direflail", id: "tGVrsjalB9tDYkDZ" },
      { name: "doublesword", id: "Nta2v7p7gp0SteQa" },
      { name: "dwarvenwaraxe", id: "2q6mvGx3KRWSlWN0" },
      { name: "elvenfoil", id: "u2RzzjRFqcjqwJkC" },
      { name: "gnhookham", id: "nFk3eT4nu4cgfElR" },
      { name: "greatspear", id: "3EB9cQ0kqG0WF62N" },
      { name: "grimscythe", id: "DUJXWBB9luaDB6eP" },
      { name: "hooksword", id: "I9SJChu8ZjrAW8gy" },
      { name: "meteorchain", id: "VBhk67Fi1MwQHceh" },
      { name: "meteorcleaver", id: "tvvYRIDVXEiZKGyS" },
      { name: "parryingdag", id: "Zd12Wupq31aihdN4" },
      { name: "rocketfist", id: "EpPuGRUKw94dXrWg" },
      { name: "spikedchain", id: "deBsrkuNget8IjYE" },
      { name: "springglove", id: "xbOWz6C4BbytKS7g" },
      { name: "zweihander", id: "kxCktHg5OGS4lTvl" },

      // Exotic Ranged
      { name: "crossbowauto", id: "eU7PaPHFqpquRQUH" },
      { name: "bomb", id: "FTl7wvY753rJJM3y" },
      { name: "boomeraxe", id: "7C1E9E1Y1Ndur3uj" },
      { name: "demolitionbow", id: "b2YLddZVGIdXJ5Ck" },
      { name: "doomerang", id: "aLJ6zBLANpmD8syZ" },
      { name: "edgedcard", id: "NIwqYr9RJl1Bh2de" },
      { name: "elvenlongbow", id: "5QhoSq3xYmx6WWyQ" },
      { name: "goliathsling", id: "KYMDDFpqsyXhxBYo" },
      { name: "greatbow", id: "CX6047mPvAzWq2eT" },
      { name: "portballista", id: "fvjVi4tZgyGWBfvz" },
      { name: "shotbow", id: "ZX38mHujo0LRBWjw" },
      { name: "crossbowsniper", id: "uA36jibJXQ3EtWQI" },
      { name: "twinbow", id: "agn37XCWVNmBhbH0" },
      { name: "crossbowwrist", id: "HU4L76YdfwwQ6Qjd" }
    ];

    exotic.forEach(el => {
      conf.weaponIds[el.name] = "valdas-weapons.weapons-valda." + el.id;
    });
  }

  var wIds = [
    // Martial Melee
    { name: "bayonet", id: "ui2mBESo9pSeyGHb" },
    { name: "catchpole", id: "ThzFjWeDCkUlWEHM" },
    { name: "cutlass", id: "qhvH1zQG9QapTF4s" },
    { name: "estoc", id: "C29HlIS1DgHOTnLN" },
    { name: "harpoon", id: "ACErWJssHiFRW9dP" },
    { name: "katana", id: "XaGxKP4Ves8c3HGh" },
    { name: "knopesh", id: "XhM1W48lqYkSDQUL" },
    { name: "naginata", id: "JGg6bttKLoX4WXHb" },
    { name: "nunchaku", id: "NWRmSAcWM0IUOw4o" },

    // Martial ranged
    { name: "atlatl", id: "9x5wcGbCHy2EHkmd" },
    { name: "boomerang", id: "VCGsmkhcUkERD5Wm" },
    { name: "chakram", id: "2tL8b6K82eYuQ9XY" },
    { name: "crossbowrepeating", id: "wyMYV5x1uB9csejs" },
    { name: "throwingdagger", id: "HrzWl3LtIxoAMYrx" },

    // Simple Melee
    { name: "cestus", id: "T9iQYj1wlR9HukRX" },
    { name: "clawgauntlet", id: "t8jK7pzxhgiRTAbc" },
    { name: "fishhook", id: "7WbzibPtVGzz8YUN" },
    { name: "hookhand", id: "tsNNl2ddP3UIuY38" },
    { name: "kama", id: "AHudhKO5wivfZBxg" },
    { name: "machete", id: "MgCjwh4IsWCDMpBN" },
    { name: "pickaxe", id: "bCCtJGkPXSqIkDPl" },
    { name: "punchingd", id: "oJr7UFEh5mXWsuJv" },
    { name: "sai", id: "sInbcWV3mFIGgyZy" },
    { name: "scorpiononst", id: "GXOlaARCYO2Pbqw6" },
    { name: "shovel", id: "9LJqR3Ic7iCRXvZc" },
    { name: "tonfa", id: "Hf2fG8SDgQOy5qyC" },

    // Simple ranged
    { name: "bolas", id: "JKfmfVEzkdyIMYqE" },
    { name: "shuriken", id: "Dfb3iaH0xOCIAmyh" },
  ]

  wIds.forEach(el => {
    conf.weaponIds[el.name] = "valdas-weapons.weapons-valda." + el.id;
  });


  conf.weaponProperties['automatic'] = 'Automatic';
  conf.weaponProperties['concealable'] = 'Concealable';
  conf.weaponProperties['double'] = 'Double';
  conf.weaponProperties['dry'] = 'Dry';
  conf.weaponProperties['elegant'] = 'Elegant';
  conf.weaponProperties['explosive'] = 'Explosive';
  conf.weaponProperties['fist'] = 'Fist';
  conf.weaponProperties['foregrip'] = 'Foregrip';
  conf.weaponProperties['heat'] = 'Heat';
  conf.weaponProperties['massive'] = 'Massive';
  conf.weaponProperties['misfire'] = 'Misfire';
  conf.weaponProperties['mounted'] = 'Mounted';
  conf.weaponProperties['parrying'] = 'Parrying';
  conf.weaponProperties['precision'] = 'Precision';
  conf.weaponProperties['returning'] = 'Returning';
  conf.weaponProperties['rocket'] = 'Rocket';
  conf.weaponProperties['scatter'] = 'Scatter';
  conf.weaponProperties['sighted'] = 'Sighted';
  conf.weaponProperties['superheavy'] = 'Superheavy';
  conf.weaponProperties['switch'] = 'Switch';
  conf.weaponProperties['tension'] = 'Tension';
  conf.weaponProperties['trip'] = 'Trip';
  conf.weaponProperties['twinshot'] = 'Twinshot';

  if (game.settings.get("valdas-weapons", "firearm-proficiency")) {

  }

  //ammoIds armorProficiencies[exolgt] armorProficienciesMap exolight = exolgt armorIds["banded"] = id 
}

Hooks.once("init", () => {
  registerBaseSettingsValda();

  PrepareWeaponProfs();
});