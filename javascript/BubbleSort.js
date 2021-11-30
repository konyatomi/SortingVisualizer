export default class BubbleSort {
    constructor(delay) {
        this._delay = delay;
    }

    sort(ColumnManagerClass) {
        let i = ColumnManagerClass.columns.length;
        
        const outer_loop_body = () => {
            let j = 0;
            
            if(i < ColumnManagerClass.columns.length)
            {
                ColumnManagerClass.columns[i].selected = false;
            }

            ColumnManagerClass.columns[0].selected = true;

            const inner_loop_body = () => {

                if (j > i - 1) {
                    clearInterval(inner_loop);
                }
                else {
                    if (ColumnManagerClass.columns[j].order() > ColumnManagerClass.columns[j + 1].order()) {
                        ColumnManagerClass.swap(j, j + 1);
                    }

                    ColumnManagerClass.columns[j].selected = false;
                    ColumnManagerClass.columns[j + 1].selected = true;

                    j++;
                }
            };

            inner_loop_body();

            const inner_loop = setInterval(inner_loop_body, this._delay - 5);

            if(i == 1){
                clearInterval(outer_loop);
                ColumnManagerClass.done();
            }

            i--;
        };

        outer_loop_body();

        const outer_loop = setInterval(outer_loop_body, this._delay * ColumnManagerClass.columns.length - 1);
    }

    highlight(columnId)
    {
        ColumnManagerClass.columns[columnId].selected = true;
    }
}