import { createRoot } from 'react-dom/client';
import './index.css';

import { App } from './routes/App';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
