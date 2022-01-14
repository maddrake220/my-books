import { Button, Input, PageHeader, message as messageDialog } from "antd";
import Layout from "./Layout";
import { ForkOutlined } from "@ant-design/icons";
import TextArea from "antd/lib/input/TextArea";
import { useRef } from "react";
import TextAreaType from "rc-textarea";
import { BookReqType } from "../types";
interface AddProps {
  loading: boolean;
  back: () => void;
  logout: () => void;
  add: (book: BookReqType) => void;
}

const Add: React.FC<AddProps> = ({ loading, back, logout, add }) => {
  const titleRef = useRef<Input>(null);
  const messageRef = useRef<TextAreaType>(null);
  const authorRef = useRef<Input>(null);
  const urlRef = useRef<Input>(null);
  return (
    <Layout>
      <PageHeader
        onBack={back}
        title={
          <div>
            <ForkOutlined />
          </div>
        }
        subTitle="Add Your Book"
        extra={[
          <Button key="1" type="primary" onClick={logout}>
            Logout
          </Button>,
        ]}
      />
      <div>
        <div>
          Title
          <span> *</span>
        </div>
        <div>
          <Input placeholder="Title" ref={titleRef} />
        </div>
        <div>
          Comment
          <span> *</span>
        </div>
        <div>
          <TextArea rows={4} placeholder="Comment" ref={messageRef} />
        </div>
        <div>
          Ahthor
          <span> *</span>
        </div>
        <div>
          <Input placeholder="Author" ref={authorRef} />
        </div>
        <div>
          URL
          <span> *</span>
        </div>
        <div>
          <Input placeholder="URL" ref={urlRef} />
        </div>
        <div>
          <Button size="large" loading={loading} onClick={click}>
            Add
          </Button>
        </div>
      </div>
    </Layout>
  );
  function click() {
    const title = titleRef.current!.state.value;
    const message = messageRef.current!.resizableTextArea.props.value as string;
    const author = authorRef.current!.state.value;
    const url = urlRef.current!.state.value;

    if (
      title === undefined ||
      message === undefined ||
      author === undefined ||
      url === undefined
    ) {
      messageDialog.error("Please fill out all inputs");
      return;
    }
    add({
      title,
      message,
      author,
      url,
    });
  }
};

export default Add;
