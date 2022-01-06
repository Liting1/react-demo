import MVC from "@/components/MVC";
import View from "./View";
import Model from "./Model";

const SideItem = MVC({
    Model
}, View);

SideItem.defaultProps = {
    activity: false,
    onClick: () => {}
}

export default SideItem;
