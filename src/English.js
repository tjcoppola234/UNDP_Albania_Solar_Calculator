import { Component } from 'react';
import {language, DEFAULT_ENGLISH_VISIBILITY} from './Language';
    
class English extends Component {
    constructor(props){ 
      super(props) 
          
      this.state = {englishVisible: DEFAULT_ENGLISH_VISIBILITY};
    }

    componentDidMount () {
        this.removeListener = language.addListener((state) => {
            this.setState({englishVisible: state.englishVisible});
        });
        this.setState({englishVisible: language.getState().englishVisible});
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