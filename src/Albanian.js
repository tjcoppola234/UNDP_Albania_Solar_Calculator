import { useEffect, useState } from 'react';
import {settings} from './Settings';

function Albanian(props) {
    const [state, setState] = useState(settings.albanianVisible.getState());

    useEffect(() => {
        return settings.albanianVisible.addListener((stateN) => {
            setState(stateN);
        });
    });

    return (
        <div className={state}>{props.children}</div>
    );
}
    
export default Albanian;