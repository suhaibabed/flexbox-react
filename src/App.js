import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <section class="container-fluid d-flex flex-column h-100vh">

    <header class="flex-fill row">
        <div class="py-3 border align-items-center col bg-primary border-primary">
            <h2 class="text-center text-white">Header</h2>
        </div>
    </header>
    <section class="flex-fill row">
        <aside class="order-2 py-3 border align-items-center col-12 order-md-1 col-md-3 bg-primary border-primary">
            <h2 class="text-center text-white">Sidebar1</h2>
        </aside>
        <main class="order-1 py-3 border col-12 order-md-2 col-md-6 bg-primary border-primary">
            <h2 class="text-center text-white">Main</h2>
        </main>
        <aside class="order-3 py-3 border col-12 order-md-3 col-md-3 bg-primary border-primary">
            <h2 class="text-center text-white">Sidebar2</h2>
        </aside>
    </section>
    <footer class="flex-fill row">
        <div class="py-3 border align-items-center col bg-primary border-primary">
            <h2 class="text-center text-white">Footer</h2>
        </div>
    </footer>
</section>
    
  );
}

export default App;
