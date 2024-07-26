/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ThreeModels } from './threeModels'
import { ThumbnailText } from './thumbnailText'
import { breakpoints as b } from '../../../components/madiaQuery';

const ThumbnailCss = css`
  width: 100%;
  height: 100vh;
`

const ThumbnailWrapper = css`
  position: relative;
  width: 100%;
  height: 100%;
  @media (max-width: ${b.tablet}){
    display: flex;
    justify-content: center;
    align-items: start;
  } 
`

const FullScreen = css`
  width: 100%;
  height: 100%;
  @media (max-width: ${b.tablet}){
    height: 80%;
  }
`

const Canvas = css`
  position: relative;
  width: 100%;
  height: 100%;
`


const TextBox = css`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  padding-left: 5%;
  @media (max-width: ${b.tablet}) {
    bottom: 10%;
    height: auto;
  }
`

const TextBoxWrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  @media (max-width: ${b.tablet}) {
    display: block;
  }
`



export const Thumbnail = () => {
  return (
    <div css={ThumbnailCss} className="thumbnail">
      <div css={ThumbnailWrapper} className="thumbnail-wrapper">
        <div css={FullScreen} className="models">
          <div css={Canvas} id="canvas">
            <ThreeModels modelUrl='models/airplane.glb' isShow={true} />
          </div>
        </div>
        <div css={[TextBox]}>
          <div css={[TextBoxWrapper]}>
            <ThumbnailText />
          </div>
        </div>
      </div>
    </div>
  )
}