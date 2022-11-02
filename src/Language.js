//To change the starting language, switch the two strings
const DEFAULT_ALBANIAN_VISIBILITY = "invisible";
const DEFAULT_ENGLISH_VISIBILITY = "";

class Language {
    constructor(initAlb, initEng){
        this.state = {albanianVisible: initAlb, englishVisible: initEng}
        this.listeners = [];
    } 

    addListener (listener) {
        this.listeners.push(listener);
        const removeListener = () => {
            this.listeners = this.listeners.splice(this.listeners.indexOf(listener), 1);
        };
        return removeListener;
    }

    getState() {
        return this.state;
    }

    setState(albanianVis, englishVis) {
        const innerState = {albanianVisible: (albanianVis ? "" : "invisible"), englishVisible: (englishVis ? "" : "invisible")};
        this.state = innerState;
        for(const listener of this.listeners) {
            listener(innerState);
        }
    }
}
    
const language = new Language(DEFAULT_ALBANIAN_VISIBILITY, DEFAULT_ENGLISH_VISIBILITY);
export {language, DEFAULT_ALBANIAN_VISIBILITY, DEFAULT_ENGLISH_VISIBILITY};