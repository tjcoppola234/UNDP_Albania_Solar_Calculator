import SettingsListener from "./SettingsListener";

//To change the starting settings, switch the two strings
const DEFAULT_ALBANIAN_VISIBILITY = "invisible";
const DEFAULT_ENGLISH_VISIBILITY = "";

class Settings {
    constructor(initAlb, initEng){
        this.albanianVisible = new SettingsListener(initAlb);
        this.englishVisible = new SettingsListener(initEng);
        if(window.location.pathname === '/') {
            this.disabledMenuItem = new SettingsListener("Calculator");
        } else {
            this.disabledMenuItem = new SettingsListener(window.location.pathname.substring(1));
        }
    }
}
    
const settings = new Settings(DEFAULT_ALBANIAN_VISIBILITY, DEFAULT_ENGLISH_VISIBILITY);
export {settings, DEFAULT_ALBANIAN_VISIBILITY, DEFAULT_ENGLISH_VISIBILITY};