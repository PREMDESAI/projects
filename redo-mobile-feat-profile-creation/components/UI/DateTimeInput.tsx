import { useState } from "react";
import { View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { TextInput } from "react-native-paper";

const DateTimeInput = ({ onChange }: { onChange: (date: Date) => void }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    setSelectedDate(() => {
      onChange(date);
      return date.toLocaleDateString();
    });
    hideDatePicker();
  };

  return (
    <View>
      <TextInput
        label="DOB"
        mode="outlined"
        placeholder="Pick Your Date of birth"
        outlineStyle={{ borderColor: "gray", borderRadius: 15 }}
        showSoftInputOnFocus={false}
        onTouchStart={showDatePicker}
        style={{ marginBottom: 12 }}
        activeOutlineColor={"black"}
        textColor="black"
        value={selectedDate}
      />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

export default DateTimeInput;
