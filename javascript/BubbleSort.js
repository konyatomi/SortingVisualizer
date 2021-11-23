export default class BubbleSort {
    constructor(delay) {
        this._delay = delay;
    }

    sort(ColumnManagerClass) {
        let i = ColumnManagerClass.columns.length - 1;
        
        const outer_loop_body = () => {
            let j = 0;

            const inner_loop_body = () => {

                if (j >= i) {
                    clearInterval(inner_loop);
                }
                else {
                    if (ColumnManagerClass.columns[j].order() > ColumnManagerClass.columns[j + 1].order()) {
                        ColumnManagerClass.swap(j, j + 1);
                    }

                    j++;
                }
            };

            inner_loop_body();

            const inner_loop = setInterval(inner_loop_body, this._delay);

            if(i == 0){
                clearInterval(outer_loop);
            }

            i--;
        };

        outer_loop_body();

        const outer_loop = setInterval(outer_loop_body, this._delay * ColumnManagerClass.columns.length - 1);
    }
}