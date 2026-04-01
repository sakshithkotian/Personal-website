/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Works from './components/Works';
import Stories from './components/Stories';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen selection:bg-accent selection:text-paper">
      {/* Global Grain Overlay */}
      <div className="bg-noise"></div>
      
      <Navbar />
      
      <main>
        <Hero />
        <Works />
        <Stories />
      </main>

      <Footer />
    </div>
  );
}
