import React from 'react';

const Alert = ({ alert }) => {
	return (
		alert != null && (
			<div
				className='alert alert-warning mb-0 py-0 col-12 text-center'
				role='alert'>
				{alert.msg}
			</div>
		)
	);
};

export default Alert;
