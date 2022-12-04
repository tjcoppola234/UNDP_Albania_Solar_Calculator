import { useRef, useState } from "react";

let loop = false;
document.onclick = ev => {
    if(!loop) {
        const buttonClicked = ev.target.closest(".tool-button");

        const tooltips = document.getElementsByClassName("tool-tip-parent");

        if(ev.target.closest(".tool-tip") === null) {
            for(let tooltip of tooltips) {
                if(!tooltip.querySelector(".tool-tip").classList.contains("invisible")) {
                    const aButton = tooltip.querySelector(".tool-button");

                    if(buttonClicked === null || !buttonClicked.isSameNode(aButton)) {
                        loop = true;
                        aButton.click();
                    }
                }
            }
        }

        loop = false;
    }
}

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