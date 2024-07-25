import styled from "styled-components";

const RatingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 50px 50px;
`;

const RatingLabel = styled.label`
  font-size: 24px;
  margin-right: 50px;
`;

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
  return (
    <Container>
      <RatingWrapper>
        <RatingLabel>Mood Rating</RatingLabel>
      </RatingWrapper>
      <Comment
        aria-label='comment-box'
        placeholder='Note down any comments on your mood that come to mind'
      ></Comment>
      <Button aria-label='submit-button'>Submit</Button>
    </Container>
  );
};

export default Checkin;
