import { Input, InputField } from "@/components/ui/input";

type InputProps = {
  handleOnBlur: () => void;
  value?: string;
};

const NumberInput = ({ handleOnBlur, value }: InputProps) => {
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
        onBlur={() => handleOnBlur()}
      />
    </Input>
  );
};

export { NumberInput };
