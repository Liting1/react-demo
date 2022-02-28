import {Model} from "@/components/MVC";

interface PropsType {
    data: Record<string, any>
}

class BottomBarModel extends Model<PropsType>{
    get data(){
        return this.props.data;
    }
}

export default BottomBarModel
