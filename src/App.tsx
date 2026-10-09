import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { FavouritesPage } from "./pages/FavouritesPage";
import { ItemTemplatePage } from "./pages/ItemTemplatePage";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/favourites" replace />} />
          <Route path="favourites" element={<FavouritesPage />} />

          <Route path="jokes" element={<ItemTemplatePage />} />
          <Route path="jokes/:id" element={<ItemTemplatePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
