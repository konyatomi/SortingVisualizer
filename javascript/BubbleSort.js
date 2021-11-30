export default class BubbleSort {
    constructor(delay) {
        this._delay = delay;
    }

    sort(ColumnManagerClass) {
        let i = ColumnManagerClass.columns.length;
        
        const outer_loop_body = () => {
            let j = 0;

            const inner_loop_body = () => {

                if (j > i - 1 || ColumnManagerClass.just_reset) {
                    ColumnManagerClass.just_reset = false;
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

            const inner_loop = setInterval(inner_loop_body, this._delay - 5);

            if(i == 1 || ColumnManagerClass.just_reset){
                clearInterval(outer_loop);
                ColumnManagerClass.just_reset = false;
            }

            i--;
        };

        outer_loop_body();

        const outer_loop = setInterval(outer_loop_body, this._delay * ColumnManagerClass.columns.length - 1);
    }
}