import { Input, InputField } from "@/components/ui/input";

type InputProps = {
  handleOnBlur: () => void;
};

const NumberInput = ({ handleOnBlur }: InputProps) => {
  return (
    <Input
      variant="outline"
      size="md"
      isDisabled={false}
      isInvalid={false}
      isReadOnly={false}
    >
      <InputField placeholder="Enter a number" onBlur={() => handleOnBlur()} />
    </Input>
  );
};

export { NumberInput };
