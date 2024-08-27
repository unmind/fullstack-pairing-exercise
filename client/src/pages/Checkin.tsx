import React, { useState } from "react";
import styled from "styled-components";
import axiosInstance from "../libs/axios";

const Comment = styled.textarea`
  padding: 50px;
  width: 400px;
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 10px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Checkin = () => {
  const [comment, setComment] = useState<string>();

  const onCommentUpdate = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setComment(e.currentTarget.value);
  };

  const onSubmit = () => {
    axiosInstance.post("/checkin", {
      comment,
    });
  };

  return (
    <Container>
      <Comment
        aria-label="comment-box"
        placeholder="Note down any comments on your mood that come to mind"
        onChange={onCommentUpdate}
      >
        {comment}
      </Comment>
      <Button aria-label="submit-button" disabled={false} onClick={onSubmit}>
        Submit
      </Button>
    </Container>
  );
};

export default Checkin;
