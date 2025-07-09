import { sentryVitePlugin } from "@sentry/vite-plugin";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig, loadEnv } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// Vite의 `defineConfig` 내부에서 `loadEnv` 사용
export default defineConfig(({ mode }) => {
  // `.env` 파일에서 환경 변수 로드
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      react(),
      tsconfigPaths(),
      sentryVitePlugin({
        org: "btheegg",
        project: env.VITE_SENTRY_PROJECT, // ✅ undefined 방지
        authToken: env.VITE_SENTRY_AUTH_TOKEN, // ✅ undefined 방지
      }),
    ],
    define: {
      "process.env": env, // ✅ 브라우저에서도 환경 변수 접근 가능하도록 설정
      types: ["vite/client"],
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "../../packages/project"),
        "@components": path.resolve(
          __dirname,
          "../../packages/project/live-commerce/components"
        ),
        "@pages": path.resolve(
          __dirname,
          "../../packages/project/live-commerce/page"
        ),
        "@assets": path.resolve(
          __dirname,
          "../../packages/project/live-commerce/assets"
        ),
        "@constant": path.resolve(
          __dirname,
          "../../packages/project/live-commerce/constant"
        ),
        "~type": path.resolve(
          __dirname,
          "../../packages/project/live-commerce/types"
        ),
        "@theme": path.resolve(
          __dirname,
          "../../packages/project/live-commerce/theme"
        ),
        "@hooks": path.resolve(
          __dirname,
          "../../packages/project/live-commerce/hooks"
        ),
        "@utils": path.resolve(
          __dirname,
          "../../packages/project/live-commerce/utils"
        ),
        "@styles": path.resolve(
          __dirname,
          "../../packages/project/live-commerce/styles"
        ),
        "@store": path.resolve(
          __dirname,
          "../../packages/project/live-commerce/store"
        ),
        "@api": path.resolve(
          __dirname,
          "../../packages/project/live-commerce/api"
        ),
      },
    },
  };
});
