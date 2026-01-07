
import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Navbar extends Component {
  state = {
    sidebarOpen: false,
  };

  toggleSidebar = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  };

  closeSidebar = () => {
    this.setState({ sidebarOpen: false });
  };

  render() {
    const { sidebarOpen } = this.state;

    return (
      <div className="flex overflow-hidden bg-gray-100">
        {/* Overlay (Mobile only) */}
        {sidebarOpen && <div onClick={this.closeSidebar} className="fixed inset-0 bg-black/40 z-40 md:hidden" />}

        {/* Sidebar (Mobile) */}
        <aside
          className={`fixed top-0 left-0 h-full w-56 bg-gray-800 text-white z-50 transform transition-transform duration-300
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
          <div className="p-4">
            <h1 className="text-2xl font-semibold mb-6">Menu</h1>
            <ul className="space-y-4">
              <li>
                <Link to="/" onClick={this.closeSidebar} className="block hover:text-indigo-400 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about" onClick={this.closeSidebar} className="block hover:text-indigo-400 transition">
                  About
                </Link>
              </li>

              <li>
                <Link to="/services" onClick={this.closeSidebar} className="block hover:text-indigo-400 transition">
                  Services
                </Link>
              </li>

              <li>
                <Link to="/contact" onClick={this.closeSidebar} className="block hover:text-indigo-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Navbar */}
          <header className="bg-white shadow z-30">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
              {/* Logo */}
              <h1 className="text-xl font-semibold">Animated Drawer</h1>

              {/* Desktop Links */}
              <ul className="hidden md:flex gap-8 font-medium text-gray-700">
                <li>
                  <Link to="/" className="hover:text-indigo-600 transition">
                    Home
                  </Link>
                </li>

                <li>
                  <Link to="/about" className="hover:text-indigo-600 transition">
                    About
                  </Link>
                </li>

                <li>
                  <Link to="/services" className="hover:text-indigo-600 transition">
                    Services
                  </Link>
                </li>

                <li>
                  <Link to="/contact" className="hover:text-indigo-600 transition">
                    Contact
                  </Link>
                </li>
              </ul>

              {/* Mobile Button */}
              <button onClick={this.toggleSidebar} className="md:hidden text-gray-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </header>

          {/* Page Content */}
          {/* <main className="flex-1 overflow-auto p-6">
            <h1 className="text-2xl font-semibold mb-2">Welcome to our website</h1>
            <p className="text-gray-600">... Content goes here ...</p>
          </main> */}
        </div>
      </div>
    );
  }
}
