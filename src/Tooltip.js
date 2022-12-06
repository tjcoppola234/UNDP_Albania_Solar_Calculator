import { useRef, useState } from "react";

export default function Tooltip(props) {
    const [visible, isVisible] = useState(false);

    return (
        <div className="tool-tip-parent">
            <div className="tool-button" onClick={() => isVisible(!visible)}>
                ?
            </div>
            <div className={"tool-tip" + (visible ? "" : " invisible")}>
                <div className="tool-tip-centering">
                    {props.children}
                </div>
            </div>
        </div>
    );
}