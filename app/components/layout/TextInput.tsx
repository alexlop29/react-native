// comps
import { Input, InputField } from "@/components/ui/input";

type InputProps = {
  placeholder: string;
  handleOnChange: () => void;
  handleOnBlur: () => void;
};

const TextInput = ({
  placeholder,
  handleOnChange,
  handleOnBlur,
}: InputProps) => {
  return (
    <Input
      variant="outline"
      size="md"
      isDisabled={false}
      isInvalid={false}
      isReadOnly={false}
    >
      <InputField
        placeholder={placeholder}
        onChangeText={handleOnChange}
        onBlur={handleOnBlur}
      />
    </Input>
  );
};

export { TextInput };
