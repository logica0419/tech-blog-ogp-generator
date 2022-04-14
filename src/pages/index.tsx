import { css } from "@emotion/react";

const style = {
  app: css`
    text-align: center;
    min-height: 100vh;
  `,
};

const IndexPage = () => {
  return (
    <div css={style.app}>
      <h1>Hello</h1>
      <p>Welcome to your new Gatsby site.</p>
    </div>
  );
};

export default IndexPage;
