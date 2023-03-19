import { useEffect, useRef, useState } from "preact/hooks";
import * as monaco from "monaco-editor";
import { invoke, tauri } from "@tauri-apps/api";

export function Editor<FC>() {
  const containerRef = useRef(null);

  const [filePath, setFilePath] = useState<string>();
  const [editor, setEditor] = useState<monaco.editor.IStandaloneCodeEditor>();

  // initialize monacco
  useEffect(() => {
    if (containerRef.current) {
      const editor = monaco.editor.create(containerRef.current, {
        value: `# Hello Editor!`,
        language: "markdown",
        automaticLayout: true,
      });

      setEditor(editor);
    }
  }, [containerRef]);

  return (
    <>
      <p>Monacco Editor!</p>
      <button
        onClick={async () => {
          const result = (await invoke("load_file", {
            path: filePath,
          })) as string;

          editor?.getModel()?.setValue(result);
        }}
      >
        Load File
      </button>
      <button
        onClick={async () => {
          const contents = editor?.getModel()?.getValue();

          if (contents !== undefined && filePath !== undefined) {
            await tauri.invoke("save_file", {
              path: filePath,
              contents: contents,
            });
          }
        }}
      >
        Save File
      </button>
      <input
        type="text"
        value={filePath}
        onInput={(e) => {
          setFilePath(e.currentTarget.value);
        }}
      ></input>
      <div style={{ width: "100%", height: "900px" }} ref={containerRef}></div>
    </>
  );
}
