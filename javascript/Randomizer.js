export default class Randomizer
{
    constructor(ColumnManagerClass, RandomizerClass) 
    {
        this._ColumnManager = ColumnManagerClass;
        this._Randomizer = RandomizerClass;

        this._columns = this._ColumnManager.columns;
    }

    randomize()
    {
        let columns = this._Randomizer.randomize(this._columns)
        
        this._ColumnManager.columns = columns;

        this._ColumnManager.draw(true);

        
    }
}