import React from "react";
import View from "./ImageView";
import Controller from './Controller';
import MVC from "@/components/MVC";
import {propsAreEqual} from "@/utils"
import Model from './Model';

const Image = MVC({Model, Controller}, View);

export default React.memo(Image, propsAreEqual);

