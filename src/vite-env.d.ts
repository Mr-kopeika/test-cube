/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_BASE_URL: String
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
