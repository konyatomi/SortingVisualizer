export default class Sort
{
    constructor(ColumnManagerClass, SortingClass) 
    {
        this._Sorting = SortingClass;
        this._ColumnManager = ColumnManagerClass;
    }

    sort()
    {
        this._Sorting.sort(this._ColumnManager);
    }
}