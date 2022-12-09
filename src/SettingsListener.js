/**
 * @callback stateCallback A function that is applied based on the current state.
 * @param {*} stateValue The current state.
 * 
 * @callback stateRemoval A function that is called when a subscribed object is unloaded.
 */

/**
 * Defines an event listener for a generic state.
 */
export default class SettingsListener {    
    constructor(stateVal){
        this.state = stateVal
        this.listeners = [];
    } 

    /**
     * Adds a new subscriber to the event.
     * @param {stateCallback} listener The {@link stateCallback} event to be called when the state is updated. Must only take a single value, of the same type as this class's state.
     * @returns {stateRemoval} A {@link stateRemoval} function to call when the subscriber is being deleted (to avoid calling an undefined function).
     */
    addListener(listener) {
        this.listeners.push(listener);
        const removeListener = () => {
            this.listeners = this.listeners.splice(this.listeners.indexOf(listener), 1);
        };
        return removeListener;
    }

    /**
     * Get the value of the associated state.
     * @returns {*} The value of the state.
     */
    getState() {
        return this.state;
    }

    /**
     * Set the value of the associated state. Calls any subscribing functions with the new value.
     * @param {*} stateNewVal The new value to change the state to.
     */
    setState(stateNewVal) {
        this.state = stateNewVal;
        for(const listener of this.listeners) {
            listener(stateNewVal);
        }
    }
}