/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { About } from "./about/about"
import { Skills } from "./skills/skills"
import { Works } from "./works/works"
import { Myfave } from "./myfave/myfave"
import { Thumbnail } from './thumbnail/thumbnail'
import { Loading } from '../load'
/* import { Contact } from "./contact" */

const homeBlock = css`
  width: 100%;
  padding: 15rem 5%;
  color: white;
  @media (max-width: 520px){
    padding: 10rem 5%;
  }
`

/* const contact = css`
  color: black;
  background-image: url("./img/contact/airplane_for_contact.webp");
  background-repeat: no-repeat;
  background-size: cover;
` */

const homeBlockTop = css`
  margin-top: 10em;
`

const homeBlockWrapper = css`
  display: flex;
  @media (max-width: 520px) {
    display: block;
  }
`

const title = css`
  writing-mode: vertical-rl;
  margin-right: 8rem;
  @media (max-width: 520px) {
    width: 100%;
    writing-mode: horizontal-tb;
    margin-right: 0;
    margin-bottom: 1rem;
  }
  h3{
    font-size: 2rem;
    font-weight: bold;
    line-height: 1;
    text-transform: uppercase;
    @media (max-width: 520px){
      font-size: 4rem;
    }
  }
`

const contnts = css`
  flex: 1;
`

export const Home = () => {
  return (
    <>
      <Loading />
      <Thumbnail />
      <div css={[homeBlock,homeBlockTop]}>
        <div css={homeBlockWrapper}>
          <div css={title}>
            <h3>About</h3>
          </div>
          <div css={contnts}>
            <About />
          </div>
        </div>
      </div>
      <div css={homeBlock}>
        <div css={homeBlockWrapper}>
          <div css={title}>
            <h3>Skills</h3>
          </div>
          <div css={contnts}>
            <Skills />
          </div>
        </div>
      </div>
      <div css={homeBlock}>
        <div css={homeBlockWrapper}>
          <div css={title}>
            <h3>Works</h3>
          </div>
          <div css={contnts}>
            <Works />
          </div>
        </div>
      </div>
      <div css={homeBlock}>
        <div css={homeBlockWrapper}>
          <div css={title}>
            <h3>My fave</h3>
          </div>
          <div css={contnts}>
            <Myfave />
          </div>
        </div>
      </div>
      {/* <div css={[homeBlock,contact]}>
        <div css={homeBlockWrapper}>
          <div css={title}>
            <h3>Contact</h3>
          </div>
          <div css={contnts}>
            <Contact />
          </div>
        </div>
      </div> */}
    </>
  )
}