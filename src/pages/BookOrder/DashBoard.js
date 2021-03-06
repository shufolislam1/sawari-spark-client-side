import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const DashBoard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col items-center justify-center">
                    <h2 className='text-4xl font-bold mb-16'>Dashboard</h2>
                    <Outlet></Outlet>
                    <label for="my-drawer-2" class="btn btn-dark drawer-button lg:hidden mt-4">Open Side Bar</label>

                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/dashboard'>My Orders</Link></li>
                        <li><Link to='/dashboard/myprofile'>My Profile</Link></li>
                        <li><Link to='/dashboard/addreview'>Add a Review</Link></li>
                        {admin && <li><Link to='/dashboard/users'>All Users</Link></li>}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoard;