# Embellish Luxury Home Decor

A high-end e-commerce landing page for artisanal home decor, featuring a 20-item curated gallery, persistent shopping bag, and a local order management system.

## Features
- **Curated Gallery**: 20 premium products with category filtering (Brass, Marble, Art, Textiles).
- **Interactive Shopping Bag**: Persistence via `localStorage`, real-time subtotal, and selection management.
- **Quick View**: Detailed product immersion modals.
- **Order Database**: Persistent storage for customer orders using a Python/SQLite backend.

## Professional Structure
- `/assets`: High-resolution artisanal imagery.
- `/css`: Refactored stylesheets for optimized loading.
- `/js`: Centralized application logic and product data.
- `server.py`: Lightweight Python backend for order processing.

## Getting Started
1. **Start the Order Server**:
   ```bash
   python3 server.py
   ```
2. **Open the Website**:
   Open `index.html` in your preferred browser.

## Database
Customer orders are stored in `orders.db` (SQLite). You can view them using any SQLite viewer or via the command line:
```bash
sqlite3 orders.db "SELECT * FROM orders;"
```
