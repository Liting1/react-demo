import React, { useEffect, useRef } from "react";

function Home(){
    let btnEle:any = null;
    const ele:any = useRef();

    useEffect(() => {
      console.log(66666, btnEle);

    }, [btnEle])
    return <div>
       <h1 ref={ele}>this is home page</h1>
       <br />
       {/*<Button>按钮</Button>*/}
       <br />
       {/* <ButtonA>按钮--A</ButtonA> */}
    </div>
}

export default Home;
