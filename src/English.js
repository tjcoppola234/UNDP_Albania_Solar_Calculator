import { Component } from 'react';
import {settings, DEFAULT_ENGLISH_VISIBILITY} from './Settings';
    
class English extends Component {
    constructor(props){ 
      super(props) 
          
      this.state = {englishVisible: DEFAULT_ENGLISH_VISIBILITY};
    }

    componentDidMount () {
        this.removeListener = settings.addListener((state) => {
            this.setState({englishVisible: state.englishVisible});
        });
        this.setState({englishVisible: settings.getState().englishVisible});
    }
    componentWillUnmount() {
        this.removeListener();
    }

    render() { 
        return (
            <div className={this.state.englishVisible}>{this.props.children}</div>
        );
    } 
} 
    
export default English;