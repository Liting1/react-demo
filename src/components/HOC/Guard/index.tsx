import {setRem} from "@/utils";

interface Props {
    children: JSX.Element
}


const Guard = (props:Props) => {
    setRem();
    window.onresize = () => setRem();

    return props.children;
}

export default Guard;
