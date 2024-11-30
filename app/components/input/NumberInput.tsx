import { Input, InputField } from "@/components/ui/input";

type InputProps = {
  id: string;
  category: string;
  value?: string;
  handleOnBlur: (id: string, category: string, value: string) => void;
};

const NumberInput = ({ handleOnBlur, id, category, value }: InputProps) => {
  return (
    <Input
      variant="outline"
      size="md"
      isDisabled={false}
      isInvalid={false}
      isReadOnly={false}
    >
      <InputField
        placeholder="Enter a number"
        value={value ?? undefined}
        onBlur={() => handleOnBlur(id, category, value ?? "")}
      />
    </Input>
  );
};

export { NumberInput };
