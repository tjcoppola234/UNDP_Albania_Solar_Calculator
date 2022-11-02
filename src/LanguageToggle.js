import { Component } from 'react';
import {language, DEFAULT_ENGLISH_VISIBILITY, DEFAULT_ALBANIAN_VISIBILITY} from './Language';
    
class LanguageToggle extends Component {
    constructor(props){ 
      super(props) 
          
      this.state = {englishDisabled: !DEFAULT_ENGLISH_VISIBILITY, albanianDisabled: !DEFAULT_ALBANIAN_VISIBILITY};
      this.switchToAlbanian = this.switchToAlbanian.bind(this);
      this.switchToEnglish = this.switchToEnglish.bind(this);
    }

    switchToAlbanian() {
        this.setState({englishDisabled: false, albanianDisabled: true});
        language.setState(true, false);
    }
    switchToEnglish() {
        this.setState({englishDisabled: true, albanianDisabled: false});
        language.setState(false, true);
    }

    render() { 
        return (
            <div id="Toggle">
                <button id="Switch-albanian" type="button" disabled={this.state.albanianDisabled} onClick={this.switchToAlbanian}><img src={process.env.PUBLIC_URL+'albania_flag.png'} alt="Shqip"></img></button>
                <button id="Switch-english" type="button" disabled={this.state.englishDisabled} onClick={this.switchToEnglish}><img src={process.env.PUBLIC_URL+'usa_flag.png'} alt="English"></img></button>
            </div>
        );
    } 
} 
    
export default LanguageToggle;