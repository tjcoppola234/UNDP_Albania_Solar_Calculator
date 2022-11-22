import './global.css';
import './Help.css';
import { PageHead, PageFoot } from './App';
import English from './English';
import Albanian from './Albanian';

function Help() {
    return (
        <div className="Help">
            <PageHead></PageHead>
            <div className="content">
                <div>
                    <English><h2 className="h2resources">Help</h2></English>
                    <Albanian><h2 className="h2resources">Ndihmë</h2></Albanian>
                </div>
            </div>
            <PageFoot></PageFoot>
        </div>
    )
}

export default Help;