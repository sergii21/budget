import { Input, InputNumber, Button, Select } from "antd";

export default function TransactionForm() {
  return (
    <>
      <InputNumber placeholder="amount" required></InputNumber>
      <Select>
        <Select.Option>casual</Select.Option>
      </Select>
      <Input placeholder="description"></Input>
      <Button>Submit</Button>
    </>
  ); 
}
