import Column from "./Column.js"
import { s } from "./utility.js";

export default class ColumnManager
{
    constructor({visualizerId, vClass, columnColor, columnHeadColor, columnSelectedColor}) 
    {
        this._columns = []
        this._vid = visualizerId;
        this._vClass = vClass;

        this._columnColor = columnColor;
        this._columnHeadColor = columnHeadColor;
        this._columnSelectedColor = columnSelectedColor;

        this._BORDER_SIZE = 5;

        this.just_reset = false;
    }

    swap(c1, c2)
    {
        [this._columns[c1], this._columns[c2]] = [this._columns[c2], this._columns[c1]];
        this.draw(true);
    }

    generate(n)
    {
        let display_width = s("v_display_" + this._vid).getBoundingClientRect().width - (this._BORDER_SIZE * 2);

        for(let i = 0; i < n; i++)
        {
            let column = new Column(display_width / n * (i + 1), i);
            this._columns.push(column);
        }
        this._columns[3].selected = true;
    }

    draw(clear = false)
    {
        if(clear){
            this.clear();
        }

        let display = s("v_display_" + this._vid);

        for(let column of this._columns)
        {
            if(column.selected){
                display.innerHTML += column.template(this._columnHeadColor, this._columnSelectedColor);
            }
            else{
                display.innerHTML += column.template(this._columnHeadColor, this._columnColor);
            }


            column.node = display.children[display.children.length - 1];
            column.node.style.order = column.order;
        }
    }

    clear()
    {
        let display_columns = s("v_display_" + this._vid).children;

        while(display_columns[0]){
            display_columns[0].remove();
        }

        
    }

    reset()
    {
        this.clear();
        this._columns = [];
        this.just_reset = true;
    }

    get columns()
    {
        return this._columns;
    }

    set columns(value)
    {
        this._columns = value;
    }

    done()
    {
        this._vClass.done();
    }
}