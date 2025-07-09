import { NotifyProvider } from "@/live-commerce/hooks/NotifyProvider.tsx";
import { agoraClient } from "@/live-commerce/hooks/useAgora.ts";
import { AuthProvider } from "@/live-commerce/hooks/useAuth.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ScrollToTop from "@utils/scrollToTop.ts";
import { AgoraRTCProvider } from "agora-rtc-react";
import { ConfigProvider } from "antd";
import { CookiesProvider } from "react-cookie";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { initializeSentry } from "../../../packages/sentry-config/index";
import App from "./App.tsx";
import GlobalStyle from "./globalStyles";

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
initializeSentry(
  import.meta.env.VITE_SENTRY_DSN,
  import.meta.env.VITE_SENTRY_PROJECT
);

root.render(
  <RecoilRoot>
    <CookiesProvider>
      <BrowserRouter>
        <GlobalStyle />
        <QueryClientProvider client={queryClient}>
          <AgoraRTCProvider client={agoraClient}>
            <ScrollToTop />
            <AuthProvider>
              <ConfigProvider
                theme={{
                  token: {
                    colorPrimary: "#FF5500",
                    colorPrimaryBorder: "#FF5500",
                    colorPrimaryActive: "#FF5500",
                    colorPrimaryBgHover: "#FF5500",
                    colorPrimaryHover: "#FF5500",
                  },
                }}
              >
                <NotifyProvider>
                  <App />
                </NotifyProvider>
              </ConfigProvider>
            </AuthProvider>
          </AgoraRTCProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </CookiesProvider>
  </RecoilRoot>
);
