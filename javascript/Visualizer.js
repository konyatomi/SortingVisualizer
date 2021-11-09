import BubbleSort from "./BubbleSort.js";
import ColumnManager from "./ColumnManager.js";
import Randomizer from "./Randomizer.js";
import { s } from "./utility.js";

export default class Visualizer
{
    static id = 0;

    constructor(config = {}) 
    {
        this._vid = Visualizer.id++;
        this._config = Object.assign(this.defaultConfig(), config);
        this._ColumnManager = new ColumnManager(this._vid);
        
        s("main").innerHTML += this.template();
        
        this.addListeners();
    }

    run()
    {
        console.log("hali.");
    }

    addListeners()
    {
        s("generate_btn_" + this._vid).onclick = () => {
            this._ColumnManager.generate(s("columns_" + this._vid).value);
            this._ColumnManager.draw(true);
        }
            

        s("clear_btn_" + this._vid).onclick = () => this._ColumnManager.clear();

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
                <div class='v_display' id='v_display_${this._vid}'>

                </div>
                <div class='v_controls'>
                    <button id='generate_btn_${this._vid}'>Generate</button>
                    <button id='clear_btn_${this._vid}'>Clear</button>
                    <input type='number' id='columns_${this._vid}' min='0' max='1000'/>
                </div>
            </div>
        `;
    }
}
