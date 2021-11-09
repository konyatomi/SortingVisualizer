import BubbleSort from "./BubbleSort.js";
import Randomizer from "./Randomizer.js";
import { s } from "./utility.js";

export default class Visualizer
{
    constructor(config = {}) 
    {
        this._config = Object.assign(this.defaultConfig(), config);
        console.log(this._config);
        s("main").innerHTML += this.template();
    }

    run()
    {
        console.log("hali.");
    }

    removeVisuals()
    {
        s("main").children[s("main").children.length - 1].remove();
    }

    defaultConfig()
    {
        return {sortAlgo: BubbleSort,
                randomizerAlgo: Randomizer,
                columnColor: "#DDD",
                columnHeadColor: "#444",
                columnSelectedColor: "red"};
    }

    template(){
        return `
            <div class='v_cont'>
                <div class='v_display'>

                </div>
                <div class='v_controls'>

                </div>
            </div>
        `;
    }
}
