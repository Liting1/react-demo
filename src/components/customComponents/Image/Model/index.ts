import {Model} from "@/components/MVC";

class ImageModel extends Model{
    get style(){
        return this.props.style;
    }

    get pagination():boolean{
        return this.props.pagination;
    }

}

export default ImageModel
