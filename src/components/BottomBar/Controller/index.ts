import {Controller} from "@/components/MVC";
import Model from '../Model'

class BottomBarController extends Controller<Model> {
    okHandle(){
        console.log(this.model.data);
    }

    cancelHandle(){
        console.log('取消保存');
    }

}

export default BottomBarController;
