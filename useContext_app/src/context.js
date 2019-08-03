import React, { useState, useContext, createContext } from "react";

const LangContext = createContext();

const Lang = ({ defaultLang, children, translations }) => {
  const [lang, setLang] = useState(defaultLang);
  const hyperTranslate = text => {
    if (lang === defaultLang) {
      return text;
    } else {
      return translations[lang][text];
    }
  };
  /* javascript는 key를 가지고 있어서 이것을 가지고 내용을 들여다 볼 수 있다.
     console.log(translations["kr"]["Hello!"]); 
  */
  return (
    <LangContext.Provider value={{ setLang, t: hyperTranslate }}>
      {children}
    </LangContext.Provider>
  );
  /* setLang을 Provider에 값으로 보내줄 것이다
     t: hyperTranslate가 이름이 너무 길어서 간략하게 부르기 위해 alias 한 것임
   */
};

export const useSetLang = () => {
  const { setLang } = useContext(LangContext);
  return setLang;
};

export const useT = () => {
  const { t } = useContext(LangContext);
  return t;
};

export default Lang;
