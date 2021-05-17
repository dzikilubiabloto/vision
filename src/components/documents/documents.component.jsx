import React from "react";
import DocumentsData from "./documents-data/documents-data.component";
import { getDocument } from "../../firebase/documents.utils";
import { useCookies } from "react-cookie";

export default function Documents() {
  const [document, setDocument] = React.useState({ text: "", id: "" });
  const [cookies, , ] = useCookies(["active-element"]);


  // TODO move this crypto to db utils
  const changeDocumentField = async (value) => {
    await setDocument({
      text: value,
      id: document && document.id,
    });
  };

  React.useEffect(() => {
    // probably they could come from parent component but novv I vvill keep them here
    async function getData() {
      const pass = cookies["activeElement"];

      let documentD = await getDocument(pass);
      // check pass
      // const decSen = await decryptString(documentD.test.test, password);
      // const decSenArr = decSen.split(" ");

      setDocument(documentD);
    }
    getData();
  }, []);

  return (
    <div>
      <DocumentsData
        document={document}
        changeDocumentField={changeDocumentField}
      />
    </div>
  );
}
