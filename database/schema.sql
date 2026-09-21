-- Plantora database schema
CREATE TABLE products (id TEXT PRIMARY KEY, item_no TEXT, name TEXT NOT NULL, size TEXT, price DECIMAL(10,2), currency TEXT DEFAULT 'SAR', category TEXT, image TEXT, featured INTEGER DEFAULT 0, in_stock INTEGER DEFAULT 1, description TEXT);
CREATE TABLE orders (id INTEGER PRIMARY KEY AUTOINCREMENT, created_at DATETIME DEFAULT CURRENT_TIMESTAMP, customer_name TEXT, phone TEXT, address TEXT, total DECIMAL(10,2), status TEXT DEFAULT 'new');
CREATE TABLE order_items (id INTEGER PRIMARY KEY AUTOINCREMENT, order_id INTEGER NOT NULL, product_id TEXT NOT NULL, quantity INTEGER NOT NULL DEFAULT 1, unit_price DECIMAL(10,2), FOREIGN KEY(order_id) REFERENCES orders(id), FOREIGN KEY(product_id) REFERENCES products(id));
