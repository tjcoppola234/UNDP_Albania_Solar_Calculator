import './global.css';
import './Resources.css';
import { PageHead, PageFoot } from './App';
//import English from './English';
//import Albanian from './Albanian';


function Resources() {
    
    return (
        <div className="Resources">
            <PageHead></PageHead>
            
            <div className="content">
                     
            <h2>Resources</h2>

            <h1>What is solar and why is it good?</h1>
            <img src="benefitsofsolar.jpg" alt="Benefits"/>

            <h1>Why is solar energy beneficial for businesses?</h1>


            <h1>Should your business go solar?</h1>
            <h1>How can your business go solar?</h1>

            
            </div>
            
            <PageFoot></PageFoot>
        </div>
    )



}
export default Resources;
