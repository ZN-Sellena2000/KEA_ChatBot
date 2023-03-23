import React from "react";

const styles = {
  wrapper: {
    margin: 8,
    padding: 8,
    display: "flex",
    flexDirection: "row",
    border: "1px solid grey",
    borderRadius: 16,
  },
  imageContainer: {},
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  contentContainer: {
    marginLeft: 8,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  nameText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  commentText: {
    color: "black",
    fontSize: 16,
  },
};

function Comment(props) {
  return (
    <div style={styles.wrapper}>
      <div style={styles.imageContainer}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
          style={styles.image}
        />
      </div>
      <div style={styles.contentContainer}>
        <span style={styles.nameText}>{props.name}</span>
        <span style={styles.commentText}>{props.comment}</span>
      </div>
    </div>
  );
}

export default function CommentList() {
  const users = [
    { id: 1, name: "Kimgachon", comment: "안녕하세요. 김가천입니다." },
    { id: 2, name: "CaCaOj", comment: "카카오제이입니다~!" },
    { id: 3, name: "GaSoon", comment: "가순이입니다.파이팅!!" },
  ];

  return (
    <>
      {users.map((user) => (
        <Comment key={user.id} name={user.name} comment={user.comment} />
      ))}
    </>
  );
}
