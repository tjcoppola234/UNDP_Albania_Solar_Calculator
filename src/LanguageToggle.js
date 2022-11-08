import { Component } from 'react';
import { settings } from './Settings';
    
class LanguageToggle extends Component {
    constructor(props){ 
      super(props) 
          
      this.state = {englishDisabled: !settings.englishVisible.getState(), albanianDisabled: !settings.albanianVisible.getState()};
      this.switchToAlbanian = this.switchToAlbanian.bind(this);
      this.switchToEnglish = this.switchToEnglish.bind(this);
    }

    switchToAlbanian() {
        this.setState({englishDisabled: false, albanianDisabled: true});
        settings.albanianVisible.setState("");
        settings.englishVisible.setState("invisible");
    }
    switchToEnglish() {
        this.setState({englishDisabled: true, albanianDisabled: false});
        settings.albanianVisible.setState("invisible");
        settings.englishVisible.setState("");
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