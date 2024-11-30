// comps
import { Box } from "../ui/box";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableData,
  TableRow,
} from "../ui/table";
import { NumberInput } from "../input";

// deps
import { useMutation } from "@tanstack/react-query";
import { SetService } from "@/services";

type InputProps = {
  sets: Set[];
};

type Set = {
  set_id: string;
  set_number: number;
  weight: number;
  reps: number;
};

const Sets = ({ sets }: InputProps) => {
  const { mutate: handleChange } = useMutation({
    mutationFn: async ({
      id,
      category,
      value,
    }: {
      id: string;
      category: "weight" | "reps";
      value: number;
    }) => {
      const workoutService = new SetService();
      const data = { [category]: value };
      return await workoutService.update(id, data);
    },
    onError: (error) => {
      console.log("Error updating the set", error);
    },
  });

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
              <TableData>
                <NumberInput
                  handleOnBlur={() => handleChange}
                  id={set.set_id}
                  category="weight"
                  value={set.weight.toString()}
                />
              </TableData>
              <TableData>
                <NumberInput
                  handleOnBlur={() => handleChange}
                  id={set.set_id}
                  category="reps"
                  value={set.reps.toString()}
                />
              </TableData>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export { Sets };
