import { Outlet } from 'react-router-dom';
import Layout from './component/Layout';
import AuthProvider from './contexts/authContext';
import './styles/App.css';

function App() {
    return (
        <AuthProvider>
            <Layout>
                <Outlet />
            </Layout>
        </AuthProvider>
    );
}

export default App;
