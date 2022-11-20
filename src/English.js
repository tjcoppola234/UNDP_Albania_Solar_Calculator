import { useEffect, useState } from 'react';
import {settings} from './Settings';

function English(props) {
    const [state, setState] = useState(settings.englishVisible.getState());

    useEffect(() => {
        return settings.englishVisible.addListener((stateN) => {
            setState(stateN);
        });
    });

    return (
        <div className={state}>{props.children}</div>
    );
}
    
export default English;