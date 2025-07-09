import "@styles/content-styles.css";
import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

// 🔹 Outlet 컴포넌트 (Header/Footer Wrappers)
import Loading from "@/live-commerce/components/atoms/common/Loading";
import BlackcHeaderFooterOutlet from "@components/blocks/outlet/BlackHeaderFooterOutlet";
import ProductPageOutlet from "@components/blocks/outlet/ProductPageOutlet";
import WhiteHeaderFooterOutlet from "@components/blocks/outlet/WhiteHeaderFooterOutlet";

// 🔹 Lazy-loaded 페이지 (코드 스플리팅 적용)
const LivePage = lazy(() => import("@pages/LivePage"));
const MainPage = lazy(() => import("@pages/MainPage"));
const DeliveryMyInfoPage = lazy(
  () => import("@pages/mypage/DeliveryInfoMyPage")
);
const LiveSettlementPage = lazy(
  () => import("@pages/mypage/LiveSettlementPage")
);
const MyLiveOrderListPage = lazy(
  () => import("@pages/mypage/MyLiveOrderListPage")
);
const MyPageLiveEndPage = lazy(() => import("@pages/mypage/MyPageLiveEndPage"));
const MyPageLivePausePage = lazy(
  () => import("@pages/mypage/MyPageLivePausePage")
);
const MyUserInfoPage = lazy(() => import("@pages/mypage/MyUserInfoPage"));
const ProductDetailPage = lazy(
  () => import("@pages/product/ProductDetailPage")
);
const MySettlementPage = lazy(() => import("@pages/mypage/MySettlementPage"));
const ProductListPage = lazy(() => import("@pages/product/ProductListPage"));
const PrivacyTermsPage = lazy(() => import("@pages/terms/PrivacyTermsPage"));
const ServiceTermsPage = lazy(() => import("@pages/terms/ServiceTermsPage"));

const App: React.FC = () => {
  if (process.env.NODE_ENV === "production") {
    console.log = () => {};
    console.warn = () => {};
    console.error = () => {};
  }

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<BlackcHeaderFooterOutlet />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/main" element={<MainPage />} />
        </Route>

        <Route path="/mypage" element={<WhiteHeaderFooterOutlet />}>
          <Route
            path="/mypage/live/order/:id"
            element={<MyLiveOrderListPage />}
          />
          <Route path="/mypage/delivery" element={<DeliveryMyInfoPage />} />
          <Route path="/mypage/live/end/:id" element={<MyPageLiveEndPage />} />
          <Route
            path="/mypage/live/pause/:id"
            element={<MyPageLivePausePage />}
          />
          <Route path="/mypage/info" element={<MyUserInfoPage />} />
          <Route path="/mypage/terms/service" element={<ServiceTermsPage />} />
          <Route path="/mypage/terms/privacy" element={<PrivacyTermsPage />} />
          <Route path="/mypage/settlement/:id" element={<MySettlementPage />} />
        </Route>

        <Route path="/product" element={<ProductPageOutlet />}>
          <Route path="/product" element={<ProductListPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
        </Route>

        <Route path="/live/:id" element={<LivePage />} />
        <Route
          path="/settlement/:userId/:liveId"
          element={<LiveSettlementPage />}
        />
      </Routes>
    </Suspense>
  );
};

export default App;
