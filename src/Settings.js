import SettingsListener from "./SettingsListener";

//To change the starting settings, switch the two booleans
const DEFAULT_ALBANIAN_VISIBILITY = false;
const DEFAULT_ENGLISH_VISIBILITY = true;
const CURRENCY_CONVERSION_UPDATE = 60000; //every 60 seconds

/**
 * Defines a collection of global settings that can be subscribed to in order to update React components automatically.
 * The currently defined settings to subscribe to are:
 *  albanianVisible: whether elements that use an Albanian translation are visible.
 *  englishVisible: whether elements that use an English translation are visible.
 *  disabledMenuItem: the item in the navigation bar that should be disabled. Also the currently opened web page.
 */
class Settings {
    constructor() {
        this.albanianVisible = new SettingsListener(DEFAULT_ALBANIAN_VISIBILITY);
        this.englishVisible = new SettingsListener(DEFAULT_ENGLISH_VISIBILITY);
        if(window.location.pathname === '/')
            this.disabledMenuItem = new SettingsListener("Home");
        else
            this.disabledMenuItem = new SettingsListener(window.location.pathname.substring(1));

        this.lekPerEuro = new SettingsListener(0);

        var that = this;
        function updateConversionRatio() {
            //apr key: https://api.exchangerate-api.com/v4/latest/EUR
            fetch("https://api.exchangerate-api.com/v4/latest/EUR")
                .then(response => response.json())
                .then(json => that.lekPerEuro.setState(json.rates.ALL))
                .catch(err => that.lekPerEuro.setState(117));
        }

        updateConversionRatio();
        setInterval(updateConversionRatio, CURRENCY_CONVERSION_UPDATE);
    }
}
    
const settings = new Settings();
export {settings, DEFAULT_ALBANIAN_VISIBILITY, DEFAULT_ENGLISH_VISIBILITY};