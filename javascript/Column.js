export default class Column
{
    constructor(height, order, selected = false) 
    {
        this._rawHeight = height;
        this._order = order;
        this._selected = selected;

        this._GAP_SIZE = 2;
    }

    template(head_color, column_color)
    {
        return `
            <div style="background: ${this.background(head_color, column_color)}; height: ${this.height};"></div>
        `;
    }

    get height()
    {
        return this._rawHeight + "px";
    }

    get order()
    {
        return this._order;
    }

    set order(value)
    {
        this._order = value;
    }

    get selected()
    {
        return this._selected;
    }

    set selected(value)
    {
        this._selected = value;
    }

    set node(value)
    {
        this._node = value;
    }

    get node()
    {
        return this._node;
    }

    background(head_color, column_color)
    {
        return `
            linear-gradient(180deg,
                transparent 0,
                transparent ${this._GAP_SIZE}px,
                ${head_color} ${this._GAP_SIZE}px,
                ${head_color} ${this._rawHeight / (this._order + 1)}px,
                transparent ${this._rawHeight / (this._order + 1)}px, 
                transparent ${this._rawHeight / (this._order + 1) + this._GAP_SIZE}px,
                ${column_color} ${this._rawHeight / (this._order + 1) + this._GAP_SIZE}px,
                ${column_color} 100%);
       `
    }
}