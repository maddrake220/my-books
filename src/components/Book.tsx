import { Link } from "react-router-dom";
import { BookOutlined } from "@ant-design/icons";
import { BookType } from "../types";

interface BookProps extends BookType {}
const Book: React.FC<BookProps> = ({ bookId, title }) => {
  return (
    <div>
      <div>
        <Link to={`/book/${bookId}`}>
          <BookOutlined /> {title}
        </Link>
      </div>
    </div>
  );
};

export default Book;
