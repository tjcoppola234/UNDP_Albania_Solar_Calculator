import { DEFAULT_ALBANIAN_VISIBILITY } from "./Settings";

/**
 * A simple wrapper to simplify adding Albanian-specific text (mainly translations)
 * @param {*} props The components that are expected to be in Albanian. Include any HTML elements that cannot have a div inside of them as inner HTML for the Albanian tag.
 * @returns {HTMLElement} An instance of the <Albanian> HTMLElement, which will only be visible when the current language is Albanian.
 */
function Albanian(props) {
    return (
        <div className={"Albanian" + (DEFAULT_ALBANIAN_VISIBILITY ? "" : " invisible")}>{props.children}</div>
    );
}
    
export default Albanian;