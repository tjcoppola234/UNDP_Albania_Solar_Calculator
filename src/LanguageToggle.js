import { Component } from 'react';
import { settings } from './Settings';

/**
 * Defines the LanguageToggle HTMLElement, used to switch between English and Albanian.
 */
class LanguageToggle extends Component {
    constructor(props){
      super(props);
          
      this.state = {albVisible: settings.albanianVisible.getState(), engVisible: settings.englishVisible.getState()};
      this.switchToAlbanian = this.switchToAlbanian.bind(this);
      this.switchToEnglish = this.switchToEnglish.bind(this);
    }

    /**
     * Called when the page loads, and ensures that the page is updated to match the current language setting
     */
    componentDidMount() {
        if(settings.albanianVisible.getState()) {
            this.switchToAlbanian();
        }
    }

    /**
     * Switches the page and selected language from English to Albanian.
     */
    switchToAlbanian() {
        Array.from(document.getElementsByClassName("Albanian")).forEach(element => {
            element.classList.remove("invisible");
        });
        Array.from(document.getElementsByClassName("English")).forEach(element => {
            element.classList.add("invisible");
        });
        settings.albanianVisible.setState(true);
        settings.englishVisible.setState(false);
        this.setState({albVisible: true, engVisible: false});
    }
    /**
     * Switches the page and selected language from Albanian to English.
     */
    switchToEnglish() {
        Array.from(document.getElementsByClassName("Albanian")).forEach(element => {
            element.classList.add("invisible");
        });
        Array.from(document.getElementsByClassName("English")).forEach(element => {
            element.classList.remove("invisible");
        });
        settings.albanianVisible.setState(false);
        settings.englishVisible.setState(true);
        this.setState({albVisible: false, engVisible: true});
    }

    /**
     * Defines the HTML of the language toggle buttons.
     * @returns {HTMLElement} An HTMLElement representing the toggle for English and Albanian.
     */
    render() {
        return (
            <div id="Toggle">
                <button id="Switch-albanian" type="button" disabled={this.state.albVisible} onClick={this.switchToAlbanian}><img src={process.env.PUBLIC_URL+'albania_flag.png'} alt="Shqip"></img></button>
                <button id="Switch-english" type="button" disabled={this.state.engVisible} onClick={this.switchToEnglish}><img src={process.env.PUBLIC_URL+'uk_flag.png'} alt="English"></img></button>
            </div>
        );
    } 
} 
    
export default LanguageToggle;