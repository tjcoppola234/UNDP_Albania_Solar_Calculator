import { DEFAULT_ENGLISH_VISIBILITY } from "./Settings";

/**
 * A simple wrapper to simplify adding English-specific text (mainly translations)
 * @param {*} props The components that are expected to be in English. Include any HTML elements that cannot have a div inside of them as inner HTML for the English tag.
 * @returns {HTMLElement} An instance of the <English> HTMLElement, which will only be visible when the current language is English.
 */
function English(props) {
    return (
        <div className={"English" + (DEFAULT_ENGLISH_VISIBILITY ? "" : " invisible")}>{props.children}</div>
    );
}
    
export default English;