import { css } from "@emotion/react";
import { FC } from "react";

const style = {
  container: css`
    background-color: #9becaf;
    position: fixed;
    padding-left: 20px;
    top: 0;
    left: 0;
    right: 0;
    max-height: 100px;
    min-width: 100vw;
    justify-content: top;
  `,
};

const index: FC = () => {
  return (
    <header css={style.container}>
      <h1>OGP Generator</h1>
    </header>
  );
};

export default index;
