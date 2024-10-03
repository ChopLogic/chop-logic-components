import SelectAllGridRowsCheckbox from './SelectAll';

const ChopLogicGridHead = () => {
  return (
    <thead>
      <tr>
        <th>Head</th>
        <SelectAllGridRowsCheckbox gridId='id' selectAll={() => console.log('select')} deselectAll={() => console.log('deselect')} />
      </tr>
    </thead>
  );
};

export default ChopLogicGridHead;
