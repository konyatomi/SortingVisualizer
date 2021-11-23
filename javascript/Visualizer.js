import BubbleSort from "./BubbleSort.js";
import ColumnManager from "./ColumnManager.js";
import FisherYates from "./FisherYates.js";
import Randomizer from "./Randomizer.js";
import { s } from "./utility.js";

export default class Visualizer
{
    static id = 0;

    constructor(config = {}) 
    {
        this._vid = Visualizer.id++;
        this._config = Object.assign(this.defaultConfig(), config);
        this._ColumnManager =   new ColumnManager({visualizerId: this._vid, ...this._config})
    
        
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
            this._ColumnManager.reset();
            this._ColumnManager.generate(s("columns_" + this._vid).value);
            this._ColumnManager.draw(true);
        }
            

        s("clear_btn_" + this._vid).onclick = () => this._ColumnManager.reset();
        s("randomize_btn_" + this._vid).onclick = () => {
            this._Randomizer = new Randomizer(this._ColumnManager, new this._config.randomizerAlgo());
            this._Randomizer.randomize();
        }

        s("rand_algo_" + this._vid).change = evt => {
            switch(evt.target.value){
                case "Fisheryates": 
                    this._config.randomizerAlgo = FisherYates;
                    break;
                
                default: 
                    this._config.randomizerAlgo = FisherYates;
                    break;
            } 
        }
    }

    removeVisuals()
    {
        s("main").children[s("main").children.length - 1].remove();
    }

    defaultConfig()
    {
        return {sortAlgo: BubbleSort,
                randomizerAlgo: FisherYates,
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
                    <button id='randomize_btn_${this._vid}'>Randomize</button>
                    <input type='number' id='columns_${this._vid}' min='0' max='1000'/>
                    <div></div>
                    <select id='rand_algo_${this._vid}'>
                        <option value='Fisheryates'>Fisher-Yates</option>
                    </select>
                </div>
            </div>
        `;
    }
}
