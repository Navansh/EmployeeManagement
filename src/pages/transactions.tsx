import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { PolygonScan } from '../assets';
import { TransactionGraph, Transactions } from '../components';
import { useStateContext } from '../context';

const TransactionsPage = () => {
    const [navTitle, setNavTitle, address, contract, connect] = useStateContext();

    const navigate = useNavigate();

    let addr = !address ? "0x000...000" : `${address.slice(0, 3)}...${address.slice(-5,)}`;

    useEffect(() => {
        document.title = "Dashboard | EthForAll"
    }, []);

    setNavTitle(() => "Dashboard");

    const handleClick = () => {
        window.location.href = "https://mumbai.polygonscan.com/address/0x9D35dde473e3c967232b7681D3Ad72418fB74740";
    }

    useEffect(() => {
        document.title = "SecureChainHR | Transactions";
    }, [])

    return (
        <div className="dashboard-container flex gap-10" style={{ padding: '0 20px' }}>
            <div className="main-dashboard-items" style={{ flex: 1 }}>
                <div className="flex jst-spc-btw al-cnt mr-tp-20">
                    <span className="page-title">All Transactions</span>
                    <span style={{ display: 'flex', alignItems: 'center', cursor: "pointer" }} onClick={() => handleClick()}>
                        <img src={PolygonScan} className="arrow-icon" alt="polygonscan_logo" /></span>
                </div>
                <div className="transactions-details">
                    <Transactions filterType="" />
                </div>
                <center>
                    <span className="load-more-btn">Load More</span>
                </center>

                <div className="flex jst-spc-btw al-cnt mr-tp-20">
                    <span className="page-title">Salary Payments</span>
                    <span style={{ display: 'flex', alignItems: 'center', cursor: "pointer" }} onClick={() => handleClick()}>
                        <img src={PolygonScan} className="arrow-icon" alt="polygonscan_logo" /></span>
                </div>
                <div className="transactions-details">
                    <Transactions filterType="Salary" />
                </div>
                <center>
                    <span className="load-more-btn">Load More</span>
                </center>

                <div className="flex jst-spc-btw al-cnt mr-tp-20">
                    <span className="page-title">Milestone Payments</span>
                    <span style={{ display: 'flex', alignItems: 'center', cursor: "pointer" }} onClick={() => handleClick()}>
                        <img src={PolygonScan} className="arrow-icon" alt="polygonscan_logo" /></span>
                </div>
                <div className="transactions-details">
                    <Transactions filterType="Milestone Payment" />
                </div>
                <center>
                    <span className="load-more-btn">Load More</span>
                </center>
            </div>
        </div>
    )
}

export default TransactionsPage
