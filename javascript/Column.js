export default class Column
{
    constructor(height, order, selected = false) 
    {
        this._rawHeight = height;
        this._order = order;
        this._selected = selected;

    }

    template()
    {
        return `
            <div></div>
        `;
    }

    get height()
    {
        return this._rawHeight + "rem";
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
}