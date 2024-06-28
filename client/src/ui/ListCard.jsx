import { List, Card } from "antd";
const { Item } = List;

export default function ListCard({ children }) {
  return (
    <List className="" grid>
      <Item>
        <Card className="bg-slate-100">{children}</Card>
      </Item>
    </List>
  );
}
