/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from 'react-router-dom';
import React from 'react';

let prev:number;
let next:number;
function ChangePath(pathList: Array<string>) {
  let isShowDataIndex: number = 0;
  let pathname: string = location.pathname;
  let paths = pathname.split('/');
  var file = paths[paths.length-1];
  pathList.forEach((element,index) => {
    if (element == file) {
      isShowDataIndex = index;
    }
  });
  let MaxIndex = pathList.length;
  next = isShowDataIndex === MaxIndex - 1 ? 0 : isShowDataIndex + 1;
  prev = isShowDataIndex === 0 ? MaxIndex - 1 : isShowDataIndex - 1;
}

export const ChangeThumbnailButton: React.FC<{ pathList : Array<string>}> = ({pathList}) => {

  const ButtonBox = css({
    position: "absolute",
    top: "0",
    right: "0",
    height: "100%",
    paddingRight: "5%",
  })

  const Wrapper = css({
    display: "flex",
    flexDirection:"column",
    justifyContent: "center",
    alignItems:"center",
    height: "100%",
    div: ({
      ':first-of-type': {
        marginBottom: "1rem"
      },
      a: ({
        display:"block",
        border: "2px solid white",
        borderRadius: "50%",
        padding: "0.5rem",
        opacity: "0.6",
        transition: "opacity 0.5s",
        ':hover':{
          opacity: "1",
        },
        svg: ({
          fill:"white"
        })
      })
    })
  })
  ChangePath(pathList);
  return (
    <div css={ ButtonBox }>
      <div css={ Wrapper }>
        <div>
          <Link to={'/'+pathList[prev]}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M208.49,120.49a12,12,0,0,1-17,0L140,69V216a12,12,0,0,1-24,0V69L64.49,120.49a12,12,0,0,1-17-17l72-72a12,12,0,0,1,17,0l72,72A12,12,0,0,1,208.49,120.49Z"></path></svg>
          </Link>
        </div>
        <div>
          <Link to={'/'+pathList[next]}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M208.49,152.49l-72,72a12,12,0,0,1-17,0l-72-72a12,12,0,0,1,17-17L116,187V40a12,12,0,0,1,24,0V187l51.51-51.52a12,12,0,0,1,17,17Z"></path></svg>
          </Link>
        </div>
      </div>
    </div>
  );
}