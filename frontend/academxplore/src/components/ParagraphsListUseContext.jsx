import { useNavDetailsProject } from "@/hooks/useNavDetailsProject";
import { ParagraphsList } from "./ParagraphsList";

export function ParagraphsListUseContext({paragraphs = []}){
  const {type} = useNavDetailsProject()
  return(
    <>
      {type == "informacoes" && 
        <div className="bg-light border border-1 rounded-4 col-12 col-md-8 mt-3 p-4">
          <ParagraphsList paragraphs={paragraphs}/>
        </div>
      }
    </>
  )
}