import React from "react";
import Actions from "../ui/Actions";

interface Action {
  title: string;
  icon: string;
  body: string;
  index: number;
}
type choices = Array<Action>;
interface ActionProps {
  choices: choices;
}
function ActionSection({ choices }: ActionProps) {
  return (
    <section id="action" className="mt-[5rem] text-center ">
      <div>
        <h1 className="text-[5rem]">WE NEED YOU</h1>
        <div className="w-[8rem] m-auto border-b-[2px] border-b-[orange]  "></div>
        <div className="flex justify-center gap-5">
          <p className="font-medium w-[70%] pt-5 text-[2rem] ">
            United, we can create meaningful change. The more hands we have on
            deck, the stronger our impact will be.
          </p>
        </div>
        <div className="flex mb-[10rem] mt-20  justify-center">
          <Actions items={choices} />
        </div>
      </div>
    </section>
  );
}

export default ActionSection;
