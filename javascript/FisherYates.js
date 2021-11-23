export default class FisherYates
{

    randomize(columns)
    {
        for(let i = columns.length - 1; i > 0; i--)
        {
            const j = Math.floor(Math.random() * (i + 1));

            [columns[i], columns[j]] = [columns[j], columns[i]];
            [columns[i].order, columns[j].order] = [columns[j].order, columns[i].order];
        }

        return columns;
    }
}