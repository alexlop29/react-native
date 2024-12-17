// comps
import { Input, InputField } from "@/components/ui/input";

// types
type InputProps = {
  prompt: string;
  value: string;
  styles?: any;
  handleOnBlur: (value: string) => void;
};

const TextInput = ({ prompt, value, handleOnBlur, styles }: InputProps) => {
  return (
    <Input
      variant="outline"
      size="md"
      isDisabled={false}
      isInvalid={false}
      isReadOnly={false}
      style={{ ...styles }}
    >
      <InputField
        placeholder={`${prompt}`}
        value={value ?? undefined}
        onBlur={() => handleOnBlur(value)}
      />
    </Input>
  );
};

export { TextInput };
