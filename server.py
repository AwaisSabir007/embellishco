from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3
import json
import os

app = Flask(__name__)
CORS(app)

# Use /tmp for Vercel (writable directory in serverless environment)
DB_FILE = '/tmp/orders.db'

def init_db():
    conn = sqlite3.connect(DB_FILE)
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS orders (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            phone TEXT NOT NULL,
            location TEXT NOT NULL,
            items TEXT NOT NULL,
            total REAL NOT NULL,
            timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    conn.commit()
    conn.close()

@app.route('/api/orders', methods=['POST', 'OPTIONS'])
def handle_order():
    if request.method == 'OPTIONS':
        return jsonify({}), 200

    try:
        order_data = request.get_json()
        if not order_data:
            return jsonify({'status': 'error', 'message': 'No data received'}), 400

        init_db()
        conn = sqlite3.connect(DB_FILE)
        cursor = conn.cursor()
        cursor.execute('''
            INSERT INTO orders (name, phone, location, items, total)
            VALUES (?, ?, ?, ?, ?)
        ''', (
            order_data['name'],
            order_data['phone'],
            order_data['location'],
            json.dumps(order_data.get('items', [])),
            order_data['total']
        ))
        conn.commit()
        conn.close()

        return jsonify({'status': 'success', 'message': 'Order received'}), 201

    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)}), 500

@app.route('/', methods=['GET'])
def index():
    return jsonify({'status': 'ok', 'message': 'Embellish API is running'}), 200

if __name__ == '__main__':
    init_db()
    app.run(port=8000, debug=True)
