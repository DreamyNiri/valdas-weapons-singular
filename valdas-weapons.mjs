import registerBaseSettingsValda from "./settings.mjs";

function PrepareWeaponProfs() {
  const conf = CONFIG.DND5E;
  if (game.settings.get("valdas-weapons", "exotic-weapons")) {
    conf.weaponProficiencies['exo'] = "Exotic Weapons";
    conf.weaponProficienciesMap['exoticM'] = 'exo';
    conf.weaponProficienciesMap['exoticR'] = 'exo';

    conf.weaponTypes['exoticM'] = 'Exotic Melee';
    conf.weaponTypes['exoticR'] = 'Exotic Ranged';

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

  var weaponIds = [
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

  weaponIds.forEach(el => {
    conf.weaponIds[el.name] = "valdas-weapons.weapons-valda." + el.id;
  });

  // ---------------------------- //
  // AMMO
  var ammunition = [
    { abbr: "ballistabolt", id: "JkJM2jXIuWnxOmg3", name: "" },
    { abbr: "needles", id: "60b4tYM3Rp9gp1gO", name: "" },
    { abbr: "greatbowarrow", id: "b9qtV3prku5nNzlj", name: "" },
    { abbr: "javelinatlatl", id: "9pFndNn45SJ3c08v", name: "" },
    { abbr: "slingbullet", id: "bYwhpxUPdFMOAMkB", name: "" },
  ];

  // ammunition.forEach(ammo => {
  //   CONFIG.DND5E.ammoIds[ammo.abbr] = `valdas-weapons.weapons-valda.${ammo.id}`;
  //   CONFIG.DND5E.consumableTypes.ammo.subtypes[ammo.abbr] = ammo.name;
  // });

  // ---------------------------- //

  if (game.settings.get("valdas-weapons", "firearm-proficiency")) {
    CONFIG.DND5E.weaponProficiencies["simf"] = "Simple Firearms";
    CONFIG.DND5E.weaponProficiencies["marf"] = "Martial Firearms";

    CONFIG.DND5E.weaponProficienciesMap["simpleF"] = "simf";
    CONFIG.DND5E.weaponProficienciesMap["martialF"] = "marf";

    CONFIG.DND5E.weaponTypes["simpleF"] = "Simple Firearms";
    CONFIG.DND5E.weaponTypes["martialF"] = "Martial Firearms";

    var firearms = [
      //Modern
      { name: "handgun", id: "iurfPwCcgixLBxIE" },
      { name: "submachinegun", id: "WPwQTIHPiKg8slYl" },
      //Industrial
      { name: "sawedoffshotgun", id: "dkUT1mbg2vmUv5jV" },
      { name: "revolver", id: "cbpaTxyL6ibROCVD" },
      { name: "doublebarrelshotgun", id: "PkWXm9bZYsClaJEz" },
      { name: "gatlinggun", id: "H1bzrKyI2pVjJizZ" },

      { name: "assaultrifle", id: "DLvtDWfYf76EECwA" },
      { name: "grenadelauncher", id: "3HdS6rebNb2bkz8G" },
      { name: "magnum", id: "BuhIlmEaz6EuIgXM" },
      { name: "pumpshotgun", id: "v7IN3vXTaPXQZZ5V" },
      { name: "rocketlauncher", id: "EoHHgkZGoL99PVmu" },
      { name: "sniperrifle", id: "SVr7bGaTw3FZsC6P" }
    ]

    
    var ammunitionFirearm = [
      { abbr: "bullet", id: "Ku6kXugCECpSvyTC", name: "Bullet" },
      { abbr: "grenade", id: "tQu7k2BVVCd2VwPt", name: "Grenade" },
      { abbr: "rocket", id: "rDlgaum10X6jZZQ3", name: "Rocket" },
      { abbr: "shell", id: "8f2K2MrWkk4z6kTp", name: "Shell" },
    ];

    ammunitionFirearm.forEach(ammo => {
      CONFIG.DND5E.ammoIds[ammo.abbr] = `valdas-weapons.weapons-valda.${ammo.id}`;
      CONFIG.DND5E.consumableTypes.ammo.subtypes[ammo.abbr] = ammo.name;
    });


    if (game.settings.get("valdas-weapons", "exotic-weapons")) {
      CONFIG.DND5E.weaponProficiencies["exof"] = "Exotic Firearms";
      CONFIG.DND5E.weaponProficienciesMap["exoticF"] = "exof";
      CONFIG.DND5E.weaponTypes["exoticF"] = "Exotic Firearms";

      firearms.push(
        { name: "antimaterialrifle", id: "lL08ue1wvtv1rn5h" },
        { name: "assaultshotgun", id: "f7LfS9oILjh372hR" },
        { name: "briefcasegun", id: "GA0uB8HmFbBBVXYG" },
        { name: "explosivemagnum", id: "nSmY1kGckGdbpnnr" },
        { name: "multirocketlauncher", id: "VWp3Ds5YcCAKVgBT" },
        { name: "revolvinggrenadelauncher", id: "o6O27HpzsVweSauj" }
      )
    }


    firearms.forEach(el => {
      conf.weaponIds[el.name] = "valdas-weapons.weapons-valda." + el.id;
    });
  }

  //ammoIds armorProficiencies[exolgt] armorProficienciesMap exolight = exolgt armorIds["banded"] = id 
}

function prepareWeaponProperties() {
  var weaponProp = {
    automatic: "Automatic",
    concealable: "Concealable",
    double: "Double",
    dry: "Dry",
    elegant: "Elegant",
    explosive: "Explosive",
    fist: "Fist",
    foregrip: "Foregrip",
    heat: "Heat",
    massive: "Massive",
    misfire: "Misfire",
    mounted: "Mounted",
    parrying: "Parrying",
    precision: "Precision",
    returning: "Returning",
    rocket: "Rocket",
    scatter: "Scatter",
    sighted: "Sighted",
    superheavy: "Superheavy",
    switch: "Switch",
    tension: "Tension",
    trip: "Trip",
    twinshot: "Twinshot"
  }

  for (const [key, name] of Object.entries(weaponProp)) {
    CONFIG.DND5E.itemProperties[key] = {
      label: name
    }
    CONFIG.DND5E.validProperties.weapon.add(key);
  }
}

Hooks.once("init", () => {
  registerBaseSettingsValda();

  prepareWeaponProperties();
  PrepareWeaponProfs();
});