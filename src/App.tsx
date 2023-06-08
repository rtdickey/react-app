import { useState } from "react";
import ExpandableText from "./components/ExpandableText";

function App() {
  return (
    <div>
      <ExpandableText>Example 1: Less than max characters</ExpandableText>
      <ExpandableText>
        Example 2: More than max characters. Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Explicabo facere expedita eum dolorum
        cumque neque, voluptates magni magnam doloremque error. Soluta vitae
        temporibus omnis sapiente, voluptates non velit ab aspernatur.
        Doloremque ea ullam sed quasi aspernatur dolorum, nisi neque
        voluptatibus rem voluptas in labore modi ab adipisci excepturi impedit
        vero tenetur illum! Non beatae natus ipsam est, dolorum a ratione
        delectus explicabo! Similique accusamus animi sunt ab deleniti aliquam
        reiciendis laudantium, a blanditiis perspiciatis voluptas doloremque aut
        fugiat corrupti impedit odit rem consequatur fuga et. Aperiam explicabo
        modi nulla ipsa consequatur! Quam minus pariatur magni soluta cupiditate
        officiis iure tempore!
      </ExpandableText>
    </div>
  );
}

export default App;
