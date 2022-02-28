import {Controller} from "@/components/MVC";
import {mapAction} from "@/store";

class ImageSettingController extends Controller{
    showDetailHandle(val:boolean) {
        const { setModule } = mapAction();
        const {itemId} = this.model;
        setModule(itemId, {
            showDetail: Number(val)
        });
    }
}

export default ImageSettingController;
