import { Box } from "../ui/box";
import { Table, TableHeader, TableBody, TableHead, TableData, TableRow } from "../ui/table";

const Set = () => {
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
          <TableRow>
            <TableHead className="bg-background-50 border-0 border-solid border-r border-outline-200 font-medium">
              1
            </TableHead>
            <TableData>30</TableData>
            <TableData>15</TableData>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
};

export { Set };
