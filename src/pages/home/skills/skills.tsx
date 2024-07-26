/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import parse from 'html-react-parser';
import langArray from "../json/language.json"



const skills = css`
`

const skillsWrapper = css`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: start;
  transition: filter .5s;
  margin-bottom: 10rem;
  &:hover{
    section:not(:hover){
      filter:grayscale(100%);
    }
  }
`

const isonContainer = css`
  transition: filter .5s;
  position: relative;
  margin: 3em;
  @media (max-width: 520px) {
    width: 50%;
    margin: 3em 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &:hover{
    svg{
      filter: drop-shadow(0px 0px 10px #e6b422);
    }
  }
`
const icon = css`
  width: 100px;
  height: 100px;
  svg{
    transition: filter .5s, transform .5s;
  }
`

export const Skills = () => {
  return (
    <div css={skills}>
      <div>
        <div css={skillsWrapper}>
          {langArray.map((item, index) =>
          <section css={isonContainer} key={index}>
            <div css={icon}>
            {parse(item.svg)}
            </div>
          </section>
          )}
        </div>
      </div>
    </div>
  )
}