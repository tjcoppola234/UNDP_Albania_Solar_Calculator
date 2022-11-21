import SettingsListener from "./SettingsListener";

//To change the starting settings, switch the two booleans
const DEFAULT_ALBANIAN_VISIBILITY = false;
const DEFAULT_ENGLISH_VISIBILITY = true;

class Settings {
    constructor(){
        this.albanianVisible = new SettingsListener(DEFAULT_ALBANIAN_VISIBILITY);
        this.englishVisible = new SettingsListener(DEFAULT_ENGLISH_VISIBILITY);
        if(window.location.pathname === '/') {
            this.disabledMenuItem = new SettingsListener("Calculator");
        } else {
            this.disabledMenuItem = new SettingsListener(window.location.pathname.substring(1));
        }
    }
}
    
const settings = new Settings();
export {settings, DEFAULT_ALBANIAN_VISIBILITY, DEFAULT_ENGLISH_VISIBILITY};