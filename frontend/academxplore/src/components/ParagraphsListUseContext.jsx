import { useNavDetailsProject } from "@/hooks/useNavDetailsProject";
import { ParagraphsList } from "./ParagraphsList";

export function ParagraphsListUseContext({paragraphs = []}){
  const {type} = useNavDetailsProject()
  return(
    <>
      {type == "informacoes" && <ParagraphsList paragraphs={paragraphs}/>}
    </>
  )
}