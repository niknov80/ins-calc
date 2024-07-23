import {StyledParagraph} from "./styled";

function Paragraph({children}) {
  return (
    <StyledParagraph >
      {children}
    </StyledParagraph>
  );
}

export default Paragraph;
