// import { Table, ScrollArea, Avatar, Text } from '@mantine/core';
// import Form from './comps/form'

// export const getStaticProps =async () =>{
//   const res= await fetch('https://63c57732f80fabd877e93ed1.mockapi.io/api/v1/users')
//   const data = await res.json()

//   return {
//       props:{
//           data:data.slice(0,10),
//       }
//   }
// } 



// export default function UsersRolesTable({ data }) {

//   const rows = data.map((item) => (

//     <tr key={item.id} >

//       <td  >

//           <Avatar size={40} src={item.avatar} radius={40} />

      
//       </td>
//       <td>

//           <div >

//             <Text size="sm"  >
//               {item.email? item.email:item.name}
//             </Text>
//           </div>
//       </td>
      



//     </tr>
//   ));


//   return (
//     <>
//     <ScrollArea>
//       <Table sx={{ maxWidth: 300 }} verticalSpacing="md" align='center' >
//         <thead>
//           <tr>
//             <th>Employee</th>
//             <th>Name/Email</th>

//           </tr>
//         </thead>
//         <tbody >{rows}</tbody>
//       </Table>
    

//     </ScrollArea>
//     hello
//     <Form />
//     </>
//   );

//   }

import UsersRolesTable from './comps/UserRoles'


import React from 'react'

export default function Home() {
  return (
    <div>

    </div>
  )
}

