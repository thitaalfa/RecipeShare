import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/layout/Header';

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="recipe-app-theme">
      <Router>
        <div className="min-h-screen bg-background font-sans antialiased">
          <Header />
          <main className="container mx-auto py-6">
            <Routes>
              <Route path="/" element={<div>Home Page (Coming Soon)</div>} />
              <Route path="/browse" element={<div>Browse Page (Coming Soon)</div>} />
              <Route
                path="/my-recipes"
                element={<div>My Recipes Page (Coming Soon)</div>}
              />
              <Route path="/profile" element={<div>Profile Page (Coming Soon)</div>} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;