//TODO: Randomize class, Sort class, BubbleSort class

class Stack
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

    get size()
    {
        return this._stackArray.length;
    }
}