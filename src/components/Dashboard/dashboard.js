import react from 'react';
import Header from '../Header/header';
import Sidebar from '../Sidebar/Sidebar';
import DashboardView from './dashboardView';
function Dashboard() {
    return (
        <div>
            <Header />
            <div className='flex'>
                <Sidebar />
                <DashboardView />
            </div>
        </div>
    );
}

export default Dashboard;
