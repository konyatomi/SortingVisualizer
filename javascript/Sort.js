export default class Sort
{
    constructor(ColumnManagerClass, SortingClass) 
    {
        this._Sorting = SortingClass;
        this._ColumnManager = ColumnManagerClass;
        this._ColumnManager.just_reset = false;
    }

    sort()
    {
        this._Sorting.sort(this._ColumnManager);
    }
}