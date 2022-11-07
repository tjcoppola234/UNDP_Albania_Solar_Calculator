//Describes an event listener for a generic state contained in the settings
export default class SettingsListener {    
    constructor(stateVal){
        this.state = stateVal
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

    setState(stateNewVal) {
        this.state = stateNewVal;
        for(const listener of this.listeners) {
            listener(stateNewVal);
        }
    }
}