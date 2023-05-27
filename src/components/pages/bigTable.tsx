import React from 'react';
import {Column, Table,AutoSizer} from "react-virtualized";
import { faker } from '@faker-js/faker/locale/de'

type SubscriptionTier = 'free' | 'basic' | 'business';

interface User {
  id: number;
  firstName: string;
  email: string;

}
function BigTable() {
  function generateRandomItem (i:number): User {
    return{
      id: i,
      firstName: faker.person.firstName(),
      email: faker.internet.email()
    }
 }
 
  let items: Array <User>=[];
  for (let i = 0, l = 1000; i < l; i++) {
     items.push(generateRandomItem(i))
  }

  return (
    <React.Fragment>
     
                  <Table
                     rowClassName='table-row'
                     headerHeight={40}
                     width={100}
                     height={300}
                     rowHeight={40}
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
                     width={100 * 0.4}
                  />
                  <Column
                     label='E.mail'
                     dataKey='email'
                     width={100 * 0.4}
                  />
               </Table>
             
    </React.Fragment>
  )
}

export default BigTable
