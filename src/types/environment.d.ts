declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATO_API_TOKEN: string
      NODE_ENV: "development" | "production"
      PORT?: string
    }
  }
}

export {}
