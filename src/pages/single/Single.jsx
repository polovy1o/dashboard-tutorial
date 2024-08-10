import './single.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Chart from '../../components/chart/Chart'
import Table from '../../components/table/Table'

export default function Single()
{
    return <div className='single'>
        <Sidebar/>
        <div className="singleContainer">
            <Navbar/>
            <div className="top">
                <div className="left">
                    <div className="editButton">Edit</div>
                    <div className="item">
                        <img src="/img/dog.webp" alt="" className="itemImg" />
                        <div className="details">
                            <h1 className="itemTitle">John Dog</h1>
                            <div className="detailItem">
                                <span className="itemKey">Email:</span>
                                <span className="itemValue">johndog@gmail.com</span>
                            </div>
                            <div className="detailItem">
                                <span className="itemKey">Phone:</span>
                                <span className="itemValue">+102794721</span>
                            </div>
                            <div className="detailItem">
                                <span className="itemKey">Country:</span>
                                <span className="itemValue">USA</span>
                            </div>
                            <div className="detailItem">
                                <span className="itemKey">Address:</span>
                                <span className="itemValue">12 Franklin st., Jersey City, New Jersey</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <Chart aspect={4.1} title="User spending ( Last 6 Month )"/>
                </div>
            </div>
            <div className="bottom">
                
                <h1 className="title">Last Transactions</h1>
                <Table></Table>
            </div>
        </div>
    </div>
}