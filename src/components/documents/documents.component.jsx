import React from "react";
import DocumentsData from "./documents-data/documents-data.component";
import { getDocument } from "../../firebase/documents.utils";
import StringCrypto from "string-crypto";

export default function Documents() {
  const [document, setDocument] = React.useState({ text: "", id: "" });

  const { decryptString } = new StringCrypto();
  const password = "./documents-data.styles.scss/llllkhhhnbn/";

  // TODO move this crypto to db utils
  const changeDocumentField = async (value) => {
    await setDocument({
      text: value,
      id: document && document.id,
      test: document.test,
    });
  };

  React.useEffect(() => {
    // probably they could come from parent component but novv I vvill keep them here
    async function getData() {
      let documentD = await getDocument();
      // check pass
      const decSen = await decryptString(documentD.test.test, password);
      const decSenArr = decSen.split(" ");
      let s = "";
      for (let word of decSenArr) {
        s = s.concat(word.length);
      }
      if (s === "45446246104296627493") {
        documentD = {
          text:
            documentD.text === ""
              ? ""
              : await decryptString(documentD.text, password),
          test: documentD.test,
          id: documentD.id,
        };
        setDocument(documentD);
      } else {
        documentD = { text: "" };
        console.log("musimy pokazac blad hasla");
      }
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
