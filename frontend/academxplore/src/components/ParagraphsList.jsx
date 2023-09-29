import { Paragraph } from "./Paragraph";

export function ParagraphsList({paragraphs = []}){
  return(
    <div className="d-flex flex-column w-100">
      {paragraphs?.map(paragraph => <Paragraph key={paragraph.titulo} titulo={paragraph.titulo} descricao={paragraph.descricao}/>)}
    </div>
  )
}