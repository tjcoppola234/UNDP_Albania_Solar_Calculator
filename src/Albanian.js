import { Component } from 'react';
import {settings, DEFAULT_ALBANIAN_VISIBILITY} from './Settings';
    
class Albanian extends Component {
    constructor(props){ 
      super(props) 
          
      this.state = {englishVisible: DEFAULT_ALBANIAN_VISIBILITY};
    }

    componentDidMount () {
        this.removeListener = settings.addListener((state) => {
            this.setState({albanianVisible: state.albanianVisible});
        });
        this.setState({albanianVisible: settings.getState().albanianVisible});
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