import React from 'react';
import './Chart.css';
import TradingViewWidget from 'react-tradingview-widget';

const Chart = () => {
	return (
		<div className='chart'>
			<TradingViewWidget symbol='NASDAQ:AAPL' autosize />
		</div>
	);
};

export default Chart;
