import React from "react";

import Title from "@/components/customComponents/Title"

const data = {
    color: "#000000",
    content: "hello worl",
    fontSize: 18,
    itemId: "61b1faf5-8b02-433e-b72c-88193a59f366",
    position: "center",
    type: "Title"
}

function Template(){
    return <div>
        <p>this is Template</p>
        <Title content={'hello world'} />
    </div>;
}

export default Template;
