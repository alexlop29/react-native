import { Box } from "../ui/box";
import { Table, TableHeader, TableBody, TableHead, TableData, TableRow } from "../ui/table";

type InputProps = {
  sets: Set[];
};

type Set = {
  set_number: number;
  weight: number;
  reps: number;
}

const Set = ({sets}: InputProps) => {
  return (
    <Box className="border border-solid border-outline-200 rounded-lg overflow-hidden w-full">
      <Table className="w-full max-w-none">
        <TableHeader>
          <TableRow className="bg-background-50">
            <TableHead className="border-0 border-r border-solid border-outline-200">
              Set
            </TableHead>
            <TableHead>Weight</TableHead>
            <TableHead>Reps</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sets.map((set) => (
            <TableRow key={set.set_number}>
              <TableData>{set.set_number}</TableData>
              <TableData>{set.weight}</TableData>
              <TableData>{set.reps}</TableData>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export { Set };
