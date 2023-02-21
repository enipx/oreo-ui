import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Table } from './table';

const TableStory = (props: any) => {
  const data = [
    {
      no: 1,
      competition: 'Swiming',
      jotham: '90',
      akin: '70',
      deji: '60',
      tolu: '50',
    },
    {
      no: 2,
      competition: 'Running',
      jotham: '60',
      akin: '40',
      deji: '30',
      tolu: '80',
    },
    {
      no: 3,
      competition: 'Shooting',
      jotham: '88',
      akin: '90',
      deji: '70',
      tolu: '60',
    },
    {
      no: 4,
      competition: 'Archery',
      jotham: '50',
      akin: '70',
      deji: '60',
      tolu: '80',
    },
    {
      no: 5,
      competition: 'Jumping',
      jotham: '77',
      akin: '69',
      deji: '99',
      tolu: '39',
    },
  ];

  return (
    <Table.Container>
      <Table {...props}>
        <Table.Caption>Imperial to metric conversion factors</Table.Caption>

        <Table.Head>
          <Table.Tr>
            <Table.Th>No.</Table.Th>
            <Table.Th>Competition</Table.Th>
            <Table.Th>Jotham</Table.Th>
            <Table.Th>Akin</Table.Th>
            <Table.Th>Deji</Table.Th>
            <Table.Th>Tolu</Table.Th>
          </Table.Tr>
        </Table.Head>

        <Table.Body>
          {data.map((item) => {
            return (
              <Table.Tr>
                <Table.Td>{item.no}</Table.Td>
                <Table.Td>{item.competition}</Table.Td>
                <Table.Td>{item.jotham}</Table.Td>
                <Table.Td>{item.akin}</Table.Td>
                <Table.Td>{item.deji}</Table.Td>
                <Table.Td>{item.tolu}</Table.Td>
              </Table.Tr>
            );
          })}
        </Table.Body>
      </Table>
    </Table.Container>
  );
};

export default {
  title: 'Components/Table',
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => (
  <TableStory {...args} />
);

export const Default = Template.bind({});
Default.args = {};
