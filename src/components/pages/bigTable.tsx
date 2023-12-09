import React from 'react';
import {Column, Table,AutoSizer} from "react-virtualized";
import { faker } from '@faker-js/faker/locale/de'
import { Box } from '@mui/material';

type SubscriptionTier = 'free' | 'basic' | 'business';

interface User {
  id: number;
  name: string;
  email: string;

}
function BigTable() {
  function generateRandomItem (i:number): User {
    return{
      id: i,
      name: faker.person.firstName(),
      email: faker.internet.email()
    }
 }
 
  let items: Array <User>=[];
  for (let i = 0, l = 1000; i < l; i++) {
     items.push(generateRandomItem(i))
  }

  return (
    <Box sx={{display:"flex", justifyContent:"center"}}>
     
                  <Table
                     rowClassName='table-row'
                     headerHeight={40}
                     width={500}
                     height={700}
                     rowHeight={50}
                     rowWidth={200}
                     rowCount={items.length}
                     rowGetter={({ index }) =>items[index]}
                  >
                  <Column
                     label='Id'
                     dataKey='id'
                     width={100 * 0.2}
                  />
                  <Column
                     label='Name'
                     dataKey='name'
                     width={100 * 0.6}
                  />
                  <Column
                     label='E.mail'
                     dataKey='email'
                     width={100 * 0.8}
                  />
               </Table>
             
    </Box>
  )
}

export default BigTable
