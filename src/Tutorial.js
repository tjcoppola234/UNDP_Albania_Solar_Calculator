import './global.css';
import { PageHead, PageFoot } from './App';
import English from './English';
import Albanian from './Albanian';

function Tutorial() {
    return (
        <div className="Tutorial">
            <PageHead></PageHead>
            <div className="content">
                <div>
                    <English><h2>Tutorial</h2></English>
                    <Albanian><h2>Tutorial</h2></Albanian>
                </div>
            </div>
            <PageFoot></PageFoot>
        </div>
    )
}

export default Tutorial;