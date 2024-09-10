import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { RetereiveOrdersByCustomer } from '../../utlis/api';
import { logout } from '../../slice/userSlice';
import { useNavigate } from 'react-router-dom';
const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [orders, setOrders] = useState([]);
    const [billing, setBilling] = useState(null); // State for billing info
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const perPage = 50; // Customize the number of orders per page

    const dispatch = useDispatch();
    const { user_email } = useSelector((state) => state.order);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const navigate = useNavigate();
    const handleLogout = () => {
        dispatch(logout());
        //remove the token
        localStorage.removeItem('authToken');
        // Optionally navigate to home or login page after logout
        navigate('/');
      };

    const fetchOrders = async (page = 1) => {
        try {
            if (user_email) {
                const response = await dispatch(RetereiveOrdersByCustomer({
                    email: user_email,
                    page,
                    per_page: perPage
                })).unwrap();

                setOrders(response); // Update orders based on the API response

                // Assuming the first order's billing info is what you want to display
                if (response.length > 0) {
                    setBilling(response[0].billing); // Set billing info from the first order
                }

                setTotalPages(Math.ceil(response.total / perPage)); 
            }
        } catch (error) {
            console.error("Error fetching orders:", error);
        }
    };

    useEffect(() => {
        if (activeTab === 'orders') {
            fetchOrders(currentPage);
        } else if (activeTab === 'dashboard') {
            fetchOrders(); // Fetch once when the dashboard loads
        }
    }, [activeTab, currentPage]);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <div className="dashboard">
            <div className="row">
                <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
                    <div className="position-sticky">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className={`nav-link ${activeTab === 'dashboard' ? 'active' : ''}`} href="#" onClick={() => handleTabClick('dashboard')}>Dashboard</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${activeTab === 'orders' ? 'active' : ''}`} href="#" onClick={() => handleTabClick('orders')}>Orders</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" id="logout-link" onClick={handleLogout}>Log Out</a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <div id="content">
                        {activeTab === 'dashboard' && billing && (
                            <table className="table table-bordered">
                                <tbody>
                                    <tr>
                                        <th>First Name</th>
                                        <td>{billing.first_name}</td>
                                        <th>Last Name</th>
                                        <td>{billing.last_name}</td>
                                    </tr>
                                    <tr>
                                        <th>Address</th>
                                        <td>{billing.address_1}</td>
                                        <th>City</th>
                                        <td>{billing.city}</td>
                                    </tr>
                                    <tr>
                                        <th>State</th>
                                        <td>{billing.state}</td>
                                        <th>Country</th>
                                        <td>{billing.country}</td>
                                    </tr>
                                    <tr>
                                        <th>Email</th>
                                        <td>{billing.email}</td>
                                        <th>Phone</th>
                                        <td>{billing.phone}</td>
                                    </tr>
                                </tbody>
                            </table>
                        )}
                        {activeTab === 'orders' && (
                            <div>
                                <h1>Your Orders</h1>
                                {orders.length > 0 ? (
                                    <div>
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>Order ID</th>
                                                    <th>Date</th>
                                                    <th>Status</th>
                                                    <th>Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {orders.map(order => (
                                                    <tr key={order.id}>
                                                        <td>{order.id}</td>
                                                        <td>{new Date(order.date_created).toLocaleDateString()}</td>
                                                        <td>{order.status}</td>
                                                        <td>{order.total}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>

                                        {/* Pagination controls */}
                                        <div className="pagination-controls">
                                            <button
                                                disabled={currentPage === 1}
                                                onClick={() => handlePageChange(currentPage - 1)}
                                            >
                                                Previous
                                            </button>
                                            <span>{currentPage} of {totalPages}</span>
                                            <button
                                                disabled={currentPage === totalPages}
                                                onClick={() => handlePageChange(currentPage + 1)}
                                            >
                                                Next
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <p>No orders found.</p>
                                )}
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
