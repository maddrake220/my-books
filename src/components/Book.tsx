import { Link } from "react-router-dom";
import {
  BookOutlined,
  HomeOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { BookType } from "../types";
import moment from "moment";
import { Tooltip, Button } from "antd";
interface BookProps extends BookType {}
const Book: React.FC<BookProps> = ({
  bookId,
  title,
  author,
  createdAt,
  url,
}) => {
  return (
    <div>
      <div>
        <Link to={`/book/${bookId}`}>
          <BookOutlined /> {title}
        </Link>
      </div>
      <div>
        <Link to={`/book/${bookId}`}>{author}</Link>
      </div>
      <div>{moment(createdAt).format("MM-DD-YYYY hh:mm a")}</div>
      <div>
        <Tooltip title={url}>
          <a href={url} rel="noreferrer" target="_blank">
            <Button
              size="small"
              type="primary"
              shape="circle"
              icon={<HomeOutlined />}
            ></Button>
          </a>
        </Tooltip>
        <Tooltip title="Edit">
          <Button size="small" shape="circle" icon={<EditOutlined />}></Button>
        </Tooltip>
        <Tooltip title="Delete">
          <Button
            size="small"
            type="primary"
            shape="circle"
            danger
            icon={<DeleteOutlined />}
          ></Button>
        </Tooltip>
      </div>
    </div>
  );
};

export default Book;
