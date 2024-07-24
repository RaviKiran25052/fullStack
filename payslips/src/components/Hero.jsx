import React from 'react';

const Hero = () => {
  return (
    <div className='heroSection'>
        <div className="dashboard">
            <div className="userDetails">
                <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="" className="userProfile" />
                <div className="userData">
                    <label>Name:</label>
                    <div>Durga</div>
                </div>
                <div className="userData">
                    <label>Employee ID:</label>
                    <div>VTS2025051</div>
                </div>
                <div className="userData">
                    <label>Email:</label>
                    <div>durgaking@gmail.com</div>
                </div>
                <div className="userData">
                    <label>Phone No:</label>
                    <div>9381736150</div>
                </div>
            </div>
            <div className="dashLinks">
                {/* <div className="dashLink">Amount Details</div>
                <div className="dashLink">Balance</div> */}
                <div className="dashLink">
                    <p>Pay Rolls</p>
                    <ul className="dashDropDownList">
                        <li>Pay Slips</li>
                        <li>Details</li>
                    </ul>
                </div>
                {/* <div className="dashLink">Bills</div>
                <div className="dashLink">History</div> */}
            </div>
        </div>
        <div className="payRollCards">
            <div className="payRollCard">
                <p className="payRollDesp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, eaque placeat? Ut numquam eos amet quis? Non nobis dicta ab, quod architecto asperiores eos praesentium iste voluptas, quia animi eligendi?</p>
                <div className="payRollBtnCont">
                    <button className="payRollBtn">View</button>
                    <button className="payRollBtn">Download</button>
                </div>
            </div>
            <div className="payRollCard">
                <p className="payRollDesp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, eaque placeat? Ut numquam eos amet quis? Non nobis dicta ab, quod architecto asperiores eos praesentium iste voluptas, quia animi eligendi?</p>
                <div className="payRollBtnCont">
                    <button className="payRollBtn">View</button>
                    <button className="payRollBtn">Download</button>
                </div>
            </div>
            <div className="payRollCard">
                <p className="payRollDesp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, eaque placeat? Ut numquam eos amet quis? Non nobis dicta ab, quod architecto asperiores eos praesentium iste voluptas, quia animi eligendi?</p>
                <div className="payRollBtnCont">
                    <button className="payRollBtn">View</button>
                    <button className="payRollBtn">Download</button>
                </div>
            </div>
        </div>
        <div className="payRollPreview">
        </div>
    </div>
  )
}

export default Hero