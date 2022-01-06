import { Model } from "@/components/MVC"
import { SlideItemPropsType } from "../type";

class SlideModel extends Model<SlideItemPropsType>{
    get className(){
        const { activity } = this.props;
        let name:string = 'side-bar-item-content';
        if(activity) {
            name += ' side-bar-item-active'
        }
        return name;
    }

    get onClick(){
        return this.props.onClick;
    }

    get icon(){
        return this.props.icon;
    }

    get name(){
        return this.props.name;
    }

}

export default SlideModel;
