import React from 'react';
import styles from './svgstyles.css';

const ShareSVG = (props) => {
  return (
    <svg
    viewBox={"0 0 19 21"}
    className={styles.mshare}
    >
      <path d={"M1.483 20A1.484 1.484 0 0 1 0 18.517V10.5a.594.594 0 0 1 1.187 0v8.017c0 .163.133.295.296.295h16.034a.295.295 0 0 0 .295-.295V10.5a.594.594 0 1 1 1.188 0v8.017c0 .818-.665 1.483-1.483 1.483H1.483zM13.656 6.344a.592.592 0 0 1-.42-.174L9.5 2.433 5.764 6.17a.593.593 0 1 1-.84-.84L9.08 1.174a.593.593 0 0 1 .84 0l4.156 4.156a.593.593 0 0 1-.42 1.014 M9.5 15.25a.594.594 0 0 1-.594-.594V1.702a.594.594 0 0 1 1.188 0v12.954a.594.594 0 0 1-.594.594"} />
    </svg>
  )
}

export default ShareSVG;