import { Component } from 'react';
import {settings, DEFAULT_ALBANIAN_VISIBILITY} from './Settings';
    
class Albanian extends Component {
    constructor(props){ 
      super(props) 
          
      this.state = {albanianVisible: DEFAULT_ALBANIAN_VISIBILITY};
    }

    componentDidMount () {
        this.removeListener = settings.albanianVisible.addListener((state) => {
            this.setState({albanianVisible: state});
        });
        this.setState({albanianVisible: settings.albanianVisible.getState()});
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