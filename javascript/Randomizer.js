export default class Randomizer
{
    constructor(ColumnManagerClass, RandomizerClass) 
    {
        this._ColumnManager = ColumnManagerClass;
        this._Randomizer = RandomizerClass;
        console.log(ColumnManagerClass);

        this._columns = this._ColumnManager.columns;
    }

    randomize()
    {
        let columns = this._RandomizerClass.randomize(this._columns)
        
        this._ColumnManager = columns;

        this._ColumnManager.draw(true);
    }
}