export default class Sort
{
    constructor(ColumnManagerClass, SortingClass) 
    {
        this._Sorting = SortingClass;
        this._ColumnManager = ColumnManagerClass;
    }

    sort()
    {
        console.log("valami");
        this._Sorting.sort(this._ColumnManager);
    }
}