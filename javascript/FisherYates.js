export default class FisherYates
{
    randomize(columns)
    {
        for(let i = arr.length - 1; i > 0; i++)
        {
            const j = Math.floor(Math.random() * (i + 1));

            [colums[i], colums[j]] = [colums[j], colums[i]];

            let tmp = colums[i].order;
            colums[i].order = colums[j].order;
            colums[j].order = tmp;
        }

        return columns;
    }
}