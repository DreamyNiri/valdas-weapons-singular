export default function registerBaseSettingsValda() {
    game.settings.register("valdas-weapons", "exotic-weapons", {
        name: "Enable Exotic Weapons",
        hint: "Enables separate exotic weapon proficiencies to be added to the list of choosable options.",
        scope: "world",
        config: true,
        default: false,
        type: Boolean,
        requiresReload: true
    });

    game.settings.register("valdas-weapons", "exotic-armor", {
        name: "Enable Exotic Armors",
        hint: "Enables separate exotic armor proficiencies to be added to the list of choosable options.",
        scope: "world",
        config: true,
        default: false,
        type: Boolean,
        requiresReload: true
    });

    game.settings.register("valdas-weapons", "firearm-proficiency", {
        name: "Enable Firearm Proficiencies and Weapon Features",
        hint: "Activates firearms and enables them as a separate weapon type",
        scope: "world",
        config: true,
        default: false,
        type: Boolean,
        requiresReload: true
    });
}