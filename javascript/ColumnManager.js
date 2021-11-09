import Column from "./Column.js"
import { s } from "./utility.js";

export default class ColumnManager
{
    constructor(visualizerId) 
    {
        this._columns = []
        this._vid = visualizerId;
    }

    swap(c1, c2)
    {

    }

    generate(n)
    {
        for(let i = 0; i < n; i++)
        {
            let column = new Column(i * 10, i);
            this._columns.push(column);
        }
        console.log(this._columns);
        console.log(this._columns[3].height);
        this._columns[3].selected = true;
        console.log(this._columns[3]);
    }

    draw(clear = false)
    {
        if(clear){
            this.clear();
        }

        let display = s("v_display_" + this._vid);

        for(let column of this._columns)
        {
            display.innerHTML += column.template();
        }
    }

    clear()
    {
        let display_columns = s("v_display_" + this._vid).children;

        while(display_columns[0]){
            display_columns[0].remove();
        }
    }
}