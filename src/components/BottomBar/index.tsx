import MVC from "@/components/MVC";
import View from './View';
import Model from './Model';
import Controller from './Controller';

const BottomBar = MVC({Model,Controller}, View);

export default BottomBar;
