/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useRef, useEffect  } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import axios from 'axios';

type Inputs = {
  name: string;
  email: string;
  body: string;
};

const contact = css`
  width: 40%;
  @media (max-width: 520px) {
    width: 100%;
  }
`

const form = css`
  label{
    font-size: 1.8rem;
    font-weight: 700;
    color: white;
  }
  input,
  textarea,
  select {
    width: 100%;
    margin: 0;
    padding: 0.5em;
    box-sizing: border-box;
    border-top: 0px;
    border-right: 0px;
    border-left: 0px;
    border-bottom: 3px solid slategrey;
    font-family: 'Roboto', sans-serif;
    color: white;
    font-weight: 700;
    font-size: 1.8em;
    transition: ease-in-out 0.25s;
  }
  textarea {
    white-space: pre-wrap;
    word-wrap: break-word;
    resize: none;
  }
  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
    resize: none;
    border-bottom: 3px solid #db4d57;
  }
  `

const formMargin = css`
  margin-bottom: 2rem;
`
const error = css`
  color: red;
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 2rem;
  height: 2em;
`
const button = css`
  height: 5.4rem;
  text-align: center;
  font-size: 1.6rem;
  line-height: 1.5;
  button{
    font-weight: 700;
    padding: 1rem 4rem;
    cursor: pointer;
    user-select: none;
    transition: all 0.3s;
    text-align: center;
    vertical-align: middle;
    text-decoration: none;
    letter-spacing: 0.1em;
    border-radius: 0.5rem;
    color: white;
    background-color: slategrey;
    border-bottom: 5px solid #404953;
    &:hover {
      margin-top: 3px;
      color: white;
      background: # fff20a;
      border-bottom: 2px solid #404953;
    }
  }
`

const succeedTitle = css`
  font-size: 2rem;
  font-weight: bold;
`

const succeedIcon = css`
  height: 2em;
  width: 2em;
  display: inline-block;
  margin-right: 0.25em;
  svg{
    width: 100%;
    height: 100%;
  }
`

const succeedBody = css`
  font-size: 1.6rem;
`


export const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);


  useEffect(() => {
    if (formRef.current && formRef.current.parentElement) {
      const formHeight = formRef.current.offsetHeight;
      formRef.current.parentElement.style.minHeight = `${formHeight}px`;
    }
  }, [isSubmitted]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    let result: boolean = false;
    await axios.post(
      "https://takaportfolio.com/api/contact.php", //メール送信APIのエンドポイントを記入
      {
        "subject": "Web からのフィードバック",
        "name": data.name,
        "email": data.email,
        "body": data.body
      }
    ).then(response => {
      result = response.data.isSucceed;
      console.log(response);
    });
    if (result) {
      setIsSubmitted(true);
    } else {
      setIsSubmitted(false);
    }
    reset();
  };



  return (
    <div css={contact}>
      <div>
        {isSubmitted ? (
          <div>
            <p css={succeedTitle}>
              <span css={succeedIcon}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path></svg></span>
              <span>送信が完了しました。</span>
            </p>
            <p css={succeedBody}>折り返しのご連絡まで少々お待ちください。</p>
          </div>
        ) : (
            <form ref={formRef} css={form} onSubmit={handleSubmit(onSubmit)}>
              <div css={formMargin}>
                <label htmlFor="">お名前</label>
                <input {...register('name')} />
              </div>
              <div css={formMargin}>
                <label htmlFor="">メールアドレス</label>
                <input
                  {...register('email', {
                    required: true,
                    maxLength: 60,
                    pattern: {
                      value:
                        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: 'メールアドレスの形式が不正です',
                    },
                  })}
                />
              </div>
              <div css={formMargin}>
                <label htmlFor="">お問い合わせ内容</label>
                <textarea {...register('body')} rows={2}></textarea>
              </div>
              <div css={error}>
                <ErrorMessage errors={errors} name="email" />
              </div>
              <div css={button}>
                <button type="submit">送信</button>
              </div>
            </form >
          )
        }
      </div>
    </div>
  );
};

