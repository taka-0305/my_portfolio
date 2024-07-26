/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Title = css`
  max-width: 400px;
  h2{
    font-size: 10rem;
    font-weight: bold;
    color: white;
    line-height: 1.2;
    span{
      display: inline-block;
    }
    @media (max-width: 520px) {
      font-size: 7rem;
    }
  }
`

const Text = css`
  max-width: 400px;
  p{
    font-size: 1.2rem;
    font-weight: bold;
    color: white;
    word-break: normal;
  }
`

export const ThumbnailText = () => {
  return (
    <>
      <div>
        <div css={Title}>
          <h2><span>Hi,</span><span>I'm Takayuki Tobita.</span></h2>
        </div>
        <div css={Text}>
          {/* <p>閲覧して頂きありがとうございます！</p> */}
        </div>
      </div>
    </>
  )
}

