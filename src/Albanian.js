import { Component } from 'react';
import {language, DEFAULT_ALBANIAN_VISIBILITY} from './Language';
    
class Albanian extends Component {
    constructor(props){ 
      super(props) 
          
      this.state = {englishVisible: DEFAULT_ALBANIAN_VISIBILITY};
    }

    componentDidMount () {
        this.removeListener = language.addListener((state) => {
            this.setState({albanianVisible: state.albanianVisible});
        });
        this.setState({albanianVisible: language.getState().albanianVisible});
    }
    componentWillUnmount() {
        this.removeListener();
    }

    render() { 
        return (
            <div className={this.state.albanianVisible}>{this.props.children}</div>
        );
    } 
} 
    
export default Albanian;