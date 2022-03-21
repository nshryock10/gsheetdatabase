import React, { useEffect, useState } from 'react';
import TableLine from './TableLine';
import { getPlayerData } from '../utils/accessSheets';

const tableData = [
    {
        Name: 'Nick',
        Score: 40,
        Payout: 500
    },
    {
        Name: 'Luke',
        Score: 37,
        Payout: 400
    },
    {
        Name: 'Kyle',
        Score: 36,
        Payout: 350
    }];

export default function TableContainer () {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function getData(){
        const playerData = await getPlayerData();  
        if (!playerData) return;
        console.log(playerData);
    }  
        
        getData();
    })

    return tableData.map( (result) => {
        return (
             <div>
               <TableLine
                 name={result.Name}
                 score={result.Score}
                 payout={result.Payout} /> 
             </div>
              )
     })
     
}