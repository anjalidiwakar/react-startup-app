import React from 'react'

function PollOptions(props) {
    return (
        <>
            {
                props.pollQueData.map((q, index) =>
                    <div key={index}>
                        <h2 >{index + 1}.&nbsp;{q.que.queTitle}</h2>
                        {
                            q.optionInfo.map(op => {
                                return (
                                    <>
                                        <li><span >{op.value}</span>&nbsp;&nbsp;&nbsp;
                                        <a>{op.count != 0 ? ((op.count / q.que.totalSubmissions) * 100).toFixed(2) : 0.00}%</a></li>
                                    </>
                                )
                            })
                        }

                        <br />
                    </div>
                )
            }
        </>
    )
}

export default PollOptions;