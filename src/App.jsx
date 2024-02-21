import { Routes, Route } from 'react-router-dom';
import HomeScreen from './pages/HomeScreen/HomeScreen';
import LocalGameScreen from './pages/LocalGameScreen/LocalGameScreen';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/local-single-player" element={<LocalGameScreen />} />
        <Route path="/local-two-player" element={<LocalGameScreen />} />
      </Routes>
    </>
  );
}
