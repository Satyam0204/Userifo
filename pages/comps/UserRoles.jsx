import { Table, ScrollArea, Avatar, Text } from "@mantine/core";

function UserRoles({ data }) {

  return (
    <div>
      <ScrollArea>
        <Table sx={{ maxWidth: 300 }} verticalSpacing="md" align="center">
          <thead>
            <tr>
              <th>Employee</th>
              <th>Name/Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <div key={item.id}>
                <tr>
                  <td>
                    <Avatar size={40} src={item.avatar} radius={40} />
                  </td>
                  <td>
                    <div>
                      <Text size="sm">
                        {item.email ? item.email : item.name}
                      </Text>
                    </div>
                  </td>
                </tr>
                
              </div>
            ))}
          </tbody>
        </Table>
      </ScrollArea>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://63c57732f80fabd877e93ed1.mockapi.io/api/v1/users"
  );
  const data = await res.json();

  return {
    props:{data:data.splice(0,10),}
  };
}

export default UserRoles;
