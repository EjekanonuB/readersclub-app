import React, { useEffect } from "react";
import Container from "./Container";

function Title(props) {
  useEffect(() => {
    document.title = `${props.title} | Readers Club App`;
    window.scrollTo(0, 0);
  }, [props.title]);

  return (
    <Container>
        {props.children}
    </Container>)
}

export default Title
