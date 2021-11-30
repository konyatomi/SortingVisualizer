import Stack from "./Stack.js";
import Visualizer from "./Visualizer.js";
import {s} from "./utility.js";

const visualizers  = new Stack();

s('add_visualizer').onclick = () => {
    visualizers.push(new Visualizer());

    for (let i = 0; i < visualizers.size; i++){
        visualizers.at(i).addListeners();
    }
};

s('remove_visualizer').onclick = () => {
    let removed = visualizers.pop();
    removed.removeVisuals();
};

s('run_visualizer').onclick = () => {
    for (let i = 0; i < visualizers.size; i++){
        visualizers.at(i).run();
    }
};