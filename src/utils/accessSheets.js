//...................GSheet Info.........................................
const ACCESS_TOKEN = 'ya29.A0ARrdaM-TTiSPnauChTOSb-VGeq5UrDa53529HfTwAvgQiKz4P6dTOBiym6SJeLsZ3VkuFMhUx1nygiCQ5Q1-rg7iLC5CGeA1zsL4YEN40ZMHWOMko3DTxVxUpXWsZno9xqVE2L6kR5HTeUVzzG9lHSzzeLEAPQ'
const SHEET_ID = '1epul9LVPPATQkBQ6YxZ77KOKyphWE7ftQk6uA-K_jgE'

//...............Database mapping...........................
//Player info
const playerStartCol = 'A';
const playerEndCol = 'C';
const playerStartRow = 1;

//Total Number cell location
const totalRange = 'E2';


export const getSheetValues = async (range) => {
    if(!range){
      return;
    }
    console.log(`sending request for range ${range}...`)
    const request = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${range}`,{
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`  
    } 
    });
    const data = await request.json();
    return data;
}

export const addSheetValues = (value, row=1, col=1) => {
  fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}:batchUpdate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //update this token with yours. 
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
      body: JSON.stringify({

        requests: [{
          repeatCell: {
            range: {
              startColumnIndex: col-1,
              endColumnIndex: col,
              startRowIndex: row-1,
              endRowIndex: row,
              sheetId: 0
            },
            cell: {
              userEnteredValue: {
                "numberValue": value
              },
            },
            fields: "*"
          }
        }]

      })
    })
  }

export const getTotalNumberOfPlayer = async () => {
  const totalPlayers = await getSheetValues(totalRange);
  return totalPlayers.values[0];
}
export const getPlayerData = async () => {
  const playerEndRow = await getTotalNumberOfPlayer();
  const playerRange = `${playerStartCol}${playerStartRow}:${playerEndCol}${playerEndRow}`;
  const playerData = getSheetValues(playerRange);
  return playerData.values;
}