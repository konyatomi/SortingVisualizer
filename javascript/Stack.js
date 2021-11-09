//TODO: Randomize class, Sort class, BubbleSort class

export default class Stack
{
    constructor()
    {
        this._stackArray = [];
    }
    
    push(item)
    {
        this._stackArray.push(item);
    }
    
    pop()
    {
        return this._stackArray.pop();
    }

    at(index)
    {
        return this._stackArray[index];
    }

    get size()
    {
        return this._stackArray.length;
    }
}