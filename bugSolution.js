```javascript
// Correctly import Tailwind CSS
import 'tailwindcss/tailwind.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="bg-red-500 p-4">
      This is some text.
    </div>
  </React.StrictMode>
);
```

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Tailwind CSS Example</title>
</head>
<body>
  <div id="root"></div>
  <script src="index.js"></script>
</body>
</html>
```