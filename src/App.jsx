import { Outlet } from 'react-router-dom';
import Layout from './component/Layout';
import './styles/App.css';

function App() {
    return (
        <Layout>
            <Outlet />
        </Layout>
    );
}

export default App;
