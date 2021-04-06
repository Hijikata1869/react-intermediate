import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

export const ChildArea = memo((props) => {
  const { open } = props;
  console.log("ChildAreaがレンダリングされた！");

  const date = [...Array(50).keys()];
  // date.forEach(() => {
  //   console.log("...");
  // });

  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
        </div>
      ) : null}
    </>
  );
});
