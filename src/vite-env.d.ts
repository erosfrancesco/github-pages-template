/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_TOKEN_TEMPLATE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "*.css" {
  const content: Record<string, string>;
  export default content;
}
